const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

/* Use toggle to add/remove class list */
/* Use focus to focus on the given element */
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})