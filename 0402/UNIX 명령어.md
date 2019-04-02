# 유닉스 명령어
---
> ## pwd

현재 디렉토리를 확인



> ## ls

List Directory, 디렉토리의 내용을 보여줌



> ## ls -l

디렉토리에 있는 파일의 자세한 정보를 보여줌



> ## ls -a

숨긴 파일을 포함해서 디렉토리에 있는 모든 파일을 보여줌



> ## ls -al

숨긴 파일을 포함해서 디렉토리에 있는 모든 파일의 자세한 정보를 보여줌



> ## mkdir [directory name]

새로운 디렉토리를 생성



> ## mkdir -p

여러 폴더를 동시에 생성 가능하다.

```bash
mkdir -p dir1/dir2/dir3/dir4
```



> ## cd [이동할 곳]

Change Directory, 디렉토리 변경

cd만 입력하고 인자를 주지 않으면 Home directory로 이동한다. 

cd $HOME으로 입력해도 Home directory로 이동한다. 

~은 Home directory라는 의미



> ## touch

0바이트 크기의 새로운 파일을 만들어줌

```bash
touch text1.txt
```



> ## rm

파일을 삭제한다. (디렉토리는 삭제할 수 없음.)



> ## rm -r

디렉토리를 삭제한다.



> ## --help

`명령어 --help`와 같이 사용하면 명령어에 대한 설명을 볼 수 있다. 

man을 사용하면 자세한 설명을 볼 수 있지만 현재 내가 사용하고 있는 git bash에서는 적용되지 않는다...

```bash
bash: man: command not found
```



> ## cp [option] [복사할 파일] [ 복사될 곳]

복사할 파일과 복사될 곳을 인자로 주어 파일을 복사한다.



> ## mv [option] [이동할 파일] [이동될 곳]

파일과 path를 인자로주어 파일을 이동한다. 



> ## ctrl + l

clear와 같은 기능. 터미널에 출력된 내용을 다 지워 깨끗해짐.



> ## ctrl + r

ctrl + l이 터미널 창 전체를 지우는 반면 ctrl + r은 한 줄만 삭제한다.



> ## history

명령어의 이력을 표시한다



> ## cat 파일이름

파일 이름을 매개변수로 받아 파일의 내용을 표준출력해준다. 

즉, cat은 표준입력을 받아 표준 출력하는 것이다. 

cat에 인자를 주지 않고 cat만 실행하면 표준입력 받은 걸 표준출력한다. 

```bash
//sooreal을 입력 받아 a.txt에 입력함.
echo "sooreal" > a.txt

//cat으로 a.txt의 파일 내용을 표시함
cat a.txt
sooreal
```



> ## echo

echo 뒤에 작성한 인자를 표준입력받아 표준출력함.

```bash
echo "핫 하핫 하하핫"
핫 하핫 하하핫
```