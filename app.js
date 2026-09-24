let rules = [];
let filter = "all";

async function loadRules() {
    rules = await fetch("rules.json").then(r => r.json());

    document.querySelectorAll("[data-filter]").forEach(btn=>{
        btn.onclick=()=>{
            filter=btn.dataset.filter;
            render();
        };
    });

    document.getElementById("search").oninput=render;

    render();
}

function render(){

    const q=document.getElementById("search").value.toLowerCase();

    const list=rules.filter(r=>

        (filter==="all"||r.action===filter)&&

        (
            r.title.toLowerCase().includes(q)||
            r.category.toLowerCase().includes(q)||
            r.keywords.some(k=>k.toLowerCase().includes(q))
        )
    );

    const grid=document.getElementById("grid");

    grid.innerHTML=list.map(r=>`

<div class="card ${r.action.replace(" ","")}">

<div class="status">${r.action}</div>

<h3>${r.title}</h3>

<p>${r.ban}</p>

<small>${r.allow||""}</small>

</div>

`).join("");
}

loadRules();

if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js");
}
