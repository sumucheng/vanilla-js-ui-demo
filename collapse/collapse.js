class Collapse {
    constructor($container, isAccordion = false) {
        this.$panel = $container.querySelector('.panel')
        this.$item = $container.querySelectorAll('.item')
        this.isAccordion = isAccordion
        this.bind()
    }
    bind() {
        this.$panel.addEventListener('click', e => {
            const item = e.target.parentElement
            if (hasClass(e.target, 'header')) {
                if (!this.isAccordion) toggle(item)
                else {
                    if (hasClass(item, 'active')) off(item)
                    else {
                        this.$item.forEach(i => off(i))
                        on(item)
                    }
                }
            }
        })
    }
}
new Collapse(document.querySelector('.container'), true)

function off(el) {
    el.classList.remove('active')
}
function on(el) {
    el.classList.add('active')
}
function toggle(el) {
    el.classList.toggle('active')
}
function hasClass(el, className) {
    return [...el.classList].indexOf(className) >= 0
}