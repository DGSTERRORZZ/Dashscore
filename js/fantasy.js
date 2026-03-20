// ==================== DADOS DOS JOGADORES BRASILEIRÃO 2026 (ATUALIZADO EM 20/03/2026) ====================

const playersData = [
    // ==================== FLAMENGO ====================
    { name: "Pedro", nationality: "Brasil", club: "Flamengo", position: "ST", value: "€17M", flag: "🇧🇷", number: 9 },
    { name: "Lucas Paquetá", nationality: "Brasil", club: "Flamengo", position: "CAM", value: "€35M", flag: "🇧🇷", number: 10 },
    { name: "Arrascaeta", nationality: "Uruguai", club: "Flamengo", position: "CAM", value: "€15M", flag: "🇺🇾", number: 14 },
    { name: "Gerson", nationality: "Brasil", club: "Flamengo", position: "CM", value: "€22M", flag: "🇧🇷", number: 8 },
    { name: "Samuel Lino", nationality: "Brasil", club: "Flamengo", position: "LW", value: "€17M", flag: "🇧🇷", number: 16 },
    { name: "Gonzalo Plata", nationality: "Equador", club: "Flamengo", position: "RW", value: "€8M", flag: "🇪🇨", number: 19 },
    { name: "Léo Ortiz", nationality: "Brasil", club: "Flamengo", position: "CB", value: "€14M", flag: "🇧🇷", number: 3 },
    { name: "Léo Pereira", nationality: "Brasil", club: "Flamengo", position: "CB", value: "€10M", flag: "🇧🇷", number: 4 },
    { name: "Vitão", nationality: "Brasil", club: "Flamengo", position: "CB", value: "€11M", flag: "🇧🇷", number: 44 },
    { name: "Danilo", nationality: "Brasil", club: "Flamengo", position: "CB", value: "€2.5M", flag: "🇧🇷", number: 13 },
    { name: "Ayrton Lucas", nationality: "Brasil", club: "Flamengo", position: "LB", value: "€4M", flag: "🇧🇷", number: 6 },
    { name: "Alex Sandro", nationality: "Brasil", club: "Flamengo", position: "LB", value: "€1.5M", flag: "🇧🇷", number: 26 },
    { name: "Emerson Royal", nationality: "Brasil", club: "Flamengo", position: "RB", value: "€7M", flag: "🇧🇷", number: 22 },
    { name: "Erick Pulgar", nationality: "Chile", club: "Flamengo", position: "CDM", value: "€5M", flag: "🇨🇱", number: 5 },
    { name: "Jorginho", nationality: "Itália", club: "Flamengo", position: "CDM", value: "€5M", flag: "🇮🇹", number: 21 },
    { name: "Evertton Araújo", nationality: "Brasil", club: "Flamengo", position: "CDM", value: "€5M", flag: "🇧🇷", number: 52 },
    { name: "Nicolás de la Cruz", nationality: "Uruguai", club: "Flamengo", position: "CM", value: "€9M", flag: "🇺🇾", number: 18 },
    { name: "Luiz Araújo", nationality: "Brasil", club: "Flamengo", position: "RW", value: "€7M", flag: "🇧🇷", number: 7 },
    { name: "Everton Cebolinha", nationality: "Brasil", club: "Flamengo", position: "LW", value: "€7M", flag: "🇧🇷", number: 11 },
    { name: "Bruno Henrique", nationality: "Brasil", club: "Flamengo", position: "LW", value: "€800k", flag: "🇧🇷", number: 27 },
    { name: "Agustín Rossi", nationality: "Argentina", club: "Flamengo", position: "GK", value: "€10M", flag: "🇦🇷", number: 1 },

    // ==================== PALMEIRAS ====================
    { name: "Vitor Roque", nationality: "Brasil", club: "Palmeiras", position: "ST", value: "€45M", flag: "🇧🇷", number: 9 },
    { name: "Flaco López", nationality: "Argentina", club: "Palmeiras", position: "ST", value: "€12M", flag: "🇦🇷", number: 42 },
    { name: "Raphael Veiga", nationality: "Brasil", club: "Palmeiras", position: "CAM", value: "€15M", flag: "🇧🇷", number: 23 },
    { name: "Mauricio", nationality: "Brasil", club: "Palmeiras", position: "CAM", value: "€10M", flag: "🇧🇷", number: 18 },
    { name: "Andreas Pereira", nationality: "Brasil", club: "Palmeiras", position: "CM", value: "€18M", flag: "🇧🇷", number: 10 },
    { name: "Marlon Freitas", nationality: "Brasil", club: "Palmeiras", position: "CM", value: "€9M", flag: "🇧🇷", number: 8 },
    { name: "Richard Ríos", nationality: "Colômbia", club: "Palmeiras", position: "CM", value: "€12M", flag: "🇨🇴", number: 27 },
    { name: "Gustavo Gómez", nationality: "Paraguai", club: "Palmeiras", position: "CB", value: "€8M", flag: "🇵🇾", number: 15 },
    { name: "Murilo", nationality: "Brasil", club: "Palmeiras", position: "CB", value: "€7M", flag: "🇧🇷", number: 26 },
    { name: "Fuchs", nationality: "Brasil", club: "Palmeiras", position: "CB", value: "€5M", flag: "🇧🇷", number: 4 },
    { name: "Piquerez", nationality: "Uruguai", club: "Palmeiras", position: "LB", value: "€12M", flag: "🇺🇾", number: 22 },
    { name: "Khellven", nationality: "Brasil", club: "Palmeiras", position: "RB", value: "€6M", flag: "🇧🇷", number: 2 },
    { name: "Carlos Miguel", nationality: "Brasil", club: "Palmeiras", position: "GK", value: "€8M", flag: "🇧🇷", number: 1 },

    // ==================== CORINTHIANS ====================
    { name: "Yuri Alberto", nationality: "Brasil", club: "Corinthians", position: "ST", value: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Memphis Depay", nationality: "Holanda", club: "Corinthians", position: "LW", value: "€12M", flag: "🇳🇱", number: 94 },
    { name: "Vitinho", nationality: "Brasil", club: "Corinthians", position: "RW", value: "€6M", flag: "🇧🇷", number: 11 },
    { name: "Rodrigo Garro", nationality: "Argentina", club: "Corinthians", position: "CAM", value: "€14M", flag: "🇦🇷", number: 10 },
    { name: "Matheus Pereira", nationality: "Brasil", club: "Corinthians", position: "CAM", value: "€12M", flag: "🇧🇷", number: 7 },
    { name: "André Carrillo", nationality: "Peru", club: "Corinthians", position: "CM", value: "€4M", flag: "🇵🇪", number: 18 },
    { name: "Raniele", nationality: "Brasil", club: "Corinthians", position: "CDM", value: "€6M", flag: "🇧🇷", number: 14 },
    { name: "Breno Bidon", nationality: "Brasil", club: "Corinthians", position: "CM", value: "€5M", flag: "🇧🇷", number: 27 },
    { name: "André Ramalho", nationality: "Brasil", club: "Corinthians", position: "CB", value: "€4M", flag: "🇧🇷", number: 5 },
    { name: "Gustavo Henrique", nationality: "Brasil", club: "Corinthians", position: "CB", value: "€5M", flag: "🇧🇷", number: 3 },
    { name: "Matheuzinho", nationality: "Brasil", club: "Corinthians", position: "RB", value: "€7M", flag: "🇧🇷", number: 23 },
    { name: "Matheus Bidu", nationality: "Brasil", club: "Corinthians", position: "LB", value: "€4M", flag: "🇧🇷", number: 21 },
    { name: "Hugo Souza", nationality: "Brasil", club: "Corinthians", position: "GK", value: "€6M", flag: "🇧🇷", number: 1 },

    // ==================== SÃO PAULO ====================
    { name: "Calleri", nationality: "Argentina", club: "São Paulo", position: "ST", value: "€12M", flag: "🇦🇷", number: 9 },
    { name: "Lucas Moura", nationality: "Brasil", club: "São Paulo", position: "RW", value: "€15M", flag: "🇧🇷", number: 7 },
    { name: "Luciano", nationality: "Brasil", club: "São Paulo", position: "ST", value: "€8M", flag: "🇧🇷", number: 10 },
    { name: "Ferreira", nationality: "Brasil", club: "São Paulo", position: "LW", value: "€7M", flag: "🇧🇷", number: 47 },
    { name: "Carlos Vinicius", nationality: "Brasil", club: "São Paulo", position: "ST", value: "€8M", flag: "🇧🇷", number: 99 },
    { name: "Oscar", nationality: "Brasil", club: "São Paulo", position: "CAM", value: "€8M", flag: "🇧🇷", number: 8 },
    { name: "Marcos Antônio", nationality: "Brasil", club: "São Paulo", position: "CM", value: "€7M", flag: "🇧🇷", number: 25 },
    { name: "Danielzinho", nationality: "Brasil", club: "São Paulo", position: "CM", value: "€5M", flag: "🇧🇷", number: 32 },
    { name: "Bobadilla", nationality: "Paraguai", club: "São Paulo", position: "CM", value: "€6M", flag: "🇵🇾", number: 21 },
    { name: "Arboleda", nationality: "Equador", club: "São Paulo", position: "CB", value: "€5M", flag: "🇪🇨", number: 5 },
    { name: "Alan Franco", nationality: "Argentina", club: "São Paulo", position: "CB", value: "€6M", flag: "🇦🇷", number: 28 },
    { name: "Wendell", nationality: "Brasil", club: "São Paulo", position: "LB", value: "€5M", flag: "🇧🇷", number: 6 },
    { name: "Maik", nationality: "Brasil", club: "São Paulo", position: "RB", value: "€3M", flag: "🇧🇷", number: 2 },
    { name: "Rafael", nationality: "Brasil", club: "São Paulo", position: "GK", value: "€3M", flag: "🇧🇷", number: 23 },

    // ==================== BOTAFOGO ====================
    { name: "Arthur Cabral", nationality: "Brasil", club: "Botafogo", position: "ST", value: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Artur", nationality: "Brasil", club: "Botafogo", position: "RW", value: "€10M", flag: "🇧🇷", number: 7 },
    { name: "Vitinho", nationality: "Brasil", club: "Botafogo", position: "LW", value: "€8M", flag: "🇧🇷", number: 11 },
    { name: "Santi Rodríguez", nationality: "Argentina", club: "Botafogo", position: "CAM", value: "€7M", flag: "🇦🇷", number: 10 },
    { name: "Danilo Barbosa", nationality: "Brasil", club: "Botafogo", position: "CM", value: "€5M", flag: "🇧🇷", number: 5 },
    { name: "Newton", nationality: "Brasil", club: "Botafogo", position: "CM", value: "€6M", flag: "🇧🇷", number: 8 },
    { name: "Barboza", nationality: "Argentina", club: "Botafogo", position: "CB", value: "€6M", flag: "🇦🇷", number: 4 },
    { name: "Alex Telles", nationality: "Brasil", club: "Botafogo", position: "LB", value: "€7M", flag: "🇧🇷", number: 13 },
    { name: "Vitinho", nationality: "Brasil", club: "Botafogo", position: "RB", value: "€4M", flag: "🇧🇷", number: 2 },
    { name: "Léo Linck", nationality: "Brasil", club: "Botafogo", position: "GK", value: "€3M", flag: "🇧🇷", number: 1 },

    // ==================== ATLÉTICO-MG ====================
    { name: "Hulk", nationality: "Brasil", club: "Atlético-MG", position: "ST", value: "€6M", flag: "🇧🇷", number: 7 },
    { name: "Dudu", nationality: "Brasil", club: "Atlético-MG", position: "LW", value: "€8M", flag: "🇧🇷", number: 10 },
    { name: "Paulinho", nationality: "Brasil", club: "Atlético-MG", position: "RW", value: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Bernard", nationality: "Brasil", club: "Atlético-MG", position: "LW", value: "€5M", flag: "🇧🇷", number: 11 },
    { name: "Alan Franco", nationality: "Argentina", club: "Atlético-MG", position: "CM", value: "€6M", flag: "🇦🇷", number: 5 },
    { name: "Maycon", nationality: "Brasil", club: "Atlético-MG", position: "CM", value: "€5M", flag: "🇧🇷", number: 8 },
    { name: "Renan Lodi", nationality: "Brasil", club: "Atlético-MG", position: "LB", value: "€8M", flag: "🇧🇷", number: 44 },
    { name: "Alonso", nationality: "Paraguai", club: "Atlético-MG", position: "CB", value: "€5M", flag: "🇵🇾", number: 4 },
    { name: "Ruan Tressoldi", nationality: "Brasil", club: "Atlético-MG", position: "CB", value: "€6M", flag: "🇧🇷", number: 3 },
    { name: "Everson", nationality: "Brasil", club: "Atlético-MG", position: "GK", value: "€4M", flag: "🇧🇷", number: 22 },

    // ==================== INTERNACIONAL ====================
    { name: "Borré", nationality: "Colômbia", club: "Internacional", position: "ST", value: "€7M", flag: "🇨🇴", number: 19 },
    { name: "Enner Valencia", nationality: "Equador", club: "Internacional", position: "ST", value: "€8M", flag: "🇪🇨", number: 13 },
    { name: "Alan Patrick", nationality: "Brasil", club: "Internacional", position: "CAM", value: "€9M", flag: "🇧🇷", number: 10 },
    { name: "Wanderson", nationality: "Brasil", club: "Internacional", position: "LW", value: "€7M", flag: "🇧🇷", number: 11 },
    { name: "Paulinho", nationality: "Brasil", club: "Internacional", position: "CM", value: "€6M", flag: "🇧🇷", number: 8 },
    { name: "Bernabei", nationality: "Argentina", club: "Internacional", position: "LB", value: "€7M", flag: "🇦🇷", number: 6 },
    { name: "Mercado", nationality: "Argentina", club: "Internacional", position: "CB", value: "€3M", flag: "🇦🇷", number: 25 },
    { name: "Victor Gabriel", nationality: "Brasil", club: "Internacional", position: "CB", value: "€5M", flag: "🇧🇷", number: 44 },
    { name: "Rochet", nationality: "Uruguai", club: "Internacional", position: "GK", value: "€6M", flag: "🇺🇾", number: 1 },

    // ==================== GRÊMIO ====================
    { name: "Carlos Vinicius", nationality: "Brasil", club: "Grêmio", position: "ST", value: "€8M", flag: "🇧🇷", number: 9 },
    { name: "Cristaldo", nationality: "Argentina", club: "Grêmio", position: "CAM", value: "€7M", flag: "🇦🇷", number: 10 },
    { name: "Tetê", nationality: "Brasil", club: "Grêmio", position: "RW", value: "€9M", flag: "🇧🇷", number: 7 },
    { name: "Amuzu", nationality: "Bélgica", club: "Grêmio", position: "LW", value: "€8M", flag: "🇧🇪", number: 11 },
    { name: "Arthur", nationality: "Brasil", club: "Grêmio", position: "CM", value: "€7M", flag: "🇧🇷", number: 8 },
    { name: "Wagner Leonardo", nationality: "Brasil", club: "Grêmio", position: "CB", value: "€5M", flag: "🇧🇷", number: 4 },
    { name: "Marlon", nationality: "Brasil", club: "Grêmio", position: "LB", value: "€5M", flag: "🇧🇷", number: 6 },
    { name: "Weverton", nationality: "Brasil", club: "Grêmio", position: "GK", value: "€5M", flag: "🇧🇷", number: 12 },

    // ==================== BAHIA ====================
    { name: "Willian José", nationality: "Brasil", club: "Bahia", position: "ST", value: "€7M", flag: "🇧🇷", number: 9 },
    { name: "Erick Pulga", nationality: "Brasil", club: "Bahia", position: "RW", value: "€5M", flag: "🇧🇷", number: 11 },
    { name: "Ademir", nationality: "Brasil", club: "Bahia", position: "LW", value: "€5M", flag: "🇧🇷", number: 7 },
    { name: "Everton Ribeiro", nationality: "Brasil", club: "Bahia", position: "CAM", value: "€3M", flag: "🇧🇷", number: 10 },
    { name: "Jean Lucas", nationality: "Brasil", club: "Bahia", position: "CM", value: "€6M", flag: "🇧🇷", number: 8 },
    { name: "Acevedo", nationality: "Uruguai", club: "Bahia", position: "CDM", value: "€5M", flag: "🇺🇾", number: 5 },
    { name: "Luciano Juba", nationality: "Brasil", club: "Bahia", position: "LB", value: "€4M", flag: "🇧🇷", number: 16 },
    { name: "Ronaldo", nationality: "Brasil", club: "Bahia", position: "GK", value: "€3M", flag: "🇧🇷", number: 1 },

    // ==================== VASCO ====================
    { name: "GB", nationality: "Brasil", club: "Vasco", position: "ST", value: "€4M", flag: "🇧🇷", number: 9 },
    { name: "David", nationality: "Brasil", club: "Vasco", position: "LW", value: "€3M", flag: "🇧🇷", number: 16 },
    { name: "Philippe Coutinho", nationality: "Brasil", club: "Vasco", position: "CAM", value: "€8M", flag: "🇧🇷", number: 11 },
    { name: "Thiago Mendes", nationality: "Brasil", club: "Vasco", position: "CDM", value: "€4M", flag: "🇧🇷", number: 5 },
    { name: "Cuesta", nationality: "Colômbia", club: "Vasco", position: "CB", value: "€4M", flag: "🇨🇴", number: 4 },
    { name: "Robert Renan", nationality: "Brasil", club: "Vasco", position: "CB", value: "€5M", flag: "🇧🇷", number: 3 },
    { name: "Piton", nationality: "Brasil", club: "Vasco", position: "LB", value: "€4M", flag: "🇧🇷", number: 6 },
    { name: "Léo Jardim", nationality: "Brasil", club: "Vasco", position: "GK", value: "€5M", flag: "🇧🇷", number: 1 },

    // ==================== CRUZEIRO ====================
    { name: "Kaio Jorge", nationality: "Brasil", club: "Cruzeiro", position: "ST", value: "€8M", flag: "🇧🇷", number: 9 },
    { name: "Wanderson", nationality: "Brasil", club: "Cruzeiro", position: "LW", value: "€6M", flag: "🇧🇷", number: 11 },
    { name: "Matheus Pereira", nationality: "Brasil", club: "Cruzeiro", position: "CAM", value: "€12M", flag: "🇧🇷", number: 10 },
    { name: "Lucas Romero", nationality: "Argentina", club: "Cruzeiro", position: "CDM", value: "€5M", flag: "🇦🇷", number: 29 },
    { name: "Fabrício Bruno", nationality: "Brasil", club: "Cruzeiro", position: "CB", value: "€8M", flag: "🇧🇷", number: 4 },
    { name: "William", nationality: "Brasil", club: "Cruzeiro", position: "RB", value: "€4M", flag: "🇧🇷", number: 12 },
    { name: "Cássio", nationality: "Brasil", club: "Cruzeiro", position: "GK", value: "€3M", flag: "🇧🇷", number: 1 },

    // ==================== SANTOS ====================
    { name: "Lautaro Díaz", nationality: "Argentina", club: "Santos", position: "ST", value: "€6M", flag: "🇦🇷", number: 9 },
    { name: "Rollheiser", nationality: "Argentina", club: "Santos", position: "RW", value: "€7M", flag: "🇦🇷", number: 7 },
    { name: "Barreal", nationality: "Argentina", club: "Santos", position: "LW", value: "€6M", flag: "🇦🇷", number: 11 },
    { name: "Gabriel Menino", nationality: "Brasil", club: "Santos", position: "CM", value: "€5M", flag: "🇧🇷", number: 8 },
    { name: "Zé Rafael", nationality: "Brasil", club: "Santos", position: "CM", value: "€6M", flag: "🇧🇷", number: 5 },
    { name: "Zé Ivaldo", nationality: "Brasil", club: "Santos", position: "CB", value: "€4M", flag: "🇧🇷", number: 3 },
    { name: "Gabriel Brazão", nationality: "Brasil", club: "Santos", position: "GK", value: "€4M", flag: "🇧🇷", number: 1 },

    // ==================== NOVOS TIMES SÉRIE A 2026 ====================
    { name: "João Pedro", nationality: "Brasil", club: "Remo", position: "ST", value: "€2M", flag: "🇧🇷", number: 9 },
    { name: "Alef Manga", nationality: "Brasil", club: "Remo", position: "RW", value: "€1.5M", flag: "🇧🇷", number: 11 },
    { name: "Patrick de Paula", nationality: "Brasil", club: "Remo", position: "CM", value: "€2M", flag: "🇧🇷", number: 8 },
    { name: "Marcinho", nationality: "Brasil", club: "Chapecoense", position: "ST", value: "€1.5M", flag: "🇧🇷", number: 9 },
    { name: "Erick", nationality: "Brasil", club: "Vitória", position: "ST", value: "€2M", flag: "🇧🇷", number: 9 },
    { name: "Alesson", nationality: "Brasil", club: "Mirassol", position: "ST", value: "€1.2M", flag: "🇧🇷", number: 9 }
];

// Variáveis globais
let currentSlot = null;
let currentLineup = Array(11).fill(null);
let savedLineups = JSON.parse(localStorage.getItem('fantasyLineups') || '[]');
let currentFilterTeam = "";

// Função para renderizar lista de jogadores no modal
function renderPlayersList(filter = "", teamFilter = "") {
    const container = document.getElementById("playersListContainer");
    if (!container) return;

    let filtered = playersData;
    
    // Filtro por texto (nome, clube, nacionalidade)
    if (filter) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(filter.toLowerCase()) ||
            p.club.toLowerCase().includes(filter.toLowerCase()) ||
            p.nationality.toLowerCase().includes(filter.toLowerCase())
        );
    }
    
    // Filtro por time (da pesquisa lateral)
    if (teamFilter) {
        filtered = filtered.filter(p => p.club === teamFilter);
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">Nenhum jogador encontrado 😢</div>';
        return;
    }

    container.innerHTML = filtered.map(player => `
        <div class="player-item" data-player='${JSON.stringify(player)}'>
            <div class="player-info">
                <div class="player-name">
                    ${player.flag || "⚽"} ${player.name}
                    <span class="position-badge">${player.position}</span>
                </div>
                <div class="player-details">
                    <span>🏠 ${player.club}</span>
                    <span>🌍 ${player.nationality}</span>
                    <span>💰 ${player.value}</span>
                </div>
            </div>
            <div class="player-club">${player.club}</div>
        </div>
    `).join("");

    document.querySelectorAll(".player-item").forEach(item => {
        item.addEventListener("click", () => {
            const player = JSON.parse(item.dataset.player);
            addPlayerToSlot(player);
        });
    });
}

// Adicionar jogador ao slot selecionado
function addPlayerToSlot(player) {
    if (!currentSlot) return;

    const slotElement = currentSlot;
    const playerCard = slotElement.querySelector(".player-card");
    const allSlots = document.querySelectorAll(".player-slot");
    const index = Array.from(allSlots).indexOf(slotElement);

    if (index !== -1) {
        currentLineup[index] = player;
    }

    playerCard.classList.remove("empty");
    playerCard.classList.add("filled");
    playerCard.innerHTML = `
        <div class="player-icon">${player.flag || "👤"}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-meta">${player.club}</div>
        <div class="player-meta">${player.nationality} • ${player.value}</div>
    `;

    // Fechar modal
    const modal = document.getElementById("playerModal");
    if (modal) modal.classList.remove("active");
    currentSlot = null;
}

// Limpar escalação
function clearLineup() {
    currentLineup = Array(11).fill(null);
    const allSlots = document.querySelectorAll(".player-slot");
    allSlots.forEach((slot) => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `
            <div class="player-icon">👤</div>
            <div class="player-name">Vago</div>
            <div class="player-meta">Clique no +</div>
            <div class="player-meta">para adicionar</div>
        `;
    });
}

