//when you want to use a callback function in the higher other function you need to do it like the code below 
// function HigherOrderFunction(callbackFunction: (num: number))
//EX:
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, callback);
function callback(result) {
    console.log(result);
    //the only draw back of the callback and having a void return is that if you add a return statement 
    //it wont have an error with this 
    // return result
}
//Typescript helps callback functions because of the type mechanic 
//because the cb variable above has a parameter type of number typescript knows that there can only be one parameter num and that parameter num can only be a number
