function createGame(player1, hours, player2){
    return `   
        <li>
            <img src="./assets/bandeira-${player1}.svg" alt="bandeira do ${player1}">
            <strong>${hours}</strong>
            <img src="./assets/bandeira-${player2}.svg" alt="bandeira do ${player2}">
        </li>
    `
}

function creatCard(date, day, games){
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
    creatCard("24/11", "Quinta", createGame('brasil', '16:00', 'camaroes')) +
    creatCard("24/11", "Quinta", createGame('brasil', '08:00', 'camaroes') + 
    createGame('brasil', '13:00', 'camaroes'))
;
