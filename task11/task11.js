document.getElementById("GitIp").addEventListener("click", function () { 
    
    fetch("https://api.ipify.orgx") 

      .then(response => response.text()) 

              .then(ip => { document.getElementById("GitIp").textContent = ip; })

    .catch(error => { alert(error); }); });