//oppgave 1
//get inner html elements first
const removeText = document.querySelector("#remove");
const removebutton = document.querySelector("#remove-btn");

//function for remove text
const removeFun = ()=>{
    removeText.innerHTML = "";
}

//event lisner for remove button
removebutton.addEventListener("click", removeFun);

//oppgave 2
//get inner html element agein
const changeText = document.querySelector("#change");
const changebutton = document.querySelector("#change-btn");

//function for text changer
const changeTextFun = ()=>{
    changeText.textContent = "Hello world!";
}

//event lisner for change button
changebutton.addEventListener("click", changeTextFun);

//oppgave 3
//get inner html elements first
const input = document.querySelector("#input");
const paragraph = document.querySelector("#input-text");

//function for handle input text from input
const inputHandler = (x) =>{
    paragraph.innerHTML = x.target.value;
}

// eventlisner
input.addEventListener("keypress", inputHandler);

//oppgave 4
const objList = ["object 1", "object 2", "object 3"];

const ul = document.querySelector("#ul");
const listbutton = document.querySelector("#write-list");

const writeListHandler = (y) =>{
    const liList = objList.map(list=>{
        return `<li> &{list} </li>`;
    });

    ul.innerHTML = liList;
}

const writehandlertwo = ()=>{
    objList.map(list=>{
        let li = document.createElement("li");
        li.innerHTML = list;
        ul.appendChild(li);
    })

    listbutton.removeEventListener("click", writehandlertwo);
}

listbutton.addEventListener("click", writehandlertwo);

//oppgave 5
//geting html elemnts
const select = document.querySelector("#select");
const selectInput = document.querySelector("#text");
const selectbutton = document.querySelector("#create");
const placeholder = document.querySelector("#placeholder");

const createElementHandler = ()=>{
    let element = document.createElement(select.value);
    element.innerHTML = selectInput.value;
    placeholder.appendChild(element);
}

selectbutton.addEventListener("click", createElementHandler);

//oppgave 6
const liList = Array.from(document.querySelectorAll("#list li"));
const ulList = document.querySelector("#list");
const removelistbotton = document.querySelector("#remove-li");

const removeListHandler = ()=>{
    liList.pop();

    ulList.innerHTML = "";

    liList.map(list=>{
        let liElement = document.createElement("li");

        liElement.innerHTML = list.textContent;

        ulList.appendChild(liElement);
    })
}

removelistbotton.addEventListener("click", removeListHandler);

//oppgave 7
const inputDisable = document.querySelector("#name");
const disableButton = document.querySelector("#order");

const disableHandler = ()=>{
    if(inputDisable.value.length > 4){
        disableButton.style.borderColor = "red";
        disableButton.setAttribute("disabled", true);
    }
}

disableButton.addEventListener("click", disableHandler);

//oppgave 8
//source for odd and even:https://www.w3schools.com/cssref/tryit.php?filename=trycss3_nth-child_odd_even

const odd = document.querySelectorAll(".childern li:nth-child(odd)");
const even = document.querySelectorAll(".children li:nth-child(even)");
const colorButton = document.querySelector("#color");

const colorChangeHandler = ()=>{
    for(let elem of odd){
        elem.style.display = "inline-block";
        elem.style.border = "2px solod green";
        elem.style.color = "red";
    }

    for(let elem of even){
        elem.style.display = "inline-block";
        elem.style.border = "2px solid pink";
        elem.style.color = "pink";
    }
}

colorButton.addEventListener("click", colorChangeHandler);