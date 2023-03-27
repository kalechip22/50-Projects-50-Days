const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currActive = 1

// Event listener for next button
next.addEventListener('click', ()=>{
    currActive++
    
    if(currActive > circles.length) {
        currActive = circles.length
    }

    update()
})

// Event listener for prev button
prev.addEventListener('click', ()=>{
    currActive--
    
    if(currActive < 1) {
        currActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        // Adds active class to all active numbers
        if(idx < currActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // Calculates how long line should be
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // Disables button based on currently active button
    if(currActive === 1) {
        prev.disabled = true
    } else if(currActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}