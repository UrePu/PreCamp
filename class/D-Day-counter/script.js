  
    const container = document.querySelector('#d-day-container')
    const messageContainer = document.querySelector("#d-day-message");
    container.style.display = 'none'
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>'
    
    // 스크립트를 아래에 배치해야 본 페이지가 먼저 로딩됨. 이는 참조에서도 해당되지않을까 생각.
    const dateFormMaker = function() {
        const inputYear = document.querySelector('#target-year-input').value;
        const inputMonth = document.querySelector('#target-month-input').value;
        const inputDate = document.querySelector('#target-date-input').value;

        // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
        const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`
        return dateFormat;
        
    };

    const counterMaker = function(data) {
        const nowDate = new Date();
        const targetDate = new Date(data).setHours(0,0,0,0);
        const remaining = (targetDate - nowDate) / 1000
        // 만약, remaining 이 0이라면, 타이머가 종료되었습니다. 출력
        // 수도 코드 작성해보기.. 필?요?
        if(remaining <= 0) {
            messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>'
            messageContainer.style.display = 'flex'
            container.style.display = 'none'
            setClearInterval();
            return;
        }else if(isNaN(remaining)){
            //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
            messageContainer.style.display = 'flex'
            messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>'
            container.style.display = 'none'
            setClearInterval();
            return;
        }
        const remainingObj = {
            remainingDate : Math.floor(remaining / 3600 / 24),
            remainingHours : Math.floor(remaining / 3600) % 24,
            remainingMin : Math.floor(remaining / 60) % 60,
            remainingSec : Math.floor(remaining) % 60
        }    

        const timeKeys = Object.keys(remainingObj);
        const documentArr = ['days', 'hours', 'min', 'sec']
        let i = 0;
        for (let tag of documentArr){
            document.getElementById(tag).innerHTML = remainingObj[timeKeys[i]]; 
            i++
        };

    };

    const intervalIdArr =[]
    const starter = function () {
        setClearInterval();
        const targetDateInput = dateFormMaker();
        //TargetDate 가 오전 9시로 받아져있으니 .setHours(0,0,0,0)으로 해당 시간을 0시0분0초0ms로 변경해서 자정으로 세팅
        container.style.display='flex';
        messageContainer.style.display = 'none'
        counterMaker(targetDateInput);
        const intervalId = setInterval(() => counterMaker(targetDateInput),1000);
        intervalIdArr.push(intervalId);
    }

    const setClearInterval = function () {
        for(let i = 0; i < intervalIdArr.length; i++){
            clearInterval(intervalIdArr[i]);
        }
    }

    const resetTimer = function () {       
        container.style.display = 'none'
        messageContainer.style.display = 'flex'
        messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>'
        setClearInterval();
    }