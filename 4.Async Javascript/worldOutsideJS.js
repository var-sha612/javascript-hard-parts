function printHello() {
    console.log("Hello");
}

function blockFor1Sec(){

for(let i=0; i <= 300; i++)
{
    console.log("hi")
}
}

debugger;
setTimeout(printHello, 0)
blockFor1Sec()
console.log("Me first!");
