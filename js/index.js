/////////////////////////////VARIABLES/////////////////////////
const baseURL = "http://localhost:3000/monsters"//WORKING
const formDiv = document.querySelector("#create-monster")//WORKING
const monsterDiv = document.querySelector("#monster-container")//WORKING
const backButton = document.querySelector("#back")//WORKING
const nextButton = document.querySelector("#forward")//WORKING
let page = document.querySelector("#page-number")
let num = 1
////////////////////////////FUNCTIONS//////////////////////////
document.addEventListener("DOMContentLoaded", init)//WORKING

//init WORKING
function init(){
  console.log("LET'S GET IT STARTED UH HUH!")

  addForm()
  releaseTheMonsters()

  nextButton.addEventListener("click", nextPage)
  backButton.addEventListener("click", previousPage)


}//END



//addForm WORKING
function addForm(){
  console.log("PUSH IT! PUSH IT REAL GOOD!")
  //should add the create Monster form to the formDiv
  const form = document.createElement('form')
  const input = document.createElement('input')
  form.innerHTML =`
  name: <input type="text" name="name">
  age: <input type="text" name="age">
  description: <input type="text" name="description">
  <input type="submit" value="Submit">
  `
  formDiv.appendChild(form)
  formDiv.addEventListener("submit", newMonster)
}//END

//
function newMonster(e){
  e.preventDefault()
  // console.log("Last step Queen! Finish Strong!")

  const monster = {
    name: e.target.name.value,
    age: e.target.age.value,
    description: e.target.age.value
  }

  fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify(monster)
  })
  alert("Your monster has been created!")
}//END



//releaseTheMonsters WORKING
function releaseTheMonsters(){
  console.log("I FEEL GOOD! DA NA DA NA DA NA DA!")
  ///should release/FETCH the first 50 monsters from baseURL
  //should invoke the createMonsterHabitat function
  monsterDiv.innerHTML = ""
  fetch(`${baseURL}/?_limit=50&_page=${num}`)
  .then(res => res.json())
  .then(res => res.forEach(createMonsterHabitat))
  page.innerText = num
}//END


//createMonsterHabit WORKING
function createMonsterHabitat(monster){
  console.log("Don't worry about the time, you're doing good!")
  //should add the monster to the monsterDiv
  newDiv = document.createElement('div')
  newDiv.innerHTML =
  `<h2>${monster.name}</h2>
  <h3>${monster.age}</h3>
  <p>${monster.description}</p>`
  monsterDiv.appendChild(newDiv)
}//END


//nextPage WORKING
function nextPage(){
  //should replace the 50 monsters shown on the page with the next 50 from baseURL
  // alert("YOU DA FUKKIN BEST!")
  num += 1
  monsterDiv.innerHTML = ""
  fetch(`${baseURL}/?_limit=50&_page=${num}`)
  .then(res => res.json())
  .then(res => res.forEach(createMonsterHabitat))
  nextButton.setAttribute("id", `${num}`)
  page.innerText = num
}//END



//previousPage WORKING
function previousPage(){
  //should load the previous 50 monsters onto the page
  //alert("DA BES I EVA HAD!")
  if (nextButton.id == "forward")
    alert("where you goin dawg? page zero? smh")
  else if (nextButton.id == "2"){
    num -= 1
    monsterDiv.innerHTML = ""
    nextButton.id = "forward"
    releaseTheMonsters()
    page.innerText = num
  }
  else if (nextButton.id > 2){
    num -= 1
    // debugger
    monsterDiv.innerHTML = ""
    fetch(`${baseURL}/?_limit=50&_page=${num}`)
    .then(res => res.json())
    .then(res => res.forEach(createMonsterHabitat))
    nextButton.id = `${num}`
    page.innerText = num
  }
}//END
