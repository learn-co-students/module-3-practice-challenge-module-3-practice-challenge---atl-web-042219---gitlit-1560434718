document.addEventListener("DOMContentLoaded", ()=>{
const MONSTER_URL = "http://localhost:3000";
const container = document.getElementById("monster-container")
const form = document.getElementById("monster-form")
let page = 1
form.addEventListener("submit", addMonster)

document.addEventListener('click', eventHandler)

function fetchMonsters(){
fetch(MONSTER_URL + `/monsters/?_limit=50&_page=${page}`)
.then(resp => resp.json())
.then(monsters =>{
    showMonsters(monsters)
})
}
fetchMonsters()

function showMonsters(monsters){
    monsters.forEach(m =>{
        container.innerHTML +=
        `<h2>Name: ${m.name}</h2>
        <h4>Age: ${m.age}</h4>
        <p>${m.description}</p>`
    })
}

function addMonster(e){
    e.preventDefault()
    let newName = document.getElementById("name")
    let newAge = document.getElementById("age")
    let newDescription = document.getElementById("description")

    let newMonster = {
        name: newName.value,
        age: newAge.value,
        description: newDescription.value
    }
    console.log(newMonster)
    
    fetch(MONSTER_URL+ "/monsters", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accepts: 'application/json'
        },
        body: JSON.stringify(newMonster)
    }).then(res => res.json())

    e.target.reset()
}

function eventHandler(e){
    if(e.target.id === "forward"){
        page++
        fetchMonsters(page)
    }else if(e.target.id === "back"){
        1<page?(page--, fetchMonsters(page)):alert("This is the first page... You can't go that way")
        }
    }
})