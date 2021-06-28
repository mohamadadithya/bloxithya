window.onscroll = () => {navOnScroll()}

function navOnScroll() {
    const navbar = document.querySelector('.navbar')
    if(document.documentElement.scrollTop > 50) {
        navbar.classList.add('custom-shadow')
    } else {
        navbar.classList.remove('custom-shadow')
    }
}

function closeNewsletter() { 
    const newsletter = document.querySelector('.newsletter')
    newsletter.style.display = 'none'
}

// Bootstrap Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})