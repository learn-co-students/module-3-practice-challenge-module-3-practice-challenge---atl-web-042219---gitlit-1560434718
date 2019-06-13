/////////////////////////////VARIABLES///////////////////////////
const baseURL = "http://localhost:3000/monsters"//WORKING
const formDiv = document.querySelector("#create-monster")//WORKING
const monsterDiv = document.querySelector("#monster-container")//WORKING
const backButton = document.querySelector("#back")//WORKING
const nextButton = document.querySelector("#forward")//WORKING
////////////////////////////FUNCTIONS///////////////////////////
document.addEventListener("DOMContentLoaded", init)//WORKING

function init(){
  console.log("LET'S GET IT STARTED UH HUH!")

  addForm()
  releaseTheMonsters()

  nextButton.addEventListener("click", page2)
  backButton.addEventListener("click", previousPage)
}//END



//addForm WORKING
function addForm(){
  console.log("PUSH IT! PUSH IT REAL GOOD!")
  //should add the create Monster form to the formDiv
  const form = document.createElement('form')
  const input = document.createElement('input')
  form.action = baseURL
  form.method = "POST"
  form.innerHTML =`
  name: <input type="text" name="name">
  age: <input type="text" name="name">
  description: <input type="text" name="description">
  <input type="submit" value="Submit">
  `
  formDiv.appendChild(form)
  // form.addEventListener("submit", releaseTheMonsters())
}//END


//releaseTheMonsters WORKING
function releaseTheMonsters(){
  console.log("I FEEL GOOD! DA NA DA NA DA NA DA!")
  ///should release/FETCH the first 50 monsters from baseURL
  //should invoke the createMonsterHabitat function
  monsterDiv.innerHTML = ""
  fetch(baseURL)
  .then(res => res.json())
  .then(res => res.slice(0, 50).forEach(createMonsterHabitat))
}//END



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

function page2(){
  //should replace the 50 monsters shown on the page with the next 50 from baseURL
  //should have the next 50 on cue if the next button is pressed
  //should have the first 50 on cue if the back button is pressed
  // alert("YOU DA FUKKIN BEST!")
  monsterDiv.innerHTML = ""
  fetch(baseURL)
  .then(res => res.json())
  .then(res => res.slice(50, 101).forEach(createMonsterHabitat))
  nextButton.setAttribute("id", "2")
  nextButton.addEventListener("click", page3)
}//END

function previousPage(){
  //should load the previous 50 monsters onto the page
  if (nextButton.id == "2"){
    monsterDiv.innerHTML = ""
    nextButton.id = "forward"
    releaseTheMonsters()
  }
  else if (nextButton.id == "3"){
    monsterDiv.innerHTML = ""
    page2()
  }
  else if (nextButton.id == "4"){
    monsterDiv.innerHTML = ""
    page3()
  }
  else if (nextButton.id == null){
    monsterDiv.innerHTML = ""
    releaseTheMonsters()
  }
}//END

function page3(){
  monsterDiv.innerHTML = ""
  fetch(baseURL)
  .then(res => res.json())
  .then(res => res.slice(101, 151).forEach(createMonsterHabitat))
  nextButton.id = "3"
  nextButton.addEventListener("click", page4)
}//END

function page4(){
  monsterDiv.innerHTML = ""
  fetch(baseURL)
  .then(res => res.json())
  .then(res => res.slice(152, 202).forEach(createMonsterHabitat))
  nextButton.id = "4"
  nextButton.addEventListener("click", alert("THAT'S ALL FOLKS!"))
}
