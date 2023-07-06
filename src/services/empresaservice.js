import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createEmpresa(id_empresa, nome_empresa, endereco, cnpj, quant_arenas, telefone_empresa, proprietario, proprietarioId, arenas) {
    const empresa = await prisma.empresa.create({
        data: {
            id_empresa,
            nome_empresa,
            endereco,
            cnpj,
            quant_arenas,
            telefone_empresa,
            proprietario,
            proprietarioId,
            arenas
        },
    });

    return empresa;
}

async function findEmpresaByEndereco(endereco) {

   const empresa = await prisma.empresa.findUnique({
        where: {endereco}
    });

    return empresa;
}

async function findEmpresaById(id_empresa) {
    return prisma.empresa.findUnique({
        where: {id: Number(id_empresa)}
    });
}


async function findAllEmpresas() {

    const empresas = await prisma.empresa.findMany();
    return empresas;
}

async function updateEmpresa(id_empresa, nome_empresa, endereco, cnpj, quant_arenas, telefone_empresa, proprietario, proprietarioId, arenas) {

    const empresa = await prisma.empresa.update({
        where: { id: Number(id_empresa) },
        data: {id_empresa, nome_empresa, endereco, cnpj, quant_arenas, telefone_empresa, proprietario, proprietarioId, arenas}
    });

    return empresa;
}

async function deleteEmpresaById(id_empresa) {

    return prisma.empresa.delete({where: {id: Number(id_empresa)}});
}
module.exports = {
    createEmpresa,
    findAllEmpresas,
    deleteEmpresaById,
    updateEmpresa,
    findEmpresaById,
    findEmpresaByEndereco,
};
