let seconds = 0;

let northSalary = 0;
let northeastSalary = 0;
let middlewestSalary = 0;
let southeastSalary = 0;
let southSalary = 0;
let brazilSalary = 0;
let neymarSalary = 0;

let interval = 1000; // Intervalo inicial de 1 segundo
let speedLevel = 1; // Nível de velocidade
let intervalId; // Variável para armazenar o ID do intervalo

function updateTime() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let timeString = '';

    if (hours > 0) {
        timeString += `${hours} hora${hours > 1 ? 's' : ''}, `;
    }

    if (minutes > 0 || hours > 0) {
        timeString += `${minutes} minuto${minutes > 1 ? 's' : ''}, `;
    }

    timeString += `${remainingSeconds} segundo${remainingSeconds > 1 ? 's' : ''} passados`;

    document.getElementById('timer').innerText = timeString;

    setSalaries(); // Chama a função para atualizar os salários
}

function setSalaries() {
    setRegionSalaries();
    setBrazilSalary();
}

function setRegionSalaries() {
    // Aumenta os salários regionais
    northSalary += 0.00245;
    northeastSalary += 0.00231;
    middlewestSalary += 0.00365;
    southeastSalary += 0.00386;
    southSalary += 0.00371;
    neymarSalary += 18;

    // Atualiza os valores no HTML
    document.getElementById('north_salary').innerText = `R$ ${northSalary.toFixed(2)}`;
    document.getElementById('northeast_salary').innerText = `R$ ${northeastSalary.toFixed(2)}`;
    document.getElementById('middlewest_salary').innerText = `R$ ${middlewestSalary.toFixed(2)}`;
    document.getElementById('southeast_salary').innerText = `R$ ${southeastSalary.toFixed(2)}`;
    document.getElementById('south_salary').innerText = `R$ ${southSalary.toFixed(2)}`;
    document.getElementById('neymar_salary').innerText = `R$ ${neymarSalary.toFixed(2)}`;
}

function setBrazilSalary() {
    // Calcula o salário total do Brasil (soma de todas as regiões)
    brazilSalary = (northSalary + northeastSalary + middlewestSalary + southeastSalary + southSalary) / 5;
    document.getElementById('brazil_salary').innerText = `R$ ${brazilSalary.toFixed(2)}`;
}

// Inicia o contador e a atualização de salários a cada segundo
intervalId = setInterval(updateTime, interval);

// Função para aumentar a velocidade do contador
function increaseSpeed() {
    speedLevel++;
    interval = Math.max(interval / 1.5, 100); // Diminui o intervalo
    clearInterval(intervalId); // Limpa o intervalo atual
    intervalId = setInterval(updateTime, interval); // Define um novo intervalo
    updateSpeedLevelDisplay();
}

// Função para diminuir a velocidade do contador
function decreaseSpeed() {
    if (speedLevel > 1) { // Impede que o nível de velocidade fique menor que 1
        speedLevel--;
        interval *= 1.5; // Aumenta o intervalo
        clearInterval(intervalId); // Limpa o intervalo atual
        intervalId = setInterval(updateTime, interval); // Define um novo intervalo
        updateSpeedLevelDisplay();
    }
}

// Atualiza a exibição do nível de velocidade
function updateSpeedLevelDisplay() {
    document.getElementById('speed_level').innerText = `Nível de Velocidade: ${speedLevel}x`;
}

// Adiciona eventos aos botões
document.getElementById('increase').addEventListener('click', increaseSpeed);
document.getElementById('decrease').addEventListener('click', decreaseSpeed);
