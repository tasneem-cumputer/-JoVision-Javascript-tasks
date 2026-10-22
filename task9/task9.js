document.getElementById("getIp").addEventListener("click", function () { fetch("https://api.ipify.org/") 
    .then(response => response.text()) 
    .then(data => console.log(data)) 
    .catch(error => console.error(error));
});