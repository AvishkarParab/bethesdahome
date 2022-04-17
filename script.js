const list = document.querySelectorAll('.nav-item a');
const menu = document.querySelector('.menu');
const sec = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
    let current= '';
    sec.forEach(section =>{
        const secTop = section.offsetTop;
        const secHeight = section.clientHeight;
        if(pageYOffset === 0)
            current='home';
        else if(pageYOffset >= (secTop - secHeight/2)){
            current = section.getAttribute('id');
        }
    })
    console.log(current);
    list.forEach(element => {
        element.classList.remove('active');
        if(element.classList.contains(current)){
            element.classList.add('active');
        }
    });
})
