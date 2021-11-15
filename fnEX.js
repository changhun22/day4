

function printNums(start, end) {

    for (let i = start; i < end ; i++) {
        console.log(i)
    }

    return //return이라는 키워드를 반환이라고 생각 하지말고 난끝났습니다 라고 생각해라
}

const result = printNums(1,10)
console.log(result)

function  printNames(str1, str2 = "111", str3 = "222"){
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

//printNames()
printNames("AAA")
// printNames("AAA","BBB")
// printNames("AAA","BBB","CCC")

function calc(a, b, fn){
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a+1,b+1)

    return result

}

console.log(calc(10, 20,(x,y) => x + y))
console.log(calc(10, 20,(x,y) => x * y))
console.log(calc(10, 20,(x,y) => x / y))

