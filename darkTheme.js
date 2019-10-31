const button = document.getElementById('dark');
button.addEventListener('click', (e) => {
    // let isDark = false;
    // console.log(isDark)
    e.preventDefault();
    let [words, links, nav, showcases] = [Array.from(document.getElementsByTagName('h1')), Array.from(document.getElementsByTagName('a')), Array.from(document.getElementsByTagName('nav')), Array.from(document.querySelector('.showcase'))]
    document.querySelector('body').style = 'background: #222'

    // arrs = Array.from(arrs)
    console.log(words, links, nav, showcases);
    for(i = 0; i < words.length;i++){
       
        words[i].style = "color:white;"
        
    }
})