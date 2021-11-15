//두 원의 넓이 차

function getArea(radius){
    const area = Math.pow(radius,2) * Math.PI //원의 넓이 공식
    return area
}

function  getTotal(r1, r2){

    //r1 첫번째 반지름 원의 넓이 r2두번째 반지름 원의 넓이의 차
    return Math.abs(getArea(r1) -getArea(r2)) //Math.abs 절대값 함수
}

console.log(getTotal(10,20))