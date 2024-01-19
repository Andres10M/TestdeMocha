function describe(description, func) {
    console.log(description);
    func();
   }
   
   function it(msg,func) {
       try{
           func()
           console.log(msg+';test Passed');
       }catch(e) {
           console.log(msg +':Test Failed ');
       }
   }
    function assertEqual(a,b) {
       if(a!==b){
           throw new Error();
       }
    }
   
    function pow(x,n) {
       return Math.pow (x,n);
    }
   
    describe("pow", function(){
       it("raises to the nth power",function(){
       assertEqual(pow(2,3),8);
       });
    });

    function subtract(x,n) {
        return x-n ;
    }

    describe("pow", function(){
        it("raises to the nth power",function(){
        assertEqual(subtract(2,3),8);
        })
     });
     function sum(x,n) {
        return x+n ;
    }

    describe("pow", function(){
        it("raises to the nth power",function(){
        assertEqual(sum(2,3),8);
        })
     });

     function divide(x,n) {
        return x/n ;
    }

    describe("pow", function(){
        it("raises to the nth power",function(){
        assertEqual(divide(2,3),8);
        })
     });