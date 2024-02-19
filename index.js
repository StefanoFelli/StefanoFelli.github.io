const name_span = document.querySelector(".span-name");
const name_text = "Stefano";

const home_section = document.querySelector(".hero-home");

const burger_menu = document.querySelector(".nav-burger-menu");
const nav_items = document.querySelector(".nav-items");
const close_btn = document.querySelector(".nav-close-btn");
const nav_items_list = nav_items.getElementsByTagName("li");
const nav_items_anchor = nav_items.getElementsByTagName("a");

const busto = document.querySelector("busto");


var i = 0;

function type_writer() {
    if(i < name_text.length) {
        name_span.innerHTML += name_text.charAt(i);
        i++;
        setTimeout(type_writer, 350);
    }
}

// Si esegue non appena si apre la pagina
type_writer();


// elementi attivi
for (let index = 0; index < nav_items_list.length; index++) {
    nav_items_anchor[index].addEventListener("click", () => {
        const current = document.querySelector(".li-active");
        if (current) {
            current.classList.remove("li-active");
            nav_items_list[index].classList.add("li-active")
        }
    });  
}


// Burger menu event listener

burger_menu.addEventListener("click", () => {
    nav_items.classList.toggle("open");
});

for (let index = 0; index < nav_items_list.length; index++) {
    nav_items_list[index].addEventListener("click", () => {
        nav_items.classList.remove("open");
    })
    
}





