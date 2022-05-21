(function(){

    const dDaySection = document.getElementById("d-day-section");
    const dDayForm = dDaySection.querySelector("form");
    let dDayTitleInput = dDayForm.querySelector(".title");
    let dateValue = dDayForm.querySelector("form .select-date");
    const dDayTextCon = dDaySection.querySelector("p.text-content");
    const dDayTitle = dDayTextCon.querySelector('p span:nth-child(1)');
    const dDayNumber = dDayTextCon.querySelector('p span:nth-child(2)');
    const reSetBtn = dDayTextCon.querySelector("button");

    const HIDDEN = "hidden";
    const D_DAY = "dDay";
    const D_TITLE = "dDayTitle";

//디데이 계산 이벤트
    function dDaySubmit(e){
        e.preventDefault();
        dDayForm.classList.add(HIDDEN);
        //디데이 계산 후 나타내기
        const date = new Date();
        const dDay = new Date(dateValue.value);
        const distance = dDay- date;
        showDday(distance);
    
        //디데이 제목 나타내기
        const titleValue = dDayTitleInput.value;
        localStorage.setItem(D_TITLE, titleValue);  
        dDayTitle.innerText = titleValue;
        
    }
    
    function showDday(date){
        const day = Math.floor(date / (1000 * 60 * 60 * 24));
        dDayNumber.innerText = day;
        localStorage.setItem(D_DAY,day);
        dDayTextCon.classList.remove(HIDDEN);
    }
    
    if(localStorage.getItem(D_DAY) === null){
        dDayForm.classList.remove(HIDDEN);
        dDayTextCon.classList.add(HIDDEN);
        dDayForm.addEventListener("submit", dDaySubmit);
    }else{
        dDayForm.classList.add(HIDDEN);
        dDayNumber.innerText = localStorage.getItem(D_DAY);
        dDayTitle.innerText = localStorage.getItem(D_TITLE);
        dDayTextCon.classList.remove(HIDDEN);
    }

//리셋버튼 이벤트
    function resetHandler(){
        dDayTitleInput.value = null;
        dateValue.value = null;
        localStorage.removeItem(D_DAY);
        localStorage.removeItem(D_TITLE);
        dDayForm.classList.remove(HIDDEN);
        dDayTextCon.classList.add(HIDDEN);
        dDayForm.addEventListener("submit", dDaySubmit);
    }
    
    reSetBtn.addEventListener('click',resetHandler);

}());



