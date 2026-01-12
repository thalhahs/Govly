import { prisma } from "../src/lib/prisma";
import { dataGovernments } from "../src/modules/government/data";

async function main() {
  for (const government of dataGovernments) {
    await prisma.government.upsert({
      where: { slug: government.slug },
      update: government,
      create: government,
    });

    console.log(`🏛️ Government: ${government.name}`);
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
