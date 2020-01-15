class Tooltip {
    constructor($btn) {
        this.$btn = $btn
        this.$btn.tooltip = this
        this.align = $btn.dataset.align
        this.text = $btn.dataset.text
        this.render()
        this.$btn.show = this.show.bind(this)
        this.$btn.hide = this.hide.bind(this)
        this.show()
    }
    render() {
        this.$div = document.createElement('div')
        this.$div.innerText = this.text
        this.$div.classList.add(this.align, 'tip')
        this.$btn.appendChild(this.$div)
    }
    show() {
        this.$div.classList.add('active')
    }
    hide() {
        this.$div.classList.remove('active')
    }
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        if (btn.tooltip) {
            btn.show()
        }
        else {
            new Tooltip(btn)
        }
    })
    btn.addEventListener('mouseleave', () => {
        btn.hide()
    })
}
)
