const arenaService = require('../services/arenaservice');

async function createArena(req, res) {
    try {
        const {name, email, cpf, telefone, senha} = req.body
        let arena = await arenaService.findarenaByEmail(email);

        if (arena) {
            return res.json({
                success: false,
                data: {},
                message: "arena with this email already exist",
            });
        }

        arena = await arenaService.createarena(email, name, cpf, telefone, senha)

        return res.json({
            success: true,
            data: arena,
            message: "arena created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllArenas(req, res) {
    try {
        const arenas = await arenaService.findAllarenas();
        return res.json({
            success: true,
            data: arenas,
            message: "arenas found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findArena(req, res){
    try {
        const {id} = req.params;
        const arena = await arenaService.findarenaById(id);

        if (!arena){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this arena",
            });
        }

        return res.json({
            success: true,
            data: arena,
            message: "arena found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function verifyArena(req, res) 
try {
    const {id} = req.params;
    const empresa = await arenaService.findempresaById(id);

    if (!empresa){
        return res.json({
                success: false,
                data: {},
                message: "Could not find this arena",
        });
    }

    return res.json({
        success: true,
        data: empresa,
        message: "arena found successfully",
    });
}catch (error) {
    return res.json({error})

}




async function updateArena(req, res){
    try {
        const {id} = req.params;
        const {name, email, telefone, senha} = req.body;

        let arena = await arenaService.updatearena(id);

        if (!arena){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this arena",
            });
        }
        arena = await arenaService.updatearena(id, name, email, telefone, senha);

        return res.json({
            success: true,
            data: arena,
            message: "arena updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteArena(req, res) {
    try {
        const { id } = req.params;

        const arena = await arenaService.findarenaById(id);
        if (!arena){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this arena",
            });
        }

        await arenaService.deletearenaById(id);
        return res.json({
            success: true,
            data: arena,
            message: "arena deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createArena,
    findAllArenas,
    findArena,
    updateArena,
    deleteArena,
    verifyArena,
};
