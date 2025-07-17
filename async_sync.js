////// SYNC//////

  console.log("Start");
  console.log("Middle");
  console.log("End");
         
////////ASYNC////
   console.log("Start");
   setTimeout(() =>{
   console.log("This runs later");
   },2000);
   console.log("End");    