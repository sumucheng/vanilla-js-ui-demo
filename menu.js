
class Menu {
    constructor(item) {
        this.item = item
        this.render()
        // this.items = ['collapse', 'message', 'tab', 'tooltip', 'modal']
        // this.items.splice(this.items.indexOf(item), 1)
    }
    render() {
        this.$Menu = document.createElement('div')
        this.$Menu.innerHTML = `
            <div class="nav-container">
                <ul class="nav">
                    <li class="nav-item collapse"><a href="./collapse/collapse.html">collapse</a></li>
                    <li class="nav-item message"><a href="./message/message.html">message</a></li>
                    <li class="nav-item tab"><a href="./tab/tab.html">tab</a></li>
                    <li class="nav-item tooltip"><a href="./tooltip/tooltip.html">tooltip</a></li>
                    <li class="nav-item modal"><a href="./modal/modal.html">modal</a></li>
                </ul>
            </div>`
        document.body.appendChild(this.$Menu)
    }
    active() {
        console.log(1)
        const $ul = document.querySelectorAll('.nav-item')
        if (this.item) {
            Array.from($ul).forEach(li => {
                console.log(li)
                if (li.classList.contains(this.item)) {
                    li.classList.add('active')
                    const newA = document.createElement('a')
                    newA.innerText = this.item
                    li.firstChild.replaceWith(newA)
                }
            })
        }
    }
}

export default Menu