import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createArena(name, email, cpf, telefone, senha) {
    const arena = await prisma.arena.create({
        data: {
            name,
            email,
            cpf,
            telefone,
            senha,
        },
    });

    return arena;
}

async function findArenaByEmail(email) {

   const arena = await prisma.arena.findUnique({
        where: {email}
    });

    return arena;
}

async function findArenaById(id) {
    return prisma.arena.findUnique({
        where: {id: Number(id)}
    });
}


async function findAllarenas() {

    const arenas = await prisma.arena.findMany();
    return arenas;
}

async function updateArena(id, name, email, telefone, senha) {

    const arena = await prisma.arena.update({
        where: { id: Number(id) },
        data: {name, email, telefone, senha}
    });

    return arena;
}

async function deleteArenaById(id) {

    return prisma.arena.delete({where: {id: Number(id)}});
}
module.exports = {
    createArena,
    findAllarenas,
    deleteArenaById,
    updateArena,
    findArenaById,
    findArenaByEmail,
};
