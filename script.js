const root = document.querySelector(':root');
const btns = document.querySelectorAll(".num");
const reset = document.querySelector("#reset");
const del = document.querySelector("#del");
const inp = document.querySelector("#input");
const eql = document.querySelector(".final");
const rng = document.querySelector("#themes");



btns.forEach((clik)=>{
    clik.addEventListener("click",(e)=>{
        inp.value = inp.value + clik.dataset.num;
    })
})

del.addEventListener("click",(e)=>{
    inp.value = inp.value.slice(0,inp.value.length-1);
})

reset.addEventListener("click",(e)=>{
    inp.value = "";
})

eql.addEventListener("click",(e)=>{
    inp.value = eval(inp.value);
})>

rng.addEventListener("change",(e)=>{
    switch (rng.value) {
        case "1":
            chng(first);
            break;
        case "2":
            chng(second);
            break;
        default:
            chng(third);
            break;
    }
})

const array = [
    "--main-bg-color",
    "--keypad-bg-color",
    "--screen-bg-color",
    "--btn-rem-bg-color",
    "--btn-toggle-bg-color",
    "--btn-bg-color",
    "--num-text-color",
    "--rem-text-color",
    "--inp-text-color",
    "--final-text-color",
    "--btn-num-shadow",
    "--btn-rem-shadow",
    "--btn-final-shadow"
];
const second = [
    "hsl(0, 0%, 90%)",
    "#d1cccc",
    "hsl(0, 0%, 93%)",
    "hsl(185, 42%, 37%)",
    "hsl(25, 98%, 40%)",
    "hsl(45, 7%, 89%)",
    "#35352c",
    "#ffffff",
    "#35352c",
    "#ffffff",
    "#a69d91",
    "#1b5f65",
    "#893901"
];
const first = [
    "#3a4764",
    "hsl(223, 31%, 20%)",
    "hsl(224, 36%, 15%)",
    "#637097",
    "#d03f2f",
    "#eae3dc",
    "#444b5a",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#b4a597",
    "#404e72",
    "#93261a"
];
const third = [
    "hsl(268, 75%, 9%)",
    "hsl(268, 71%, 12%)",
    "hsl(268, 71%, 12%)",
    "hsl(281, 89%, 26%)",
    "hsl(176, 100%, 44%)",
    "hsl(268, 47%, 21%)",
    "hsl(52, 100%, 62%)",
    "#ffffff",
    "hsl(52, 100%, 62%)",
    "hsl(198, 20%, 13%)",
    "hsl(290, 70%, 36%)",
    "hsl(285, 91%, 52%)",
    "hsl(177, 92%, 70%)"
]

function chng(array2){
    for(let i=0; i<array.length; i++){
        chn(array[i],array2[i]);
    }
}
function chn(variable ,color){
    root.style.setProperty(variable,color);
}


