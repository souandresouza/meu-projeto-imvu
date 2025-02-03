// Função para capturar o ID do produto da URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Função para buscar as informações do produto (exemplo com dados estáticos)
function fetchProductDetails(productId) {
    // Aqui você pode substituir por uma requisição a uma API real
    const products = {
        "42974623": {
            name: "Vestido Elegante",
            image: "https://exemplo.com/imagem1.jpg",
            creator: "Designer A",
            description: "Um vestido elegante para ocasiões especiais."
        },
        "12345678": {
            name: "Tênis Esportivo",
            image: "https://exemplo.com/imagem2.jpg",
            creator: "Designer B",
            description: "Tênis confortável para atividades físicas."
        },
        // Adicione mais produtos conforme necessário
    };

    return products[productId] || null;
}

// Função para atualizar a página com as informações do produto
function updateProductPage(product) {
    if (product) {
        // Atualiza o conteúdo da página
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-creator').textContent = `Criado por: ${product.creator}`;

        // Atualiza os metadados Open Graph
        document.getElementById('og-title').content = product.name;
        document.getElementById('og-description').content = product.description;
        document.getElementById('og-image').content = product.image;
        document.getElementById('og-url').content = window.location.href;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Produto não encontrado.</p>";
    }
}

// Executa o processo
const productId = getProductIdFromUrl();
if (productId) {
    const product = fetchProductDetails(productId);
    updateProductPage(product);
} else {
    document.getElementById('product-details').innerHTML = "<p>ID do produto não fornecido.</p>";
}