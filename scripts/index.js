let seconds = 0;

//states
let northSalary = 0;
let northeastSalary = 0;
let middlewestSalary = 0;
let southeastSalary = 0;
let southSalary = 0;

//jobs
let trashmanSalary = 0;
let policeSalary = 0;
let itSalary = 0;
let lawyerSalary = 0;
let doctorSalary = 0;
let presidentSalary = 0;
let teacherSalary = 0;
let neymarSalary = 0;
let billionaireSalary = 0;
let minimalSalary = 0;

//countries
let brazilSalary = 0;
let argentinaSalary = 0;
let usaSalary = 0;
let portugalSalary = 0;
let japanSalary = 0;
let senegalSalary = 0;
let switzerlandSalary = 0;
let afeganisthanSalary = 0;

let interval = 17; // Intervalo inicial de 1 minuto
let speedLevel = 1; // Nível de velocidade
let intervalId; // Variável para armazenar o ID do intervalo

function updateTime() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);

    let timeString = '';

    if (hours > 0) {
        timeString += `${hours} hora${hours > 1 ? 's' : ''}, `;
    }

    if (minutes >= 2 || hours > 0) {
        timeString += `${minutes} minutos`;
    } else if(minutes >= 1){
        timeString += `${minutes} minuto`;
    } else if(minutes >= 0){
        timeString += `0 minutos`;
    }

    document.getElementById('timer').innerText = timeString;

    setSalaries(); // Chama a função para atualizar os salários
}

function setSalaries() {
    setJobsSalaries();
    setRegionSalaries();
    setCountriesSalaries();
}

function setCountriesSalaries(){
    brazilSalary += 0.0011;
    argentinaSalary += 0.00096;
    usaSalary += 0.0106;
    portugalSalary += 0.00299;
    japanSalary += 0.00656;
    senegalSalary += 0.00037;
    switzerlandSalary += 0.0156;
    afeganisthanSalary += 0.000077;

    document.getElementById('brazil_salary').innerText = `R$ ${brazilSalary.toFixed(2)}`;
    document.getElementById('argentina_salary').innerText = `R$ ${argentinaSalary.toFixed(2)}`;
    document.getElementById('usa_salary').innerText = `R$ ${usaSalary.toFixed(2)}`;
    document.getElementById('portugal_salary').innerText = `R$ ${portugalSalary.toFixed(2)}`;
    document.getElementById('japan_salary').innerText = `R$ ${japanSalary.toFixed(2)}`;
    document.getElementById('senegal_salary').innerText = `R$ ${senegalSalary.toFixed(2)}`;
    document.getElementById('switzerland_salary').innerText = `R$ ${switzerlandSalary.toFixed(2)}`;
    document.getElementById('afeganistan_salary').innerText = `R$ ${afeganisthanSalary.toFixed(2)}`;
}

function setJobsSalaries(){
        teacherSalary += 0.00154;
        trashmanSalary += 0.00055;
        lawyerSalary += 0.00183;
        policeSalary += 0.00231;
        itSalary += 0.00309;
        doctorSalary += 0.00386;
        presidentSalary += 0.017;
        minimalSalary += 0.00054;
        billionaireSalary += 630.51;
        neymarSalary += 18;
    
        document.getElementById('teacher_salary').innerText = `R$ ${teacherSalary.toFixed(2)}`;
        document.getElementById('trashman_salary').innerText = `R$ ${trashmanSalary.toFixed(2)}`;
        document.getElementById('lawyer_salary').innerText = `R$ ${lawyerSalary.toFixed(2)}`;
        document.getElementById('police_salary').innerText = `R$ ${policeSalary.toFixed(2)}`;
        document.getElementById('it_salary').innerText = `R$ ${itSalary.toFixed(2)}`;
        document.getElementById('doctor_salary').innerText = `R$ ${doctorSalary.toFixed(2)}`;
        document.getElementById('president_salary').innerText = `R$ ${presidentSalary.toFixed(2)}`;
        document.getElementById('minimal_salary').innerText = `R$ ${minimalSalary.toFixed(2)}`;
        document.getElementById('billionaire_salary').innerText = `R$ ${billionaireSalary.toFixed(2)}`;
        document.getElementById('neymar_salary').innerText = `R$ ${neymarSalary.toFixed(2)}`;
}

function setRegionSalaries() {
    northSalary += 0.000965;
    northeastSalary += 0.000849;
    middlewestSalary += 0.00135;
    southeastSalary += 0.00173;
    southSalary += 0.00147;
    

    document.getElementById('north_salary').innerText = `R$ ${northSalary.toFixed(2)}`;
    document.getElementById('northeast_salary').innerText = `R$ ${northeastSalary.toFixed(2)}`;
    document.getElementById('middlewest_salary').innerText = `R$ ${middlewestSalary.toFixed(2)}`;
    document.getElementById('southeast_salary').innerText = `R$ ${southeastSalary.toFixed(2)}`;
    document.getElementById('south_salary').innerText = `R$ ${southSalary.toFixed(2)}`;
}

function setBrazilSalary() {
    brazilSalary = (northSalary + northeastSalary + middlewestSalary + southeastSalary + southSalary) / 5;
    document.getElementById('brazil_salary').innerText = `R$ ${brazilSalary.toFixed(2)}`;
}

intervalId = setInterval(updateTime, interval);

function mostrarAlerta() {
    document.getElementById('fundo').style.display = 'block'; 
    document.getElementById('alerta').style.display = 'block'; 
}

function fecharAlerta() {
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('alerta').style.display = 'none';
}

function setThemeDark(){
    document.getElementById('light_mode').style.display = 'none';
    document.getElementById('dark_mode').style.display = 'block';
    document.body.classList.toggle('dark-theme');
}

function setThemeLight(){
    document.getElementById('light_mode').style.display = 'block';
    document.getElementById('dark_mode').style.display = 'none';
    document.body.classList.remove('dark-theme');
}