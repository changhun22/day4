//돼지 저금통 만들기
//클로저에 대해 이해하기(죽고싶어도 죽지못하는??)

function  piggySave(){

    //지역 변수
    let total = 0

    //함수가 끝나고 나면 지역변수(total)가 사라져야 하는데 지역변수(total)가 살아있다
    //이것을 클로저라고 한다
    return function add(money) {
        total += money
        console.log(total)
    }
}

//원래 개념이라면 piggysayve 함수가 외부에서 실행되면 안되는데 클로저 현상으로 인해 계속 남아있어서 쓸수있다. (js에서만 가능한 현상)
const p1 = piggySave()

p1(100)
p1(100)
p1(100)
p1(100)

console.log("-------------------")

const p2 = piggySave()

p2(50000)
p2(10000)
p2(40000)