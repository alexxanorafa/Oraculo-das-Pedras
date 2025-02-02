const stones = [
    {
        name: "Ametista",
        color: "#9966cc",
        cultureMeanings: {
            "Grega": "Proteção contra a embriaguez",
            "Egípcia": "Pedra da transição espiritual",
            "Budista": "Ajuda na meditação",
            "Celta": "Pedra dos sonhos proféticos"
        },
        chakra: "Coronário",
        element: "Ar",
        keywords: ["Proteção", "Espiritualidade", "Clareza"]
    },
    {
        name: "Quartzo Rosa",
        color: "#ff99cc",
        cultureMeanings: {
            "Grega": "Pedra de Afrodite",
            "Chinesa": "Harmonia conjugal",
            "Tibetana": "Cura emocional",
            "Indígena": "Pedra do amor universal"
        },
        chakra: "Cardíaco",
        element: "Água",
        keywords: ["Amor", "Cura", "Compaixão"]
    },
    {
        name: "Ônix",
        color: "#333333",
        cultureMeanings: {
            "Romana": "Proteção em batalha",
            "Indiana": "Absorve energias negativas",
            "Árabe": "Pedra da força interior",
            "Maia": "Guardiã dos portais"
        },
        chakra: "Raiz",
        element: "Terra",
        keywords: ["Proteção", "Força", "Grounded"]
    },
    {
        name: "Jade",
        color: "#00cc66",
        cultureMeanings: {
            "Chinesa": "Pedra da imortalidade",
            "Maori": "Símbolo de status",
            "Olmeca": "Conexão com a natureza",
            "Asteca": "Pedra da cura"
        },
        chakra: "Cardíaco",
        element: "Terra",
        keywords: ["Sabedoria", "Equilíbrio", "Prosperidade"]
    },
    {
        name: "Turquesa",
        color: "#40e0d0",
        cultureMeanings: {
            "Nativo Americano": "Pedra do céu",
            "Persa": "Protetora contra mortes não naturais",
            "Tibetana": "Pedra da sorte",
            "Egípcia": "Proteção em viagens"
        },
        chakra: "Garganta",
        element: "Água",
        keywords: ["Comunicação", "Proteção", "Cura"]
    }
];

function revealStone() {
    const selected = document.getElementById('stone-select').value;
    const stone = selected === 'random' 
        ? stones[Math.floor(Math.random() * stones.length)]
        : stones.find(s => s.name === selected);

    document.getElementById('stone-name').textContent = stone.name;
    const stoneVisual = document.getElementById('stone-color');
    stoneVisual.style.backgroundColor = stone.color;
    stoneVisual.textContent = stone.name;

    document.getElementById('chakra').textContent = stone.chakra;
    document.getElementById('element').textContent = stone.element;

    const culturesDiv = document.getElementById('cultures');
    culturesDiv.innerHTML = '';
    Object.entries(stone.cultureMeanings).forEach(([culture, meaning]) => {
        const div = document.createElement('div');
        div.className = 'culture-meaning';
        div.innerHTML = `<strong>${culture}:</strong> ${meaning}`;
        culturesDiv.appendChild(div);
    });

    const keywordsDiv = document.getElementById('keywords');
    keywordsDiv.innerHTML = '';
    stone.keywords.forEach(keyword => {
        const span = document.createElement('span');
        span.className = 'keyword';
        span.textContent = keyword;
        keywordsDiv.appendChild(span);
    });

    document.querySelector('.stone-card').style.display = 'grid';
}