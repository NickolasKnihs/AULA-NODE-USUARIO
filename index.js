// Criar API

const espresso = require('express'); //importar codigo express (para fazer API Js)
const meuServidor = espresso();      //executar a função  
meuServidor.use(espresso.json());    //informar uso do JSON, informando que sera via json

//lista de usuarios (representa um banco de dados)
const listaUsuarios = [
    {   
        id: 1,
        nome: 'Nickolas', 
        idade: 27,
        CPF: '10139768947'
    }
];       

// configurando rota
meuServidor.get('/usuarios', (requisicao, resposta) => {   
    console.log(requisicao.body);
    let respostaUsuarios = '';
    for (let index = 0; index < listaUsuarios.length; index ++){
        const usuario = listaUsuarios[index];
        respostaUsuarios += '<p>';
        respostaUsuarios += 'Código: ';
        respostaUsuarios += usuario.id;
        respostaUsuarios += '</br>Nome: '
        respostaUsuarios += usuario.nome;
        respostaUsuarios += '</br>Idade: '
        respostaUsuarios += usuario.idade;
        respostaUsuarios += '</br>CPF: '
        respostaUsuarios += usuario.CPF;
        respostaUsuarios += '</p>';
    }
    resposta.send(respostaUsuarios);
});

// Instalar thunder Client
//cadastro NO THUNDER
meuServidor.post('/usuarios', (requisicao, resposta) =>{
    //console.log(requisicao.body);
    const nome = requisicao.body.nome; 
    const idade = requisicao.body.idade; 
    const cpf = requisicao.body.cpf; 
    let codigo = -99999999999999999999999999;
    for (let index = 0; index < listaUsuarios.length; index++){
        const usuarioAtual = listaUsuarios[index];
        if (usuarioAtual.id > codigo){
            codigo = usuarioAtual.id;
        }
    }
    if (codigo < 0){
        codigo = 0;
    }
    const novoUsuario = {
        id: codigo + 1,
        nome: nome,
        idade: idade,
        CPF: cpf
    }
    listaUsuarios.push(novoUsuario); // ADICIONAR A USUARIOS
    resposta.send();
});

// thunder
// body:
/*
    {
        "nome": "Pedro"
    }
    */

    //atualização:
    meuServidor.put('/usuarios/:usuarioId', (requisicao, resposta) => {
        const codigoUsuario = requisicao.params.usuarioId;
        const usuarioEncontrado = listaUsuarios.find((usuarioAtual) => usuarioAtual.id == codigoUsuario);
        console.log(usuarioEncontrado);

        const nome = requisicao.body.nome;
        const idade = requisicao.body.idade;
        const cpf = requisicao.body.cpf;
        usuarioEncontrado.nome = nome;
        usuarioEncontrado.idade = idade;
        usuarioEncontrado.CPF = cpf;
        resposta.send();
    });


// deve ser sempra a ultima funcao do arquivo
meuServidor.listen(4300, () =>{
    console.log('Meu primeiro servidor na porta 4300.');
})