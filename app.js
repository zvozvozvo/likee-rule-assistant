let rules=[];

async function loadRules(){
  rules=await fetch("rules.json").then(r=>r.json());

  render(rules);

  document.getElementById("search").addEventListener("input",e=>{
    const q=e.target.value.toLowerCase();

    render(rules.filter(r=>
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.keywords.some(k=>k.includes(q))
    ));
  });
}

function render(list){
  const grid=document.getElementById("grid");

  grid.innerHTML=list.map(r=>`
    <div class="card ${r.action.replace(" ","")}">
      <h3>${r.title}</h3>
      <b>${r.action}</b>
      <p>${r.ban}</p>
      <small>${r.allow}</small>
    </div>
  `).join("");
}

loadRules();
