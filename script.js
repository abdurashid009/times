function upadateTimer(){
    const now = new Date();
    const year = String(now.getFullYear()).padStart(2,'0');
    const day = String(now.getDate()).padStart(2,'0');
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');


    document.getElementById('year').textContent = year;
    document.getElementById('day').textContent = day;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(upadateTimer , 1000);
upadateTimer()