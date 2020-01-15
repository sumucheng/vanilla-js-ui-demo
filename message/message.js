class Message {
    constructor({ type = 'success', text = '' }) {
        this.type = type
        this.text = text
        this.render()
        this.bind()
    }
    render() {
        this.$msg = document.createElement('div')
        this.$msg.classList.add('msg')
        this.$msg.innerText = this.text
        document.body.appendChild(this.$msg)
    }
    bind() {
        setTimeout(() => this.$msg.classList.add('active'), 100)
        setTimeout(() => {
            this.$msg.classList.remove('active')
            setTimeout(() => {
                this.$msg.parentNode.removeChild(this.$msg)
            }, 1000);

        }, 3000)
    }
}

document
    .querySelector('.success')
    .addEventListener('click', () => new Message({ type: 'success', text: 'This is a success message' }))

