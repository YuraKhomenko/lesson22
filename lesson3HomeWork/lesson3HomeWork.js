
   function sequence(start, step) {
       return function() {
           return start = start + step;
       }
      }

   let take = function(gen, x) {
      let result = [];
      for( let i = 0; i < x; i++) {  
      result[i] = gen();
   }
   return result;
}
   let generator = sequence(0, 3);
   
   console.log(generator()); 
   console.log(generator()); 
   console.log(generator()); 
   console.log(generator()); 
  
   let gen2 = sequence(0, 2);
   console.log(take(gen2, 5));
   console.log(take(gen2, 6));
   console.log(take(gen2, 7));





   //let generator = function(start, step) {
      //     return function() {
      
      //     }
      // }
   // ПРИМЕР:
   // var generator = sequence(10, 3);
   // var generator2 = sequence(7, 1);

   // var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
// take(gen, x)