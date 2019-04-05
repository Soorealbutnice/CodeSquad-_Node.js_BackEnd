### module

---

// 해당 파일을 외부에서 사용할 수 있도록 내보내기

`module.exports = 변수명;`



// 아래와 같이 외부에 접근 가능한 것을 선언할 수 있다. 

```javascript
module.exports = {

	var1,

	var2

}
```



// exports한 파일의 코드를 불러오기

```javascript
var part =require('./mpart.js');
part.var1
part.var2
```



//  아래의 코드는 위와 같은 역할을 한다. 

// 비구조화 할당을 이용해 var.js파일에서 var1과 var2라는 변수를 가져와 쓰는 것

```
const { var1, var2 } = require('./var');
```



#### 예제

---

module 예제로 스타크래프트 게임을 만들어보았다. 

- Marine.js 파일에 Marine 클래스 생성
- Starcraft.js 파일에서 Marine.js를 require해서 Marine 객체를 만든다.
- 각각의 마린의 체력은 100, 공격력은 10이다.
- call by reference로 공격당하는 마린 객체를 넘겨주어 상대방의 hp를 깎는다. 
- 마린 한 마리의 체력이 0이 되면 게임이 끝남.

```javas
// Marine.js
class Marine {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

     Attack(attacked) {
        attacked.hp -= this.attack;
        console.log(this.name + "이 " + attacked.name+"을 공격했습니다.");
        console.log(attacked.name+"의 hp가 "+(attacked.hp+20)+"에서 "+attacked.hp+"가 되었습니다.");
        console.log();

        if (attacked.hp <= 0) {
            console.log(attacked.name+"이 죽었습니다.");
            console.log(this.name+"이 이겼습니다.")
        }
    }

};

module.exports = Marine;



// Starcraft.js
let Marine = require('./Marine');

let marineA = new Marine('marineA', 100, 20);
let marineB = new Marine('marineB', 100, 20);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

while ( marineA.hp > 0 && marineB.hp > 0) {
    let num = getRandomIntInclusive(1,2);

    if (num == 1) {
        marineA.Attack(marineB);
    } else {
        marineB.Attack(marineA);
    }

}


실행결과
marineB이 marineA을 공격했습니다.
marineA의 hp가 100에서 80가 되었습니다.

marineA이 marineB을 공격했습니다.
marineB의 hp가 100에서 80가 되었습니다.

marineA이 marineB을 공격했습니다.
marineB의 hp가 80에서 60가 되었습니다.

marineB이 marineA을 공격했습니다.
marineA의 hp가 80에서 60가 되었습니다.

marineA이 marineB을 공격했습니다.
marineB의 hp가 60에서 40가 되었습니다.

marineA이 marineB을 공격했습니다.
marineB의 hp가 40에서 20가 되었습니다.

marineA이 marineB을 공격했습니다.
marineB의 hp가 20에서 0가 되었습니다.

marineB이 죽었습니다.
marineA이 이겼습니다.
```

