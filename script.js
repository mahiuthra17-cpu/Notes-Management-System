const API="http://localhost:8080/notes";

load();

function save(){

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title:title.value,
description:description.value
})
}).then(load);
}

function load(){

fetch(API)
.then(r=>r.json())
.then(data=>{

list.innerHTML="";

data.forEach(n=>{

list.innerHTML+=`
<div class="note">
<h3>${n.title}</h3>
<p>${n.description}</p>
<button onclick="del(${n.id})">Delete</button>
</div>
`;

});

});
}

function del(id){
fetch(API+"/"+id,{
method:"DELETE"
}).then(load);
}
