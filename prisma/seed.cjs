const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'demo@fbai.pro';
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    const passwordHash = await bcrypt.hash('demo1234', 10);
    await prisma.user.create({
      data: { email, passwordHash, subscriptionTier: 'free' }
    });
    console.log('Seeded demo user: demo@fbai.pro / demo1234');
  } else {
    console.log('Demo user already exists.');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
