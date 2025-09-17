const toggleTheme = () => {

    console.log("Test!");
    let currentTheme = localStorage.getItem('theme') || 'light';

    console.log(currentTheme);
    if (currentTheme === 'dark') {
        currentTheme = 'light'
    }
    else {
        currentTheme = 'dark'
    }    

    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
}



