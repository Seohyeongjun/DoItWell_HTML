
function timeStart()
{
    setInterval(function()
    {
        tiem++;
        $("#step").text(`${time}초`);
    }, 1000);
}
let clickStop=true;

function imgclick()
{
    if(!clickStop) return;      // 두 번이상 연속 클릭 방지

    var idx=$(".item").index($(this));  // 몇번째 div 클릭했나
    var $clickImg=$(".item").eq(idx).find("img");   // 클릭한 div의 img태그

    // 클릭한 이미지 화면에 표시
    $clickImg.removeClass("hide");
    $clickImg.addClass("select");

    // 현재 화면에 클릭해서 보이는 이미지는 imgPlace 배열의 값이 인덱스이고
    // imgName배열의 인덱스 위치의 이미지가 보이는 것이다.
    // imgPlace[1]에 3이 있다면 imgName[3]의 이미지
    if(selectImg.length==1)
    {
        if(selectImg[0].div==idx) return;
    }

    selectImg.push({이미지:imgPlace[idx], div:idx}); 
    
    // 클릭한 이미지가 두 개라면 비교하기
    if(selectImg.length==2)
    {
        if(matching())      // 두 개의 이미지가 서로 같다
        {
            score++;
            // 같은 이미지 이니깐 빨강 테두리 제거 - select 클래스 제거
            $(".item").eq(selectImg[0].div).find("img").removeClass("select");
            $(".item").eq(selectImg[1].div).find("img").removeClass("select");

            // 해당 이미지를 클릭 이벤트 해제
            $(".item").eq(selectImg[0].div).off("click");
            $(".item").eq(selectImg[1].div).off("click");

            selectImg=[];   //두 개의 이미지 비교 끝났으니 다음을 위해 초기화
        }
        else                // 두 개의 이미지가 다르다
        {
            clickStop=false;
            // 서로 다른 이미지이니깐 1초 뒤에 두개의이미지 감추기
            setTimeout(function(){
            $(".item").eq(selectImg[0].div).find("img").removeClass("select");
            $(".item").eq(selectImg[1].div).find("img").removeClass("select");
            $(".item").eq(selectImg[0].div).find("img").addClass("hide");
            $(".item").eq(selectImg[1].div).find("img").addClass("hide");

            selectImg=[];   //두 개의 이미지 비교 끝났으니 다음을 위해 초기화
            clickStop=true;
        }, 1000);

        }
        
    }
    updateState();
}

function updateState()
{
    clickCount++;

    $("#score").text(`점수 : ${score}점`);
    $("#click").text(`클릭횟수 : ${clickCount}/30`);

    if(clickCount==31)
    {
        $(".item").off("click");
        alert("횟수초과로 게임오버");
    }
}
function matching()
{
    if(selectImg[0].이미지 == selectImg[1].이미지)
        return true;
    else    
        return false;
}