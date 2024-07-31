travel: [
    'travel1.jpg', 'travel2.jpg'
];
;
const images = imageSets[folder] || [];
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${folder} Image`;
    imagesContainer.appendChild(img);
});
// Function to show Window 4
function showWindow4() {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.window2').style.display = 'none';
    document.querySelector('.window3').style.display = 'none';
    document.querySelector('.window4').style.display = 'flex';
    document.querySelector('.window5').style.display = 'none';
}
// Function to show Window 5
function showWindow5() {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.window2').style.display = 'none';
    document.querySelector('.window3').style.display = 'none';
    document.querySelector('.window4').style.display = 'none';
    document.querySelector('.window5').style.display = 'flex';
}
