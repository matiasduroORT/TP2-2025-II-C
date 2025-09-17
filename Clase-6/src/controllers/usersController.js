import { users } from "../data/users.js";


export const getUsers = (req, res) => {

    if(req.query.id){
        
        let id = Number(req.query.id)

        const user = users.find((user) => {
            console.log("user: ", user.id);
            console.log("id params: ", id);
            console.log("===", user.id === id);
            console.log("==", user.id == id);

            return user.id === id
        })

        if(user){
            res.json(user)
        }else{

            res.status(404).json({
                id: 0,
                error: 'user no existe'
            })
        }
    }else{
        res.status(400).json({
            error: "Falta ID"
        })
    }
    
}
