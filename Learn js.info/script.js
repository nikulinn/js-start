let registrationForm = document.querySelectorAll("[data-regitration-form]");
console.log(registrationForm);

function save(){
    var text_to_save = registrationForm.value;
    localStorage.setItem("text", text_to_save); // save the item
}
save();

const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("notes");

let notesStorage = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);
    noteInput.value = "";
});