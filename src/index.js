const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(){
  await prisma.$connect()
  const res = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  }).catch(e=>console.log(e))
  console.log(res)
}

main().catch((e) => {
  throw e
})
.finally(async () => {
  await prisma.$disconnect()
})