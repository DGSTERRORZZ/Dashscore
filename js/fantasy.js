// ==================== DADOS DOS JOGADORES BRASILEIRÃO 2026 ====================

const playersData = [
    // FLAMENGO
    { name: "Pedro", nationality: "Brasil", club: "Flamengo", position: "ST", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 9 },
    { name: "Lucas Paquetá", nationality: "Brasil", club: "Flamengo", position: "CAM", value: 35000000, valueStr: "€35M", flag: "🇧🇷", number: 10 },
    { name: "Arrascaeta", nationality: "Uruguai", club: "Flamengo", position: "CAM", value: 15000000, valueStr: "€15M", flag: "🇺🇾", number: 14 },
    { name: "Gerson", nationality: "Brasil", club: "Flamengo", position: "CM", value: 22000000, valueStr: "€22M", flag: "🇧🇷", number: 8 },
    { name: "Samuel Lino", nationality: "Brasil", club: "Flamengo", position: "LW", value: 17000000, valueStr: "€17M", flag: "🇧🇷", number: 16 },
    { name: "Gonzalo Plata", nationality: "Equador", club: "Flamengo", position: "RW", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 19 },
    { name: "Léo Ortiz", nationality: "Brasil", club: "Flamengo", position: "CB", value: 14000000, valueStr: "€14M", flag: "🇧🇷", number: 3 },
    { name: "Ayrton Lucas", nationality: "Brasil", club: "Flamengo", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6 },
    { name: "Emerson Royal", nationality: "Brasil", club: "Flamengo", position: "RB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 22 },
    { name: "Erick Pulgar", nationality: "Chile", club: "Flamengo", position: "CDM", value: 5000000, valueStr: "€5M", flag: "🇨🇱", number: 5 },
    { name: "Agustín Rossi", nationality: "Argentina", club: "Flamengo", position: "GK", value: 10000000, valueStr: "€10M", flag: "🇦🇷", number: 1 },
    { name: "Everton Cebolinha", nationality: "Brasil", club: "Flamengo", position: "LW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 11 },
    { name: "Luiz Araújo", nationality: "Brasil", club: "Flamengo", position: "RW", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 7 },
    { name: "Danilo", nationality: "Brasil", club: "Flamengo", position: "CB", value: 2500000, valueStr: "€2.5M", flag: "🇧🇷", number: 13 },

    // PALMEIRAS
    { name: "Vitor Roque", nationality: "Brasil", club: "Palmeiras", position: "ST", value: 45000000, valueStr: "€45M", flag: "🇧🇷", number: 9 },
    { name: "Flaco López", nationality: "Argentina", club: "Palmeiras", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 42 },
    { name: "Raphael Veiga", nationality: "Brasil", club: "Palmeiras", position: "CAM", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 23 },
    { name: "Andreas Pereira", nationality: "Brasil", club: "Palmeiras", position: "CM", value: 18000000, valueStr: "€18M", flag: "🇧🇷", number: 10 },
    { name: "Richard Ríos", nationality: "Colômbia", club: "Palmeiras", position: "CM", value: 12000000, valueStr: "€12M", flag: "🇨🇴", number: 27 },
    { name: "Gustavo Gómez", nationality: "Paraguai", club: "Palmeiras", position: "CB", value: 8000000, valueStr: "€8M", flag: "🇵🇾", number: 15 },
    { name: "Murilo", nationality: "Brasil", club: "Palmeiras", position: "CB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 26 },
    { name: "Piquerez", nationality: "Uruguai", club: "Palmeiras", position: "LB", value: 12000000, valueStr: "€12M", flag: "🇺🇾", number: 22 },
    { name: "Khellven", nationality: "Brasil", club: "Palmeiras", position: "RB", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 2 },
    { name: "Carlos Miguel", nationality: "Brasil", club: "Palmeiras", position: "GK", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 1 },

    // CORINTHIANS
    { name: "Yuri Alberto", nationality: "Brasil", club: "Corinthians", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Memphis Depay", nationality: "Holanda", club: "Corinthians", position: "LW", value: 12000000, valueStr: "€12M", flag: "🇳🇱", number: 94 },
    { name: "Rodrigo Garro", nationality: "Argentina", club: "Corinthians", position: "CAM", value: 14000000, valueStr: "€14M", flag: "🇦🇷", number: 10 },
    { name: "Matheus Pereira", nationality: "Brasil", club: "Corinthians", position: "CAM", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 7 },
    { name: "André Carrillo", nationality: "Peru", club: "Corinthians", position: "CM", value: 4000000, valueStr: "€4M", flag: "🇵🇪", number: 18 },
    { name: "Raniele", nationality: "Brasil", club: "Corinthians", position: "CDM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 14 },
    { name: "André Ramalho", nationality: "Brasil", club: "Corinthians", position: "CB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5 },
    { name: "Matheuzinho", nationality: "Brasil", club: "Corinthians", position: "RB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 23 },
    { name: "Hugo Souza", nationality: "Brasil", club: "Corinthians", position: "GK", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 1 },

    // SÃO PAULO
    { name: "Calleri", nationality: "Argentina", club: "São Paulo", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇦🇷", number: 9 },
    { name: "Lucas Moura", nationality: "Brasil", club: "São Paulo", position: "RW", value: 15000000, valueStr: "€15M", flag: "🇧🇷", number: 7 },
    { name: "Luciano", nationality: "Brasil", club: "São Paulo", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10 },
    { name: "Oscar", nationality: "Brasil", club: "São Paulo", position: "CAM", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 8 },
    { name: "Marcos Antônio", nationality: "Brasil", club: "São Paulo", position: "CM", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 25 },
    { name: "Arboleda", nationality: "Equador", club: "São Paulo", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇪🇨", number: 5 },
    { name: "Alan Franco", nationality: "Argentina", club: "São Paulo", position: "CB", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 28 },
    { name: "Wendell", nationality: "Brasil", club: "São Paulo", position: "LB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 6 },
    { name: "Rafael", nationality: "Brasil", club: "São Paulo", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 23 },

    // BOTAFOGO
    { name: "Arthur Cabral", nationality: "Brasil", club: "Botafogo", position: "ST", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Artur", nationality: "Brasil", club: "Botafogo", position: "RW", value: 10000000, valueStr: "€10M", flag: "🇧🇷", number: 7 },
    { name: "Vitinho", nationality: "Brasil", club: "Botafogo", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11 },
    { name: "Alex Telles", nationality: "Brasil", club: "Botafogo", position: "LB", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 13 },
    { name: "Barboza", nationality: "Argentina", club: "Botafogo", position: "CB", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 4 },
    { name: "Danilo Barbosa", nationality: "Brasil", club: "Botafogo", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 5 },
    { name: "Léo Linck", nationality: "Brasil", club: "Botafogo", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1 },

    // ATLÉTICO-MG
    { name: "Hulk", nationality: "Brasil", club: "Atlético-MG", position: "ST", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 7 },
    { name: "Dudu", nationality: "Brasil", club: "Atlético-MG", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 10 },
    { name: "Paulinho", nationality: "Brasil", club: "Atlético-MG", position: "RW", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 9 },
    { name: "Renan Lodi", nationality: "Brasil", club: "Atlético-MG", position: "LB", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 44 },
    { name: "Alan Franco", nationality: "Argentina", club: "Atlético-MG", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 5 },
    { name: "Everson", nationality: "Brasil", club: "Atlético-MG", position: "GK", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 22 },

    // INTERNACIONAL
    { name: "Rafael Borré", nationality: "Colômbia", club: "Internacional", position: "ST", value: 7000000, valueStr: "€7M", flag: "🇨🇴", number: 19 },
    { name: "Enner Valencia", nationality: "Equador", club: "Internacional", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇪🇨", number: 13 },
    { name: "Alan Patrick", nationality: "Brasil", club: "Internacional", position: "CAM", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 10 },
    { name: "Bernabei", nationality: "Argentina", club: "Internacional", position: "LB", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 6 },
    { name: "Rochet", nationality: "Uruguai", club: "Internacional", position: "GK", value: 6000000, valueStr: "€6M", flag: "🇺🇾", number: 1 },

    // GRÊMIO
    { name: "Carlos Vinicius", nationality: "Brasil", club: "Grêmio", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9 },
    { name: "Cristaldo", nationality: "Argentina", club: "Grêmio", position: "CAM", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 10 },
    { name: "Tetê", nationality: "Brasil", club: "Grêmio", position: "RW", value: 9000000, valueStr: "€9M", flag: "🇧🇷", number: 7 },
    { name: "Amuzu", nationality: "Bélgica", club: "Grêmio", position: "LW", value: 8000000, valueStr: "€8M", flag: "🇧🇪", number: 11 },
    { name: "Arthur", nationality: "Brasil", club: "Grêmio", position: "CM", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 8 },
    { name: "Weverton", nationality: "Brasil", club: "Grêmio", position: "GK", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 12 },

    // BAHIA
    { name: "Willian José", nationality: "Brasil", club: "Bahia", position: "ST", value: 7000000, valueStr: "€7M", flag: "🇧🇷", number: 9 },
    { name: "Everton Ribeiro", nationality: "Brasil", club: "Bahia", position: "CAM", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 10 },
    { name: "Jean Lucas", nationality: "Brasil", club: "Bahia", position: "CM", value: 6000000, valueStr: "€6M", flag: "🇧🇷", number: 8 },
    { name: "Acevedo", nationality: "Uruguai", club: "Bahia", position: "CDM", value: 5000000, valueStr: "€5M", flag: "🇺🇾", number: 5 },
    { name: "Ronaldo", nationality: "Brasil", club: "Bahia", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1 },

    // VASCO
    { name: "Philippe Coutinho", nationality: "Brasil", club: "Vasco", position: "CAM", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 11 },
    { name: "Dimitri Payet", nationality: "França", club: "Vasco", position: "CAM", value: 5000000, valueStr: "€5M", flag: "🇫🇷", number: 10 },
    { name: "Thiago Mendes", nationality: "Brasil", club: "Vasco", position: "CDM", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 5 },
    { name: "Robert Renan", nationality: "Brasil", club: "Vasco", position: "CB", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 3 },
    { name: "Piton", nationality: "Brasil", club: "Vasco", position: "LB", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 6 },
    { name: "Léo Jardim", nationality: "Brasil", club: "Vasco", position: "GK", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 1 },

    // CRUZEIRO
    { name: "Kaio Jorge", nationality: "Brasil", club: "Cruzeiro", position: "ST", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 9 },
    { name: "Matheus Pereira", nationality: "Brasil", club: "Cruzeiro", position: "CAM", value: 12000000, valueStr: "€12M", flag: "🇧🇷", number: 10 },
    { name: "Fabrício Bruno", nationality: "Brasil", club: "Cruzeiro", position: "CB", value: 8000000, valueStr: "€8M", flag: "🇧🇷", number: 4 },
    { name: "Cássio", nationality: "Brasil", club: "Cruzeiro", position: "GK", value: 3000000, valueStr: "€3M", flag: "🇧🇷", number: 1 },

    // SANTOS
    { name: "Lautaro Díaz", nationality: "Argentina", club: "Santos", position: "ST", value: 6000000, valueStr: "€6M", flag: "🇦🇷", number: 9 },
    { name: "Rollheiser", nationality: "Argentina", club: "Santos", position: "RW", value: 7000000, valueStr: "€7M", flag: "🇦🇷", number: 7 },
    { name: "Gabriel Menino", nationality: "Brasil", club: "Santos", position: "CM", value: 5000000, valueStr: "€5M", flag: "🇧🇷", number: 8 },
    { name: "Gabriel Brazão", nationality: "Brasil", club: "Santos", position: "GK", value: 4000000, valueStr: "€4M", flag: "🇧🇷", number: 1 },

    // VITÓRIA
    { name: "Erick", nationality: "Brasil", club: "Vitória", position: "ST", value: 2000000, valueStr: "€2M", flag: "🇧🇷", number: 9 },
    { name: "Aitor", nationality: "Espanha", club: "Vitória", position: "RW", value: 1500000, valueStr: "€1.5M", flag: "🇪🇸", number: 7 },
    { name: "Ramon", nationality: "Brasil", club: "Vitória", position: "CM", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 8 },
    { name: "Riccieli", nationality: "Brasil", club: "Vitória", position: "CB", value: 1000000, valueStr: "€1M", flag: "🇧🇷", number: 4 },
    { name: "Gabriel", nationality: "Brasil", club: "Vitória", position: "GK", value: 800000, valueStr: "€800k", flag: "🇧🇷", number: 1 }
];

// Variáveis globais
let currentSlot = null;
let currentLineup = Array(18).fill(null);
let savedLineups = JSON.parse(localStorage.getItem('fantasyLineups') || '[]');
let currentFilterTeam = "";
let currentFormation = "4-3-3";
let currentClubFilter = "all";
let currentCountryFilter = "all";
let currentValueRange = "all";

// Função para extrair valor numérico da string
function getNumericValue(valueStr) {
    const match = valueStr.match(/€(\d+(?:\.\d+)?)(M|k)/);
    if (!match) return 0;
    let value = parseFloat(match[1]);
    if (match[2] === 'M') value = value * 1000000;
    if (match[2] === 'k') value = value * 1000;
    return value;
}

// Função para filtrar jogadores por valor
function filterByValue(players, range) {
    if (range === "all") return players;
    return players.filter(player => {
        const value = getNumericValue(player.valueStr);
        switch(range) {
            case "0-5": return value < 5000000;
            case "5-10": return value >= 5000000 && value < 10000000;
            case "10-15": return value >= 10000000 && value < 15000000;
            case "15-20": return value >= 15000000 && value < 20000000;
            case "20-30": return value >= 20000000 && value < 30000000;
            case "30-50": return value >= 30000000 && value < 50000000;
            case "50+": return value >= 50000000;
            default: return true;
        }
    });
}

// Função para renderizar lista de jogadores com todos os filtros
function renderPlayersList(filter = "", teamFilter = "") {
    const container = document.getElementById("playersListContainer");
    if (!container) return;

    let filtered = playersData;
    
    if (filter) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(filter.toLowerCase()) ||
            p.club.toLowerCase().includes(filter.toLowerCase()) ||
            p.nationality.toLowerCase().includes(filter.toLowerCase())
        );
    }
    
    if (teamFilter) {
        filtered = filtered.filter(p => p.club === teamFilter);
    } else if (currentClubFilter !== "all") {
        filtered = filtered.filter(p => p.club === currentClubFilter);
    }
    
    if (currentCountryFilter !== "all") {
        filtered = filtered.filter(p => p.nationality === currentCountryFilter);
    }
    
    filtered = filterByValue(filtered, currentValueRange);

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
                    <span>💰 ${player.valueStr}</span>
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

// Função para mudar a formação
function changeFormation(formation) {
    currentFormation = formation;
    document.getElementById("formationBtn").innerHTML = formation + " ▼";
    
    const attackRow = document.getElementById("attackRow");
    const midfieldRow = document.getElementById("midfieldRow");
    const defenseRow = document.getElementById("defenseRow");
    
    const allSlots = document.querySelectorAll(".player-slot");
    allSlots.forEach(slot => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `
            <div class="player-icon">👤</div>
            <div class="player-name">Vago</div>
            <div class="player-meta">Clique no +</div>
            <div class="player-meta">adicionar</div>
        `;
    });
    
    currentLineup = Array(18).fill(null);
    
    const formations = {
        "4-3-3": { attack: 3, midfield: 3, defense: 4 },
        "4-4-2": { attack: 2, midfield: 4, defense: 4 },
        "4-2-3-1": { attack: 1, midfield: 4, defense: 4 },
        "3-4-3": { attack: 3, midfield: 4, defense: 3 },
        "3-5-2": { attack: 2, midfield: 5, defense: 3 },
        "4-1-2-1-2": { attack: 2, midfield: 4, defense: 4 },
        "5-3-2": { attack: 2, midfield: 3, defense: 5 },
        "4-5-1": { attack: 1, midfield: 5, defense: 4 }
    };
    
    const config = formations[formation];
    if (!config) return;
    
    adjustRowDisplay(attackRow, config.attack);
    adjustRowDisplay(midfieldRow, config.midfield);
    adjustRowDisplay(defenseRow, config.defense);
    reindexSlots();
}

function adjustRowDisplay(row, count) {
    if (!row) return;
    const slots = row.querySelectorAll(".player-slot");
    slots.forEach((slot, index) => {
        if (index < count) {
            slot.style.display = "flex";
        } else {
            slot.style.display = "none";
        }
    });
}

function reindexSlots() {
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, newIndex) => {
        slot.setAttribute("data-index", newIndex);
    });
}

// Função para adicionar jogador - NOME COMPLETO
function addPlayerToSlot(player) {
    if (!currentSlot) return;
    const slotElement = currentSlot;
    const playerCard = slotElement.querySelector(".player-card");
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    const index = Array.from(allSlots).indexOf(slotElement);
    if (index !== -1) currentLineup[index] = player;
    
    playerCard.classList.remove("empty");
    playerCard.classList.add("filled");
    playerCard.innerHTML = `
        <div class="player-icon">${player.flag || "👤"}</div>
        <div class="player-name" title="${player.name}">${player.name}</div>
        <div class="player-meta" title="${player.club}">${player.club}</div>
        <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
    `;
    const modal = document.getElementById("playerModal");
    if (modal) modal.classList.remove("active");
    currentSlot = null;
}

// Limpar escalação
function clearLineup() {
    currentLineup = Array(18).fill(null);
    const allSlots = document.querySelectorAll(".player-slot");
    allSlots.forEach((slot) => {
        const playerCard = slot.querySelector(".player-card");
        playerCard.classList.remove("filled");
        playerCard.classList.add("empty");
        playerCard.innerHTML = `
            <div class="player-icon">👤</div>
            <div class="player-name">Vago</div>
            <div class="player-meta">Clique no +</div>
            <div class="player-meta">adicionar</div>
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
        formation: currentFormation,
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
            <small>${lineup.date} - ${lineup.formation}</small>
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

// Função para carregar escalação salva - NOME COMPLETO
function loadLineup(id) {
    const lineup = savedLineups.find(l => l.id === id);
    if (!lineup) return;
    if (lineup.formation && lineup.formation !== currentFormation) changeFormation(lineup.formation);
    currentLineup = [...lineup.players];
    const allSlots = document.querySelectorAll(".player-slot:not(.hidden-slot)");
    allSlots.forEach((slot, index) => {
        const player = currentLineup[index];
        const playerCard = slot.querySelector(".player-card");
        if (player) {
            playerCard.classList.remove("empty");
            playerCard.classList.add("filled");
            playerCard.innerHTML = `
                <div class="player-icon">${player.flag || "👤"}</div>
                <div class="player-name" title="${player.name}">${player.name}</div>
                <div class="player-meta" title="${player.club}">${player.club}</div>
                <div class="player-meta" title="${player.nationality} • ${player.valueStr}">${player.nationality} • ${player.valueStr}</div>
            `;
        } else {
            playerCard.classList.remove("filled");
            playerCard.classList.add("empty");
            playerCard.innerHTML = `
                <div class="player-icon">👤</div>
                <div class="player-name">Vago</div>
                <div class="player-meta">Clique no +</div>
                <div class="player-meta">adicionar</div>
            `;
        }
    });
    const nameInput = document.getElementById("lineupName");
    if (nameInput) nameInput.value = lineup.name;
    alert(`Escalação "${lineup.name}" carregada!`);
}

// Função para abrir modal de filtro
function openFilterModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("active");
}

function closeFilterModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
}

// Configurar eventos
function setupEventListeners() {
    document.querySelectorAll(".plus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const slot = btn.closest(".player-slot");
            if (slot && slot.style.display !== "none") {
                currentSlot = slot;
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

    const formationBtn = document.getElementById("formationBtn");
    if (formationBtn) {
        formationBtn.addEventListener("click", () => {
            openFilterModal("formationModal");
        });
    }

    document.querySelectorAll(".formation-option").forEach(opt => {
        opt.addEventListener("click", () => {
            const formation = opt.dataset.formation;
            changeFormation(formation);
            closeFilterModal("formationModal");
        });
    });

    const clubBtn = document.getElementById("filterClubBtn");
    if (clubBtn) {
        clubBtn.addEventListener("click", () => {
            openFilterModal("clubFilterModal");
        });
    }

    document.querySelectorAll("#clubFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            currentClubFilter = opt.dataset.club;
            currentCountryFilter = "all";
            currentValueRange = "all";
            renderPlayersList();
            closeFilterModal("clubFilterModal");
            const searchInput = document.getElementById("playerSearchInput");
            if (searchInput && currentClubFilter !== "all") {
                searchInput.placeholder = `🔍 Buscar em ${currentClubFilter}...`;
            } else {
                searchInput.placeholder = "🔍 Buscar jogador por nome, clube ou nacionalidade...";
            }
        });
    });

    const countryBtn = document.getElementById("filterCountryBtn");
    if (countryBtn) {
        countryBtn.addEventListener("click", () => {
            openFilterModal("countryFilterModal");
        });
    }

    document.querySelectorAll("#countryFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            currentCountryFilter = opt.dataset.country;
            currentClubFilter = "all";
            currentValueRange = "all";
            renderPlayersList();
            closeFilterModal("countryFilterModal");
            const searchInput = document.getElementById("playerSearchInput");
            if (searchInput && currentCountryFilter !== "all") {
                searchInput.placeholder = `🔍 Buscar jogadores de ${currentCountryFilter}...`;
            } else {
                searchInput.placeholder = "🔍 Buscar jogador por nome, clube ou nacionalidade...";
            }
        });
    });

    const valueBtn = document.getElementById("filterValueBtn");
    if (valueBtn) {
        valueBtn.addEventListener("click", () => {
            openFilterModal("valueFilterModal");
        });
    }

    document.querySelectorAll("#valueFilterList .filter-option").forEach(opt => {
        opt.addEventListener("click", () => {
            currentValueRange = opt.dataset.value;
            currentClubFilter = "all";
            currentCountryFilter = "all";
            renderPlayersList();
            closeFilterModal("valueFilterModal");
        });
    });

    document.querySelectorAll(".close-modal, .close-formation, .close-club, .close-country, .close-value").forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal-overlay");
            if (modal) modal.classList.remove("active");
        });
    });

    document.querySelectorAll(".modal-overlay").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });

    const searchInput = document.getElementById("playerSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderPlayersList(e.target.value);
        });
    }

    const globalSearch = document.getElementById("globalSearch");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value;
            if (searchTerm.length > 0) {
                currentClubFilter = "all";
                currentCountryFilter = "all";
                currentValueRange = "all";
                renderPlayersList(searchTerm);
                const modal = document.getElementById("playerModal");
                if (modal) modal.classList.add("active");
            }
        });
    }

    document.querySelectorAll(".team-row").forEach(team => {
        team.addEventListener("click", () => {
            const teamName = team.querySelector("span:last-child").textContent;
            currentClubFilter = teamName;
            currentCountryFilter = "all";
            currentValueRange = "all";
            renderPlayersList();
            const modal = document.getElementById("playerModal");
            if (modal) modal.classList.add("active");
            const searchInput = document.getElementById("playerSearchInput");
            if (searchInput) {
                searchInput.placeholder = `🔍 Buscar em ${teamName}...`;
                searchInput.value = "";
            }
        });
    });

    const clearBtn = document.getElementById("clearLineupBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearLineup);
    }

    const saveBtn = document.getElementById("saveLineupBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", saveLineup);
    }
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderSavedLineups();
    setupEventListeners();
    changeFormation("4-3-3");
});