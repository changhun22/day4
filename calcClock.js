//시간값과 분값
function calcTotal(hourValue, minValue) {

    //시침의 각도 구하느 함수 --> 입력 12시 출력 각도
    function calcHour(hour) {

        const result = (360 / 12) * (hour % 12)

        return result
    }

    //분침의 각도를 구하는 함수
    // const calcMin = min => {
    //     retunr (360/60) * min
    // }

    //화살표 함수로 위 코드와 동일하게 표현할수 있다
    const calcMin = min => (360 / 60) * min


    //분침에 따라서 시침의 이동 각도를 구하는 함수
    function getExtra(min) {

        return ((360 / 12) / 60) * min

    }


//분침에 따라서 시침의 이동 각도를 구하는 함수
function getExtra(min) {

    return ((360 / 12) / 60) * min

}

    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180? 360 -result: result
}

console.log(calcTotal(12,38))

//12시 38분을 기준으로