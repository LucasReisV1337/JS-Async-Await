console.log('testando aguarde...')

let aceitar = true

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('tudo certo!')
    }
    return reject('tudo errado!')
})
console.log('Aguardando promise...')

promessa
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))



// o then() fica responsável por capturar o resultado da promise quando da tudo certo (quando da certo ele aciona
// a variavel resolve) e joga em alguma váriavel com arrow funcition.
// no exemplo a cima a variável é a "result" no then() e error no catch(), mas poderia ser qualquer outra.
// o catch() fica responsável por capturar os erros da promise quando da tudo errado (quando da errado ele aciona a variavel
// reject) e joga em alguma váriavel com arrow funcition.
// o finally náo só vai aparecer quando terminar a promise, não precisa receber variável para executar a ação

// lembre-se que as variáveis resolve,reject,result e error poderiam ser qualquer palavara ou letra
// resolve => then => result
// reject => catch => error