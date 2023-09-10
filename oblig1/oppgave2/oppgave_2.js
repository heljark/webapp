const users = [
    {id: 0, name: "Ole", age: 30},
    {id: 1, name: "Ola", age: 20},
    {id: 2, name: "hans", age: 50},
    {id:3, name: "Henri", age: 45},
    {id:4 , name: "Siv", age: 19}
];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterbutton = document.getElementById("filter");
const usersUl = document.getElementById("users");

const writeUser = ()=>{
    users.map(user=>{
        const {id, name, age} = user;
        let li = document.createElement("li");
        li.innerHTML = 'ID: ${id} - Name: ${name} - Age: ${age}';
        usersUl.appendChild(li);
    })
}
writeUser();

const searchHandler = (x)=>{
    usersUl.innerHTML = "";

    let userFound = user.filter(user=>user.name.toLowerCase().inckudes(x.targer.value.toLowerCase()));

    userFound.map(user=>{
        const {id, name, age} = user;
        let li = document.createElement("li");
        li.innerHTML = 'ID: ${id} - Name: ${name} - Age: ${age}';
        usersUl.appendChild(li);
    })
}

const filterHandler = ()=>{
    usersUl.innerHTML = "";

    let age = ageInput.value;
    let usersByAge = users.filter(user=>user.age >= age);

    usersByAge.map(user=>{
        const {id, name, age} = user;
        let li = document.createElement("li");
        li.innerHTML = 'ID: ${id} - Name: ${name} - Age: ${age}';
        usersUl.appendChild(li);
    });
}

nameInput.addEventListener("keyperss", searchHandler);
filterbutton.addEventListener("click", filterHandler);
