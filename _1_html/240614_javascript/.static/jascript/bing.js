/*******************
    bingo game
*******************/

let endCount=0;     // 완성된 빙고의 갯수
let playMin=0;      // 플레이 타임 분
let playSec=0;      // 플레이 타임 초
let time=0;         // setInterval()의 핸들값
let bingo=[];       // 25개 숫자를 저장할 빈 배열 선언

$(function()        // 브라우저에 모두 표시되면 실행되는 함수(window.onload)
{
    // 빙고시작 버튼 클릭 이벤트
    $("#start").click(start);   // start는 함수 이름

    // var tdClick=document.getElementsByClassName('num');

    // for(var i=0; i<tdClick.length; i++)
    // {
    //     tdClick[i].addEventListener('click', function(){
    //         alert(tdClick.length);
    //     });
    // }

    // jquery
    // $(".num").click(function(){
    //     alert('클릭');
    // });

});

function start()
{
    // 빙고 게임을 위한 숫자 배치
    // 빙고시작 버튼 감추기
    // 빙고 진행 상황 보이기

    $("#start").hide();     // 시작 버튼 숨기기
    // $(this).hide();         // this, 현재 함수를 실행한 객체(div#start)
    $("#screen").show();        // bingo.css 33line(display:none)

    $("#ok").text(endCount);
    $("#playTime").text('00:00');

    time=setInterval(function()
    {
        playSec++;

        if(playSec>=60)
        {
            playMin++;
            playSec=0;
        }

        var secText= playSec<=9 ? '0'+playSec:playSec;
        var minText= playMin<=9 ? '0'+playMin:playMin;

        var timeText=`${minText}:${secText}`;

        $("#playTime").text(timeText);
    }, 1000);   // 1초에 한번씩 시간 변경을 한다.
    
    init();     // 25개 숫자 배열에 저장
    draw();     // 화면에 출력

    $(".num").click(bingoCheck);
}

function init()
{
    var name;

    for(var i=0; i<25; i++)
    {
        name=Math.floor(Math.random()*50)+1;
        if(bingo.indexOf(name)==-1)
            bingo[i]=name;
        else
        {
            while(bingo.indexOf(name)!=-1)
            {
                name=Math.floor(Math.random()*50)+1;
            }
            bingo[i]=name;
        }
    }
}

function draw() // 배열의 값 테이블(td)에 출력
{
    var td=$(".num");

    for(var i=0; i<td.length; i++)
        td.eq(i).text(bingo[i]);        // td.eq(i).text : table태그로 접근, jquery의 방식
}

function bingoCheck()
{   // jquery에서 css 넣는 방법 : .css('속성', '값');
    $(this).css('background','yellow'); // this는 클릭한 td 이다.
    $(this).css('color','red');

    // 클릭한 td에 표시된 숫자를 배열에서 0으로 변경
    // 배열에 0이 저장된 곳은 클릭한 숫자이다.
    var idx=$(".num").index(this);  // 클릭한 td가 몇번째 인덱스인가
    bingo[idx]=0;   // 해당 td 위치와 같은 bingo배열에 0으로 변경
    // 4번째 td 클릭하면 idx는 3이고 bingo[3]=0 으로 변경하겠다는 내용

    

/*
1. 빙고 몇 줄?
2. 가로 세로 대각선 빙고인지 확인하는 내용
3. 빙고가 5개 완성되면 게임 끝나게 하기
*/


}