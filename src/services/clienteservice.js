import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createCliente(email, name, cpf, telefone, senha) {
    const cliente = await prisma.cliente.create({
        data: {
            email,
            name,
            cpf,
            telefone,
            senha,
        },
    });

    return cliente;
}

async function findClienteByEmail(email) {

   const cliente = await prisma.cliente.findUnique({
        where: {email}
    });

    return cliente;
}

async function findClienteById(id) {
    return prisma.cliente.findUnique({
        where: {id: Number(id)}
    });
}


async function findAllClientes() {

    const clientes = await prisma.cliente.findMany();
    return clientes;
}

async function updateCliente(id, name, email, telefone, senha) {

    const cliente = await prisma.cliente.update({
        where: { id: Number(id) },
        data: {name, email, telefone, senha}
    });

    return cliente;
}

async function deleteClienteById(id) {

    return prisma.cliente.delete({where: {id: Number(id)}});
}
module.exports = {
    createCliente,
    findAllClientes,
    deleteClienteById,
    updateCliente,
    findClienteById,
    findClienteByEmail,
};
