/* todo.js */

$(function(){
    var work_state_ok;
    var state_ok;
    $("#work").keyup(function(){
        
        // 할 일이 2자 이상되야 입력 성공
        if($("#work").val().length>=2)
            $("#enroll").removeAttr('disabled');
        else
            $("#enroll").attr('disabled','disabled');
    });

    $("#enroll").click(function()
    {
        let text_work=$("#work").val();
        let text_time=$("#time").val();
        let text_state=$("#state").val();

        if((text_state=="완료") || (text_state=="진행중") || (text_state=="진행 중"))
        {
            if((text_work!='')&&(text_time!=''))
            {   
                addList(text_work, text_time, text_state);

                $("#work").val('');
                $("#time").val('');
                $("#state").val('');

                $("#work").focus();
            }
            else
                return;
        }
        else
            return;
    });
});

function addList(work, time, state)
{
    $(".todo").append('<li>'+work+'</li>');
    $(".todoTime").append('<li>'+time+'</li>');
    $(".todoState").append('<li>'+state+'</li>');
}