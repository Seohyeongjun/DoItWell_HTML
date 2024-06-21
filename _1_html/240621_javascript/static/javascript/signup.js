// signup.js

$(function(){

    // 회원가입 버튼 클릭 이벤트 등록
    $("#signup").on('click', requiredCheck);


    // 체크 한 value()값 전부 확인하려면
    let itr=$("input[name=interest]:checked");
    let value=[];
    for(var i=0; ImageBitmapRenderingContext.length; i++)
    {
        value.push($(itr[i].val()));    // 다수의 데이터를 취급하므로 배열의 형태이다.
    }
    alert("체크 한 관심분야 : "+value());
});

function requiredCheck(){   // 필수 입력을 다 입력 하였는가 확인
    var id = $("#userId");  // id.val()
    var pw = $("#userPw");
    var re = $("#pwRe");
    var email = $("#email");
    var tel = $("#tel");
    var addr = $("#addr");

    if(id.val()=='')
    {
        alert("아이디를 입력하세요");
        id.focus(); // 아이디 input태그에 포커스(커서) 넣기
    }
    else if(pw.val()=='')
    {
        alert("비밀번호를 입력하세요");
        pw.focus();
        re.val('');
    }
    else if(re.val()=='')
    {
        alert("비밀번호를 다시 입력하세요");
        re.focus();
    }
    else if(pw.val() != re.val())
    {
        alert("비밀번호가 잘 못 되었습니다.");
        pw.val(''); re.val('');
        pw.focus();
    }
    else if(email.val() == '')
    {
        alert("이메일 입력하세요");
        email.focus();
    }
    else if(tel.val() == '')
    {
        alert("전화번호를 입력하세요");
        tel.focus();
    }
    else if(addr.val() == '')
    {
        alert("주소를 입력하세요");
        addr.focus();
    }
    else
    {
        $("#signupForm").submit();
    }
}