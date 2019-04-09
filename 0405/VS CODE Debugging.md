### VS CODE Debugging

---

아래의 문서는 내장되어 있는 Node.js debugger에 기반한다. 그러나 대부분의 개념과 특징은 다른 debugger에도 적용 가능하다. 



BreakPoint를 설정하기 위해 BreakPoint를 설정하려고 하는 라인에 커서를 놓고 F9를 입력하거나 몇 번째 라인인지 보여주는 숫자 왼쪽에서 왼쪽 클릭을 하면 된다. 그러면 빨간 점이 생겨 BreakPoint가 생긴 것을 보여준다.



Launch Configuration 파일을 만들어서 사용하면 디버깅의 디테일한 부분을 설정할 수 있어서 도움이 된다.  



VS Code에는 두가지 주요한 디버깅 모드가 있다. 하나는 Launch이고 하나는 Attach이다. 



ATTACH 설정은 VS 코드 디버거를 앱이나 프로세스에 연결하는 것이고 LAUNCH는 VS 코드 디버거가 연결되기 전에 앱을 디버그 모드에서 어떻게 실행시키느냐에 관한 것이다. 



- 새로운 설정 추가하기

이미 존재하는 launch.json 파일에 설정을 추가하기 위해 다음의 방법을 사용할 수 있다.

1. 커서가 configurations 배열의 안에 있을 때 자동완성 기능 사용하기
2. 배열의 시작점에서 Add Configuration 버튼으로 자동완성 snippet열어 사용하기
3. 디버그 모드에서 Add Configuration 선택하기.



뭔지는 모르겟지만 일단 해보자.

Add Configuration 버튼을 눌러 Launch Program을 선택하자 

그리고 F5를 눌러 실행해보자



디버스 세션이 시작하면 Debug toolbar가 에디터의 상단 부분에 생긴다.

Continue / Pause : `F5`

Step Over : `F10`

Step Into : `F11`

Step Out : `shift + F11`

Restart : `Crtl + Shift+ F5`

Stop : `Shift + F5`

Start without Debugging : `Ctrl + F5`





Logpoints는 다른 형태의 breakpoint로 코드를 중단시키지 않고 코드의 실행이 해당 지점에 다다르면 사전에 작성한 메시지를 출력한다.



- Breakpoints란 : 중단점. 
  - edit을 하면 조건에 따라 중단시킬 수도 있고
  - 코드를 중단시키지 않고 해당 포인트에서 메시를 실행할 수 있다.
- watch사용법
  - VARIABLES에는 모든 정보가 다 뜨기 때문에 특정 변수 값을 보는데에는 불편함이 있지만 watch에 변수를 등록하면 등록한 변수의 값이 변하는 걸 추적하면서 볼 수 있다. 
  - 표현식으로도 볼 수 있다. 
- call stack 의 의미
  - LIFO (Last In First Out).
  - 함수를 호출하면 함수는 call stack에 실행 된 순서대로 쌓이고 쌓인 역순으로 실행된다. 
- Step over / Step into/ Step out
  - Step Over : 한 줄 한 줄 코드를 실행함
  - step into : 



