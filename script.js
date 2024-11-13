

let a=document.getElementById('bid');
function func1(){
    let obj1 = {
        1:"Brilliant",
      2 : "Amazing",
      3 : "Aura"
      }
      let obj2 = {
          1: "Business",
          2: "Fashion",
          3: "Tech"
        };
      let obj3 = {
        1: ".co",
        2: "Limited",
        3: "Hub"
      };
      
      
      
    let x=Math.random();
    let first,second,third;
    {
        if(x<0.33) 
            first="Amazing"
        else if(x>=0.33 && x<0.66)
            first="Brilliant"
        else
            first="Aura"
    }
    
    let y=Math.random();
    {
        if(y<0.33) 
            second="Business"
        else if(y>=0.33 && y<0.66)
            second="Fashion"
        else
            second="Tech"
    }
    
    let z=Math.random();
    {
        if(z<0.33) 
            third=".co"
        else if(z>=0.33 && z<0.66)
            third="Limited"
        else
            third="Hub"
    }
    
    console.log(first +" "+ second + " " +  third)
}
a.addEventListener('click',func1);
