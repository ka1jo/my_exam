
function refresh(){
   AOS.refreshHard();
}

const filterBox = document.querySelectorAll('.box1');

document.querySelector('navv').addEventListener('click',event => { 
   AOS.init();
    AOS.refreshHard();
    if (event.target.tagName !== 'LI' ) return false;
    let filterClass = event.target.dataset['f1'];
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
("click", () => {
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


function refresh(){
   AOS.refreshHard();
}
