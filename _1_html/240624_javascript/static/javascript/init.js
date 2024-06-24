// 초기 setting

let boardInit;  // 게임판 초기화 함수
let stateInit;  // 게임 현황 초기화 함수    
let imgLocation;    // 이미지 배치 함수
let start;      // 게임 시작 함수

// 전역변수
let score=0;    // 점수
let time=0;     // 시간
let clickCount=0;   // 클릭 횟수


$(function()
{
    boardInit();
    $("#start").click(start);

});

// 게임판 초기화 함수
boardInit=function()
{
    $(".item").each(function(i, v){// i:인덱스, v:배열
        $(this).find("img").addClass("hide");       // 클래스명이 img를 찾아서 hide라는 태그를 추가
        $(this).append('<div class="itemHide"></div>');

    });

}

// 게임 시작 함수
start=function()
{
    stateInit();
    imgLocation();
}

// 게임현황 초기화 함수
stateInit=function()
{
    $("#gameStart").addClass("hide");
    $("#state").removeClass("hide");
    
    $("#score").text(`점수 : ${score}점`);
    $("#step").text(`${time}초`);
    $("#click").text(`클릭횟수 : ${clickCount}/30`);
}

imgLocation=function()
{

}