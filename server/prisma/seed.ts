import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create Users
    const passwordHash = await bcrypt.hash('password123', 10);

    const learner = await prisma.user.upsert({
        where: { email: 'learner@example.com' },
        update: {},
        create: {
            email: 'learner@example.com',
            name: 'Curious Learner',
            passwordHash,
            role: 'LEARNER',
        },
    });

    const instructor = await prisma.user.upsert({
        where: { email: 'instructor@example.com' },
        update: {},
        create: {
            email: 'instructor@example.com',
            name: 'Professor AI',
            passwordHash,
            role: 'INSTRUCTOR',
        },
    });

    console.log({ learner, instructor });

    // 2. Create Concepts
    const concepts = [
        {
            slug: 'neural-networks',
            title: 'Neural Networks',
            category: 'Foundations',
            intuition: 'Like a relay race where runners pass baton signals.',
            difficulty: 'Beginner'
        },
        {
            slug: 'transformers',
            title: 'Transformers',
            category: 'GenAI',
            intuition: 'Like a sentence reader that pays attention to all words at once.',
            difficulty: 'Intermediate'
        }
    ];

    for (const c of concepts) {
        await prisma.concept.upsert({
            where: { slug: c.slug },
            update: {},
            create: c,
        });
    }

    // 3. Create Path & Modules
    const path = await prisma.path.upsert({
        where: { slug: '30-days-of-ai' },
        update: {},
        create: {
            slug: '30-days-of-ai',
            title: '30 Days of AI',
            description: 'Zero to Hero in one month.',
            audienceTag: 'Beginner',
            modules: {
                create: [
                    {
                        index: 1,
                        title: 'Week 1: Foundations',
                        description: 'Core concepts.',
                        lessons: {
                            create: [
                                {
                                    index: 1,
                                    title: 'What is AI?',
                                    type: 'concept',
                                    summary: 'Intro day.',
                                    durationMinutes: 30
                                },
                                {
                                    index: 2,
                                    title: 'Your First Prompt',
                                    type: 'exercise',
                                    summary: 'Hands on with ChatGPT.',
                                    durationMinutes: 45
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
