import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

// FREE USERS (1 community, 1 goal each - demonstrating limits)
const freeUsers = [
  {
    clerkId: "free_001",
    email: "liam.sterling@email.com",
    name: "Liam Sterling",
    subscriptionTier: "free",
  },
  {
    clerkId: "free_002",
    email: "chloe.vance@email.com",
    name: "Chloe Vance",
    subscriptionTier: "free",
  },
  {
    clerkId: "free_003",
    email: "ethan.zhao@email.com",
    name: "Ethan Zhao",
    subscriptionTier: "free",
  },
  {
    clerkId: "free_004",
    email: "nadia.petrov@email.com",
    name: "Nadia Petrov",
    subscriptionTier: "free",
  },
  {
    clerkId: "free_005",
    email: "omar.farooq@email.com",
    name: "Omar Farooq",
    subscriptionTier: "free",
  },
];

// PRO USERS (multiple communities, multiple goals - unlimited access)
const proUsers = [
  {
    clerkId: "pro_001_temp",
    email: "itskulkarniAlia@gmail.com",
    name: "Alia Kulkarni",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_002_temp",
    email: "kulkarni.Alia09@gmail.com",
    name: "Alia K",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_003",
    email: "sophia.jenkins@email.com",
    name: "Sophia Jenkins",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_004",
    email: "julian.alvarez@email.com",
    name: "Julian Alvarez",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_005",
    email: "elena.rostova@email.com",
    name: "Elena Rostova",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_006",
    email: "kenji.sato@email.com",
    name: "Kenji Sato",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_007",
    email: "arthur.p@email.com",
    name: "Arthur Pendelton",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_008",
    email: "priya.sharma@email.com",
    name: "Priya Sharma",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_009",
    email: "mateo.silva@email.com",
    name: "Mateo Silva",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_010",
    email: "zara.mitchell@email.com",
    name: "Zara Mitchell",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_011",
    email: "finley.brooks@email.com",
    name: "Finley Brooks",
    subscriptionTier: "pro",
  },
  {
    clerkId: "pro_012",
    email: "isabella.g@email.com",
    name: "Isabella G.",
    subscriptionTier: "pro",
  },
];

// Diverse communities
const communitiesData = [
  {
    name: "Production Next.js & GraphQL Masterclass",
    description:
      "Build production-ready full-stack applications with Next.js, React, TypeScript, and modern tools",
  },
  {
    name: "Engineering Leadership & Scale",
    description:
      "Transition from senior developer to tech lead and engineering manager",
  },
  {
    name: "Tech & Code Crew Community",
    description:
      "Community for web development, coding tips, and career advice",
  },
  {
    name: "AI Data Engineering with Python",
    description: "Master Python, pandas, NumPy, and machine learning basics",
  },
  {
    name: "Advanced LLMs & Deep Learning",
    description:
      "Deep learning, neural networks, and practical AI applications",
  },
  {
    name: "Kubernetes & Cloud Infrastructure",
    description: "AWS, Azure, Docker, Kubernetes, and CI/CD pipelines",
  },
];

// Learning goals by community
const learningGoalsData: Record<
  string,
  Array<{ title: string; description: string }>
