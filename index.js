document.querySelector(".open").addEventListener("click", function () {
    document.querySelector(".list").classList.toggle("add");
});

document.querySelector(".more").addEventListener("click", function () {
    document.querySelector(".skill-set").classList.toggle("add");
});

// const list = document.querySelectorAll(".list");
// list.forEach(element=>{
//     element.addEventListener("click",function(){
//         list.forEach(ele=>{
//             ele.classList.remove("active");
//         })
//         this.classList.add("active");
//     })
// })