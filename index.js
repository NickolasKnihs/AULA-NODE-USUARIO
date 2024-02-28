// Criar API

const espresso = require('express'); //importar codigo express
const meuServidor = espresso();      //executar a função  
meuServidor.use(espresso.json()); //informar uso do JSON

const usuarios = ['Nickolas'];

meuServidor.get('/minhaAulaDeNode', (requisicao, resposta) => {
    console.log(requisicao.body);
    let respostaUsuarios = '';
    for (let index = 0; index < usuarios.length; index ++){
        respostaUsuarios += '<p>';
        respostaUsuarios += usuarios[index];
        respostaUsuarios += '</p>';
    }
    resposta.send(respostaUsuarios);
});

// Instalar thunder Client
meuServidor.post('/cadastraMinhaAulaDeNode', (requisicao, resposta) =>{
    console.log(requisicao.body);
    resposta.send();
});

meuServidor.listen(4300, () =>{
    console.log('Meu primeiro servidor na porta 4300.');
})