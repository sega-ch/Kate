let userPoints = 0;
let programmPoints = 0;
const words = ["москва", "питер", "агросити", "рига", "амстердам", "ижевск", "кастрома"]
const usedWords = [""];
let isSecond = false;

function takeInfo()
{
    let userAnswer = ""; 
    userAnswer = prompt("Введите название города");
    charCheck(userAnswer);
}

function charCheck(answer)
{
    if (answer.toString().slice(-1)  === "ы" || answer.toString().slice(-1) === "ь" || answer.toString().slice(-1) === "ъ")
    {
        isSecond = true;
        findCitie(answer, isSecond);
    } else findCitie(answer, false);
}



function findCitie(answer, isSecond)
{
    if (usedWords.includes(answer))
    {
        alert("Такое слово уже было(");
        takeInfo();
    } else {
        if (isSecond)
        {
            for (let i = 0; i < cities.length; i++)
            {
                if (answer[answer.length - 2] == cities[i][0]) {

                    if (usedWords.includes(cities[i]))
                    {
                        alert("Такое слово уже было(");
                        takeInfo();
                    } else {
                        usedWords.push(answer);
                        usedWords.push(cities[i]);
                        isSecond = false;
                        alert(cities[i]);
                        takeInfo();
                    }
                    
                }
            }
        } else {
            for (let i = 0; i < cities.length; i++) {
                if (answer.toString().slice(-1) === cities[i][0])
                {
                    if (usedWords.includes(cities[i]))
                    {
                        alert("Такое слово уже было(");
                        takeInfo();
                    } else {
                        usedWords.push(answer);
                        usedWords.push(cities[i]);
                        alert(cities[i]);
                        takeInfo();
                    }
                } 
            }
        }
    }

   
}

