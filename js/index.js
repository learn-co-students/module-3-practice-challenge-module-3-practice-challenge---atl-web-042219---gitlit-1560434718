const monster_url = `http://localhost:3000/monsters/`

document.addEventListener('DOMContentLoaded', function() {
  fetch_monster()
  font()

  function font() {
    document.getElementById("p").style.fontSize = "xx-large";
  }

  function fetch_monster() {
    return fetch(monster_url)
    .then (res => res.json())
    .then (json => json.forEach(display_monster))
  }

  function display_monster(ms) {
    const mc = document.getElementById('monster-container')
    const h2 = document.createElement('h2')
    h2.innerText = ms.name
    const h4 = document.createElement('h4')
    h4.innerText = ms.age
    const p = document.createElement('p')
    p.innerText = ms.description
    mc.appendChild(h2)
    h2.appendChild(h4)
    h4.appendChild(p)
  
  }

  function create_monster(ms) {
    const cm = document.getElementById('create-monster').innerHTML += `
    <input id="monster-id" type="text" name="comment" placeholder="Add Comment" required/>
    <input type="submit" value="Submit"/>`
  }
  })