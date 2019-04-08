TypeError: sum is not a function

: module.exports는 객체를 리턴한다. 따라서 객체의 메서드를 호출할 때 사용하는 . 프로퍼티 접근자를 사용해야 한다.



TypeError: Assignment to constant variable.

: const 변수는 값을 재할당 할 수 없다. 때문에 for문의 조건부에 변수를 선언할 때는 let을 사용해야 한다.



ReferenceError: result is not defined

: 자바스크립트의 변수 유효범위 정리



SyntaxError: Illegal continue statement: no surrounding iteration statement



* typeof는 연산자, 모든 타입을 확인할 수 없다.
* 숫자는 isNaN으로 체크해야 함.
* subroutine : 하위 함수. 조건문 하나라도 하위 함수를 만들어 추상화시켜 사용하면 가독성과 재사용성이 좋아진다.