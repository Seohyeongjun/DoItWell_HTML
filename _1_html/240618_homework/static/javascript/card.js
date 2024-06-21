/********************
    카드 맞추기 게임
*********************/ 
let MinCounter=2;
let timerSec=0;
let timerMin=MinCounter;

let cardNum=[];
let cardNumRandom=[];

let cardNumX=3;
let cardNumY=3;

let easyGameCardNum=6;
let nomalGameCardNum=10;
let hardGameCardNum=18;

let GameCardNumMAx=25;

let cardImg=[];
const easyImg=["LTd5pnrMc_1.jpg","LTd5pnrMc_2.jpg","LTd5pnrMc_3.jpg","LTd5pnrMc_4.jpg","LTd5pnrMc_5.jpg","LTd5pnrMc_6.jpg","LTd5pnrMc_7.jpg","LTd5pnrMc_8.jpg","LTd5pnrMc_9.jpg","LTd5pnrMc_10.jpg","LTd5pnrMc_11.jpg","LTd5pnrMc_12.jpg"]
const nomalImg=["coca_1.jpg","coca_2.jpg","coca_3.jpg","coca_4.jpg","coca_5.jpg","coca_6.jpg","coca_7.jpg","coca_8.jpg","coca_9.jpg","coca_10.jpg","coca_11.jpg","coca_12.jpg","coca_13.jpg","coca_14.jpg","coca_15.jpg","coca_16.jpg","coca_17.jpg","coca_18.jpg","coca_19.jpg","coca_20.jpg"];

$(function(){

    $("#selEasy").click(function(){game('easy');});
    $("#selNomal").click(function(){game('nomal');});
    $("#selHard").click(function(){game('hard');});

    $("#goHome").click(gameHome);
    $("#start").click(timer);
    $(".easy").eq(i).attr('src', './static/image/mouse/LTd5pnrMc_1.jpg');

});

function gameHome()
{
    $("#gamePage").hide();
    $("#page0").show();
    cardNum=[];
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
        getRandomNum("easy");
    }
    else if(level=='nomal')
    {
        $(".easyTable").hide();
        $(".nomalTable").show();
        $(".hardTable").hide();
        $("#level").text("NOMAL Lv.1");
        getRandomNum("nomal");
    }
    else if(level=='hard')
    {
        $(".easyTable").hide();
        $(".nomalTable").hide();
        $(".hardTable").show();
        $("#level").text("HARD Lv.1");
        getRandomNum("hard");
    }
    $("#timer").text("02:00");
}

function getRandomNum(level)
{
    var num;
    for(var i=0; i<GameCardNumMAx; i++)
    {
        num=Math.floor(Math.random()*GameCardNumMAx)+1;
        if(cardNum.indexOf(num)==-1)
            cardNum[i]=num;
        else
        {
            while(cardNum.indexOf(num)!=-1)
                num=Math.floor(Math.random()*GameCardNumMAx)+1;
            cardNum[i]=num;
        }
    }

    for(var i=0; i<hardGameCardNum*2; i++)
        cardNumRandom[i]="";
   
    var levelSel;
    if(level=='easy')
    {    
        levelNum=easyGameCardNum*2;
        var td=$(".easy");
    }
    else if(level=='nomal')
    {    
        levelNum=nomalGameCardNum*2;
        var td=$(".nomal");
    }
    else if(level=='hard')
    {    
        levelNum=hardGameCardNum*2;
        var td=$(".hard");
    }

    for(var i=0; i<levelNum; i++)
    {
        num=Math.floor(Math.random()*(levelNum));
        if(cardNumRandom.indexOf(num)==-1)
            cardNumRandom[i]=num;
        else
        {
            while(cardNumRandom.indexOf(num)!=-1)
                num=Math.floor(Math.random()*(levelNum));
            cardNumRandom[i]=num;
        }
    }

    for(var i=0, j=0; i<levelNum; i=i+2, j++)
        td.eq(cardNumRandom[i]).text(cardNum[j]);
    for(var i=1, j=0; i<levelNum; i=i+2, j++)
        td.eq(cardNumRandom[i]).text(cardNum[j]);

    for(var i=0; i<levelNum*2; i++)
    {
        if(level=='easy')
            td.eq(i).attr('src', './static/image/mouse/'+easyImg[i]);
        else if(level=='nomal')
            td.eq(i).attr('src', './static/image/mouse/'+nomalImg[i]);
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