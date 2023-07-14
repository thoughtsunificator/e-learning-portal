// This is a dummy service to check the health of the application from connectivity point of view

import middleware from "../middleware";

async function handler(req, res) {
    if(req.method === 'GET'){
        return res.status(200).json({status: 'ok'})
    }
    res.status(401).end();
}

export default middleware(handler);