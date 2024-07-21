// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cartasContainer = document.getElementById("cartas-container");

    // Função para criar uma carta
    function criarCarta(carta) {
        const cartaElemento = document.createElement("div");
        cartaElemento.classList.add("carta");

        const nome = document.createElement("h2");
        nome.textContent = carta.nome;

        const potencia = document.createElement("p");
        potencia.textContent = `Potência: ${carta.potencia} cv`;

        const velocidadeMaxima = document.createElement("p");
        velocidadeMaxima.textContent = `Velocidade Máxima: ${carta.velocidade_maxima} km/h`;

        const preco = document.createElement("p");
        preco.textContent = `Preço: R$ ${carta.preco.toLocaleString("pt-BR")}`;

        cartaElemento.appendChild(nome);
        cartaElemento.appendChild(potencia);
        cartaElemento.appendChild(velocidadeMaxima);
        cartaElemento.appendChild(preco);

        return cartaElemento;
    }

    // Função para carregar as cartas do JSON
    function carregarCartas() {
        fetch('cartas.json')
            .then(response => response.json())
            .then(cartas => {
                cartas.forEach(carta => {
                    const cartaElemento = criarCarta(carta);
                    cartasContainer.appendChild(cartaElemento);
                });
            })
            .catch(error => console.error('Erro ao carregar as cartas:', error));
    }

    carregarCartas();
});
