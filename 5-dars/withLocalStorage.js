/**🔸 Rock, Paper, Scissors game* */
let whoWinsArray;
let random;
let mySign;
let leftHandImage = document.querySelector(".leftHandImage");
let rightHandImage = document.querySelector(".rightHandImage");
let leftHandResult = document.querySelector("#round-left-result");
let rightHandResult = document.querySelector("#round-right-result");

let AI_says = [
    ["Tog'o, sekinroq o'ynayvering 🙄", "Eee, Vapshe malades 😀", "Qaydan topyapsiz-e 😒", "Bo'lli, endi o'ynamayman 🤕", "Tog'o, o'zi bugun sal mazam yo'g'iydidaaa 🤥", "Ataylab yutqazib beryapman 👀", "Rais buvadan qarz so'rab turaman shekilli 😔", "TATUda o'qimaganmisiz mobodooo 🤔", "👍www.uroljon.ml👍"],
    ["Hammani ketmoni uchsa-yu, bitta sizniki uchmasa-ya, Rais Buva 🥺", "Hammasi yaxshi bo'ladi, siz gazini bosing 👌 ?", "Ha bugun yutqizsa, keyingi sapar yutar 😟", "Ako, muniyam o'ynashga kalla kerak 😅", "Muvofaqqiyatga yo'l tekis bo'lmaydi, bo'tam 🦉", "Olmani danagidan yeyish keragakan 🍏", "O'yin hazil bilan esda qolsin diymanda, og'o", "bir bo'pqoldi-da 🎅", "Tug'ilgan kunimga kemay qomang yana 🙃", "👍www.uroljon.ml👍"],
    ["Boriga baraka 🤝", "на здоровье 🥂", "Hech kim xafa bomasin-a 😀"]
];

if (localStorage.getItem("whoWins")) {//avaaldan ma'lumot bo'lsa, shuni render qil
    // write all scores accordingly
    document.querySelector("#humanScore").innerHTML = JSON.parse(localStorage.getItem("whoWins")).filter((elem) => elem === "you").length;
    document.querySelector("#AIScore").innerHTML = JSON.parse(localStorage.getItem("whoWins")).filter((elem) => elem === "AI").length;
    document.querySelector("#drawScore").innerHTML = JSON.parse(localStorage.getItem("whoWins")).filter((elem) => elem === "draw").length;
    document.querySelectorAll(".round").forEach((e) => {
        e.innerHTML = JSON.parse(localStorage.getItem("whoWins")).length;;
    })
}

