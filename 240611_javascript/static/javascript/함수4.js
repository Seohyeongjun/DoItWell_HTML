// 함수4.js

// 브라우저에 모두 표시되면 발생하는 이벤트 onload
window.onload=function()
{
    document.getElementById("calc").addEventListener('click', function(){ 출력(); });
}

function 총점계산(kor, mat, eng, his) // 총점 계산만 하는 함수
{ 

    var total=kor+mat+eng+his;
    return total;
}

function 평균계산(total) // 평균 계산만 하는 함수
{
    var avg=total/4;
    return avg;

}

function 출력() // 총점과 평균을 화면에 출력하는 함수
{
    var total=0;
    var avg=0;
  
    var kor=Number(document.getElementById("kor").value);
    var mat=Number(document.getElementById("mat").value);
    var eng=Number(document.getElementById("eng").value);
    var his=Number(document.getElementById("his").value);

    total=총점계산(kor, mat, eng, his);
    avg=평균계산(total);

    document.getElementById("total").innerText='총점 : '+total+'점';
    document.getElementById("avg").innerText='평균 : '+avg+'점';
}