var character = document.querySelector("#character");
var block = document.querySelector("#block");
const animalArr = ["mouse.png", "sosk.png", "walkingMan.png"]

function jump() {
    if (character.classList != "animative") {
        character.classList.add("animative");
    }
    setTimeout(function() {
        character.classList.remove("animative");
    }, 500);
}
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 100 && blockLeft > 70 && characterTop >= 170) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose!")
    }
}, 10);

function randomNum() {
    return (Math.floor(Math.random() * animalArr.length));
}
var animalSet = setInterval(function() {
    let AnimalNum = randomNum();
    let animal = animalArr[AnimalNum];

    document.querySelector("#animal").src = animal;
}, 3000)