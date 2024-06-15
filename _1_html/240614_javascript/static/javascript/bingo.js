/*******************
    bingo game
*******************/

let endCount_user=0;    // 완성된 빙고의 갯수(user)
let endCount_com=0;     // 완성된 빙고의 갯수(com)

let playMin=0;          // 플레이 타임 분
let playSec=0;          // 플레이 타임 초
let time=0;             // setInterval()의 핸들값
let timeOn=true;
let bingo=[];           // 25개 숫자를 저장할 빈 배열 선언
let bingoCom=[];        // 25개 숫자를 저장할 빈 배열 선언

// let crossCk=0;

$(function()            // 브라우저에 모두 표시되면 실행되는 함수(window.onload)
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

    $("#start").hide();         // 시작 버튼 숨기기
    // $(this).hide();          // this, 현재 함수를 실행한 객체(div#start)
    $("#screen").show();        // bingo.css 33line(display:none)

    $("#computer").hide();
    $("#screenCom").show();

    $("#ok").text(endCount_user);
    $("#okCom").text(endCount_com);

    $("#playTime").text('00:00');

    time=setInterval(function()
    {
        if(timeOn)
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
    
    init('u');     // 25개 숫자 배열에 저장
    drawUser('u');     // 화면에 출력

    init('c');     // 25개 숫자 배열에 저장
    drawUser('c');     // 화면에 출력

    $(".num").click(bingoCheckUser);
    $(".numCom").click(bingoCheckCom);
}

function init(user)
{
    if(user=='u')
    {    
        var name;

        for(var i=0; i<25; i++)
        {
            name=Math.floor(Math.random()*50)+1;        // 1~50개의 랜덤 숫자를 25개만 받는다
            if(bingo.indexOf(name)==-1)
                bingo[i]=name;
            else
            {
                while(bingo.indexOf(name)!=-1)
                    name=Math.floor(Math.random()*50)+1;

                bingo[i]=name;
            }
        }
    }
    else if(user=='c')
    {    
        var name;

        for(var i=0; i<25; i++)
        {
            name=Math.floor(Math.random()*50)+1;        // 1~50개의 랜덤 숫자를 25개만 받는다
            if(bingoCom.indexOf(name)==-1)
                bingoCom[i]=name;
            else
            {
                while(bingoCom.indexOf(name)!=-1)
                    name=Math.floor(Math.random()*50)+1;

                bingoCom[i]=name;
            }
        }
    }
}

function drawUser(user) // 배열의 값 테이블(td)에 출력
{
    if(user=='u')
    {
        var td=$(".num");

        for(var i=0; i<td.length; i++)
            td.eq(i).text(bingo[i]);        // td.eq(i).text : table태그로 접근, jquery의 방식
    }
    else if(user=='c')
    {
        var td=$(".numCom");

        for(var i=0; i<td.length; i++)
            td.eq(i).text(bingoCom[i]);        // td.eq(i).text : table태그로 접근, jquery의 방식
    }
}

function bingoCheckUser(crossCkCom)
{ 
    crossCkUser=0;
    // jquery에서 css 넣는 방법 : .css('속성', '값');
    $(this).css('background','darkgreen'); // this는 클릭한 td 이다.
    $(this).css('color','white');

    // 클릭한 td에 표시된 숫자를 배열에서 0으로 변경
    // 배열에 0이 저장된 곳은 클릭한 숫자이다.
    var idx=$(".num").index(this);  // 클릭한 td가 몇번째 인덱스인가
    crossCkUser=bingo[idx];
    bingo[idx]=0;   

    if(crossCkCom>0)
    {
        var num=bingo.indexOf(crossCkCom);
        bingo[num]=0; 

        if(num!=-1)
        {        
            var td=$(".num");
                td.eq(num).css('background','darkgreen');
                td.eq(num).css('color','aqua');
        }
    }
    
    // 해당 td 위치와 같은 bingo배열에 0으로 변경
    // 4번째 td 클릭하면 idx는 3이고 bingo[3]=0 으로 변경하겠다는 내용
    // $("#ok").text(bingo[idx]);
    /***************************************
    1. 빙고 몇 줄?
    2. 가로 세로 대각선 빙고인지 확인하는 내용
    3. 빙고가 5개 완성되면 게임 끝나게 하기
    ****************************************/
    
    var bingo1to5=0;            // 가로 1열 1~5
    var bingo6to10=0;           // 가로 2열 6~10
    var bingo11to15=0;          // 가로 3열 11~15
    var bingo16to20=0;          // 가로 4열 16~20
    var bingo21to25=0;          // 가로 5열 21~25

    var bingo1p5=0;             // 세로 1열 1~21
    var bingo2p5=0;             // 세로 2열 2~22
    var bingo3p5=0;             // 세로 3열 3~23
    var bingo4p5=0;             // 세로 4열 4~24
    var bingo5p5=0;             // 세로 5열 5~25

    var bingo1p6=0;             // 대각 1~25
    var bingo5p4=0;             // 대각 5~21

    var bingoCount=0;           // 빙고 숫자 카운트

    for(var i=0; i<25; i++) 
    {
        if(i<5)                     // 1~5 가로
            bingo1to5+=bingo[i];
        else if((i>=5)&&(i<10))     // 6~10 가로
            bingo6to10+=bingo[i];
        else if((i>=10)&&(i<15))    // 11~15 가로     
            bingo11to15+=bingo[i];
        else if((i>=15)&&(i<20))    // 16~20 가로
            bingo16to20+=bingo[i];
        else if((i>=20)&&(i<25))    // 21~25 가로
            bingo21to25+=bingo[i];
    }

    for(var i=0; i<21; i+=5)        // 1~21 세로   
        bingo1p5+=bingo[i];

    for(var i=1; i<22; i+=5)        // 2~22 세로
        bingo2p5+=bingo[i];

    for(var i=2; i<23; i+=5)        // 3~23 세로
        bingo3p5+=bingo[i];

    for(var i=3; i<24; i+=5)        // 4~24 세로
        bingo4p5+=bingo[i];

    for(var i=4; i<25; i+=5)        // 5~25 세로 
        bingo5p5+=bingo[i];

    for(var i=0; i<25; i+=6)        // 1~25 대각
        bingo1p6+=bingo[i];

    for(var i=4; i<21; i+=4)        // 5~21 대각
        bingo5p4+=bingo[i];

    (bingo1to5==0) ? bingoCount++ : bingoCount;
    (bingo6to10==0) ? bingoCount++ : bingoCount;
    (bingo11to15==0) ? bingoCount++ : bingoCount;
    (bingo16to20==0) ? bingoCount++ : bingoCount;
    (bingo21to25==0) ? bingoCount++ : bingoCount;

    (bingo1p5==0) ? bingoCount++ : bingoCount;
    (bingo2p5==0) ? bingoCount++ : bingoCount;
    (bingo3p5==0) ? bingoCount++ : bingoCount;
    (bingo4p5==0) ? bingoCount++ : bingoCount;
    (bingo5p5==0) ? bingoCount++ : bingoCount;
      
    (bingo1p6==0) ? bingoCount++ : bingoCount;
    (bingo5p4==0) ? bingoCount++ : bingoCount;

    $("#ok").text(bingoCount);

    if(bingoCount>=5 && timeOn!=false)
    {
        alert('user 빙고!!!!!!!');
        timeOn=false;
    }
    bingoCheckCom(crossCkUser);

}
function bingoCheckCom(crossCkUser)
{   
    crossCkCom=0;
    // jquery에서 css 넣는 방법 : .css('속성', '값');
    $(this).css('background','darkred'); // this는 클릭한 td 이다.
    $(this).css('color','white');

    var idx=$(".numCom").index(this);  // 클릭한 td가 몇번째 인덱스인가
    crossCkCom=bingoCom[idx];
    bingoCom[idx]=0;                // 해당 td 위치와 같은 bingo배열에 0으로 변경

    if(crossCkUser>0)
    {
        var num=bingoCom.indexOf(crossCkUser);
        bingoCom[num]=0; 

        if(num!=-1)
        {        
            var td=$(".numCom");
                td.eq(num).css('background','darkred');
                td.eq(num).css('color','aqua');
        }
    }
    // $("#okCom").text(num);

    var bingo1to5=0;                // 가로 1열 1~5
    var bingo6to10=0;               // 가로 2열 6~10
    var bingo11to15=0;              // 가로 3열 11~15
    var bingo16to20=0;              // 가로 4열 16~20
    var bingo21to25=0;              // 가로 5열 21~25

    var bingo1p5=0;                 // 세로 1열 1~21
    var bingo2p5=0;                 // 세로 2열 2~22
    var bingo3p5=0;                 // 세로 3열 3~23
    var bingo4p5=0;                 // 세로 4열 4~24
    var bingo5p5=0;                 // 세로 5열 5~25

    var bingo1p6=0;                 // 대각 1~25
    var bingo5p4=0;                 // 대각 5~21

    var bingoCount=0;               // 빙고 숫자 카운트

    for(var i=0; i<25; i++) 
    {
        if(i<5)                     // 1~5 가로
            bingo1to5+=bingoCom[i];
        else if((i>=5)&&(i<10))     // 6~10 가로
            bingo6to10+=bingoCom[i];
        else if((i>=10)&&(i<15))    // 11~15 가로     
            bingo11to15+=bingoCom[i];
        else if((i>=15)&&(i<20))    // 16~20 가로
            bingo16to20+=bingoCom[i];
        else if((i>=20)&&(i<25))    // 21~25 가로
            bingo21to25+=bingoCom[i];
    }

    for(var i=0; i<21; i+=5)        // 1~21 세로   
        bingo1p5+=bingoCom[i];

    for(var i=1; i<22; i+=5)        // 2~22 세로
        bingo2p5+=bingoCom[i];

    for(var i=2; i<23; i+=5)        // 3~23 세로
        bingo3p5+=bingoCom[i];

    for(var i=3; i<24; i+=5)        // 4~24 세로
        bingo4p5+=bingoCom[i];

    for(var i=4; i<25; i+=5)        // 5~25 세로 
        bingo5p5+=bingoCom[i];

    for(var i=0; i<25; i+=6)        // 1~25 대각
        bingo1p6+=bingoCom[i];

    for(var i=4; i<21; i+=4)        // 5~21 대각
        bingo5p4+=bingoCom[i];

    (bingo1to5==0) ? bingoCount++ : bingoCount;
    (bingo6to10==0) ? bingoCount++ : bingoCount;
    (bingo11to15==0) ? bingoCount++ : bingoCount;
    (bingo16to20==0) ? bingoCount++ : bingoCount;
    (bingo21to25==0) ? bingoCount++ : bingoCount;

    (bingo1p5==0) ? bingoCount++ : bingoCount;
    (bingo2p5==0) ? bingoCount++ : bingoCount;
    (bingo3p5==0) ? bingoCount++ : bingoCount;
    (bingo4p5==0) ? bingoCount++ : bingoCount;
    (bingo5p5==0) ? bingoCount++ : bingoCount;
      
    (bingo1p6==0) ? bingoCount++ : bingoCount;
    (bingo5p4==0) ? bingoCount++ : bingoCount;

    $("#okCom").text(bingoCount);
   
    if(bingoCount>=5 && timeOn!=false)
    {
        alert('com 빙고!!!!!!!');
        timeOn=false;
    }
    bingoCheckUser(crossCkCom);

}