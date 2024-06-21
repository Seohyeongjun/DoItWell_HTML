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




    // if(level=='easy')
    // {
    //     var num;
    //     for(var i=0; i<hardGameCardNum*2; i++)
    //         cardNumRandom[i]="";

    //     for(var i=0; i<easyGameCardNum*2; i++)
    //     {
    //         num=Math.floor(Math.random()*(easyGameCardNum*2));
    //         if(cardNumRandom.indexOf(num)==-1)
    //             cardNumRandom[i]=num;
    //         else
    //         {
    //             while(cardNumRandom.indexOf(num)!=-1)
    //                 num=Math.floor(Math.random()*(easyGameCardNum*2));
    //             cardNumRandom[i]=num;
    //         }
    //     }
    
    //     var td=$(".easy");

    //     for(var i=0, j=0; i<easyGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);
    //     for(var i=1, j=0; i<easyGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);
    // }

    // else if(level=='nomal')
    // {
    //     var num;
    //     for(var i=0; i<hardGameCardNum*2; i++)
    //         cardNumRandom[i]="";

    //     for(var i=0; i<nomalGameCardNum*2; i++)
    //     {
    //         num=Math.floor(Math.random()*(nomalGameCardNum*2));
    //         if(cardNumRandom.indexOf(num)==-1)
    //             cardNumRandom[i]=num;
    //         else
    //         {
    //             while(cardNumRandom.indexOf(num)!=-1)
    //                 num=Math.floor(Math.random()*(nomalGameCardNum*2));
    //             cardNumRandom[i]=num;
    //         }
    //     }
    
    //     var td=$(".nomal");

    //     for(var i=0, j=0; i<nomalGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);
    //     for(var i=1, j=0; i<nomalGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);
    // }

    // else if(level=='hard')
    // {
    //     var num;
    //     for(var i=0; i<hardGameCardNum*2; i++)
    //         cardNumRandom[i]="";

    //     for(var i=0; i<hardGameCardNum*2; i++)
    //     {
    //         num=Math.floor(Math.random()*(hardGameCardNum*2));
    //         if(cardNumRandom.indexOf(num)==-1)
    //             cardNumRandom[i]=num;
    //         else
    //         {
    //             while(cardNumRandom.indexOf(num)!=-1)
    //                 num=Math.floor(Math.random()*(hardGameCardNum*2));
    //             cardNumRandom[i]=num;
    //         }
    //     }
    
    //     var td=$(".hard");

    //     for(var i=0, j=0; i<hardGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);
    //     for(var i=1, j=0; i<hardGameCardNum*2; i=i+2, j++)
    //         td.eq(cardNumRandom[i]).text(cardNum[j]);    
    // }
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