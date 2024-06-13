/* notice.js */

$(function(){

    $("#detail").keyup(function()
    {
        // 5자 이상 입력해야 버튼 활성화
        if($("#detail").val().length>=5)    // 5자 이상 입력된다면
        {
            $("#save").removeAttr('disabled'); // disabled된 것을 제거(removeAttr)
        }
        else
        {
            $("#save").attr('disabled','disabled');
        }
    });


    //$("#save").on('click',function(){})
    $("#save").click(function()
    {
        let text=$("#detail").val();
        addList(text);
        // input 태그에 아무것도 입력하지 않았다면?
        // if(text=='')
        // {
        //     alert('내용을 입력하세요');
        //     $("#detail").focus();
        //     return; // 함수 종료
        // }
    });
});

function addList(text)
{
    $("#list").append('<li>'+text+'</li>'); // append : 입력된 문자가 덮어써지지 않고 다음칸에 계속 출력

}