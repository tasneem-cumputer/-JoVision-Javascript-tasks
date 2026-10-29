function setage(){
    const name =document.getElementById("name").value;
    fetch("https://api.agify.io?name=" + encodeURIComponent(name)) 
    .then(response => response.json()) 
    .then(data => { const { name, age } = data; alert( "Your name is: " + name + "\nYour age is: " + age ); }) 
    .catch(error => { alert("Error: " + error.message); });






}