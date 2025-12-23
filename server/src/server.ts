import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Middleware
app.use(cors({
    origin: process.env.APP_ORIGIN,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
interface AuthRequest extends Request {
    user?: {
        userId: string;
        role: string;
    };
}

// ------------------------------------------------------------------
// Auth Routes
// ------------------------------------------------------------------
const router = express.Router();

// Sign Up
router.post('/auth/signup', async (req: Request, res: Response) => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().optional()
    });

    try {
        const { email, password, name } = schema.parse(req.body);

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists' });
            return;
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, passwordHash, name, role: 'LEARNER' }
        });

        // Create session/token
        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        res.status(400).json({ error: 'Invalid input or server error' });
    }
});

// Sign In
router.post('/auth/signin', async (req: Request, res: Response) => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string()
    });

    try {
        const { email, password } = schema.parse(req.body);
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Sign Out
router.post('/auth/signout', (req, res) => {
    res.clearCookie('token');
    res.json({ success: true });
});

// Me
router.get('/auth/me', async (req: Request, res: Response) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        const user = await prisma.user.findUnique({ where: { id: payload.userId } });
        if (!user) {
            res.status(401).json({ error: 'User not found' });
            return;
        }
        res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (e) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

// ------------------------------------------------------------------
// Content Routes (Public Read)
// ------------------------------------------------------------------

router.get('/paths/:slug', async (req, res) => {
    const path = await prisma.path.findUnique({
        where: { slug: req.params.slug },
        include: {
            modules: {
                include: { lessons: { orderBy: { index: 'asc' } } },
                orderBy: { index: 'asc' }
            }
        }
    });
    res.json(path);
});

router.get('/concepts', async (req, res) => {
    const concepts = await prisma.concept.findMany();
    res.json(concepts);
});

// ------------------------------------------------------------------
// Consulting Routes
// ------------------------------------------------------------------

router.post('/consulting/inquiry', async (req: Request, res: Response) => {
    const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
        company: z.string().optional(),
        roleTitle: z.string().optional(),
        serviceType: z.string().optional(),
        budgetRange: z.string().optional(),
        timeline: z.string().optional(),
    });

    try {
        const data = schema.parse(req.body);
        const inquiry = await prisma.consultingInquiry.create({ data });
        console.log("New Inquiry:", inquiry);
        res.json({ success: true, inquiry });
    } catch (e) {
        res.status(400).json({ error: 'Invalid form data' });
    }
});


app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
