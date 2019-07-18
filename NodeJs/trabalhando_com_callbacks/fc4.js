function retornarDadosUsuario(callback) {
    setTimeout(() => {
        //sucesso;
        return callback(null, { nome: "Victor Santos Silva" });
        
        //evitando que sejam feitas novas chamadas
        callback(new Error("Erro Interno da Aplicacao"), null);
    });
}
function callbackDados(erro, resultados) {
    console.log(erro || resultados);
}

retornarDadosUsuario(callbackDados);