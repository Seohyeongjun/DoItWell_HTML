/********************
    카드 맞추기 게임
*********************/ 
let MinCounter=1;
let timerSec=0;
let timerMin=MinCounter;
let readyTime=3;
let time1=0;
let time2=0;
let startStop="stop";
let levelCount=1;

let cardNum=[];
let cardNumRandom=[];

let cardNumX=3;
let cardNumY=3;

let easyGameCardNum=6;
let nomalGameCardNum=10;
let hardGameCardNum=18;

let GameCardNumMAx=61;

let levelNum=0;
let keyflag=0;
let selImgOk=false;
let preIdx;
let textContent1;
let textContent2;
let cardCount=0;
let gameSelEasy;
let gameSelNomal;
let gameSelHard;
let levelSel;
const cardImg=["crop1.jpg","crop2.jpg","crop3.jpg","crop4.jpg","crop5.jpg","crop6.jpg","crop7.jpg","crop8.jpg","crop9.jpg","crop10.jpg","emoji31.jpg","emoji32.jpg","emoji33.jpg","emoji34.jpg","emoji41.jpg","emoji42.jpg","emoji43.jpg","emoji44.jpg","emoji51.jpg","emoji52.jpg","emoji53.jpg","emoji54.jpg","emoji61.jpg","emoji62.jpg","emoji63.jpg","emoji64.jpg","emoji71.jpg","emoji72.jpg","emoji73.jpg","emoji74.jpg","emoji81.jpg","emoji82.jpg","emoji83.jpg","emoji84.jpg","emoji91.jpg","emoji92.jpg","emoji93.jpg","emoji94.jpg","superman1.png","superman2.png","batman1.png","batman2.png","batman3.png","ironman1.png","ironman3.png","dog1.png","dog2.png","dog3.png","cat1.png","cat2.png","cat3.png","cat4.png","car1.png","car2.png","car3.png","car4.png","flag1.png","flag2.png","flag3.png","flag4.png","flag5.png","flag6.png"];
const easyImg=["LTd5pnrMc_1.jpg","LTd5pnrMc_2.jpg","LTd5pnrMc_3.jpg","LTd5pnrMc_4.jpg","LTd5pnrMc_5.jpg","LTd5pnrMc_6.jpg","LTd5pnrMc_7.jpg","LTd5pnrMc_8.jpg","LTd5pnrMc_9.jpg","LTd5pnrMc_10.jpg","LTd5pnrMc_11.jpg","LTd5pnrMc_12.jpg"]
const nomalImg=["coca_1.jpg","coca_2.jpg","coca_3.jpg","coca_4.jpg","coca_5.jpg","coca_6.jpg","coca_7.jpg","coca_8.jpg","coca_9.jpg","coca_10.jpg","coca_11.jpg","coca_12.jpg","coca_13.jpg","coca_14.jpg","coca_15.jpg","coca_16.jpg","coca_17.jpg","coca_18.jpg","coca_19.jpg","coca_20.jpg"];
const hardImg=["batman-001.jpg","batman-002.jpg","batman-003.jpg","batman-004.jpg","batman-005.jpg","batman-006.jpg","batman-007.jpg","batman-008.jpg","batman-009.jpg","batman-010.jpg","batman-011.jpg","batman-012.jpg","batman-013.jpg","batman-014.jpg","batman-015.jpg","batman-016.jpg","batman-017.jpg","batman-018.jpg","batman-019.jpg","batman-020.jpg","batman-021.jpg","batman-022.jpg","batman-023.jpg","batman-024.jpg","batman-025.jpg","batman-026.jpg","batman-027.jpg","batman-028.jpg","batman-029.jpg","batman-030.jpg","batman-031.jpg","batman-032.jpg","batman-033.jpg","batman-034.jpg","batman-035.jpg","batman-036.jpg"];

$(function(){

   

    $("#selEasy").click(function(){levelSel='easy', game(levelSel); });
    $("#selNomal").click(function(){levelSel='nomal', game(levelSel); });
    $("#selHard").click(function(){levelSel='hard', game(levelSel); });

    $("#goHome").click(gameHome); 
    if(startStop=="stop")
        $("#start").click(function(){getRandomImg(levelSel);});

    $("#restart").click(function(){reset(levelSel);});
    $("#next").click(function(){next(levelSel);});

    $(".easyImg").click(getNumEasy);
    $(".nomalImg").click(getNumNomal);
    $(".hardImg").click(getNumhard);
    
});

