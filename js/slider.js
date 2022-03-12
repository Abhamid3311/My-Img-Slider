const myImg = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
    'images/pic-10.jpg'
];

let imgIndex = 0;
const img = document.getElementById('my-img');
setInterval(() => {
    if (imgIndex >= myImg.length) {
        imgIndex = 0;
    }
    const imgurl = myImg[imgIndex];
    img.setAttribute('src', imgurl);
    imgIndex++;
}, 2000);