// Salvar escalação
function saveLineup() {
    const nameInput = document.getElementById("lineupName");
    const name = nameInput ? nameInput.value.trim() : "";

    if (!name) {
        alert("Por favor, insira um nome para a escalação!");
        return;
    }

    const hasPlayers = currentLineup.some(p => p !== null);
    if (!hasPlayers) {
        alert("Adicione pelo menos um jogador antes de salvar!");
        return;
    }

    const lineup = {
        id: Date.now(),
        name: name,
        players: [...currentLineup],
        date: new Date().toLocaleDateString()
    };

    savedLineups.unshift(lineup);
    if (savedLineups.length > 5) savedLineups.pop();

    localStorage.setItem('fantasyLineups', JSON.stringify(savedLineups));
    renderSavedLineups();
    if (nameInput) nameInput.value = "";
    alert(`Escalação "${name}" salva com sucesso!`);
}

// Renderizar escalações salvas
function renderSavedLineups() {
    const container = document.getElementById("savedLineups");
    if (!container) return;

    if (savedLineups.length === 0) {
        container.innerHTML = '<p style="font-size: 13px; color: #e0e0e0;">Nenhuma escalação salva ainda.</p>';
        return;
    }

    container.innerHTML = savedLineups.map(lineup => `
        <div class="saved-lineup-item" data-id="${lineup.id}">
            <strong>${lineup.name}</strong><br>
            <small>${lineup.date}</small>
            <span style="float: right; color: #ffd966;">↻ carregar</span>
        </div>
    `).join("");

    document.querySelectorAll(".saved-lineup-item").forEach(item => {
        item.addEventListener("click", () => {
            const id = parseInt(item.dataset.id);
            loadLineup(id);
        });
    });
}

