(function(){
    const adviceSection = document.querySelector('#advice-section');
    const title = adviceSection.querySelector('.advice');
    
    
    function setAdvise(){
        let random = Math.floor(Math.random() * 100);
        console.log(random);
        const url = `https://api.adviceslip.com/advice/${random}`;
        fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const getAdvice = data.slip.advice;
            title.innerText = getAdvice;
        })
    }

    setAdvise();
    setInterval(setAdvise, `${1000 * 60 * 5}`);
})();

//사용한 API 주소
// https://api.adviceslip.com/ 
