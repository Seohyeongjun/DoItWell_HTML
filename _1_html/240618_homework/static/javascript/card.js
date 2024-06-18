/********************
    카드 맞추기 게임
*********************/ 
let MinCounter=2;
let timerSec=0;
let timerMin=MinCounter;
let card=[];
let cardNumX=3;
let cardNumY=3;

$(function(){

    $("#selEasy").click(easyGame);
    $("#goHome").click(gameHome);
    $("#seldifficult").click(difficultGame);

});

function gameHome()
{
    $("#gamePage").hide();
    $("#page0").show();
    timerSec
    // clearInterval(timerSec)
}
function easyGame()
{
    $("#page0").hide();
    $("#gamePage").show();

    $("#timer").text("02:00");
    $("#level").text("EASY Lv.1");

    $("#start").click(timer);
    

}

function timer()
{
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

    // $("#playArea").append(
    //     `<tr>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //     </tr>`
    //     `<tr>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //     </tr>`
    //     `<tr>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //         <td class="card">a</td>
    //     </tr>` )


}