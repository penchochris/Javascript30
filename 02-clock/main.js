const getDegrees = (time, ticksPer360) => {
    const degrees = ((time / ticksPer360) * 360) + 90;
    return degrees;
}

const setDegrees = (hand, degrees) => {
    hand.style.transform = `rotate(${degrees}deg)`;
}

const setDate = () => {
    const secondsHand = document.querySelector('.second');
    const minutesHand = document.querySelector('.minute');
    const hoursHand = document.querySelector('.hour');
    
    const now = new Date();
    const secondsDegrees = getDegrees(now.getSeconds(), 60);
    const minutesDegrees = getDegrees(now.getMinutes(), 60);
    const hoursDegrees = getDegrees(now.getHours(), 12);

    setDegrees(secondsHand, secondsDegrees);
    setDegrees(minutesHand, minutesDegrees);
    setDegrees(hoursHand, hoursDegrees);
}

setInterval(setDate, 1000);