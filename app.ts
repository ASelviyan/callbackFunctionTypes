//when you want to use a callback function in the higher other function you need to do it like the code below 
// function HigherOrderFunction(callbackFunction: (num: number))
//EX:
function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, callback)

function callback(result) {
    console.log(result)
    //if you add a return statement to the callback which has a  void return type ity will actually ignore this 
    //because it knows that its not suppose to return anything 
}

//Typescript helps callback functions because of the type mechanic 
//because the cb variable above has a parameter type of number typescript knows that there can only be one parameter num and that parameter num can only be a number
