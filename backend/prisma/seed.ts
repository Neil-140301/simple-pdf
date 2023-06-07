import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';

const prisma = new PrismaClient();

async function main() {
  const file = await readFile('./prisma/example.pdf');
  await prisma.employeeData.create({
    data: {
      content: file,
      filename: 'example.pdf',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
