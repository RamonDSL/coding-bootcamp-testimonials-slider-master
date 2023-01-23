const next = document.querySelector('.btn-next')
const prev = document.querySelector('.btn-prev')
const slides = document.querySelectorAll('.slide')

let current = 0


display()
function display() {
    slides.forEach(slide => {
        slide.style.display = "none"
    })
    
    slides[current].style.display = "flex"
}

function prevSlide() {
    current--
    if (current < 0) {
        current = slides.length - 1
    }
    display()
}

function nextSlide() {
    current++
    if (current > slides.length - 1) {
        current = 0
    }
    display()
}

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)
