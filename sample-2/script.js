

 function updateTime() {
    const now = new Date();
    const seconds = now.getSeconds() / 60;
    const minutes = (now.getMinutes() + seconds) / 60;
    const hours = (now.getHours() + minutes) / 12;
 
    document.querySelector('.sec-hand').style.transform = `rotate(${seconds * 360}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minutes * 360}deg)`;
    document.querySelector('.hr-hand').style.transform = `rotate(${hours * 360}deg)`;
 
    const digitalTime = now.toLocaleTimeString();
    document.querySelector('.digital-clock').textContent = digitalTime;
 }
 
 setInterval(updateTime, 1000);
 updateTime(); // Initial call to set the clock immediately
 