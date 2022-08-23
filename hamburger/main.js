const btnToggle = document.querySelector('.toggle-btn');
const menu = document.querySelector('#sidebar');
const btn = document.querySelector('#btn')

function clickOnHamburger() {
    btnToggle.addEventListener('click', function() {
        btnToggle.classList.toggle('hidden');
        menu.classList.toggle('hidden');    
    })
}
function clickOnMenu() {
    btn.addEventListener('click', function() {
        btnToggle.classList.toggle('hidden')
        menu.classList.toggle('hidden')
        if (menu('hidden')) {
            
        }
    })
}

clickOnHamburger()
clickOnMenu()

// btnToggle.addEventListener('click', function() {
//     btnToggle.classList.toggle('hidden');
//     menu.classList.toggle('hidden');
    
// });
// btn.addEventListener('click', function() {
//     btn.classList.toggle('hidden')
//     menu.classList.toggle('hidden')
//     btnToggle.classList.toggle('hidden')
// });