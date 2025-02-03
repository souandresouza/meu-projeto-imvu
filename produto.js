// Função para capturar o ID do produto da URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Função para buscar as informações do produto (exemplo com dados estáticos)
function fetchProductDetails(productId) {
    // Simulação de dados
    const products = {
        "42974623": {
            name: "Vestido Elegante",
            image: "https://exemplo.com/imagem1.jpg",
            creator: "Designer A",
            price: "500 créditos",
            description: "Um vestido elegante para ocasiões especiais."
        },
        "12345678": {
            name: "Tênis Esportivo",
            image: "https://exemplo.com/imagem2.jpg",
            creator: "Designer B",
            price: "700 créditos",
            description: "Tênis confortável para atividades físicas."
        },
    };

    return products[productId] || null;
}

// Função para atualizar a página com as informações do produto
function updateProductPage(productId) {
    const product = fetchProductDetails(productId);
    
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-creator').textContent = `Criado por: ${product.creator}`;
        document.getElementById('product-price').textContent = `Preço: ${product.price}`;
        document.getElementById('product-id').textContent = `ID do Produto: ${productId}`;

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
    updateProductPage(productId);
} else {
    document.getElementById('product-details').innerHTML = "<p>ID do produto não fornecido.</p>";
}
