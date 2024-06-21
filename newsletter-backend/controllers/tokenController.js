import { newToken, validateToken } from "../repository/authRepository.js";

const TokenController = {
    newTokenController: async (req, res) => {
        const {password} = req.body;

        if(!password){
            res.status(400);
            res.json({message: "Senha não informada"});
            return;
        }

        try {
            await newToken(password);
            res.status(201);
            res.json({message: "Token criado com sucesso"});
            return;
        } catch (error) {
            console.info(error.message)
            res.status(500);
            res.json({message: "Erro ao criar token"});
            return;
        }
    },
    validateTokenController: async  (req, res) => {
        const {password} = req.body;

        if(!password){
            res.status(400);
            res.json({message: "Senha não informada"});
            return;
        }

        try {
            const validToken = await validateToken(password);

            if(!validToken){
                res.status(401);
                res.json({message: "Token inválido"});
                return;
            }

            res.status(200);
            res.json({message: "Token válido"});
            return;
        } catch (error) {
            res.status(500);
            res.json({message: "Erro ao validar token"});
            return;
        }
    },
}

export default TokenController;