/********************
    카드 맞추기 게임
*********************/ 
let MinCounter=2;
let timerSec=0;
let timerMin=MinCounter;
let cardNum1=[];
let cardNum2=[];
let cardNumX=3;
let cardNumY=3;
let easyGameCardNum=6;
let nomalGameCardNum=10;
let hardGameCardNum=18;
let GameCardNumMAx=25;

$(function(){

    $("#selEasy").click(function(){game('easy');});
    $("#selNomal").click(function(){game('nomal');});
    $("#selHard").click(function(){game('hard');});

    $("#goHome").click(gameHome);
    $("#start").click(timer);

});

function gameHome()
{
    $("#gamePage").hide();
    $("#page0").show();
    cardNum1=[];
}
function game(level)
{
    $("#page0").hide();
    $("#gamePage").show();

    if(level=='easy')
    {   
        $(".easyTable").show();
        $(".nomalTable").hide();
        $(".hardTable").hide();
        $("#level").text("EASY Lv.1");
        getImg("easy");
    }
    else if(level=='nomal')
    {
        $(".easyTable").hide();
        $(".nomalTable").show();
        $(".hardTable").hide();
        $("#level").text("NOMAL Lv.1");
        getImg("nomal");
    }
    else if(level=='hard')
    {
        $(".easyTable").hide();
        $(".nomalTable").hide();
        $(".hardTable").show();
        $("#level").text("HARD Lv.1");
        getImg("hard");
    }
    $("#timer").text("02:00");
}

function getImg(level)
{
    var num;
    for(var i=0; i<GameCardNumMAx; i++)
    {
        num=Math.floor(Math.random()*GameCardNumMAx)+1;
        if(cardNum1.indexOf(num)==-1)
            cardNum1[i]=num;
        else
        {
            while(cardNum1.indexOf(num)!=-1)
                num=Math.floor(Math.random()*GameCardNumMAx)+1;
            cardNum1[i]=num;
        }
    }

    if(level=='easy')
    {
        var td=$(".easy");

        for(var i=0; i<easyGameCardNum; i++)
            td.eq(i).text(cardNum1[i]);
    }

    else if(level=='nomal')
    {
        var td=$(".nomal");

        for(var i=0; i<nomalGameCardNum; i++)
            td.eq(i).text(cardNum1[i]);
    }

    else if(level=='hard')
    {
        var td=$(".hard");

        for(var i=0; i<hardGameCardNum; i++)
            td.eq(i).text(cardNum1[i]);
    }
}

function timer()
{
    $("#end").show();
    $("#start").hide();

    var time=setInterval(function(){
        timerSec--;

        if(timerSec<0)
        {    
            timerSec=59;
            timerMin--;

            if(timerMin<0)
            {    
                timerMin=0;
                timerSec=0;
            }
        }

        timerSec=(timerSec<10)? '0'+timerSec : timerSec;

        var textSec=timerSec;
        var textMin='0'+timerMin;
        var textTime=`${textMin}:${textSec}`;
        $("#timer").text(textTime);

    }, 1000);
}