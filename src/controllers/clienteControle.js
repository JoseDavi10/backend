const clienteService = require('../services/clienteservice');

async function createCliente(req, res) {
    try {
        const {name, email, cpf, telefone, senha} = req.body
        let cliente = await clienteService.findClienteByEmail(email);

        if (cliente) {
            return res.json({
                success: false,
                data: {},
                message: "cliente with this email already exist",
            });
        }

        cliente = await clienteService.createCliente(email, name, cpf, telefone, senha)

        return res.json({
            success: true,
            data: cliente,
            message: "cliente created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllClientes(req, res) {
    try {
        const clientes = await clienteService.findAllClientes();
        return res.json({
            success: true,
            data: clientes,
            message: "clientes found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findCliente(req, res){
    try {
        const {id} = req.params;
        const cliente = await clienteService.findClienteById(id);

        if (!cliente){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this cliente",
            });
        }

        return res.json({
            success: true,
            data: cliente,
            message: "cliente found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateCliente(req, res){
    try {
        const {id} = req.params;
        const {name, email, telefone, senha} = req.body;

        let cliente = await clienteService.updateCliente(id);

        if (!cliente){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this cliente",
            });
        }
        cliente = await clienteService.updateCliente(id, name, email, telefone, senha);

        return res.json({
            success: true,
            data: cliente,
            message: "cliente updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteCliente(req, res) {
    try {
        const { id } = req.params;

        const cliente = await clienteService.findClienteById(id);
        if (!cliente){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this cliente",
            });
        }

        await clienteService.deleteClienteById(id);
        return res.json({
            success: true,
            data: cliente,
            message: "cliente deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createCliente,
    findAllClientes,
    findCliente,
    updateCliente,
    deleteCliente,
};
