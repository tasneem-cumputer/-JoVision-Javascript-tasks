document.getElementById("click me").addEventListener("click",function(){
    let num=[];
    for(let i=0;i<=100;i++){
        num.push(i);
    }
    let sum = 0; 
    for (let i = 0; i < num.length; i++)
         {
             sum += num[i];
    
        }
     console.log("Sum:", sum);

    
})