const proprietarioService = require('../services/proprietarioservice');

async function createProprietario(req, res) {
    try {
        const {name, email, cpf, telefone, senha} = req.body
        let proprietario = await proprietarioService.findproprietarioByEmail(email);

        if (proprietario) {
            return res.json({
                success: false,
                data: {},
                message: "proprietario with this email already exist",
            });
        }

        proprietario = await proprietarioService.createproprietario(email, name, cpf, telefone, senha)

        return res.json({
            success: true,
            data: proprietario,
            message: "proprietario created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllProprietarios(req, res) {
    try {
        const proprietarios = await proprietarioService.findAllproprietarios();
        return res.json({
            success: true,
            data: proprietarios,
            message: "proprietarios found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findProprietario(req, res){
    try {
        const {id} = req.params;
        const proprietario = await proprietarioService.findproprietarioById(id);

        if (!proprietario){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this proprietario",
            });
        }

        return res.json({
            success: true,
            data: proprietario,
            message: "proprietario found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateProprietario(req, res){
    try {
        const {id} = req.params;
        const {name, email, telefone, senha} = req.body;

        let proprietario = await proprietarioService.updateproprietario(id);

        if (!proprietario){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this proprietario",
            });
        }
        proprietario = await proprietarioService.updateproprietario(id, name, email, telefone, senha);

        return res.json({
            success: true,
            data: proprietario,
            message: "proprietario updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteProprietario(req, res) {
    try {
        const { id } = req.params;

        const proprietario = await proprietarioService.findproprietarioById(id);
        if (!proprietario){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this proprietario",
            });
        }

        await proprietarioService.deleteproprietarioById(id);
        return res.json({
            success: true,
            data: proprietario,
            message: "proprietario deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createProprietario,
    findAllProprietarios,
    findProprietario,
    updateProprietario,
    deleteProprietario,
};
