function submitData(){
    const name= document.getElementById("name").value;
     const age= document.getElementById("age").value;
     const person = {
         name: name,
         age: age,
         timestamp: new Date().toLocaleString() };
         const { name: personName, age: personAge, timestamp } = person;

          alert( "Your name is: " + personName + "\nYour age is: " + personAge + "\nTimestamp: " + timestamp );

}