// Carregar escalação salva
function loadLineup(id) {
    const lineup = savedLineups.find(l => l.id === id);
    if (!lineup) return;

    currentLineup = [...lineup.players];
    const allSlots = document.querySelectorAll(".player-slot");

    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");

        if (player) {
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">${player.flag || "👤"}</div>
                <div class="player-name">${player.name}</div>
                <div class="player-meta">${player.club}</div>
                <div class="player-meta">${player.nationality} • ${player.value}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `
                <div class="player-icon">👤</div>
                <div class="player-name">Vago</div>
                <div class="player-meta">Clique no +</div>
                <div class="player-meta">para adicionar</div>
            `;
        }
    });

    const nameInput = document.getElementById("lineupName");
    if (nameInput) nameInput.value = lineup.name;
    alert(`Escalação "${lineup.name}" carregada!`);
}

// Filtrar por time e abrir modal
function filterByTeam(team) {
    currentFilterTeam = team;
    const searchInput = document.getElementById("playerSearchInput");
    const globalSearch = document.getElementById("globalSearch");
    
    // Atualizar o placeholder do modal para mostrar o time filtrado
    if (searchInput) {
        searchInput.placeholder = `🔍 Buscar em ${team}...`;
        searchInput.value = "";
    }
    
    // Abrir modal com os jogadores do time
    renderPlayersList("", team);
    const modal = document.getElementById("playerModal");
    if (modal) modal.classList.add("active");
}

