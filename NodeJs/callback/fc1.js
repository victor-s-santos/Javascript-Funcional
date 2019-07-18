class Usuario {
    retornarDadosUsuario() {
        setTimeout(() => {
            return { nome: "Victor Santos Silva" };
        });
    }
}

let usuario = new Usuario().retornarDadosUsuario();
console.log(usuario);
//retorna indefinido

class Usuario2 {
    retornarDadosUsuario2(callback) {
        setTimeout(() => {
            return callback({ nome: "Victor Santos Silva" });
        });
    }
}

let usuario2 = new Usuario2();
usuario2.retornarDadosUsuario2((resultado) => {
    console.log(resultado);
});
//retorna nome