const body = document.querySelector('body');
const menu = document.querySelector('#menu');
const hi = document.querySelector(`input[type='text']`);
const menuI = document.querySelector('.fa-align-justify');

const section2 = document.createElement('section');
const list = document.createElement('ul');

menu.addEventListener('click', function(){
    let hasList = list.classList.contains('list');
    let hasSection = section2.classList.contains('container2');
    
    const close = document.createElement('span');
    close.textContent = 'X';
    close.setAttribute('id','close');

    if(hasSection && hasList){
    section2.classList.remove('container2');
    list.classList.remove('list');
    list.innerHTML = '';
    
    hi.style.animationdirection = 'reverse';
    }
    else{
    section2.classList.add('container2');
    list.classList.add('list');

    list.innerHTML =`<li>Learn</li>
                    <li>Blog</li>
                    <li>Donate</li>
                    <li>About</li>
                    <li>Contact</li>`
    }
})

    section2.appendChild(list);
    body.prepend(section2);
