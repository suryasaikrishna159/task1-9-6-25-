let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let display = document.querySelector("#display");

let intervalId=null;

btn1.addEventListener("click", () => {

    intervalId = setInterval(() => {
        let date = new Date();
        display.innerText = date.toDateString() + " " + date.toTimeString();
    }, 1000); 
});

btn2.addEventListener("click", () => {
    clearInterval(intervalId);
    
});
