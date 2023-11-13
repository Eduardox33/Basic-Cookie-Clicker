// BASIC STUFF  

const COOKIE = document.getElementById("COOKIE")
let outclicks = document.getElementById("Clicks")
let clicks = 0;
let incrementer = 1;

// STORE

const add1 = document.getElementById("add1");
const add10 = document.getElementById("add10");
const times100 = document.getElementById("times100");
const times1000 = document.getElementById("times1000");

let buy1 = document.getElementById("buy1");
let buy2 = document.getElementById("buy2");
let buy3 = document.getElementById("buy3");
let buy4 = document.getElementById("buy4");

let bought1 = false;
let bought2 = false;
let bought2c = 0;
let bought3 = false;
let bought4 = false;
var interval = null;

// BUTTONS

COOKIE.addEventListener("click",ADDER);
add1.addEventListener("click",store1);
add10.addEventListener("click",store2);
times100.addEventListener("click",store3);
times1000.addEventListener("click",store4);

// FUNCTIONS

function ADDER(){
    clicks = clicks + incrementer;
    outclicks.innerHTML=`Credits: ${clicks}`
};

function TADDER1(){
    clicks = clicks + 1;
    outclicks.innerHTML=`Credits: ${clicks}`;
}

function TADDER2(){
    clicks = clicks + incrementer+9;
    outclicks.innerHTML=`Credits: ${clicks}`;
}

function store1(){
    if(bought1 === false && clicks>=100){
        clicks = clicks - (100+incrementer);
        ADDER();
        interval = setInterval(TADDER1,1000);
        bought1 = true
        buy1.innerHTML="Out of stock"
    }
};

function store2(){
    if(bought2 === false && clicks >=500){
        clicks = clicks - (500+incrementer);
        ADDER();
        clearInterval(interval);
        setInterval(TADDER2,1000);
        bought2c = bought2c + 1;
        add10.innerHTML=`500.c (${bought2c}/3)`
        if (bought2c == 3){
            bought2 = true;
            buy2.innerHTML="Out of stock"
        }
    }
};

function store3(){
    if (bought3 === false && clicks >= 20000){
        clicks = clicks - (20000+incrementer);
        ADDER();
        incrementer = 100;
        bought3 = true;
        buy3.innerHTML = "Out of stock"
    }
};

function store4(){
    if (bought4 === false && clicks >= 400000){
        clicks = clicks - (400000+incrementer);
        ADDER();
        incrementer = 1000;
        bought4 = true;
        buy4.innerHTML = "Out of stock"
    }
};