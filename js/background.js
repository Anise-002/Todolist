const whiteModeBackImg = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
const darkModeBackImg = ["5.jpg","6.jpg","7.jpg","8.jpg"];
const body = document.body;


function changeBackground(){
    if(body.dataset.mode == "dark" ){
        const darkBack = darkModeBackImg[Math.floor(Math.random() * darkModeBackImg.length)];
        body.style.backgroundImage = `url(../img/${darkBack})`;
    }else if(body.dataset.mode === "white"){
        const whiteBack = whiteModeBackImg[Math.floor(Math.random() * whiteModeBackImg.length)];
        body.style.backgroundImage = `url(../img/${whiteBack})`;
    }
}

changeBackground();
//3분마다 배경화면 바뀜
setInterval(changeBackground, `${1000 * 60 * 3}`);
