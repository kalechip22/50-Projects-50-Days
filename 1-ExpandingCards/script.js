const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        // Remove active from all other classes
        removeActiveClasses()
        // Add active to panel clicked on
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}