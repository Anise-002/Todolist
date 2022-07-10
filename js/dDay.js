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
    const SIZE = "Size";
    const TODAY_DDAY = `Today is D-day`;
    const MARGINTOP = "marginTop";
    const SAVEDATE = 'saveDate';


//디데이 계산 이벤트
    function dDaySubmit(e){
        e.preventDefault();
        dDayForm.classList.add(HIDDEN);
        //디데이 계산 후 나타내기
        const date = new Date();
        const dDay = new Date(dateValue.value);
        const distance = dDay- date - (1000 * 60 * 60 *9);
        const day = Math.ceil(distance / (1000 * 60 * 60 * 24));
        localStorage.setItem('saveDate', dDay);
        showDday(day);
    
        //디데이 제목 나타내기
        const titleValue = dDayTitleInput.value;
        localStorage.setItem(D_TITLE, titleValue);  
        dDayTitle.innerText = titleValue;
    }

//입력값 나타내기    
    function showDday(date){
        let ChangeFont;
        let ChangeMargin;
        if(date === 0){
            dDayNumber.innerText = TODAY_DDAY;
            localStorage.setItem(D_DAY,TODAY_DDAY);
        }else{
            if(window.innerWidth > 1919){
                ChangeFont = "100px";
                ChangeMargin = "-10px";
            }else{
                ChangeFont = "56px";
                ChangeMargin = "0px";
            }
            dDayNumber.innerText = date;
            dDayNumber.style.fontSize = ChangeFont;
            dDayNumber.style.marginTop = ChangeMargin;
        }
        dDayTextCon.classList.remove(HIDDEN);
    }
    
//로컬 저장소에서 값 가져오기
    const saveDate = new Date(localStorage.getItem(SAVEDATE));
    const getTitle = localStorage.getItem(D_TITLE);
    
    if(localStorage.getItem(SAVEDATE) === null){
        dDayForm.classList.remove(HIDDEN);
        dDayTextCon.classList.add(HIDDEN);
        dDayForm.addEventListener("submit", dDaySubmit);
    }else{
        //디데이 현재 날짜로 다시 계산
        const today = new Date();
        const distance = saveDate - today - (1000 * 60 * 60 *9);
        const day = Math.ceil(distance / (1000 * 60 * 60 * 24));
        dDayForm.classList.add(HIDDEN);
        dDayTextCon.classList.remove(HIDDEN);
        dDayTitle.innerText = getTitle;
        showDday(day);
    }

//리셋버튼 이벤트
    function resetHandler(){
        dDayTitleInput.value = null;
        dateValue.value = null;
        localStorage.removeItem(D_DAY);
        localStorage.removeItem(D_TITLE);
        localStorage.removeItem(SIZE);
        localStorage.removeItem(MARGINTOP);
        dDayNumber.style.fontSize = localStorage.getItem(SIZE);
        dDayNumber.style.marginTop = localStorage.getItem(MARGINTOP);
        dDayForm.classList.remove(HIDDEN);
        dDayTextCon.classList.add(HIDDEN);
        dDayForm.addEventListener("submit", dDaySubmit);
    }

    reSetBtn.addEventListener('click',resetHandler);

}());



