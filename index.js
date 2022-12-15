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





