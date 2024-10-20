  
    
    // 스크립트를 아래에 배치해야 본 페이지가 먼저 로딩됨. 이는 참조에서도 해당되지않을까 생각.
    const dateFormMaker = function() {
        const inputYear = document.querySelector('#target-year-input').value;
        const inputMonth = document.querySelector('#target-month-input').value;
        const inputDate = document.querySelector('#target-date-input').value;

        // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
        const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`
        return dateFormat;
        
        // console.log(inputYear, inputMonth, inputDate);
    };

    const counterMaker = function() {
        const messageContainer = document.querySelector("#d-day-message");
        messageContainer.textContent = 'D-Day를 입력해 주세요.'
        
        const targetDateInput = dateFormMaker();
        const nowDate = new Date();
        // console.log(targetDateInput)
        const targetDate = new Date(targetDateInput).setHours(0,0,0,0);
        //TargetDate 가 오전 9시로 받아져있으니 .setHours(0,0,0,0)으로 해당 시간을 0시0분0초0ms로 변경해서 자정으로 세팅
        // console.log(nowDate)
        // console.log(targetDate)
        const remaining = (targetDate - nowDate) / 1000
        // 만약, remaining 이 0이라면, 타이머가 종료되었습니다. 출력
        // 수도 코드 작성해보기.. 필?요?

        if(remaining <= 0) {
            console.log('타이머가 종료되었습니다.');
        }else if(isNaN(remaining)){
            //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
            console.log('유효한 시간대가 아닙니다.')
        }

        const remainingDate = Math.floor(remaining / 3600 / 24) 
        const remainingHours = Math.floor(remaining / 3600) % 24
        const remainingMin = Math.floor(remaining / 60) % 60
        const remainingSec = Math.floor(remaining) % 60
        //targetDate - nowDate 의 값을 분류하여 날짜 시간 분 초로 보여지게 함       
        console.log(remainingDate , remainingHours, remainingMin, remainingSec)
    }
    counterMaker();

