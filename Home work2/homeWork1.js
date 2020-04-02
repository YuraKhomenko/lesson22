let price = 0;
let memory;
let color;
let yellow = "iphoneyellow.jpg";
let green = "iphonegreen.jpg";
let blue = "iphoneblue.jpg";
do {
   memory = prompt("Введите память 64, 128 или 256", 0);
} while (memory=== true) {
   if (memory === null || !+memory) {  
      prompt("Введіть значення");
      //continue;     // не можу розібратися із цією частиною, коли ввожу пусте значення, завершується ротота.
  }                   // або йде зациклювання, або взагалі код не працює
   if (+memory === 64) {
      price = 300;
      color = prompt("Введите цвет телефона");
   if (color === yellow) { 
      document.write(`<img src="${yellow}" alt="" width="500px" height="700px">`);   //тут не виводиться значення     
   }
   alert("Price is " + price + "$");
   //document.write(`<img src="${yellow}" alt="" width="500px" height="700px">`); // а тут працює ? 
}
 else  if (+memory === 128) {
      price = 500;
      color = prompt("Введите цвет телефона");
      if (color === green) {        
}
   alert("Price is " + price + "$");
   document.write(`<img src="${green}" alt="" width="500px" height="700px">`);
}
//} else if (color === yellow){           
 //  }
  // alert("Price is " + price + "$");
   //document.write(`<img src="${yellow}" alt="" width="500px" height="700px">`);
  else if (+memory === 256) {
      price = 700;
      color = prompt("Введите цвет телефона");
      if (color === blue) {           
} 
   alert("Price is " + price + "$");
   document.write(`<img src="${blue}" alt="" width="500px" height="700px">`); 
}
else {
   alert ("Incorrect type");

}
   }






/*

while (true) {
let memory = prompt("How much memory do you want in phone?");
if (memory === null || !+memory) {
    prompt("Введіть значення"); 
    continue;  
}
if ( +memory !== 64 || +memory !== 128 || +memory !== 256) {
  alert("Число должно быть 64, 128, или 256");
     
}
   if (+memory === 64) {
    color = prompt("Введите цвет телефона");
    if (color === yellow) { 
      price = 300;
      color = yellow; 
   }
   document.write(alert("Price is " + price + "$"));
  
  }
}
*/