function start(sign) {
    mySign = sign;
    random = Math.round(Math.random() * 2);
    // get localStorage data :
    whoWinsArray = localStorage.getItem("whoWins") ? JSON.parse(localStorage.getItem("whoWins")) : [];

    // CALCULATIONS

    if ((sign === "paper" && random === 1) || (sign === "rock" && random === 2) || (sign === "scissors" && random === 0)) {
        whoWinsArray.push("you");
    } else if ((sign === "paper" && random === 2) || (sign === "rock" && random === 0) || (sign === "scissors" && random === 1)) {
        whoWinsArray.push("AI");
    } else if ((sign === "paper" && random === 0) || (sign === "rock" && random === 1) || (sign === "scissors" && random === 2)) {
        whoWinsArray.push("draw");
    }
    // calculate round count
    document.querySelectorAll(".round").forEach((elem) => {
        elem.innerHTML = whoWinsArray.length;
    })
    // write to local storage:
    localStorage.setItem("whoWins", JSON.stringify(whoWinsArray));

    // ANIMATIONS + STYLES
    leftHandImage.style.animation = "handAnimationLeft 0.8s ease-in 1 forwards";
    rightHandImage.style.animation = "handAnimationRight 0.8s ease-in 1 forwards";
}
// when animation stops, do :
leftHandImage.addEventListener("animationend", function () {

    let randomForAI; //AI ni gaplari uchun random value

    // set both animation to null
    leftHandImage.style = null;
    rightHandImage.style = null;

    // change right hand images
    if (mySign === "paper") {
        leftHandImage.src = `https://www.afiniti.com/static/media/paper.24d69089.png`;
        leftHandResult.innerHTML = `<svg viewBox="0 0 32 20" style="width: 30px;"><path d="M23.704 18.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V8.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434V1.174L18.456 0H6.359L0 6.36v7.28L6.36 20h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493V6.974l5.493-5.493h10.867l.307.308v.867L17.1 3.704h-5.989v1.481H27.1l.307.308v1.914h-11.11V8.89h13.025l.308.307v1.608l-.308.307H16.296v1.482h10.37v1.914l-.307.308H16.296v1.481h5.926v1.915l-.307.308H6.975z" fill="#BEBEBE"></path></svg>`;
    } else if (mySign === "rock") {
        leftHandImage.src = `https://www.afiniti.com/static/media/rock.fae7b245.png`;
        leftHandResult.innerHTML = `<svg viewBox="0 0 23 20" style="width: 30px;"><path d="M21.048 3.704h-5.492v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h12.096l1.13-1.13 1.48-9.918 1.156-.778V4.878l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H6.974l-5.493-5.493V6.974l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308V7.38z" fill="#BEBEBE"></path></svg>`;
    } else if (mySign === "scissors") {
        leftHandImage.src = `https://www.afiniti.com/static/media/scissors.0dc12241.png`;
        leftHandResult.innerHTML = `<svg viewBox="0 0 31 20" style="width: 30px;"><path d="M30 11.563l-6.104-2.674h5.297l1.177-1.174V4.878l-1.174-1.174h-13.64v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L30 11.563zM28.037 14.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37L1.48 13.027V6.974l5.493-5.493h6.793l.307.308v1.915H10.37v1.481h18.211l.308.308V7.1l-.308.307H19.26V8.47l9.482 4.167.1.37-.804 1.393z" fill="#BEBEBE"></path></svg>`;
    }
    // change left hand images
    if (random === 0) {//paper
        rightHandImage.src = `https://www.afiniti.com/static/media/paper.24d69089.png`;
        rightHandResult.innerHTML = `<svg viewBox="0 0 32 20" class="rock-paper-scissors__flipped--3zy4A" style="transform: scaleX(-1); width: 30px;"><path d="M23.704 18.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V8.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434V1.174L18.456 0H6.359L0 6.36v7.28L6.36 20h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493V6.974l5.493-5.493h10.867l.307.308v.867L17.1 3.704h-5.989v1.481H27.1l.307.308v1.914h-11.11V8.89h13.025l.308.307v1.608l-.308.307H16.296v1.482h10.37v1.914l-.307.308H16.296v1.481h5.926v1.915l-.307.308H6.975z" fill="#BEBEBE"></path></svg>`;
    } else if (random === 1) {//rock
        rightHandImage.src = `https://www.afiniti.com/static/media/rock.fae7b245.png`;
        rightHandResult.innerHTML = `<svg viewBox="0 0 23 20" class="rock-paper-scissors__flipped--3zy4A" style="transform: scaleX(-1); width: 30px;"><path d="M21.048 3.704h-5.492v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h12.096l1.13-1.13 1.48-9.918 1.156-.778V4.878l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H6.974l-5.493-5.493V6.974l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308V7.38z" fill="#BEBEBE"></path></svg>`;
    } else if (random === 2) {//scissors
        rightHandImage.src = `https://www.afiniti.com/static/media/scissors.0dc12241.png`;
        rightHandResult.innerHTML = `<svg viewBox="0 0 31 20" class="rock-paper-scissors__flipped--3zy4A" style="transform: scaleX(-1); width: 30px;"><path d="M30 11.563l-6.104-2.674h5.297l1.177-1.174V4.878l-1.174-1.174h-13.64v-2.53L14.38 0H6.36L0 6.36v7.28L6.36 20h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L30 11.563zM28.037 14.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37L1.48 13.027V6.974l5.493-5.493h6.793l.307.308v1.915H10.37v1.481h18.211l.308.308V7.1l-.308.307H19.26V8.47l9.482 4.167.1.37-.804 1.393z" fill="#BEBEBE"></path></svg>`;
    }

    // ****  game-middle image changes  *******  random sentences are displayed
    if ((mySign === "paper" && random === 1) || (mySign === "rock" && random === 2) || (mySign === "scissors" && random === 0)) {
        document.querySelector("#round-left-result path").style.fill = "#E62649";
        document.querySelector("#round-right-result path").style.fill = "#BEBEBE";
        // AI sentences
        randomForAI = Math.floor(Math.random() * AI_says[0].length);
        document.querySelector("#AI_Says").innerHTML = `${AI_says[0][randomForAI]}`;

    } else if ((mySign === "paper" && random === 2) || (mySign === "rock" && random === 0) || (mySign === "scissors" && random === 1)) {
        document.querySelector("#round-left-result path").style.fill = "#BEBEBE";
        document.querySelector("#round-right-result path").style.fill = "#E62649";
        // AI sentences
        randomForAI = Math.floor(Math.random() * AI_says[1].length);
        document.querySelector("#AI_Says").innerHTML = `${AI_says[1][randomForAI]}`;

    } else if ((mySign === "paper" && random === 0) || (mySign === "rock" && random === 1) || (mySign === "scissors" && random === 2)) {
        // AI sentences
        randomForAI = Math.floor(Math.random() * AI_says[2].length);
        document.querySelector("#AI_Says").innerHTML = `${AI_says[2][randomForAI]}`;
    }

    // write all scores accordingly
    document.querySelector("#humanScore").innerHTML = whoWinsArray.filter(function (elem) {
        return elem === "you";
    }).length;
    document.querySelector("#AIScore").innerHTML = whoWinsArray.filter(function (elem) {
        return elem === "AI";
    }).length;
    document.querySelector("#drawScore").innerHTML = whoWinsArray.filter(function (elem) {
        return elem === "draw";
    }).length;

});
// localStorage ni tozala:
let span = document.createElement("span");
span.innerHTML = "restart";
span.classList.add("re-play");
document.querySelector("#header-round").appendChild(span);
span.addEventListener("click", (e) => {
    localStorage.setItem("whoWins", "[]");
    document.querySelector("#humanScore").innerHTML = 0;
    document.querySelector("#AIScore").innerHTML = 0;
    document.querySelector("#drawScore").innerHTML = 0;
    document.querySelector("#AI_Says").innerHTML = `Boshidan boshlasak boshlayveramiz`;
    document.querySelectorAll(".round").forEach((elem) => {
        elem.innerHTML = 0;
    })
});