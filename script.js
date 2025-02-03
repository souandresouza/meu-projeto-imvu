function processarLink() {
    // Obtém o valor do input
    const link = document.getElementById('linkInput').value.trim();

    // Elementos onde os resultados e logs serão exibidos
    const idsExtraidosDiv = document.getElementById('idsExtraidos');
    const logsDiv = document.getElementById('logs');

    // Limpa resultados e logs anteriores
    idsExtraidosDiv.innerHTML = '';
    logsDiv.innerHTML = '';

    // Verifica se o campo está vazio
    if (!link) {
        logsDiv.innerHTML = '<p class="log-error">Erro: Por favor, cole um link.</p>';
        return;
    }

    // Expressão regular para extrair o ID (supondo que o ID esteja no formato "id=12345")
    const idExtraido = link.match(/id=(\d+)/);

    // Verifica se o ID foi encontrado
    if (idExtraido && idExtraido[1]) {
        // Exibe o ID extraído
        idsExtraidosDiv.innerHTML = `<p class="id-extraido">ID Extraído: <strong>${idExtraido[1]}</strong></p>`;
        logsDiv.innerHTML = '<p class="log-success">Processamento concluído com sucesso!</p>';
    } else {
        // Exibe mensagem de erro se nenhum ID for encontrado
        logsDiv.innerHTML = '<p class="log-error">Erro: Nenhum ID válido encontrado no link.</p>';
    }
}