> = {
  "Production Next.js & GraphQL Masterclass": [
    {
      title: "Deep Dive into App Router & Server Components",
      description:
        "Master the Next.js 16+ App Router and React Server Components",
    },
    {
      title: "Advanced Database Modeling with Prisma",
      description: "Build type-safe database schemas and queries",
    },
    {
      title: "Secure Session Auth & JWT Verification",
      description: "Implement secure user authentication and authorization",
    },
    {
      title: "Strict Type Safety & Generic Hooks",
      description: "Write type-safe, maintainable full-stack applications",
    },
    {
      title: "Vercel Edge & Middleware Cache Tuning",
      description: "Deploy to Vercel and set up automated pipelines",
    },
  ],
  "Engineering Leadership & Scale": [
    {
      title: "Leading Multi-disciplinary Engineering Teams",
      description: "Learn to guide technical decisions and mentor developers",
    },
    {
      title: "Fostering Constructive Code Review Habits",
      description: "Conduct effective code reviews that improve team quality",
    },
    {
      title: "Managing Stakeholder Expectations & Alignments",
      description: "Master stakeholder communication and conflict resolution",
    },
    {
      title: "Agile Estimation and Risk Management",
      description: "Break down projects and estimate timelines accurately",
    },
    {
      title: "Scaling Technical Standards & Trust",
      description:
        "Foster a culture of learning, collaboration, and excellence",
    },
  ],
  "Tech & Code Crew Community": [
    {
      title: "Core Web Architecture & Performance",
      description: "Master HTML, CSS, JavaScript, and modern frameworks",
    },
    {
      title: "Designing and Shipping SaaS Projects",
      description: "Create portfolio projects that demonstrate your skills",
    },
    {
      title: "Succeeding in Technical Code Interviews",
      description: "Navigate job search, interviews, and career advancement",
    },
    {
      title: "Tech Writing & Professional Branding",
      description:
        "Learn from experience creating tech content and writing blogs",
    },
  ],
  "AI Data Engineering with Python": [
    {
      title: "Large-Scale Data Ingestion with Pandas",
      description:
        "Work with DataFrames, filtering, grouping, and merging datasets",
    },
    {
      title: "Vectorized Math & Matrix Optimization",
      description: "Perform efficient numerical computations with NumPy",
    },
    {
      title: "Interactive Visuals and Plotting",
      description: "Create compelling charts and visualizations",
    },
    {
      title: "Predictive Modeling and Feature Extraction",
      description:
        "Build basic machine learning models for classification and regression",
    },
  ],
  "Advanced LLMs & Deep Learning": [
    {
      title: "Implementing Feedforward Networks from Scratch",
      description: "Understand backpropagation and gradient descent",
    },
    {
      title: "Training ConvNets and Transformer Layers",
      description: "Build deep learning models with popular frameworks",
    },
    {
      title: "Building Custom Tokenizers and Embeddings",
      description: "Process and analyze text data with NLP techniques",
    },
    {
      title: "Object Detection and Segmentation Basics",
      description: "Work with image recognition and classification",
    },
  ],
  "Kubernetes & Cloud Infrastructure": [
    {
      title: "Writing Production Dockerfiles & Multi-stage Builds",
      description: "Create and manage Docker containers for applications",
    },
    {
      title: "Managing Helm Charts & K8s Deployments",
      description: "Deploy and scale applications with Kubernetes",
    },
    {
      title: "Designing Highly Available AWS Architectures",
      description: "Work with EC2, S3, Lambda, and other AWS services",
    },
    {
      title: "Building Reusable CI/CD Actions Workflows",
      description: "Automate testing and deployment pipelines",
    },
  ],
};

// FREE USER ASSIGNMENTS (1 community, 1 goal each)
const freeUserAssignments: Record<string, { community: string; goal: string }> =
  {
    "Liam Sterling": {
      community: "Production Next.js & GraphQL Masterclass",
      goal: "Deep Dive into App Router & Server Components",
    },
    "Chloe Vance": {
      community: "Tech & Code Crew Community",
      goal: "Core Web Architecture & Performance",
    },
    "Ethan Zhao": {
      community: "Tech & Code Crew Community",
      goal: "Designing and Shipping SaaS Projects",
    },
    "Nadia Petrov": {
      community: "Engineering Leadership & Scale",
      goal: "Leading Multi-disciplinary Engineering Teams",
    },
    "Omar Farooq": {
      community: "Advanced LLMs & Deep Learning",
      goal: "Implementing Feedforward Networks from Scratch",
    },
  };

