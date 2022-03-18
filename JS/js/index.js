var x = 15 ;// variables
var y = 10;
//Conditions
/* if (x > y) {
  result = "good job";
} else {
  result = 20;
}*/
if (x > y) {
  var result_1 = "good job";
} else if ( x < y ){
  var result_1 = "you are in else if"; 
} else {
  var result_1 = x + y;
}
document.getElementsByClassName("ternaryP")[0].innerHTML = "This is " + result_1 + " dude" ;
//console.log(result_1);

//Below is the above code written using the ternary operator
var result_2 = x > y ? "good job" : "Very Bad";
//document.write( result_2 );
//console.log(result_2);

//Switch
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
var day;
document.getElementById("daySwitch").innerHTML = "Today is " + day;

/*******************************************************/
var name = prompt("Please enter your Name");
var ageEntered = prompt("enter your age");
 if(ageEntered !== "" && ageEntered !== null ){
   var ageMsg = document.getElementById("sayHello").innerHTML = "Hello you " + name+ " and you are "  + ageEntered + "  years old";
//   alert("Hello you " + ageEntered + "kid");
//   console.log("if statement");
 }else{//  console.log("else"); 
 }
var userAge = document.getElementById("userInput").value;

document.getElementById("sayHello").innerHTML = name;
document.getElementById("ageInpt").innerHTML = result ;
// var result = ageEntered < 18 ? "young" : "Old";
/***************************************/
function ageFunction(){  
	var userAgeEntered = document.getElementById("userAgeInpt").value;
  var ageResult;
  var ageLimit = 18;//Limit rather than writing a number for condition
	  if ( userAgeEntered < ageLimit ) {
		 ageResult = "You are not Eligible to try";
     document.getElementById("ageResultP").innerHTML = ageResult ;
    } else {
		 ageResult = "you are older than 18";
     document.getElementById("ageResultP").innerHTML = ageResult ;
	  }
	 // return ageResult;
  //console.log (ageResult);
}

/**************************************************/
function formFunction() {
    var at = document.getElementById("email").value.indexOf("@");
    var age = document.getElementById("age").value;
    var fname = document.getElementById("fname").value;
    submitOK = "true";

    if (fname.length > 10) {
        alert("The name may have no more than 10 characters");
        submitOK = "false";
    } 

    if (isNaN(age) || age < 1 || age > 100) {
        alert("The age must be a number between 1 and 100");
        submitOK = "false";
    }

    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
}
