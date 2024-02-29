// Criar API

const espresso = require('express'); //importar codigo express (para fazer API Js)
const meuServidor = espresso();      //executar a função  
meuServidor.use(espresso.json());    //informar uso do JSON, informando que sera via json

//lista de usuarios (representa um banco de dados)
const usuarios = [
    {
        nome: 'Nickolas', 
        idade: 27,
        CPF: '10139768947'
    }
];       

// configurando rota
meuServidor.get('/minhaAulaDeNode', (requisicao, resposta) => {   
    console.log(requisicao.body);
    let respostaUsuarios = '';
    for (let index = 0; index < usuarios.length; index ++){
        const usuario = usuarios[index];
        respostaUsuarios += '<p>';
        respostaUsuarios += 'Nome:'
        respostaUsuarios += usuario.nome;
        respostaUsuarios += '</br>Idade:'
        respostaUsuarios += usuario.idade;
        respostaUsuarios += '</br>CPF:'
        respostaUsuarios += usuario.CPF;
        respostaUsuarios += '</p>';
    }
    resposta.send(respostaUsuarios);
});

// Instalar thunder Client
//cadastro
meuServidor.post('/cadastraMinhaAulaDeNode', (requisicao, resposta) =>{
    //console.log(requisicao.body);
    usuarios.push(requisicao.body.nome);
    resposta.send();
});

// thunder
// body:
/*
    {
        "nome": "Pedro"
    }
    */





// deve ser sempra a ultima funcao do arquivo
meuServidor.listen(4300, () =>{
    console.log('Meu primeiro servidor na porta 4300.');
})