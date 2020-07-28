function display(data) { console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){
   for(let i=0; i<300; i++){
       console.log("hi")
   } 
}

setTimeout(printHello, 0);
debugger
const futureData = fetch("https://jsonplaceholder.typicode.com/todos/1");
futureData.then(res => res.json()).then(data=>console.log(data))

blockFor300ms()
console.log("me first");
