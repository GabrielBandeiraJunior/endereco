document.getElementById("btnConsultar").addEventListener("click", obterEnderecoPorCEP);

function obterEnderecoPorCEP() {
    const cep = document.getElementById("cep").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter o endereço.');
            }
            return response.json();
        })
        .then(data => {
            exibirEndereco(data);
        })
        .catch(error => {
            console.error('Erro:', error);
            exibirErro('Erro ao buscar o endereço. Por favor, verifique o CEP e tente novamente.');
        });
}

function exibirEndereco(endereco) {
    document.getElementById("rua").textContent = endereco.logradouro || '';
    document.getElementById("cidade").textContent = endereco.localidade || '';
    document.getElementById("estado").textContent = endereco.uf || '';
}

function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById("enderecoResultado");
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
}
