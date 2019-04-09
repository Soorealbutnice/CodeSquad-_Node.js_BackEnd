#### 알고리즘

----

**알고리즘 문제를 선택하는 방법**

1. 아주 쉬운 문제를 아주 빠르게 푸는 연습
2. 내가 풀 수 있는 것보다 약간 어려운 수준의 문제를 푸는 것

30분을 봐도 풀지 못하면 정답을 보는 게 도움이 됨. 어려운 문제를 오래 붙잡고 있는 게 좋은 게 아님. 보스몹은 만렙 쌓고 잡자.



#### GIt

---

**Git != GitHub. Git과 GItHub는 다르다. **

- Git은 DVCS (<u>분산형</u> 버전 관리 시스템)

- GIthub는 SNS 개념 



**Git을 왜 사용할까?**

- 협업할 때 도움이 됨 (충돌 해결)
- 이전 버전으로 돌아갈 수 있음 (롤백, 이력관리)

GIt의 효용은 혼자 공부할 때 느끼기는 어렵고 사이즈가 큰 서비스를 만들거나 누군가와 협업할 때 의미를 발견할 수 있다.



> 사용법

Github을 이용하는 데는 두 가지 방법이 있다. 첫 번째는 Github에 저장소를 만들거나 이미 있는 저장소를 clone해와서 사용하는 방법이고 두 번째 방법은 내 컴퓨터에 있는 작업을 Github에 만들어 놓은 저장소에 올려놓고 사용하는 방법이다. 



먼저 첫 번째 방법.

##### 1. Github에서 저장소를 먼저 만들고 clone 하는 방법

먼저 Github에 가입한 뒤 New Repository로 저장소를 만든다.



cmd를 이용해 Github에 있는 파일을 다운받아 작업할 폴더로 이동한다.

```bash
my@SOOREAL MINGW64 ~ (master)
$ cd e:

my@SOOREAL MINGW64 /e
$ cd CodeSquad

// 작업 할 폴더로 이동 후 git clone [repository 주소]를 입력
my@SOOREAL MINGW64 /e/CodeSquad
git clone https://github.com/Soorealbutnice/CodeSquad_Node.js_BE
```

끝! 



##### 2.  내 컴퓨터에 작업할 폴더를 만들고 Github에 올리는(remote) 방법 

두번 째 방법은 이미 내 컴퓨터에 작업하던 코드가 있고 GIthub에 새로 저장소를 만들어 파일을 올리는 방법이다.

먼저 작업하던 폴더의 루트 디렉토리, 즉 제일 상위에 해당하는 위치로 이동한다.

git init 명령어로 해당 폴더에 git 저장소를 만든다.



`git init`

git init을 실행하면 git init을 실행한 현재 위치에 .git이라는 폴더가 만들어지는데 이게 바로 .git저장소이다. 

여기에  stage 파일도 만들어지고 commit 객체도 만들어진다. 여기가 바로 local repository. 

이 폴더를 삭제하면 그 폴더에서는 git을 사용할 수가 없다. 최초에 git init을 실행하면 stage와 commit이 비어 있다. 아무것도 없다. 그냥 local저장소 껍데기만 하나 있는 상태다.



git init으로 내 컴퓨터의 폴더를 깃 저장소로 만들었으니 이제 내 폴더와 깃 저장소를 연결해보자.

`git remote add origin <깃허브 저장소 주소>`

`ex) git remote add origin https://github.com/Soorealbutnice/CodeSquad_Node.js_BE`

끝!



일단 이렇게 하면 내 컴퓨터와 Github의 Repository(저장소)를 연결할 수 있다. 

지금이야 간단하게 느껴지지만 처음 git 공부할 때는 여기까지 오는 것도 쉽지 않았다.

---

내 저장소와 Github 저장소를 연결했으니 이제 작업한 파일을 올려보자.

작업 파일을 올리는 과정은 3단계다. 

add -> commit -> push



우리는 앞으로 네 군데의 폴더를 관리하게 된다.

| Working Directory                                     | Stage Area                                                   | Local Directory                                              | Remote Directory     |
| ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------- |
| 내가 파일을 작성하고 수정하는 폴더(Working Directory) | Commit하기 전에 Commit할 파일들을 묶어 보관하는 스테이지 AREA | 내 컴퓨터의 .git에 Commit한 파일들(객체)이 모여있는 로컬 저장소 | Github의 원격 저장소 |



먼저, 폴더에 변경 사항이 있는지 확인해보자.

`git status`

git status는 HEAD와 stage와 working directory를 비교해서 다른 사항이 있는지 보여준다. HEAD는 마지막 commit을 가리킨다. 

즉, 파일을 수정하거나 삭제하거나 새로 만들었으면 알람이 뜬다.



이제 작업한 파일을 stage area로 보내 대기를 시켜야 한다. commit은 stage의 내용을 묶어서 commit 객체를 만드는 것이기 때문에 commit을 하기 위해서는 add 명령어를 통해 stage area에 파일을 올려야 한다. 대기소라고 생각하자.

