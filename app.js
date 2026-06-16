
let addBtn = document.querySelector("#notes");
let noteInput = document.querySelector("#note");
let container = document.querySelector(".Container");

addBtn.addEventListener("click", () => {

    let noteText = noteInput.value;

    if(noteText === ""){
        alert("Please enter a note");
        return;
    }

    container.innerHTML += `
        <div class="note">
            <p>${noteText}</p>

            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    `;

    noteInput.value = "";
});

container.addEventListener("click", (e) => {

    if(e.target.classList.contains("delete")){
        e.target.closest(".note").remove();
    }

    if(e.target.classList.contains("edit")){

        let noteCard = e.target.closest(".note");
        let noteText = noteCard.querySelector("p");

        let updatedText = prompt(
            "Edit your note",
            noteText.innerText
        );

        if(updatedText !== null && updatedText !== ""){
            noteText.innerText = updatedText;
        }
    }
});
