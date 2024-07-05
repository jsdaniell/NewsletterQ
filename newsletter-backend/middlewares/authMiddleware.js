import {validateToken} from "../repository/authRepository.js"

async function authMiddleware(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
        res.status(401)
        res.json({ message: 'Token não informado' })
        return
    }

    const valid = await validateToken(authorization)

    if (!valid) {
        res.status(401)
        res.json({ message: 'Token inválido' })
        return
    }

    next()
}

export default authMiddleware