const nav = document.getElementById('nav');
const innerLists = nav.querySelectorAll('#nav ul li ul');
const arrowDown = nav.querySelectorAll('.arrow-down');
const arrowUp = nav.querySelectorAll('.arrow-up');
const burger = nav.querySelector('#hamburger');
const closeBtn = document.getElementById('close-btn');
const menuBody = document.querySelector('#menu-body');
const togglers = document.querySelectorAll('.toggle');

nav.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        console.log(e.target.firstChild);
        const targetNav = document.querySelector(e.target.dataset.target);
        innerLists.forEach(innerList => {
            if(innerList == targetNav){
                innerList.classList.toggle('hidden');
                arrowDown.forEach(down => {
                    down.classList.toggle('hidden');
                });
                arrowUp.forEach(up => {
                    up.classList.toggle('hidden');
                });
            }
        })
    }
});

burger.addEventListener('click', () => {
    menuBody.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden')
});

closeBtn.addEventListener('click', () => {
    menuBody.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden')
});

togglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        toggler.classList.toggle('active');
        const content = toggler.nextElementSibling;
        if(toggler.classList.contains('active')){
            content.style.height = content.scrollHeight + 'px';
        } else{
            content.style.height = 0;
        }
    })
})