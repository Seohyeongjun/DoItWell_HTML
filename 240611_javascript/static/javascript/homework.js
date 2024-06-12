


window.onload=function()
{
    document.getElementById("button").addEventListener('click', function(){num_write();});
}

function num_write()
{
    var num=document.getElementById("wrap");
    num.innerHTML=start();
}

function start()
{
    var a=' ';
    for(var i=0; i<5; i++)
    {
      var b=' ';
      for(var j=0; j<4; j++)  
      {
        var num=Math.floor(Math.random()*50)+1;
        b+=' '+num;
      }
      a+=b+'<br>';
    }
    return a;
}