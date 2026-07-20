export async function buscarCep(cep){
    let cepLimpo = cep.replace(/\D/g, '')

    if(cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 dígitos.')
    }
//faz o pedido dos dados(fetche) --- await -> espera resposta
    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    //tranforma em um objeto para o js
    let dados = await resposta.json()
//tratamento de erro
    if(dados.erro) {
        throw new Error ('CEP não encontrado.')
    }
//retorna os dados se forem validos
    return dados
}