// PRO USER ASSIGNMENTS (multiple communities and goals)
const proUserCommunityAssignments: Record<string, string[]> = {
  "Alia Kulkarni": [
    "Production Next.js & GraphQL Masterclass",
    "Tech & Code Crew Community",
    "Engineering Leadership & Scale",
  ],
  "Alia K": [
    "Production Next.js & GraphQL Masterclass",
    "Tech & Code Crew Community",
    "Advanced LLMs & Deep Learning",
  ],
  "Sophia Jenkins": [
    "Production Next.js & GraphQL Masterclass",
    "Tech & Code Crew Community",
    "Advanced LLMs & Deep Learning",
  ],
  "Julian Alvarez": [
    "Production Next.js & GraphQL Masterclass",
    "Engineering Leadership & Scale",
    "Kubernetes & Cloud Infrastructure",
  ],
  "Elena Rostova": [
    "Production Next.js & GraphQL Masterclass",
    "Engineering Leadership & Scale",
    "Tech & Code Crew Community",
  ],
  "Kenji Sato": [
    "AI Data Engineering with Python",
    "Advanced LLMs & Deep Learning",
    "Production Next.js & GraphQL Masterclass",
  ],
  "Arthur Pendelton": [
    "Kubernetes & Cloud Infrastructure",
    "Engineering Leadership & Scale",
    "Production Next.js & GraphQL Masterclass",
  ],
  "Priya Sharma": [
    "Production Next.js & GraphQL Masterclass",
    "Tech & Code Crew Community",
    "Engineering Leadership & Scale",
  ],
  "Mateo Silva": [
    "Kubernetes & Cloud Infrastructure",
    "AI Data Engineering with Python",
    "Advanced LLMs & Deep Learning",
  ],
  "Zara Mitchell": [
    "Advanced LLMs & Deep Learning",
    "Tech & Code Crew Community",
    "Production Next.js & GraphQL Masterclass",
  ],
  "Finley Brooks": [
    "Kubernetes & Cloud Infrastructure",
    "AI Data Engineering with Python",
    "Advanced LLMs & Deep Learning",
  ],
  "Isabella G.": [
    "Production Next.js & GraphQL Masterclass",
    "Tech & Code Crew Community",
    "Engineering Leadership & Scale",
  ],
};

