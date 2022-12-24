const filterBox = document.querySelectorAll('.box');

document.querySelector('navv').addEventListener('click',event => { 
    if (event.target.tagName !== 'LI' ) return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
    filterBox.forEach (elem => {
        elem.classList.remove('hide');
         if (!elem.classList.contains(filterClass)){
            elem.classList.add('hide');
         }
    });
});

function anim()
{
     let b=document.getElementById("brandd").setAttribute("class", "top1" )
}




const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
 if(!menuOpen){
    menuBtn.classList.add("open");
    menuOpen = true ;
 } else{
    menuBtn.classList.remove("open");
    menuOpen = false;
 }
})


function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}