/*let ol = document.getElementById("list")

fetch('https://my-json-server.typicode.com/Nurikenov/testdb/memleketter')
  .then(response => response.json())
  .then(memleketter => memleketter.forEach((memleket, index) => {
  
    if (index % 2 == 0) {
        let li = document.createElement('li');
        ol.appendChild(li);
        li.textContent = memleket.name + " " + memleket.code;
        li.className = "active"
    } else {
        let li = document.createElement('li');
        ol.appendChild(li);
        li.textContent = memleket.name + " " + memleket.code;
    }

  })
  );*/




  fetch('https://my-json-server.typicode.com/Nurikenov/testdb/memleketter')
    .then(response => response.json())
    .then(countries => countries.forEach((country) => {
  let li = document.createElement("li")
  let ol = document.getElementById("spisok")
  ol.appendChild(li);
  li.textContent = country.name + " " + country.code;   
  }));

  
  

