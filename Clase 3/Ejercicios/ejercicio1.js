
//  Funcion asincronica, con callback
function separarUsuariosCallback(lista, callback){

    setTimeout(() => {

        
        
    }, 1000);

}



const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lucia", sexo: "F" },
    { nombre: "Juan", sexo: "M" },
  ];

separarUsuariosCallback(usuarios, (resultado) => {
    console.log("Resultado: ", resultado);
    
})