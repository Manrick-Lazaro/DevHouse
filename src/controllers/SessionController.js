/**
 * metodos de seção: index, show, update, store, destroy
 * 
 * index - lista todas as sessoes
 * store - cria uma nova sessao
 * show - detalha uma sessao
 * update - altera uma sessao
 * destroy - deleta uma sessao
 * 
 */
import User from "../models/User";

class SessionController {
    async store(req, res) {
        const { email } = req.body;

        let user = User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user)
    }
}

export default new SessionController();