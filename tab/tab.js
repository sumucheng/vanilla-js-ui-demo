class Tab {
    constructor($container) {
        this.$tabs = $container.querySelector('.tabs')
        this.$tabTitles = $container.querySelectorAll('.tab-title')
        this.$tabContents = $container.querySelectorAll('.tab-content')
        this.bind()
    }
    bind() {
        this.$tabs.addEventListener('click', e => {
            if ([...e.target.classList].indexOf('tab-title') >= 0) {
                this.$tabTitles.forEach(tab => tab.classList.remove('active'))
                e.target.classList.add('active')
                this.$tabContents.forEach(content => content.classList.remove('active'))
                let index = [...this.$tabTitles].indexOf(e.target)
                this.$tabContents[index].classList.add('active')
            }
        })
    }
}
document.querySelectorAll('.container').forEach(container => new Tab(container))
