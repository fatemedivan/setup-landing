let openbtn = document.querySelector(".open");
let closebtn = document.querySelector(".close");
let ullist = document.querySelector(".list");

openbtn.addEventListener("click", () => {
    openbtn.classList.remove("max-sm:block")
    ullist.classList.remove("max-sm:hidden")
    closebtn.classList.remove('hidden')
})

closebtn.addEventListener('click' , ()=>{
    ullist.classList.add("max-sm:hidden")
    closebtn.classList.add('hidden')
    openbtn.classList.add('max-sm:block')
})