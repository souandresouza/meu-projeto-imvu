# Processador de Links IMVU

Um projeto simples para processar links de produtos do IMVU, extrair IDs e gerar links completos para a loja do IMVU.

---

## Funcionalidades

- **Processamento de Links**: Extrai IDs de produtos de um link fornecido.
- **Geração de Links Completos**: Adiciona o prefixo `https://go.imvu.com/shop/product-` aos IDs extraídos.
- **Copiar Links**: Permite copiar todos os links gerados de uma vez para a área de transferência.
- **Logs**: Registra todas as ações realizadas para facilitar o acompanhamento.

---

## Como Usar

1. **Cole o Link**:
   - Insira o link contendo os IDs de produtos no campo de texto.
   - Exemplo de link: `https://exemplo.com?productId=123,456`.

2. **Clique em "Processar"**:
   - O script extrairá os IDs e gerará links completos no formato `https://go.imvu.com/shop/product-{ID}`.

3. **Copie os Links**:
   - Clique no botão "Copiar Links" para copiar todos os links gerados de uma vez.

4. **Verifique os Logs**:
   - Todas as ações são registradas na seção "Logs" para referência.

---

## Estrutura do Projeto
meu-projeto-imvu/
│
├── index.html # Arquivo principal HTML
├── style.css # Arquivo de estilos CSS
├── script.js # Arquivo de lógica JavaScript
└── README.md # Documentação do projeto


---

## Como Executar Localmente

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/souandresouza/meu-projeto-imvu.git

2. **Abra o projeto**:
   cd meu-projeto-imvu

## Tecnologias utilizadas
HTML: Estrutura da página.

CSS: Estilização da interface.

JavaScript: Lógica para processamento de links e geração de URLs.

## Contribuição

**Contribuições são bem-vindas! Siga os passos abaixo:**

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

## Licença
Este projeto está licenciado sob a MIT License.

## Contato
Se tiver dúvidas ou sugestões, entre em contato:

Nome: André Souza

Email: contatosouzaandre@gmail.com

GitHub: souandresouza
