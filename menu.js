class Menu {
    constructor($root, name) {
        this.$root = $root
        this.name = name
        this.items = ['collapse', 'message', 'tab', 'tooltip', 'modal']
        this.render()
    }
    render() {
        this.$nav = document.createElement('ul')
        this.$nav.classList.add('nav')
        this.items.forEach(i => {
            const $li = document.createElement('li')
            $li.classList.add('nav-item')
            $li.classList.add(name)
            if (i === name) $li.classList.add('active')
            const $aTab = document.createElement('a')
            $aTab.href = `./${i}.html`
            $aTab.innerText = i
            $li.appendChild($aTab)
            this.$nav.appendChild($li)
        })
        this.$root.appendChild($nav)
    }
}

export default Menu