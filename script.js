// Função para processar o link e extrair os IDs
function processarLink() {
  // 1. Pegar o link do input
  const linkInput = document.getElementById('linkInput');
  const link = linkInput.value.trim();

  if (!link) {
      alert('Por favor, insira um link.');
      return;
  }

  // 2. Extrair IDs do link
  const regex = /(?:productId=|image_dressup\/)([^&\?]+)/;
  const match = link.match(regex);
  if (!match) {
      alert('Formato de link inválido.');
      return;
  }

  const idsStr = match[1];
  const ids = idsStr.split(/[+,]/); // Separar por '+' ou ','

  // 3. Criar links clicáveis para a página de visualização do produto
  const linksCompletos = ids.map(id => {
      const productId = id.trim();
      return `<a href="https://go.imvu.com/shop/product-${productId}" target="_blank">https://go.imvu.com/shop/product-${productId}</a>`;
  });

  // 4. Exibir os links completos na página
  const idsExtraidosDiv = document.getElementById('idsExtraidos');
  idsExtraidosDiv.innerHTML = `
      <p>${linksCompletos.join('<br>')}</p>
      <button onclick="copiarLinks()">Copiar Links</button>
  `;

  // 5. Registrar log
  const logsDiv = document.getElementById('logs');
  const dataHora = new Date().toLocaleString();
  const logEntry = document.createElement('p');
  logEntry.textContent = `${dataHora} - IDs extraídos: ${ids.length} (${ids.join(', ')})`;
  logsDiv.appendChild(logEntry);

  // 6. Limpar o input
  linkInput.value = '';
}

// Função para copiar os links para a área de transferência
function copiarLinks() {
  // 1. Pegar todos os links exibidos
  const idsExtraidosDiv = document.getElementById('idsExtraidos');
  const links = idsExtraidosDiv.querySelector('p').innerText;

  // 2. Copiar para a área de transferência
  navigator.clipboard.writeText(links)
      .then(() => {
          alert('Links copiados para a área de transferência!');
      })
      .catch(() => {
          alert('Erro ao copiar os links.');
      });
}
