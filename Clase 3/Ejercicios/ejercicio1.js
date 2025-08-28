
//  Funcion asincronica, con callback
function separarUsuariosCallback(lista, callback){

    console.log("lista: ", lista);    
    setTimeout(() => {

    let hombres = []
    let mujeres = []

    for (const user of lista) {
        
        if(user.sexo === "M"){
            hombres.push(user.nombre)
        }else{
            mujeres.push(user.nombre)
        }
        
    }
    callback({
        hombres,
        mujeres
    })

    }, 1000);

}



const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lucia", sexo: "F" },
    { nombre: "Juan", sexo: "M" },
  ];

separarUsuariosCallback(usuarios, (resultado) => {
    console.log("Resultado: ", resultado)
     
})