const proUserGoalAssignments: Record<string, Record<string, string[]>> = {
  "Alia Kulkarni": {
    "Production Next.js & GraphQL Masterclass": [
      "Deep Dive into App Router & Server Components",
      "Advanced Database Modeling with Prisma",
      "Secure Session Auth & JWT Verification",
    ],
    "Tech & Code Crew Community": [
      "Core Web Architecture & Performance",
      "Designing and Shipping SaaS Projects",
      "Tech Writing & Professional Branding",
    ],
    "Engineering Leadership & Scale": [
      "Leading Multi-disciplinary Engineering Teams",
      "Managing Stakeholder Expectations & Alignments",
    ],
  },
  "Alia K": {
    "Production Next.js & GraphQL Masterclass": [
      "Strict Type Safety & Generic Hooks",
      "Vercel Edge & Middleware Cache Tuning",
    ],
    "Tech & Code Crew Community": [
      "Designing and Shipping SaaS Projects",
      "Succeeding in Technical Code Interviews",
    ],
    "Advanced LLMs & Deep Learning": [
      "Implementing Feedforward Networks from Scratch",
      "Training ConvNets and Transformer Layers",
    ],
  },
  "Sophia Jenkins": {
    "Production Next.js & GraphQL Masterclass": [
      "Deep Dive into App Router & Server Components",
      "Advanced Database Modeling with Prisma",
      "Strict Type Safety & Generic Hooks",
    ],
    "Advanced LLMs & Deep Learning": [
      "Implementing Feedforward Networks from Scratch",
      "Training ConvNets and Transformer Layers",
    ],
  },
  "Julian Alvarez": {
    "Production Next.js & GraphQL Masterclass": [
      "Secure Session Auth & JWT Verification",
      "Strict Type Safety & Generic Hooks",
    ],
    "Engineering Leadership & Scale": [
      "Leading Multi-disciplinary Engineering Teams",
      "Fostering Constructive Code Review Habits",
    ],
    "Kubernetes & Cloud Infrastructure": [
      "Writing Production Dockerfiles & Multi-stage Builds",
      "Building Reusable CI/CD Actions Workflows",
    ],
  },
  "Elena Rostova": {
    "Production Next.js & GraphQL Masterclass": [
      "Deep Dive into App Router & Server Components",
      "Vercel Edge & Middleware Cache Tuning",
    ],
    "Engineering Leadership & Scale": [
      "Managing Stakeholder Expectations & Alignments",
      "Scaling Technical Standards & Trust",
    ],
    "Tech & Code Crew Community": [
      "Core Web Architecture & Performance",
      "Succeeding in Technical Code Interviews",
    ],
  },
  "Kenji Sato": {
    "AI Data Engineering with Python": [
      "Large-Scale Data Ingestion with Pandas",
      "Interactive Visuals and Plotting",
      "Predictive Modeling and Feature Extraction",
    ],
    "Advanced LLMs & Deep Learning": [
      "Implementing Feedforward Networks from Scratch",
      "Building Custom Tokenizers and Embeddings",
    ],
  },
  "Arthur Pendelton": {
    "Kubernetes & Cloud Infrastructure": [
      "Designing Highly Available AWS Architectures",
      "Managing Helm Charts & K8s Deployments",
      "Building Reusable CI/CD Actions Workflows",
    ],
    "Engineering Leadership & Scale": [
      "Leading Multi-disciplinary Engineering Teams",
      "Agile Estimation and Risk Management",
    ],
  },
  "Priya Sharma": {
    "Production Next.js & GraphQL Masterclass": [
      "Advanced Database Modeling with Prisma",
      "Secure Session Auth & JWT Verification",
    ],
    "Tech & Code Crew Community": [
      "Designing and Shipping SaaS Projects",
      "Tech Writing & Professional Branding",
    ],
    "Engineering Leadership & Scale": [
      "Fostering Constructive Code Review Habits",
      "Managing Stakeholder Expectations & Alignments",
    ],
  },
  "Mateo Silva": {
    "Kubernetes & Cloud Infrastructure": [
      "Writing Production Dockerfiles & Multi-stage Builds",
      "Managing Helm Charts & K8s Deployments",
      "Designing Highly Available AWS Architectures",
    ],
    "AI Data Engineering with Python": [
      "Vectorized Math & Matrix Optimization",
      "Large-Scale Data Ingestion with Pandas",
    ],
  },
  "Zara Mitchell": {
    "Advanced LLMs & Deep Learning": [
      "Object Detection and Segmentation Basics",
      "Training ConvNets and Transformer Layers",
    ],
    "Tech & Code Crew Community": [
      "Core Web Architecture & Performance",
      "Designing and Shipping SaaS Projects",
    ],
  },
  "Finley Brooks": {
    "Kubernetes & Cloud Infrastructure": [
      "Designing Highly Available AWS Architectures",
      "Writing Production Dockerfiles & Multi-stage Builds",
    ],
    "AI Data Engineering with Python": [
      "Large-Scale Data Ingestion with Pandas",
    ],
  },
  "Isabella G.": {
    "Production Next.js & GraphQL Masterclass": [
      "Deep Dive into App Router & Server Components",
      "Secure Session Auth & JWT Verification",
      "Strict Type Safety & Generic Hooks",
    ],
    "Tech & Code Crew Community": [
      "Designing and Shipping SaaS Projects",
      "Succeeding in Technical Code Interviews",
    ],
    "Engineering Leadership & Scale": [
      "Leading Multi-disciplinary Engineering Teams",
    ],
  },
};

