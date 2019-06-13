document.addEventListener('DOMContentLoaded',function(){
  const MON_URL = 'http://localhost:3000/'
  let createMonster = document.getElementById('create-monster')
  let monContainer = document.getElementById('monster-container')
  
  
  fetch_monsters()
  
  function fetch_monsters() {
    fetch(MON_URL+`monsters/?_limit=5`)
    .then (resp => resp.json())
    .then (monsters => displayMonster(monsters))
  }

  function displayMonster(monsters) {
    
    let ul = document.createElement('ul')
    monContainer.appendChild(ul)
    monsters.forEach(monster=> {
      ul.innerHTML += `<p><li><h3><em>${monster.name}</em></h3>
                        <h5>Age:</h5>${monster.age}<br>
                        <h5>Description:</h5>${monster.description}</li>
                      </p><br>`
    })  
  }
  

  function createForm() {
    const a = document.createElement('form')
    const b = document.createElement('input')
    const c = document.createElement('input')
    const d = document.createElement('input')
    const e = document.createElement('button')
    
    a.id='monster-form'
    b.id='name'
    c.id='age'
    d.id='description'
    
    b.placeholder='name...'
    c.placeholder='age...'
    d.placeholder='description...'
    e.innerHTML='Create'
    
    a.appendChild(b)
    a.appendChild(c)
    a.appendChild(d)
    a.appendChild(e)
    
  }

 
})