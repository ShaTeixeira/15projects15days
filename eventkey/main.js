const press = document.getElementById("press");

window.addEventListener("keydown", (event) => {
    press.innerHTML = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key} 
        </div>
        
        <div class="key">
            ${event.keyCode}
        </div>

        <div class="key">
            ${event.code}
        </div>
    `;
});
