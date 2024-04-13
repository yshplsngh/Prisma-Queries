import {PrismaClient} from "@prisma/client";


// use only single prisma client for entire application
const prisma = new PrismaClient();

/*or*/

// to console the prisma query
// const prisma = new PrismaClient({log:['info','query']});

/*or*/

// to console the prisma query with input that we are giving
// const prisma = new PrismaClient({log:[{emit:'event',level:'query'}]})
// prisma.$on("query",async (e)=>{
//     console.log(`${e.query} and ${e.params}`)
// });




async function main() {
    const data = await prisma.user3.findUnique({
        where: {
            email: "yashpal@gmail.com"
        }
    })
    const data2 = await prisma.user3.findFirst({
        where: {
            name: "yashpal"
        }
    })
    const data3 = await prisma.user3.findMany({
        where: {
            name: "yashpal"
        }
    })
    const data4 = await prisma.user3.findMany({
        where: {
            name: {not: "yashpal"}
        }
    })
    const data5 = await prisma.user3.findMany({
        // return all user but does not named yashpal and yashpal2
        where: {
            name: {notIn: ["yashpal", "yashpal2"]}
        }
    })
    const data6 = await prisma.user3.findMany({
        // return all user but does not named yashpal and yashpal2
        where: {
            name: {in: ["yashpal", "yashpal2"]}
        }
    })
    const data7 = await prisma.user.findMany({
        // return all user age less than 20
        where: {
            age: {lt: 20}
        }
    })
    const data8 = await prisma.user.findMany({
        // return all user age greater than 20
        where: {
            age: {gt: 20}
        }
    })
    const data9 = await prisma.user3.findMany({
        // return all user whose email contain @gmail.com
        where: {
            email: {contains: "@gmail.com"}
        }
    })
    const data10 = await prisma.user3.findMany({

        where: {
            email: {endsWith: "@gmail.com"}
        }
    })
    const data11 = await prisma.user3.findMany({

        where: {
            email: {startsWith: "yashpal"}
        }
    })
    const data12 = await prisma.user3.findMany({

        where: {
            AND: [
                {email: {startsWith: "yashpal"}},
                {email:{endsWith:"@gmail.com"}}
            ]
        }
    })
    const data13 = await prisma.user3.findMany({
        where: {
            OR: [
                {name: "yashpal"},
                {email: {startsWith: "yashpal"}}
            ]
        }
    })
    const data14 = await prisma.user3.findMany({
        where: {
            userPreference:{
                newsSubscribe:true
            }
        }
    })
    const data15 = await prisma.user3.createMany({
        data: [
            {
                name:"yashpal",
                email:"yashpal@gmail.com",
            },
            {
                name:"yashpal2",
                email:"yashpal2@gmail.com",
            }
        ]
    })
    const data16 = await prisma.user3.create({
        data: {
            name:"yashpal",
            email:"yashpal@gmail.com",
            userPreference:{
                create:{
                    newsSubscribe:true
                }
            }
        },
        // select  will return only selected column
        select:{
            // userPreference:true,
            userPreference:{
                select:{
                    id:true
                }
            },
            name:true,
        }
    })
    const data17 = await prisma.user3.create({
        data: {
            name:"Yashpal",
            email:"yashpa@gmail.com",
            userPreference:{
                create:{
                    newsSubscribe:true
                }
            }
        },
        //here include work only for relation column like populate
        include:{
            userPreference:true
        }
    })
    const data18 = await prisma.user3.update({
        where:{
            email:"yashpal@gmail.com"
        },data:{
            email:"yashpal12@gmail.com"
        }
    })
    const data19 = await prisma.user.update({
        where:{
            email:"yashpal@gmail.com"
        },
        data:{
            age:{
                increment:1
            }
        }
    })
    const data20 = await prisma.user.update({
        where:{
            email:"yashpal@gmail.com"
        },
        data:{
            age:{
                increment:1
                // decrement:1
                // multiply:20
                // divide:20
            }
        }
    })
}


main().then(async () => {
    await prisma.$disconnect()
}).catch(async (err) => {
    console.log(err)
    await prisma.$disconnect()
    process.exit(1)
})
