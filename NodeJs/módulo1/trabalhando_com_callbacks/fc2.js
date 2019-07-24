//Boas práticas em callbacks

//Use funções nomeadas como argumentos para manipulação de callbacks.
function retornarDadosUsuario(callback) {
    setTimeout(() => callback({ nome: "Victor Santos Silva" }));
}
 function callbackDados(usuario) {
    console.log(usuario);
}

retornarDadosUsuario(callbackDados);