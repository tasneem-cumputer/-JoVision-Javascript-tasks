document.getElementById("GitIp").addEventListener("click", function () { 
    fetch("https://api.ipify.org/") 
    .then(response => response.text()) 
    .then(ip => { document.getElementById("GitIp").textContent = ip; }) 
    .catch(error => console.error(error));
});