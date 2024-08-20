let inputEl = document.getElementById("inp");

let textEl = document.querySelector(".text");

function Add(){
    if(inputEl.value == ""){
        alert("Enter your text");
    }else{
        let newEl = document.createElement("ul");
        newEl.innerHTML = `${inputEl.value} <i class="fa-solid fa-xmark"></i>`;
        textEl.appendChild(newEl);
        inputEl.value = "";
        newEl.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEl.remove();
        }
    }
}