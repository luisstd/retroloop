import { faker } from '@faker-js/faker'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  //generate user data
  const amountOfUsers = 10
  const users: User[] = []

  for (let i = 0; i < amountOfUsers; i++) {
    const id = faker.datatype.uuid()
    const createdAt = faker.date.past(2)
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const role = 'USER'
    const email = faker.internet.email(firstName, lastName)
    const emailVerified = faker.date.past(1)
    const name = `${firstName} ${lastName}`
    const image = faker.image.avatar()

    const user: User = {
      id: id,
      createdAt: createdAt,
      email: email,
      emailVerified: emailVerified,
      role: role,
      name: name,
      image: image,
    }

    users.push(user)
  }

  //generate retroItem data
  //   const amountOfRetroItems = 50
  //   const retroItems: RetroItem[] = []

  //   for (let i = 0; i < amountOfRetroItems; i++) {
  //     const id = faker.datatype.uuid()
  //     const createdAt = faker.date.past(2)
  //     const content = faker.random.words(5)
  //     const type = faker.helpers.arrayElement(['WENT_WELL', 'TO_IMPROVE', 'ACTION_ITEM'])
  //     const userId = faker.helpers.arrayElement(users).id
  //     const retrospectiveId = faker.datatype.uuid()
  //     const itemCollectionId = faker.datatype.uuid()
  //     const votes = faker.datatype.number(10)

  //     const retroItem: RetroItem = {
  //       id: id,
  //       createdAt: createdAt,
  //       content: content,
  //       type: type,
  //       userId: userId,
  //       votes: votes,
  //       itemCollectionId: itemCollectionId,
  //       retrospectiveId: retrospectiveId,
  //     }

  //     retroItems.push(retroItem)
  //   }

  //generate retrospectives data
  //   const amountOfRetrospectives = 15
  //   const retrospectives: Retrospective[] = []

  //   for (let i = 0; i < amountOfRetrospectives; i++) {
  //     const id = faker.datatype.uuid()
  //     const createdAt = faker.date.past(2)
  //     const name = faker.random.words(2)
  //     const date = faker.date.past(5)
  //     const workspaceId = faker.datatype.uuid()
  //     const phase = faker.helpers.arrayElement(['WRITING', 'VOTING', 'DISCUSSING'])
  //     const timerExpiration = faker.date.future(1)

  //     const retrospective: Retrospective = {
  //       id: id,
  //       createdAt: createdAt,
  //       name: name,
  //       date: date,
  //       workspaceId: workspaceId,
  //       phase: phase,
  //       timerExpiration: timerExpiration,
  //     }

  //     retrospectives.push(retrospective)
  //   }

  const addUsers = async () => await prisma.user.createMany({ data: users })
  //   const addRetrospectives = async () =>
  //     await prisma.retrospective.createMany({ data: retrospectives })
  //   const addRetroItems = async () => await prisma.retroItem.createMany({ data: retroItems })

  await addUsers()
  //   await addRetroItems()
  //   await addRetrospectives()
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
