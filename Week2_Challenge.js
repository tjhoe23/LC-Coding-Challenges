function FirstReverse(str) { 
  
    var splitStr = str.split("");
    var reverseStr = splitStr.reverse("");
    var joinStr =  reverseStr.join("");
    
    return joinStr; 
  
  }
     
  
  console.log(FirstReverse(readline()));