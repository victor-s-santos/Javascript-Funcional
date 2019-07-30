//Envie parâmetros para a chamada dos callbacks. Por convenção, em primeiro argumento, erros; e no segundo, o valor.
//a chamada do callback não sinaliza o final do método, por tanto, é necessário manipular o retorno a fim de evitar a continuação.
function retornarDadosUsuario(callback) {
    setTimeout(() => {
        //sucesso;
        callback(null, { nome: "Victor Santos Silva" });
        
//erro;
        callback(new Error("Erro Interno da Aplicacao"), null);
    });
}
function callbackDados(erro, resultados) {
    console.log(erro || resultados);
}

retornarDadosUsuario(callbackDados);