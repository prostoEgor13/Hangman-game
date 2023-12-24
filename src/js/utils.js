
export const darkModehandle = () => {

    const darkModeSwitcher = document.getElementById('toggleDarkMode')
    const htmlElem = document.querySelector('html')

    if (localStorage.getItem('mode') === 'dark') {
        htmlElem.classList.add('dark')
        darkModeSwitcher.checked = true
    }

    darkModeSwitcher.addEventListener('click', () => {

        // if (htmlElem.classList.contains('dark')) {
        //     htmlElem.classList.remove('dark')
        // } else {
        //     htmlElem.classList.add('dark')
        // }
        htmlElem.classList.toggle('dark')
        if (htmlElem.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark')
        } else {
            localStorage.setItem('mode', 'light')
        }
    })
}