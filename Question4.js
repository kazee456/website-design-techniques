let test =7;

setTimeout(function (){
    test =42;
},2000);//Schedules a function to be executed after a delay of 2000 milliseconds (2 seconds)

console.log(test);//At this point, the value is still  because the
// setTimeout function is scheduled to execute after a delay.

console.log("code after myFunction call");