function display(data){
    console.log(data)
}

// facade function
const futureData = fetch("https://jsonplaceholder.typicode.com/todos/1");
futureData.then(data => console.log(data)); // unfullfilled property

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => res.json())
//   .then(data => console.log(data));

console.log("me first")
