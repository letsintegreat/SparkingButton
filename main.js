let icons = $('.magic')

for (let i = 0; i < icons.length; ++i) {
    icons[i].onclick = function (element) {
        icons[i].classList.toggle('enabled');
    }
}