`git add [저장하려는 파일 이름]`



그리고 commit을 하자. commit을 하면 stage area에 있는 파일들이 commit객체로 만들어져 local directory에 저장된다. 이제 드디어 백업 파일이 생겼다. 

추가적으로 commit에는 유일값이 번호로 붙는다. commit ID. 그리고 파일의 내용이 같아도 commit ID는 다르다.

```
git commit -m "commit 메시지"


// commit 메시지를 대충 적으면 안 된다.
// 첫째줄에는 간단한 설명을 쓰고 한 줄 띄어서 자세한 설명을 작성하자.(우리의 기억력은 그렇게 좋지 않고 코드를 설명하는 건 어려운 일이니까.)
대문자로 시작하는 간단한 설명 (Add new file)

자세하게
아주 자세하게
내용을 적어 준다. 
```



마지막으로 push를 하자. push는 .git폴더의 local directory에 있는 commit 객체를 github의 remote directory와 동기화시키는 작업이다. 즉, 수정해서 commit한 파일을 github에 올리는 것. 

```
git push <저장소 이름> <branch>
git push origin master
```



파일을 올리는 것까지 다했으면 이제 내려받는 걸 해보자.

`git Fetch`

깃헙에서 fetch를 하는 건 원격 저장소와 로컬 저장소를 동기화하는 것이다. 워킹 디렉토리와 스테이지에는 반영이 안 된다.



`git pull`

pull은 원격 저장소의 커밋을 워킹디렉토리로 가져오는 것이 다가 아니다. pull 한 다음에 status하면 깨끗하다고 나옴. git pull은 stage까지 커밋 내용을 동기화하는 것.

---

커밋은 tree형태로 관리된다.

트리의 말단에 열매 대신에 파일 객체들이 들어 있다.

몸뚱아리는 tree 객체

커밋 객체 밑에 트리 객체, 트리 객체 밑에 커밋 객체가 있다.

.git의 object폴더에 객체들이 저장됨



head : 현재의 커밋

커밋의 부모는 head



origin : 첫번째 원격저장소 , 내 원격 저장소

첫 번째 브랜치는 master



git reset : 현재 head를 부모 head로 옮김.



그냥  master와 origin/master의 차이는??



commit을 삭제해도 가비지 컬렉션 하기 전까지는 commmit이 살아 있다.



commit 고치기

git commit --amend

커밋 내용 수정할 수 있음.

마지막 head 커밋을 고치는 명령

ID가 다르면 다른 객체. 커밋은 IMMUTABLE 객체

다른 객체로 바꿔치기 한 것이다. 



git push --force : 강제 푸쉬이지만 사용하지는 말자.



stash



master에서는 작업하지 말자

master는 배포, 완성본 버전이다. 여기서 개발하면 안 된다.

무조건 브랜치 따서 개발



깃 파일의 내용이 같은데 add르르 한다고 해서 새로운 파일을 만드는 게 아니다. 파일의 내용이 같다면 중복 생성하지 않는다.



checkout : 해당하는 branch가 가리키고 있는 브런





----

브랜치



github flow



커밋이란?

커밋에는 어떤 정보가 있나.

커밋에는 부모 커밋이 있다.

내가 생성될 때 부모를 가리키게 되어 있다.

커밋은 초기 커밋을 제외하고는 부모 커밋을 가지고 있다. HEAD가 부모가 되는 것.

커밋은 무조건 부모커밋이 있는 것.



커밋을 하면!

master가 현재 커밋으로 변경됨

head는 브랜치를 가리킨다.

git checkout commit주소 를 하면 브랜치가 아닌 커밋을 가리키게 된다.

head가 커밋 자체를 가리키면 dettached head라고 한다. 분리된 헤드



브랜치에서 커밋으로 이동한 뒤 작업을 하고 커밋한 뒤 브랜치로 이동하면 

브랜치가 없는 상태에서 작업한 건 없어진다.



bit branch (커밋 주소) (브랜치 이름)

지정된 커밋에서 새로운 브랜치를 만든다. 



master는 그냥 커밋일 뿐이지 히스토리 그 자체가 아니다.

linkedlist처럼 커밋의 부모 부모 부모가 연결되어 있어서

알수 있는 것이지 master 자체가 모든 커밋의 내용과 역사를 가지고 있는 건 아니다. 



git merge b1

현재 브랜치에서 b1이라는 브랜치를 합치는 것.



checkout은 head가 변하는 것이지 마스터가 변하는 게 아니다. 

reset 명령은 브랜치와 헤드를 같이 옮기는 것

checkout은 head만 

reset은 head와 branch를 함께 조작하고 싶을 때 하는 명령



rebase는 다른 커밋을 만들어낸다. 



git branch -d branchname : 브랜치 삭제



# 브랜치는 참조다

# 머지는 합친다

# 리베이스는 들어서 올린다

# 그냥 머지 쓰자

머지로는 커밋이 날라가지 않는다.

리베이스는 커밋이 다른 커밋으로 바뀐다. 

커밋이 있어야 돌아가니까 그냥 머지 쓰자.

