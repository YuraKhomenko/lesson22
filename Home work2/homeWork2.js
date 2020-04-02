/*
let price = 0;
while(true) { 
let memory = prompt("How much memory do you want in phone?");
    
if (memory ===64) {
   price = 300; 
}
else if (memory === 128) {
    price = 500; 
}
else if (memory === 256) {
    price = 700; 
} 
else {
  if (memory === null || !+memory || memory !== 64 || memory !== 128 || memory !== 256) {
    prompt("Число должно быть 64, 128, или 256");   
}
}
}
alert("Price is " + price + "$");

let img = "iphoneblue.jpg";
let img1 = "iphoneyellow.jpg";
let img2 = "iphonegrey.jpg";
let img3 = "iphonegreen.jpg";
 document.write(`<img src="${img2}">`);


  
 let arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === "Tue" || arr[i] === "Thu") {
     continue;
   }
   console.log(arr[i]);
 }
 price = 0;
 let memory;
 
 do {
  memory = prompt("How much memory do you want in phone?");
}
while (memory === null || !+memory || memory !== 64 || memory !== 128 || memory !== 256) {
  prompt("Число должно быть 64, 128, или 256");   {
  }
 if (memory === null || !+memory) {
  alert("Wrong"); 
 } else {
        if (+memory === 64) {
          price = 300; 
       }
       else if (+memory === 128) {
           price = 500; 
       }
       else if (+memory === 256) {
           price = 700; 
       } 
       }
      
       alert("Price is " + price + "$");
 */
       let man = {
        name: "Bob",
        surname: "Brown",
        email: "bobik90@icloud.com"
    }
   
   // Перебор значений свойств в обьекте - man
   memory = prompt("How much memory do you want in phone?");
    for (let item in man) { 
      if(memory)        // создание той переменной, которая будет перебирать свойства в объекте man
        document.write(man[item]);  //выводим на екран переменную которая перебирала свойство
    }
   