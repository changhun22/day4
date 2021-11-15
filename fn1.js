//js 함수 정의

function getArea() {
    console.log("-------------------------")
    console.log("-------------------------")
    console.log("-------------------------")
}

const v1 = getArea

//둘이 같은 값이 출력된다 (결과적으로 함수느 변수이다)
console.log(v1)
console.log(getArea)

//별도의 메모리에서 실행할수 있다
getArea()
v1()

// 함수 -> 로직을 위해 코드(문/식)를 묶어둔 덩어리
// 변수로 할당-> 함수이름
// 함수는 () -> 실행 -> 메모리공간을 사용 -> 필요한 변수들이 생긴다 -> 지역변수(local varible)
// 변수 == 함수 -> js에서는 1급객체 (first class object라고 부른다)
// 그러므로 js함수는 변수가 들어갈수 있는 모든 곳에 다 들어갈수있다 ex) sort (람다식 화살표함수)
