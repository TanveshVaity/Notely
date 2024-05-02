import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const notes = await prisma.note.findMany({
  //   where: {
  //     category: {
  //       name: "Home",
  //     },
  //   },
  //   include: {
  //     category: true,
  //   },
  // });
  
  // console.log(notes);

  const deletedNotes = await prisma.note.deleteMany({
    where: {
      content: {
        in: [""],
      },
    },
  });
  
  console.log(`Deleted ${deletedNotes.count} notes with empty or null content.`);
  
  // Get categories with no associated notes
  const categoriesToDelete = await prisma.category.findMany({
    where: {
      notes: {
        none: {},
      },
    },
  });
  
  // Delete categories with no associated notes
  const deletedCategories = await prisma.category.deleteMany({
    where: {
      id: {
        in: categoriesToDelete.map((category) => category.id),
      },
    },
  });
  
  console.log(`Deleted ${deletedCategories.count} categories with no associated notes.`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })