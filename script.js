console.log("hello")
let q = document.querySelectorAll(".q");
console.log(q.length);
let a = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < q.length; i++) {
    q[i].addEventListener("click", () => {
        a[i].classList.toggle("visible");
        q[i].classList.toggle("qvisible");
        arrow[i].classList.toggle("arrowreverse");
    })
}