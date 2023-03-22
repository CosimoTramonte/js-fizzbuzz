
const container = document.querySelector(".container");
const row = document.querySelector(".row");
const l1 = document.querySelector(".l1");
const l1b = document.querySelector(".l1b");
const l2 = document.querySelector(".l2");
const l2b = document.querySelector(".l2b");
const l3 = document.querySelector(".l3");
const l3b = document.querySelector(".l3b");
const l4 = document.querySelector(".l4");
const l4b = document.querySelector(".l4b");
const l5 = document.querySelector(".l5");
const l5b = document.querySelector(".l5b");
const l6 = document.querySelector(".l6");
const l6b = document.querySelector(".l6b");
const l7 = document.querySelector(".l7");
const l7b = document.querySelector(".l7b");
const l8 = document.querySelector(".l8");
const l8b = document.querySelector(".l8b");
const l9 = document.querySelector(".l9");
const l9b = document.querySelector(".l9b");
const l10 = document.querySelector(".l10");
const l10b = document.querySelector(".l10b");
const l11 = document.querySelector(".l11");

//Ciclio for 1-100
for(let i = 1; i <= 101; i++){
    console.log(i)

    const box = document.createElement("div")

    const bonus = document.createElement("span")
    const bonusP = document.createTextNode("BONUS");
    bonus.appendChild(bonusP);

    const malus = document.createElement("span")
    const malusP = document.createTextNode("MALUS");
    malus.appendChild(malusP);

    const challenge = document.createElement("span")
    const challengeP = document.createTextNode("VS");
    challenge.appendChild(challengeP);

    const start = document.createElement("span")
    const startP = document.createTextNode("START");
    start.appendChild(startP);


    box.classList.add("box")


    //Ciclo with multiple
    if(i % 3 === 0 && i % 5 === 0){
        box.classList.add("multiple35")
        box.appendChild(challenge)
    } else if (i % 3 === 0){
        box.classList.add("multiple3")
        box.appendChild(bonus)
    } else if (i % 5 === 0){
        box.classList.add("multiple5")
        box.appendChild(malus)
    } else if (i == 1){
        box.appendChild(start)
        box.classList.add("start")
    }  else if (i == 101){
        box.classList.add("finish")
    } else{
        box.append(i)
        box.classList.add("white")
    }

    if(i <= 9){
        l1.append(box)
    } else if(i == 10){
        l1b.append(box)
    } else if(i>=11 && i <= 19){
        l2.append(box)
    } else if(i == 20){
        l2b.append(box)
    } else if(i>=21 && i <= 29){
        l3.append(box)
    } else if(i == 30){
        l3b.append(box)
    } else if(i>=31 && i <= 39){
        l4.append(box)
    } else if(i == 40){
        l4b.append(box)
    } else if(i>=41 && i <= 49){
        l5.append(box)
    } else if(i == 50){
        l5b.append(box)
    } else if(i>=51 && i <= 59){
        l6.append(box)
    } else if(i == 60){
        l6b.append(box)
    } else if(i>=61 && i <= 69){
        l7.append(box)
    } else if(i == 70){
        l7b.append(box)
    } else if(i>=71 && i <= 79){
        l8.append(box)
    } else if(i == 80){
        l8b.append(box)
    } else if(i>=81 && i <= 89){
        l9.append(box)
    } else if(i == 90){
        l9b.append(box)
    } else if(i>=91 && i <= 99){
        l10.append(box)
    } else if(i == 100){
        l10b.append(box)
    } else if(i == 101){
        l11.append(box)
    }

    

    
}