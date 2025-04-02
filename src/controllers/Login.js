const { forEach } = require("lodash");
const { where } = require("sequelize");

module.exports = {

    obtener: (req, res)=>{
        let {correo , contrasena} = req.body
        const DesarrolloTalento = req.app.database.models.login;
        let arr =[]
        DesarrolloTalento.findAll({
            where :{
                correo,
                contrasena
            }}

        ).then((respuesta)=> {
res.send(respuesta)
          
   
    })
        . catch((err)=>{
            res.send(err)
        })
    }
}