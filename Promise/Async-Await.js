const promessa = new Promise(function (resolve, reject) { 
    return resolve('Teste promessa')
})
async function start() { 
    const result = await promessa
    console.log(result)
}
start()

//utilizando a promisse pura com fetch

const promessa2 = new Promise((resolve, reject) => {
    return resolve('Teste comparação')
})
promessa2
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))