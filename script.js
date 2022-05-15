let navs=document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        navs.classList.add("sticky");
    }
    else{
        navs.classList.remove("sticky");
        
    }
})
function clk(){
    let clk=document.getElementsByClassName(".btn-1");
    window.addEventListener("click", ()=>{
    window.location.href="Registration Form/index.html";
})
}
function bazooka() {
    let gun=document.getElementsByClassName(".boom");
    window.addEventListener("click", ()=>{
        window.location.href="Moving Car/index.html";
    })
}
