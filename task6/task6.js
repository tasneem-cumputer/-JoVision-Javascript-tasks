document.getElementById("click1").addEventListener("click",function(){
    let num=[]
    for(let i=0;i<=100;i++){
        num.push(i);

    }
    for(let i=0;i<=num.length;i++){

        if(num[i]%3===0){
            num.splice(i,1);
            i--;
        }
    }
    console.log("the sum",num);

})
document.getElementById("click2").addEventListener("click",function(){

    let num=[]
    for(let i=0;i<=100;i++){
        num.push(i);
    }
    for(let i=100;i<=150;i++){
        num.push(i);

    }
    console.log("The result=",num);
})
document.getElementById("click3").addEventListener("click",function(){

let num=[]
for(let i=0;i<=100;i++){
    num.push(i);


}
for(let i=0;i<num.length;i++){
    num[i]=num[i]+3;
}
console.log("result",num);
})
document.getElementById("click4").addEventListener("click",function() {

    let num=[]
    for(let i=0;i<=100;i++){
        num.push(i);
        console.log(i);
    }
    for(let i=20;i<=40;i++){
         console.log("result=",num[i]);}
})
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
  

document.getElementById("click5").addEventListener("click",function() {
    let num=[]
    for (let i=0; i<=100;i++){

        num.push(i);
    }
    shuffleArray(num);
    console.log("the shuffle array=",num);
    num.sort( function (a,b){
        return b-a ;

    })
    console.log("the sort of descending order=",num);
    
   





})


