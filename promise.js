/* function savetodb(){
    return new Promise((resolve, reject) => {
    let netspeed = Math.ceil(Math.random()*10);
    if(netspeed> 4){
        resolve("Promise resolved");
    }
    else{
        reject("Promise is rejected");
    } 
    })
}
savetodb("Harsh")
.then(() => {
  console.log("1. promiseeeeeeeeeeeeeeeen kiya tha nibha diya")
  return savetodb("taneja")
  })
  .then(()=>{
    console.log("Ye wala bhi nibha diya huh!");
  })  
.catch(()=>{
    console.log("Promise krte hi todne ke liye h dono nhi kre hehe")
}) */

// promise function without async and await

/* let h1 = document.querySelector("h1");
let n = 1;
function color(color) {
    return new Promise((resolve)=>{

    setTimeout(() => { 
        h1.style.color = color;
        resolve("color changed");
    }
    ,1000) 
    
})
}
color("red")
.then(()=>{
    console.log("Color Changed to red");
    return color("blue");
})
.then(()=>{
    console.log("color changed to blue");
    return color("purple");
})
.then(()=>{
    console.log("color changed to purple");
}) */

//promise function wih async and await

/* let h1 = document.querySelector("h1");
let n = 1;
function color(color) {
    return new Promise((resolve)=>{

    setTimeout(() => { 
        h1.style.color = color;
        resolve("color changed");
        console.log("Color changed to "+ color)    }
    ,1000) 
    
})
}
async function printcolors(){
    await color("red");
    await color("purple");
    await color("orange");
    await color("green");
    await color("blue");
}

printcolors(); */


// Calling an api through async and await 

/* let url = "https://catfact.ninja/fact";

async function getfacts() {
try{  
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}catch(e){
    console.log("Error : " ,e);
}
} */

// Calling an api through async and await and axios

/* let url = "https://catfact.ninja/fact";

async function getfacts() {
try{  
    let res = await axios.get(url);
    console.log(res.data.fact);
}catch(e){
    console.log("Error : " ,e);
}
} */

//calling api through html and js

/* let btn = document.querySelector("button");
let body = document.querySelector("body");

async function getfacts(){
    let np = document.createElement("p");
    body.append(np);
    let url = "https://catfact.ninja/fact"
    let res = await axios.get(url);
    np.textContent = res.data.fact;
}


btn.addEventListener("click", ()=>{
    getfacts();
}) */