class Modal {
    constructor($root, options) {
        this.$root = $root
        this.handleClose = options.handleClose || function () { }
        this.handleCancel = options.handleCancel || function () { }
        this.handleOk = options.handleOk || function () { }
        this.bind()
    }
    bind() {
        this.$root.querySelector('.close').addEventListener('click', () => {
            this.hide()
            this.handleClose()
        })
        this.$root.querySelector('.cancel').addEventListener('click', () => {
            this.hide()
            this.handleCancel()
        })
        this.$root.querySelector('.ok').addEventListener('click', () => {
            this.hide()
            this.handleOk()
        })
    }
    hide() {
        this.$root.classList.remove('show')
        setTimeout(() => {
            this.$root.classList.remove('active')
        }, 200);
        background.classList.remove('active')
    }
}

const dialog = document.querySelector('.dialog')
const background = document.querySelector('.background')
const modal = new Modal(dialog, { handleCancel, handleOk })
document.querySelector('.modal-open').addEventListener('click', () => {
    dialog.classList.add('active')
    background.classList.add('active')
    setTimeout(() => {
        dialog.classList.add('show')
    }, 0);
})

function handleCancel() {
    console.log('cancel')
}
function handleOk() {
    console.log('ok')
}