async function comprehensiveSeed() {
  console.log("Starting comprehensive database seed using Prisma \n");
  console.log("═══════════════════════════════════════════════════════");
  console.log("SEED DATA STRUCTURE:");
  console.log("═══════════════════════════════════════════════════════\n");

  try {
    // 0. Clear existing data
    console.log("Clearing existing database data...");
    await prisma.conversationSummary.deleteMany();
    await prisma.message.deleteMany();
    await prisma.conversation.deleteMany();
    await prisma.match.deleteMany();
    await prisma.learningGoal.deleteMany();
    await prisma.communityMember.deleteMany();
    await prisma.communities.deleteMany();
    await prisma.user.deleteMany();
    console.log(" Database cleared \n");

    // 1. Create FREE users
    console.log("Creating FREE USERS (demonstrating tier limits)...");
    const createdFreeUsers: any[] = [];
    for (const user of freeUsers) {
      const created = await prisma.user.create({ data: user });
      createdFreeUsers.push(created);
      console.log(`${user.name} (FREE - 1 community, 1 goal)`);
    }

    // 2. Create PRO users
    console.log("\n Creating PRO USERS (unlimited access)...");
    const createdProUsers: any[] = [];
    for (const user of proUsers) {
      const created = await prisma.user.create({ data: user });
      createdProUsers.push(created);
      console.log(`${user.name} (PRO - unlimited)`);
    }

    const allUsers = [...createdFreeUsers, ...createdProUsers];

    // 3. Create communities
    console.log("\n Creating communities...");
    const createdCommunities: any[] = [];
    for (const community of communitiesData) {
      const created = await prisma.communities.create({
        data: {
          ...community,
          createdById: createdProUsers[0].id, // Alia creates all communities
        },
      });
      createdCommunities.push(created);
      console.log(`${community.name}`);
    }

    // 4. Add FREE users to communities (1 community each)
    console.log("\n Adding FREE USERS to communities (1 each)...");
    for (const [userName, assignment] of Object.entries(freeUserAssignments)) {
      const user = allUsers.find((u) => u.name === userName);
      const community = createdCommunities.find(
        (c) => c.name === assignment.community,
      );

      if (user && community) {
        await prisma.communityMember.create({
          data: {
            userId: user.id,
            communityId: community.id,
          },
        });
        console.log(`   ✓ ${userName} → ${assignment.community}`);
      }
    }

    // 5. Add PRO users to communities (multiple each)
    console.log("\n Adding PRO USERS to communities (multiple each)...");
    for (const [userName, communityNames] of Object.entries(
      proUserCommunityAssignments,
    )) {
      const user = allUsers.find((u) => u.name === userName);
      if (user) {
        for (const communityName of communityNames) {
          const community = createdCommunities.find(
            (c) => c.name === communityName,
          );
          if (community) {
            await prisma.communityMember.create({
              data: {
                userId: user.id,
                communityId: community.id,
              },
            });
          }
        }
        console.log(` ✓ ${userName} → ${communityNames.length} communities`);
      }
    }

    // 6. Create template learning goals for each community
    console.log("\n Creating template learning goals...");
    const createdGoals: any[] = [];
    for (const [communityName, goals] of Object.entries(learningGoalsData)) {
      const community = createdCommunities.find(
        (c) => c.name === communityName,
      );
      if (community) {
        for (const goal of goals) {
          const created = await prisma.learningGoal.create({
            data: {
              userId: createdProUsers[0].id, // Template goals
              communityId: community.id,
              ...goal,
              tags: [],
            },
          });
          createdGoals.push({ ...created, communityName });
        }
        console.log(` ${goals.length} goals for ${communityName}`);
      }
    }

    // 7. Assign goals to FREE users (1 goal each)
    console.log("\n Assigning goals to FREE USERS (1 goal each)...");
    for (const [userName, assignment] of Object.entries(freeUserAssignments)) {
      const user = allUsers.find((u) => u.name === userName);
      const community = createdCommunities.find(
        (c) => c.name === assignment.community,
      );
      const templateGoal = createdGoals.find(
        (g) =>
          g.title === assignment.goal &&
          g.communityName === assignment.community,
      );

      if (user && community && templateGoal) {
        await prisma.learningGoal.create({
          data: {
            userId: user.id,
            communityId: community.id,
            title: templateGoal.title,
            description: templateGoal.description,
            tags: templateGoal.tags || [],
          },
        });
        console.log(` ${userName} → "${assignment.goal}"`);
      }
    }

    // 8. Assign goals to PRO users (multiple goals each)
    console.log("\n Assigning goals to PRO USERS (multiple goals each)...");
    for (const [userName, communities] of Object.entries(
      proUserGoalAssignments,
    )) {
      const user = allUsers.find((u) => u.name === userName);
      if (user) {
        let totalGoals = 0;

        for (const [communityName, goalTitles] of Object.entries(communities)) {
          const community = createdCommunities.find(
            (c) => c.name === communityName,
          );

          if (community) {
            for (const goalTitle of goalTitles) {
              const templateGoal = createdGoals.find(
                (g) =>
                  g.title === goalTitle && g.communityName === communityName,
              );

              if (templateGoal) {
                await prisma.learningGoal.create({
                  data: {
                    userId: user.id,
                    communityId: community.id,
                    title: templateGoal.title,
                    description: templateGoal.description,
                    tags: templateGoal.tags || [],
                  },
                });
                totalGoals++;
              }
            }
          }
        }
        console.log(` ✓ ${userName} → ${totalGoals} goals`);
      }
    }

    // 9. Create matches
    console.log("\n Creating matches...");
    const matchPairs = [
      // PRO to PRO matches
      [
        "Sophia Jenkins",
        "Julian Alvarez",
        "Production Next.js & GraphQL Masterclass",
      ],
      ["Elena Rostova", "Priya Sharma", "Tech & Code Crew Community"],
      ["Kenji Sato", "Zara Mitchell", "Advanced LLMs & Deep Learning"],
      ["Arthur Pendelton", "Mateo Silva", "Kubernetes & Cloud Infrastructure"],
      ["Sophia Jenkins", "Kenji Sato", "Advanced LLMs & Deep Learning"],
      [
        "Julian Alvarez",
        "Arthur Pendelton",
        "Kubernetes & Cloud Infrastructure",
      ],
      ["Isabella G.", "Elena Rostova", "Engineering Leadership & Scale"],
      ["Finley Brooks", "Mateo Silva", "Kubernetes & Cloud Infrastructure"],
      ["Alia Kulkarni", "Alia K", "Tech & Code Crew Community"],

      // FREE to PRO matches (showing FREE users can match within limits)
      [
        "Liam Sterling",
        "Sophia Jenkins",
        "Production Next.js & GraphQL Masterclass",
      ],
      ["Chloe Vance", "Kenji Sato", "Tech & Code Crew Community"],
      ["Nadia Petrov", "Julian Alvarez", "Engineering Leadership & Scale"],
    ];

    const createdMatches: Array<{
      id: string;
      user1Id: string;
      user2Id: string;
      communityId: string;
      status: string;
      user1Name: string;
      user2Name: string;
    }> = [];
    for (const [name1, name2, communityName] of matchPairs) {
      const user1 = allUsers.find((u) => u.name === name1);
      const user2 = allUsers.find((u) => u.name === name2);
      const community = createdCommunities.find(
        (c) => c.name === communityName,
      );

      if (user1 && user2 && community) {
        const status = Math.random() > 0.3 ? "accepted" : "pending";
        const match = await prisma.match.create({
          data: {
            user1Id: user1.id,
            user2Id: user2.id,
            communityId: community.id,
            status,
          },
        });
        createdMatches.push({ ...match, user1Name: name1, user2Name: name2 });
        console.log(` ✓ ${name1} ↔ ${name2} (${status})`);
      }
    }

    // 10. Create conversations for accepted matches
    console.log("\n Creating conversations for accepted matches...");
    const acceptedMatches = createdMatches.filter(
      (m) => m.status === "accepted",
    );
    const createdConversations: Array<{
      id: string;
      matchId: string;
      match: (typeof createdMatches)[0];
    }> = [];

    for (const match of acceptedMatches) {
      const conversation = await prisma.conversation.create({
        data: {
          matchId: match.id,
          lastMessageAt: new Date(
            Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
          ), // Random time in last 7 days
        },
      });
      createdConversations.push({ ...conversation, match });
      console.log(
        ` ✓ Conversation for ${match.user1Name} ↔ ${match.user2Name}`,
      );
    }

    // 11. Create messages for conversations
    console.log("\n Creating messages for conversations...");
    const messageTemplates = [
      {
        sender: "user1",
        content:
          "Hi! Glad to be paired up with you. I'm deep diving into database indexing and schema design this week. What's on your agenda?",
      },
      {
        sender: "user2",
        content:
          "Hello! Nice to meet you. I'm trying to optimize my application's query response times. How are you approaching database layout?",
      },
      {
        sender: "user1",
        content:
          "That sounds super interesting! I'm actually using Prisma for data modeling and would love to exchange thoughts on query optimization.",
      },
      {
        sender: "user2",
        content:
          "Awesome! I've been meaning to explore Prisma's relation API. Let's do a live coding session to debug some queries.",
      },
      {
        sender: "user1",
        content:
          "Sounds like a solid plan. I'll create a shared repository and send over my initial drafts today.",
      },
      {
        sender: "user2",
        content: "Great! Let's touch base tonight and get started.",
      },
    ];

    let totalMessages = 0;
    for (const conv of createdConversations) {
      const messageCount = Math.floor(Math.random() * 4) + 3; // 3-6 messages per conversation
      const user1 = allUsers.find((u) => u.id === conv.match.user1Id);
      const user2 = allUsers.find((u) => u.id === conv.match.user2Id);

      if (user1 && user2) {
        for (let i = 0; i < messageCount && i < messageTemplates.length; i++) {
          const template = messageTemplates[i];
          const senderId = template.sender === "user1" ? user1.id : user2.id;

          await prisma.message.create({
            data: {
              conversationId: conv.id,
              senderId,
              content: template.content,
              createdAt: new Date(
                Date.now() - (messageCount - i) * 2 * 60 * 60 * 1000,
              ), // Messages spread over time
            },
          });
          totalMessages++;
        }
      }
    }
    console.log(
      `   ✓ Created ${totalMessages} messages across ${createdConversations.length} conversations`,
    );

    // 12. Create conversation summaries for active conversations
    console.log("\n📊 Creating conversation summaries...");
    const conversationsWithManyMessages = createdConversations.slice(
      0,
      Math.ceil(createdConversations.length / 2),
    ); // Half of conversations get summaries

    for (const conv of conversationsWithManyMessages) {
      await prisma.conversationSummary.create({
        data: {
          conversationId: conv.id,
          summary:
            "The study partners discussed database indexing strategies and query performance optimization using Prisma. They shared insights on reducing latency.",
          actionItems: [
            "Benchmark query response times under different indexes",
            "Share draft schema documentation for review",
            "Establish a shared project skeleton",
          ],
          keyPoints: [
            "Focused on database modeling and schema optimization",
            "Shared experience with relational databases",
            "Agreed to run benchmark tests",
          ],
          nextSteps: [
            "Initialize a private GitHub repository for the study codebase",
            "Schedule a 45-minute technical review session this Friday",
            "Finalize the indexing strategy choices",
          ],
        },
      });
    }
    console.log(
      `   ✓ Created ${conversationsWithManyMessages.length} conversation summaries`,
    );

    console.log("\n═══════════════════════════════════════════════════════");
    console.log("✨ DATABASE SEEDING COMPLETED SUCCESSFULLY!");
    console.log("═══════════════════════════════════════════════════════\n");
    console.log("📊 SUMMARY:");
    console.log(
      `    • ${createdFreeUsers.length} FREE USERS (1 community, 1 goal each)`,
    );
    console.log(
      `    • ${createdProUsers.length} PRO USERS (multiple communities & goals)`,
    );
    console.log(`    • ${createdCommunities.length} communities`);
    console.log(`    • ${createdMatches.length} matches`);
    console.log(`    • ${createdConversations.length} conversations`);
    console.log(`    • ${totalMessages} messages`);
    console.log(
      `    • ${conversationsWithManyMessages.length} conversation summaries`,
    );
    console.log("\n YOUR ACCOUNTS (PRO):");
    console.log("    • itskulkarniAlia@gmail.com");
    console.log("    • kulkarni.Alia09@gmail.com");
    console.log("\n OTHER TEST ACCOUNTS:");
    console.log("    • liam.sterling@email.com (FREE)");
    console.log("    • sophia.jenkins@email.com (PRO)\n");
    console.log(" COMMUNITIES:");
    console.log("   • Production Next.js & GraphQL Masterclass");
    console.log("   • Engineering Leadership & Scale");
    console.log("   • Tech & Code Crew Community");
    console.log("   • AI Data Engineering with Python");
    console.log("   • Advanced LLMs & Deep Learning");
    console.log("   • Kubernetes & Cloud Infrastructure\n");
  } catch (error) {
    console.error("\n Error seeding database:", error);
    throw error;
  }
}

comprehensiveSeed()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
