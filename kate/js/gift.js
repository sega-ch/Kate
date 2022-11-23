function love() {

    const lol = confirm("Хочешь прикол?");
    let counter = 5;

const timerId = setInterval( function() {

    counter --;

    if (lol)
    {
        alert(`Осталось ${counter} секунд`);
        if (counter === 0)
        {
            alert("LOVE U <3");
            clearInterval(timerId);
        }
    }

} ,1000);

}

