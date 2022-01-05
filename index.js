let cleantheroom = new Promise(function(resolve, reject){
     let isclean = false;

     if(isclean){
         resolve('cleaned');
     }else{
         reject('not cleaned');
     }


});
cleantheroom.then(function(fromresolve){
    console.log('the room is' + fromresolve);
}).catch(function(fromreject){
    console.log('the room is' + fromreject)
});
    

