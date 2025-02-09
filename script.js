// ========== CÓDIGO DO MENU ==========
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
});

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
    },
    {
        name: "Lápis-Lazúli",
        color: "#26619c",
        cultureMeanings: {
            "Egípcia": "Símbolo da realeza e sabedoria",
            "Persa": "Pedra da verdade",
            "Babilônica": "Usada para contato com os deuses",
            "Budista": "Favorece a iluminação"
        },
        chakra: "Terceiro Olho",
        element: "Ar",
        keywords: ["Sabedoria", "Intuição", "Autoconhecimento"]
    },
    {
        name: "Citrino",
        color: "#ffcc33",
        cultureMeanings: {
            "Grega": "Pedra do Sol",
            "Chinesa": "Atrai riqueza e prosperidade",
            "Indiana": "Pedra da vitalidade",
            "Romana": "Energizante e protetora"
        },
        chakra: "Plexo Solar",
        element: "Fogo",
        keywords: ["Alegria", "Prosperidade", "Energia"]
    },
    {
        name: "Obsidiana",
        color: "#1c1c1c",
        cultureMeanings: {
            "Asteca": "Espelho do futuro",
            "Maia": "Usada em rituais xamânicos",
            "Japonesa": "Pedra da verdade",
            "Indígena": "Protetora contra espíritos negativos"
        },
        chakra: "Raiz",
        element: "Fogo",
        keywords: ["Proteção", "Autoconhecimento", "Transformação"]
    },
    {
        name: "Esmeralda",
        color: "#50c878",
        cultureMeanings: {
            "Egípcia": "Símbolo da fertilidade",
            "Romana": "Pedra da juventude eterna",
            "Inca": "Pedra sagrada da sabedoria",
            "Indiana": "Cura emocional e equilíbrio"
        },
        chakra: "Cardíaco",
        element: "Terra",
        keywords: ["Renovação", "Esperança", "Harmonia"]
    },
    {
        name: "Rubelita",
        color: "#e0115f",
        cultureMeanings: {
            "Chinesa": "Atrai amor verdadeiro",
            "Hindu": "Pedra do coração",
            "Tibetana": "Usada em meditações para ativar o chakra cardíaco",
            "Romana": "Símbolo da paixão intensa"
        },
        chakra: "Cardíaco",
        element: "Fogo",
        keywords: ["Amor", "Paixão", "Energia"]
    },
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
        name: "Granada",
        color: "#8B0000",
        cultureMeanings: {
            "Romana": "Símbolo de lealdade",
            "Persa": "Pedra da paixão e coragem",
            "Indígena": "Amuleto de proteção",
            "Egípcia": "Associada ao renascimento"
        },
        chakra: "Raiz",
        element: "Fogo",
        keywords: ["Força", "Coragem", "Proteção"]
    },
    {
        name: "Amazonita",
        color: "#7FFFD4",
        cultureMeanings: {
            "Egípcia": "Pedra da verdade e coragem",
            "Indígena": "Equilíbrio e harmonia",
            "Grega": "Conexão com a natureza",
            "Romana": "Amuleto da boa sorte"
        },
        chakra: "Garganta",
        element: "Água",
        keywords: ["Equilíbrio", "Serenidade", "Expressão"]
    },
    {
        name: "Pirita",
        color: "#B8860B",
        cultureMeanings: {
            "Asteca": "Pedra do dinheiro e abundância",
            "Chinesa": "Fortuna e prosperidade",
            "Maia": "Proteção contra energias negativas",
            "Egípcia": "Símbolo de brilho e poder"
        },
        chakra: "Plexo Solar",
        element: "Terra",
        keywords: ["Riqueza", "Sucesso", "Proteção"]
    },
    {
        name: "Zircão",
        color: "#F4A460",
        cultureMeanings: {
            "Indiana": "Pedra da sabedoria",
            "Chinesa": "Atração da boa sorte",
            "Egípcia": "Símbolo da realeza",
            "Persa": "Proteção contra pesadelos"
        },
        chakra: "Terceiro Olho",
        element: "Fogo",
        keywords: ["Sabedoria", "Proteção", "Iluminação"]
    },
    {
        name: "Topázio",
        color: "#FFD700",
        cultureMeanings: {
            "Grega": "Pedra da amizade",
            "Romana": "Força e vitalidade",
            "Indiana": "Conexão espiritual",
            "Chinesa": "Atrai sucesso e felicidade"
        },
        chakra: "Plexo Solar",
        element: "Fogo",
        keywords: ["Amizade", "Vitalidade", "Prosperidade"]
    },
    {
        name: "Turmalina Negra",
        color: "#000000",
        cultureMeanings: {
            "Africana": "Escudo contra energias ruins",
            "Indígena": "Amuleto de proteção espiritual",
            "Budista": "Purificação energética",
            "Egípcia": "Bloqueio de influências negativas"
        },
        chakra: "Raiz",
        element: "Terra",
        keywords: ["Proteção", "Purificação", "Energia"]
    },
    {
        name: "Opala",
        color: "#F8C8DC",
        cultureMeanings: {
            "Australiana": "Pedra da criatividade",
            "Romana": "Símbolo da esperança",
            "Grega": "Aumenta a intuição",
            "Chinesa": "Pedra da transformação"
        },
        chakra: "Coronário",
        element: "Água",
        keywords: ["Criatividade", "Intuição", "Esperança"]
    }
    // Adicionar mais 90 pedras...
];

function populateStoneSelect() {
    const select = document.getElementById("stone-select");

    // Limpa as opções atuais, exceto a opção de pedra aleatória
    select.innerHTML = '<option value="random">Pedra Aleatória</option>';

    // Adiciona as pedras da constante `stones`
    stones.forEach(stone => {
        const option = document.createElement("option");
        option.value = stone.name;
        option.textContent = stone.name;
        select.appendChild(option);
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", populateStoneSelect);



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
