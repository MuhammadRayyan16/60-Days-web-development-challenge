let timer = document.querySelector('.timer')

const showtime = () => {

    const now = new Date();

    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let fulltime = hours + ":" + minutes + ":" + seconds;

    timer.textContent = fulltime;
}

setInterval(showtime, 1000)