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
    const resultadoDiv = document.getElementById("enderecoResultado");
    resultadoDiv.innerHTML =
        <h2>Endereço Encontrado</h2>=getElementById("enderecoencontrado")
        <p><strong>Rua:</strong> ${endereco.logradouro}</p>=getElementById("rua")
        <p><strong>Cidade:</strong> ${endereco.localidade}</p>=getElementById("cidade")
        <p><strong>Estado:</strong> ${endereco.uf}</p>=getElementById("estado")
    ;
}

function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById("enderecoResultado");
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
}
