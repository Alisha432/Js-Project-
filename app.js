
let btn = document.querySelector("#btn");
let note = document.querySelector("#note")
let noteContainer = document.querySelector(".noteContainer")

btn.addEventListener ("click",()=>{
    console.log("run")
 
    let main = document.querySelector(".mainContainer")
main.innerHTML += `<div class= card>
<h1>${note.value}</h1>
<div>
    <button id="edit" onClick =edit(event)>Edit</button>
    <button id="del" onClick =del(event)>Delete</button>
</div>
</div>`

})

// Edit section

const edit = (event)=>{
   let newNotes = prompt("Edit your notes",note.value)
   event.target.parentNode.parentNode.firstChild.nextSibling.innerHTML = newNotes
   note.value =""
}


const del = (event)=>{
     event.target.parentNode.parentNode.remove()
}


    

