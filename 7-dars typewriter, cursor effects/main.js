//let fixedHeightHeader = `${document.getElementById("fixedHeight").scrollHeight}px`;
document.getElementById("fixedHeight").style.height = "276px"; //set height of a header text

let textToDisplay = document.querySelector("#typewriter_text");
let typewriter_message = ["ishonchli", "sifatli", "chiroyli", "zamonaviy", "creative", "foydali", "TOPda", "uchadi", "qiziqarli", "shiddatli", "chaqqon", "bebaho"];

let i = 0;
let wordIndex = 0;
let message = typewriter_message[wordIndex];
let textToDelete;
let speed = 200;

function typeWriter() {
    if (i < message.length) {

        textToDisplay.innerHTML += message.charAt(i);
        i++
        setTimeout(typeWriter, speed);

    } else {
        i = textToDisplay.innerHTML.length;
        textToDelete = textToDisplay.innerHTML;
        setTimeout(() => typeWriterDelete(), 1500);//wait for 1.5 sec . 
    }
}
function typeWriterDelete() {
    if (i >= 0) {

        textToDisplay.innerHTML = textToDelete;
        i--;
        textToDelete = textToDelete.slice(0, i)
        setTimeout(typeWriterDelete, speed)

    }
    else{
        wordIndex ++;
        if(wordIndex===typewriter_message.length){
            wordIndex = 0;
        }
        message = typewriter_message[wordIndex];
        typeWriter();
    }
}


window.addEventListener("DOMContentLoaded", () => {
    typeWriter();
})

