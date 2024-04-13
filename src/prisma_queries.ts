import { PrismaClient } from "@prisma/client";

// for query in console
// const prisma = new PrismaClient({log:['info','query']})

//for query stack + see parameter under the hood in console
const prisma = new PrismaClient({log:[{emit:'event',level:'query'}]})
prisma.$on("query",async (e)=>{
    console.log(`${e.query} and ${e.params}`)
});

// for simple
// const prisma = new PrismaClient()

// async function create_user(){
//     console.log('start')
//     await prisma.user.create({
//         data:{
//             email:"nidhi@gmail.com",
//             name:"nidhi singh"
//
//         }
//     })
// }
// create_user().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function create_post(){
//     await prisma.post.create({
//         data:{
//             title:'nidhi singh',
//             content:'nidhi singh',
//             author:{
//                 connect:{
//                     id:6
//                 }
//             }
//         }
//     })
// }
// create_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function create_user_with_post(){
//     await prisma.user.create({
//         data:{
//             email:'yuvraj@gmail.com',
//             name:'yuvraj singh',
//             posts:{
//                 create:[
//                     {
//                         title:"new post 1"
//                     },
//                     {
//                         title:"new post 2"
//                     }
//                 ]
//             }
//         }
//     })
// }
// create_user_with_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function get_all_users(){
//     const data = await prisma.user.findMany({});
//     console.log(data);
// }
// get_all_users().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function get_user_by_email(){
//     const data = await prisma.user.findMany({
//         where:{
//             email:'yashpal@gmail.com'
//         }
//     });
//     console.log(data);
// }
// get_user_by_email().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function get_user_and_their_post(){
//     const data = await prisma.user.findUnique({
//         where:{
//             id:5
//         },
//         include:{
//             posts:true
//         }
//     });
//     console.log(data);
// }
// get_user_and_their_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })

// async function update_user_detail(){
//     await prisma.user.update({
//         where:{
//             email:'yuvraj@gmail.com'
//         },
//         data:{
//             name:'yuvraj singh eddited',
//         }
//     })
// }
// update_user_detail().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function delete_user(){
//     await prisma.user.delete({
//         where:{
//             email:'yashpalsingh@gmail.com'
//         }
//     })
// }
// delete_user().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })



// async function update_user_data(){
//     await prisma.user.update({
//         where:{
//             email:'yashpal@gmail.com'
//         },
//         data:{
//             posts:{
//                 updateMany:{
//                     where:{
//                         published:false
//                     },
//                     data:{
//                         published:true
//                     }
//                 }
//             }
//         }
//     })
// }
// update_user_data().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })



// async function delete_user_post_with_false_published(){
//     await prisma.user.update({
//         where:{
//             email:'yuvraj@gmail.com'
//         },
//         data:{
//             posts:{
//                 deleteMany:{
//                     published:false
//                 }
//             }
//         }
//     })
// }
// delete_user_post_with_false_published().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function find_users_with_requirement(){
//     const data = await prisma.user.findMany({
//         where:{
//             email:{
//                 endsWith:'@gmail.com'
//             },
//             posts:{
//                 some:{
//                     published:true
//                 }
//             }
//         },
//         // here I said that I also need his post with published:true
//         include:{
//             posts:{
//                 where:{
//                     published:true
//                 }
//             }
//         }
//     })
//     console.log(data)
// }
// find_users_with_requirement().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })


// async function pagination_data(){
//     let data = await prisma.post.findMany({
//         take:2,
//         skip:2
//     })
//     console.log(data);
// }
// pagination_data().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })