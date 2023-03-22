
const container = document.querySelector(".container");

//Ciclio for 1-100
for(let i = 1; i <= 100; i++){
    console.log(i)

    const box= document.createElement("div")

    box.classList.add("box")

    //Ciclo with multiple
    if(i % 3 === 0 && i % 5 === 0){
        box.classList.add("multiple35")
    } else if (i % 3 === 0){
        box.classList.add("multiple3")
    } else if (i % 5 === 0){
        box.classList.add("multiple5")
    } 

    box.append(i)

    container.append(box)
}