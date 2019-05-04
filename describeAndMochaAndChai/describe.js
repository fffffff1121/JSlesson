describe("pow",function(){

  function MakeX(x){

    var newX = x * x * x;
      
      it("Число " + x + " возведенное в третью степень - " + newX ,
          function() {

            assert.equal(pow(x , 3) , newX );

          } );

    
  }

  for(i = 1; i <= 5; i++) {

    MakeX(i);

  }

});