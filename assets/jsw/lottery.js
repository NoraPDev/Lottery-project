const userNumbers = [];
const randomNumbers = [];
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const num3Input = document.getElementById("num3");
const num4Input = document.getElementById("num4");
const num5Input = document.getElementById("num5");
const playBtn = document.getElementById("play");

function generateRandomNumbers() {

    randomNumbers.splice(0, 5);

    while(randomNumbers.lenght < 5) {
        const rNum = Math.floor(Math.random()*90)+1;

        if (!randomNumbers.includes(rNum))
            randomNumbers.push(rNum);
    }
}


playBtn.addEventListener("click", function() {
    generateRandomNumbers();
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const num3 = parseInt(num3Input.value);
    const num4 = parseInt(num4Input.value);
    const num5 = parseInt(num5Input.value);

    if (isNan(num1)) {
        alert("")
    }
    console.log(num1, num2, num3, num4, num5);


})


generateRandomNumbers();

