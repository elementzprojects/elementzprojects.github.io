const svgLogo = document.getElementById('logo');
const content = document.getElementById('content');
content.style.display = 'none';
setTimeout(() => {
    content.style.display = 'block';
    svgLogo.style.display = 'none';
}, 5000);