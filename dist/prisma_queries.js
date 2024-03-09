"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// for query in console
// const prisma = new PrismaClient({log:['info','query']})
//for query stack + see parameter under the hood in console
const prisma = new client_1.PrismaClient({ log: [{ emit: 'event', level: 'query' }] });
prisma.$on("query", (e) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${e.query} and ${e.params}`);
}));
// for simple
// const prisma = new PrismaClient()
function create_user() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start');
        yield prisma.user.create({
            data: {
                email: "nidhi@gmail.com",
                name: "nidhi singh"
            }
        });
    });
}
// create_user().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function create_post() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.post.create({
            data: {
                title: 'nidhi singh',
                content: 'nidhi singh',
                author: {
                    connect: {
                        id: 6
                    }
                }
            }
        });
    });
}
// create_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function create_user_with_post() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.create({
            data: {
                email: 'yuvraj@gmail.com',
                name: 'yuvraj singh',
                posts: {
                    create: [
                        {
                            title: "new post 1"
                        },
                        {
                            title: "new post 2"
                        }
                    ]
                }
            }
        });
    });
}
// create_user_with_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function get_all_users() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.findMany({});
        console.log(data);
    });
}
// get_all_users().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function get_user_by_email() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.findMany({
            where: {
                email: 'yashpal@gmail.com'
            }
        });
        console.log(data);
    });
}
// get_user_by_email().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function get_user_and_their_post() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.findUnique({
            where: {
                id: 5
            },
            include: {
                posts: true
            }
        });
        console.log(data);
    });
}
// get_user_and_their_post().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function update_user_detail() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                email: 'yuvraj@gmail.com'
            },
            data: {
                name: 'yuvraj singh eddited',
            }
        });
    });
}
// update_user_detail().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function delete_user() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.delete({
            where: {
                email: 'yashpalsingh@gmail.com'
            }
        });
    });
}
// delete_user().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function update_user_data() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                email: 'yashpal@gmail.com'
            },
            data: {
                posts: {
                    updateMany: {
                        where: {
                            published: false
                        },
                        data: {
                            published: true
                        }
                    }
                }
            }
        });
    });
}
// update_user_data().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function delete_user_post_with_false_published() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.update({
            where: {
                email: 'yuvraj@gmail.com'
            },
            data: {
                posts: {
                    deleteMany: {
                        published: false
                    }
                }
            }
        });
    });
}
// delete_user_post_with_false_published().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function find_users_with_requirement() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.findMany({
            where: {
                email: {
                    endsWith: '@gmail.com'
                },
                posts: {
                    some: {
                        published: true
                    }
                }
            },
            // here I said that I also need his post with published:true
            include: {
                posts: {
                    where: {
                        published: true
                    }
                }
            }
        });
        console.log(data);
    });
}
// find_users_with_requirement().then(async ()=>{
//     await prisma.$disconnect()
// }).catch(async (err)=>{
//     console.log(err)
//     await prisma.$disconnect()
//     process.exit(1)
// })
function pagination_data() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield prisma.post.findMany({
            take: 2,
            skip: 2
        });
        console.log(data);
    });
}
pagination_data().then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
})).catch((err) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(err);
    yield prisma.$disconnect();
    process.exit(1);
}));
