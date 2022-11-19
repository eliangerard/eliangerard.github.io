const body = document.getElementById('background');
const age = document.getElementById('age');
const nightMode = () => {
    body.classList.toggle('night')
}

const loadInfo = () => {
    const date = new Date();
    const birth = new Date(1024855200000);
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours() - birth.getHours();
    let days =  hours < 0 ? date.getDate() - birth.getDate() - 1 : date.getDate() - birth.getDate();
    let months = days < 0 ? date.getMonth() - birth.getMonth() - 1 : date.getMonth() - birth.getMonth();
    let years = months < 0 ? date.getFullYear() -birth.getFullYear() -1 : date.getFullYear() - birth.getFullYear();
    age.innerHTML = `
        <p id="years">${years} years</p>
        <p id="months">${months < 0 ? 12 + months : months} months</p>
        <p id="days">${days < 0 ? daysInMonth(date.getMonth(), date.getFullYear()) + days : days} days</p>
        <p id="hours">${hours < 0 ? 24 + hours : hours} hours</p>
        <p id="minutes">${minutes} minutes</p>
        <p id="seconds">${seconds} seconds</p>
    `;

    setTimeout(loadInfo, 1000);
}

const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}