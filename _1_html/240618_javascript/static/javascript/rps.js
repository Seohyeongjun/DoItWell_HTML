/* rps.js */

const com=["scissors.png", "rock.png", "paper.png"];
let record=[];  // 전적 저장
let comHd=0;    // 컴퓨터 이미지 보이기 위한 setInterval 값
let comSelect=0;    // 컴퓨터 가위바위보 값

$(function()
{   
    //전적 배열 초기화 세팅
    //localStorage.removeItem("record");    // 브라우저에 저장된 'record'이름의 데이터 삭제
    let storageData=JSON.parse(localStorage.getItem("record"));
    if(storageData)
        record=storageData;
    else
        record=[new Array(), new Array(), new Array()];

    // 전적 배열 초기화 세팅
    //record=[new Array(), new Array(), new Array()]; // 유저, 컴, 결과
    $("#comImg").attr('src', './static/image/'+com[0]);
    $("#game").click(startAndStop);
    $("#record").click(gameRecord);

});

function gameRecord()
{
    $("#modal").show();
    $("#data").empty();

    for(var i=0; i<record[0].length; i++)
    {
        $("#data").append(`
            <tr>
                <td class="user"><img src="./static/image/${record[0][i]}"></td>
                <td class="com"><img src="./static/image/${record[1][i]}"></td>}
                <td class="outcome">${record[2][i]}</td>
            <tr>
            `)
    }
    
    $("#modalBackground").click(function(){
        $("#modal").hide();
    },);

}

function startAndStop()
{
    // $(this) === $("#game")
    if($(this).text()==="종료")
    {
        $(this).text("시작");
        clearInterval(comHd); // 컴퓨터 이미지 변경되는 setInterval 종료
        $(".userImg").off('click');
    }
    else
    {
        $(this).text("종료");
        comStart(); // 컴퓨터 이미지 변경(setInterval)
        // comHd=setInterval(function(){
        //     if(comSelect==2) 
        //         comSelect=-1;
        //     $("#comImg").attr('src','./static/image/'+com[++comSelect]);

        // }, 200); // 지정된 시간에 한번씩 실행, 단위 ms
        $(".userImg").click(userSelect);
    }
    
}

function comStart()
{
    comHd=setInterval(function(){
        if(comSelect==2) 
            comSelect=-1;
        $("#comImg").attr('src','./static/image/'+com[++comSelect]);

    }, 200); // 지정된 시간에 한번씩 실행, 단위 ms
}

function userSelect()
{
    var idx=$(".userImg").index($(this));   // 내가 클릭한 가위바위보 찾기(index)

    $(this).css('border','2px solid red');
    // $(this).css('background','pink');

    clearInterval(comHd);   // 컴퓨터 이미지 변경되는 setInterval 종료
    // alert("user : "+idx+" com : "+comSelect);
    outcome(idx, comSelect);

    setTimeout(function(){
    comStart();
    

    $(".userImg").eq(idx).css('border','');
    // $("this").css('border', '');  // border에 red 색 준걸 없애준다
    // $(this).css('background','');

    $(".result").remove();
    }, 1000);

}

function outcome(u, c)
{   // 0 : 가위, 1 : 바위, 2 : 보
    var result="승";
    // alert("user : "+u+" com : "+c);
    // 유저와 컴퓨터 가위바위보 비교하여 승 패 무 출력되게 할 것
    if((u-c)==0)
        result="무";
    else if(((u-c)==-1)||((u-c)==2))
        result="패";
    else
        result="승";
    // alert(result+"user : "+u+" com : "+c);

    record[0].push(com[u]);
    record[1].push(com[c]);
    record[2].push(result);
    console.log(record);

    localSave();        // 컴퓨터에 저장하기(브라우저에 저장)


    // $(".result").text("종료");
    $("body").append(`<div class="result"> ${result}</div>`);

}

function localSave()
{
//    JSON.stringify()  //JSON이라는 문자열로 변환

    let recordJSON = JSON.stringify(record);
    localStorage.setItem('record', recordJSON);


    // localStorage.setItem('name', 'banana')
}