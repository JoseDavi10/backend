import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createProprietario(name, email, senha, cpf, cnpj, telefone) {
    const proprietario = await prisma.proprietario.create({
        data: {
            name,
            email,
            senha,
            cpf,
            cnpj,
            telefone,
        },
    });

    return proprietario;
}

async function findProprietarioByEmail(cnpj) {

   const proprietario = await prisma.proprietario.findUnique({
        where: {email}
    });

    return proprietario;
}

async function findProprietarioById(id) {
    return prisma.proprietario.findUnique({
        where: {id: Number(id)}
    });
}


async function findAllProprietarios() {

    const proprietarios = await prisma.proprietario.findMany();
    return proprietarios;
}

async function updateProprietario(id, name, email, telefone, senha) {

    const proprietario = await prisma.proprietario.update({
        where: { id: Number(id) },
        data: {name, email, telefone, senha}
    });

    return proprietario;
}

async function deleteProprietarioById(id) {

    return prisma.proprietario.delete({where: {id: Number(id)}});
}
module.exports = {
    createProprietario,
    findAllProprietarios,
    deleteProprietarioById,
    updateProprietario,
    findProprietarioById,
    findProprietarioByEmail,
};
