const empresaService = require('../services/empresaservice');

async function createEmpresa(req, res) {
    try {
        const {name, email, cpf, telefone, senha} = req.body
        let empresa = await empresaService.findempresaByEmail(email);

        if (!empresa) {
            return res.json({
                success: false,
                data: {},
                message: "empresa with this email already exist",
            });
        }

        empresa = await empresaService.createempresa(email, name, cpf, telefone, senha)

        return res.json({
            success: true,
            data: empresa,
            message: "empresa created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllEmpresas(req, res) {
    try {
        const empresas = await empresaService.findAllempresas();
        return res.json({
            success: true,
            data: empresas,
            message: "empresas found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findEmpresa(req, res){
    try {
        const {id} = req.params;
        const empresa = await empresaService.findempresaById(id);

        if (!empresa){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this empresa",
            });
        }

        return res.json({
            success: true,
            data: empresa,
            message: "empresa found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateEmpresa(req, res){
    try {
        const {id} = req.params;
        const {name, email, telefone, senha} = req.body;

        let empresa = await empresaService.updateempresa(id);

        if (!empresa){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this empresa",
            });
        }
        empresa = await empresaService.updateempresa(id, name, email, telefone, senha);

        return res.json({
            success: true,
            data: empresa,
            message: "empresa updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteEmpresa(req, res) {
    try {
        const { id } = req.params;

        const empresa = await empresaService.findempresaById(id);
        if (!empresa){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this empresa",
            });
        }

        await empresaService.deleteempresaById(id);
        return res.json({
            success: true,
            data: empresa,
            message: "empresa deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createEmpresa,
    findAllEmpresas,
    findEmpresa,
    updateEmpresa,
    deleteEmpresa,
};