// Configurar eventos
function setupEventListeners() {
    // Botões + (abrir modal para escolher jogador)
    document.querySelectorAll(".plus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const slot = btn.closest(".player-slot");
            if (slot) {
                currentSlot = slot;
                currentFilterTeam = "";
                const searchInput = document.getElementById("playerSearchInput");
                if (searchInput) {
                    searchInput.placeholder = "🔍 Buscar jogador por nome, clube ou nacionalidade...";
                    searchInput.value = "";
                }
                renderPlayersList();
                const modal = document.getElementById("playerModal");
                if (modal) modal.classList.add("active");
            }
        });
    });

    // Fechar modal
    const closeBtn = document.getElementById("closeModalBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            const modal = document.getElementById("playerModal");
            if (modal) modal.classList.remove("active");
            currentSlot = null;
            currentFilterTeam = "";
        });
    }

    // Clicar fora do modal
    const modal = document.getElementById("playerModal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                currentSlot = null;
                currentFilterTeam = "";
            }
        });
    }

    // Busca no modal
    const searchInput = document.getElementById("playerSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderPlayersList(e.target.value, currentFilterTeam);
        });
    }

    // Busca global na lateral (pesquisa por jogadores)
    const globalSearch = document.getElementById("globalSearch");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value;
            if (searchTerm.length > 0) {
                currentFilterTeam = "";
                renderPlayersList(searchTerm, "");
                const modal = document.getElementById("playerModal");
                if (modal) modal.classList.add("active");
            }
        });
    }

    // Times populares na lateral - FILTRO POR TIME
    document.querySelectorAll(".team-row").forEach(team => {
        team.addEventListener("click", () => {
            const teamName = team.querySelector("span:last-child").textContent;
            filterByTeam(teamName);
        });
    });

    // Limpar escalação
    const clearBtn = document.getElementById("clearLineupBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearLineup);
    }

    // Salvar escalação
    const saveBtn = document.getElementById("saveLineupBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", saveLineup);
    }
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderSavedLineups();
    setupEventListeners();
});