function getNumEasy()
{
    
    var idx=$(".easyImg").index($(this));   
    var number=document.getElementsByClassName("easyImg");
    $(this).css('border','2px solid red');

    if(keyflag==0)
    {
        textContent1=number[idx].textContent;
        if(textContent1!='ok')
        {
            keyflag=1;

            $(".easyImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent1]);
            preIdx=idx;
        }
    }
    else
    {
        textContent2=number[idx].textContent;
        if(textContent2!='ok')
        {
            keyflag=0;
            $(".easyImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);
            if((textContent1==textContent2)&&(preIdx!=idx))
                selImgOk=true;
            else 
            {
                textContent1=0;
                textContent2=0;
            }
        }
    }
    
    setTimeout(function()
    {    
        $(".easyImg").eq(idx).css('border','');
        if(selImgOk)
        {
            $(".easyImg").eq(preIdx).attr('src', './static/image/random/'+cardImg[textContent1]);
            $(".easyImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);

            number[preIdx].textContent='ok';
            number[idx].textContent='ok';

            textContent1=0;
            textContent2=0;
            selImgOk=false;
            preIdx=0;
            idx=0;
            cardCount++;
            if(cardCount==easyGameCardNum)
            {    
                cardCount=0;
                clearInterval(time1);
                clearInterval(time2);
            }
        }
        else if((textContent1!='ok')&&(textContent2!='ok'))
            $(".easyImg").eq(idx).attr('src', './static/image/mouse/'+easyImg[idx]);

    }, 200);
    
}

function getNumNomal()
{
    var idx=$(".nomalImg").index($(this));   
    var number=document.getElementsByClassName("nomalImg");
    $(this).css('border','2px solid red');

    if(keyflag==0)
    {
        keyflag=1;
        textContent1=number[idx].textContent;
        $(".nomalImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent1]);
        preIdx=idx;
    }
    else
    {
        keyflag=0;
        textContent2=number[idx].textContent;
        $(".nomalImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);
        if((textContent1==textContent2)&&(preIdx!=idx))
            selImgOk=true;
        else 
        {
            textContent1=0;
            textContent2=0;
        }
    }
    
    setTimeout(function()
    {    
        $(".nomalImg").eq(idx).css('border','');
        if(selImgOk)
        {
            $(".nomalImg").eq(preIdx).attr('src', './static/image/random/'+cardImg[textContent1]);
            $(".nomalImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);
            textContent1=0;
            textContent2=0;
            selImgOk=false;
            preIdx=0;
            idx=0;
            cardCount++;
            if(cardCount==nomalGameCardNum)
                cardCount=0;
        }
        else 
            $(".nomalImg").eq(idx).attr('src', './static/image/coca/'+nomalImg[idx]);

    }, 200);

}

function getNumhard()
{
    var idx=$(".hardImg").index($(this));   
    var number=document.getElementsByClassName("hardImg");
    $(this).css('border','2px solid red');

    if(keyflag==0)
    {
        keyflag=1;
        textContent1=number[idx].textContent;
        $(".hardImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent1]);
        preIdx=idx;
    }
    else
    {
        keyflag=0;
        textContent2=number[idx].textContent;
        $(".hardImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);
        if((textContent1==textContent2)&&(preIdx!=idx))
            selImgOk=true;
        else 
        {
            textContent1=0;
            textContent2=0;
        }
    }
    
    setTimeout(function()
    {    
        $(".hardImg").eq(idx).css('border','');
        if(selImgOk)
        {
            $(".hardImg").eq(preIdx).attr('src', './static/image/random/'+cardImg[textContent1]);
            $(".hardImg").eq(idx).attr('src', './static/image/random/'+cardImg[textContent2]);
            textContent1=0;
            textContent2=0;
            selImgOk=false;
            preIdx=0;
            idx=0;
            cardCount++;
            if(cardCount==hardGameCardNum)
                cardCount=0;
        }
        else 
            $(".hardImg").eq(idx).attr('src', './static/image/batman/'+hardImg[idx]);

    }, 200);

}

function reset(level)
{
    clearInterval(time1);
    clearInterval(time2);
    startStop="stop"

    $("#timer1").text("01:00");
    $("#timer2").text("3");

    $("#end").hide();
    $("#start").show();
    $("#timer1").hide();
    $("#timer2").show();

    timerMin=MinCounter;
    timerSec=0;
    readyTime=3;

    mainImg(level);
}

function gameHome()
{

    levelCount=1;
    clearInterval(time1);
    clearInterval(time2);
    startStop="stop"

    $("#gamePage").hide();
    $("#page0").show();

    cardNum=[];
}

function game(level)
{
    $("#page0").hide();
    $("#gamePage").show();

    $("#timer1").hide();
    $("#timer2").show();
    $("#start").show();
    $("#end").hide();

    timerMin=MinCounter;
    timerSec=0;
    readyTime=3;
    // levelCount=1;

    if(level=='easy')
    {   
        $(".easyTable").show();
        $(".nomalTable").hide();
        $(".hardTable").hide();
        $("#levelText").text('EASY')
        $("#level").text(levelCount);
        getRandomNum("easy");
    }
    else if(level=='nomal')
    {
        $(".easyTable").hide();
        $(".nomalTable").show();
        $(".hardTable").hide();
        $("#levelText").text('NOMAL')
        $("#level").text(levelCount);
        getRandomNum("nomal");
    }
    else if(level=='hard')
    {
        $(".easyTable").hide();
        $(".nomalTable").hide();
        $(".hardTable").show();
        $("#levelText").text('HARD')
        $("#level").text(levelCount);
        getRandomNum("hard");
    }
    $("#timer1").text("01:00");
    $("#timer2").text("3");
}

function imgLevel(level)
{
    var tdImg;
    if(level=='easy')
    {   
         tdImg=$(".easyImg");
         return tdImg;
    }
    if(level=='nomal')
    {   
        tdImg=$(".nomalImg");
        return tdImg;
    }
    if(level=='hard')
    {   
        tdImg=$(".hardImg");
        return tdImg;
    }
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
   
    if(level=='easy')
    {    
        levelNum=easyGameCardNum*2;
        var tdImg=imgLevel('easy');
    }
    else if(level=='nomal')
    {    
        levelNum=nomalGameCardNum*2;
        var tdImg=imgLevel('nomal');
    }
    else if(level=='hard')
    {    
        levelNum=hardGameCardNum*2;
        var tdImg=imgLevel('hard');
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

    var tdImg=imgLevel(level);
    
    mainImg(level);

    for(var i=0, j=0; i<levelNum; i=i+2, j++)
        tdImg.eq(cardNumRandom[i]).text(cardNum[j]);
    for(var i=1, j=0; i<levelNum; i=i+2, j++)
        tdImg.eq(cardNumRandom[i]).text(cardNum[j]);
}

function getRandomImg(level)
{
    var tdImg=imgLevel(level);

    for(var i=0, j=0; i<levelNum; i=i+2, j++)
        tdImg.eq(cardNumRandom[i]).attr('src', './static/image/random/'+cardImg[cardNum[j]]);
    for(var i=1, j=0; i<levelNum; i=i+2, j++)
        tdImg.eq(cardNumRandom[i]).attr('src', './static/image/random/'+cardImg[cardNum[j]]);

    startStop="ready";

    $("#start").hide();    

    readyTimer(level);
    
}

function readyTimer(level)
{
    time1=setInterval(function(){
    
    if(startStop=="ready")
        readyTime--;

    $("#timer2").text(readyTime);  

    if(readyTime<0)
    {
        readyTime==0;
        startStop="start";

        startTime();
        clearInterval(time1);

        mainImg(level);
    }  
    
    }, 1000);
}

function mainImg(level)
{
    var tdImg=imgLevel(level);

    for(var i=0; i<levelNum*2; i++)
    {
        if(level=='easy')
            tdImg.eq(i).attr('src', './static/image/mouse/'+easyImg[i]);
        else if(level=='nomal')
            tdImg.eq(i).attr('src', './static/image/coca/'+nomalImg[i]);
        else if(level=='hard')
            tdImg.eq(i).attr('src', './static/image/batman/'+hardImg[i]);
    }

}
function startTime()
{
    // $("#end").show();
    $("#start").hide();    
    $("#timer1").show();
    $("#timer2").hide();

    time2=setInterval(function(){
    timerSec--;

    if(timerSec<0)
    {    
        timerSec=59;
        timerMin--;

        if(timerMin<0)
        {    
            timerMin=0;
            timerSec=0;
            startStop="stop";
            clearInterval(time2);
        }
    }

    timerSec=(timerSec<10)? '0'+timerSec : timerSec;

    var textSec=timerSec;
    var textMin='0'+timerMin;
    var textTime=`${textMin}:${textSec}`;
    $("#timer1").text(textTime);

    }, 1000);

}

function stop()
{
    clearInterval(time1);
    clearInterval(time2);
    $("#start").show();
    $("#end").hide();
    startStop="stop";
    timerSec=0;
    timerMin=0;
    readyTime=0;


}

function again()
{


}

function next(nextLevel)
{
    levelCount++;
    cardNum=[];
    reset(nextLevel);

    if(levelCount<4)
    game(nextLevel);

    else if(levelCount==4)
    {
        levelCount=1;
    
        if(nextLevel=='easy')
        {    
            levelSel='nomal';
            game(levelSel);

        }
        else if(nextLevel=='nomal')
        {    
            levelSel='hard';
            game(levelSel);

        }
        else
        {   
            levelSel='hard';
            game(levelSel);
        }

    }
    $("#level").text(levelCount);

}