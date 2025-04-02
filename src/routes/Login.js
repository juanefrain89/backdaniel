module.exports = app =>{
    const Ag = app.controllers.Login;
    app.post("/usuarios" , Ag.obtener)   
}