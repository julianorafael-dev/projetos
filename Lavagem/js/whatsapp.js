const form = document.querySelector("#form-orcamento");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const cep = document.querySelector("#cep").value;
    const logradouro = document.querySelector("#logradouro").value;
    const numero = document.querySelector("#numero").value;
    const complemento = document.querySelector("#complemento").value;
    const bairro = document.querySelector("#bairro").value;
    const cidade = document.querySelector("#cidade").value;
    const uf = document.querySelector("#uf").value;
    const observacoes = document.querySelector("#observacoes").value;

// Pega os serviços selecionados
    const servicos = [];

    document.querySelectorAll('input[name="servicos"]:checked')
        .forEach(servico => {
            servicos.push(servico.value);
        });

    const mensagem = `
-- *Solicitação de Orçamento* --

Nome: ${nome}
Telefone: ${telefone}

Endereço
CEP: ${cep}
Rua: ${logradouro}
Número: ${numero}
Complemento: ${complemento}
Bairro: ${bairro}
Cidade: ${cidade} - ${uf}

-> Serviços:
${servicos.join(", ")}

-> Observações:
${observacoes}
`;

  
    const numeroWhats = "5551993539161";

    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    form.reset();
});