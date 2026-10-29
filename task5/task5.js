document.getElementById("click").addEventListener("click",function(){
    let num=[];
    for(let i=0;i<=100;i++){
        num.push(i);
    }
    let sum = 0; 
    for (let i = 0; i < num.length; i++)
         {
            
         }
            for (let i = 0; i < num.length; i++) { 
                if (num[i] % 2 === 0)
                     { 
                        sum += num[i];
                     } 
            }
    
        
     console.log("Sum the even:", sum);

    
})