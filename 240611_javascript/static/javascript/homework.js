

// 
window.onload=function()
{
    document.getElementById("button").addEventListener('click', function(){start();});
}

function start()
{
    var num=0;
    var a=document.querySelector("#wrap").innerHTML;
    var b=' ';

    for(var i=0; i<5; i++)
    {
        for(var j=0; j<4; j++)
        {
            a += a.innerHTML;
            num=Math.floor(Math.random()*50)+1;
            num_write(i, j, num+a);
        }
        // document.querySelector("#wrap").innerHTML=' a ';
    }
}

function num_write(i, j, num)
{
    document.querySelector("#wrap").innerHTML=num+' '+j;  
    if(i==0)
    {
        // document.querySelector("#wrap").innerHTML=' '+num;
        // if(j==3)
            // document.querySelector("#wrap").innerHTML='<br>';
        // switch(j)
        // {
        //     case 0 : document.querySelector(".table11").innerHTML=num; break;
        //     case 1 : document.querySelector(".table12").innerHTML=num; break;
        //     case 2 : document.querySelector(".table13").innerHTML=num; break;
        //     case 3 : document.querySelector(".table14").innerHTML=num; break;
        // }
    }
    else if(i==1)
    {
        // document.querySelector("#wrap").innerHTML=' '+num;
        // if(j==3)
            // document.querySelector("#wrap").innerHTML='<br>';
        // switch(j)
        // {
        //     case 0 : document.querySelector(".table21").innerHTML=num; break;
        //     case 1 : document.querySelector(".table22").innerHTML=num; break;
        //     case 2 : document.querySelector(".table23").innerHTML=num; break;
        //     case 3 : document.querySelector(".table24").innerHTML=num; break;
        // }
    }
    else if(i==2)
    {
        // document.querySelector("#wrap").innerHTML=' '+num;
        // if(j==3)
            // document.querySelector("#wrap").innerHTML='<br>';
       // switch(j)
        // {
        //     case 0 : document.querySelector(".table31").innerHTML=num; break;
        //     case 1 : document.querySelector(".table32").innerHTML=num; break;
        //     case 2 : document.querySelector(".table33").innerHTML=num; break;
        //     case 3 : document.querySelector(".table34").innerHTML=num; break;
        // }
    }
    else if(i==3)
    {
        // document.querySelector("#wrap").innerHTML=' '+num;
        // if(j==3)
            // document.querySelector("#wrap").innerHTML='<br>';
        // switch(j)
        // {
        //     case 0 : document.querySelector(".table41").innerHTML=num; break;
        //     case 1 : document.querySelector(".table42").innerHTML=num; break;
        //     case 2 : document.querySelector(".table43").innerHTML=num; break;
        //     case 3 : document.querySelector(".table44").innerHTML=num; break;
        // }
    }
    else if(i==4)
    {
        // document.querySelector("#wrap").innerHTML=' '+num;
        // if(j==3)
            // document.querySelector("#wrap").innerHTML='<br>';
        // switch(j)
        // {
        //     case 0 : document.querySelector(".table51").innerHTML=num; break;
        //     case 1 : document.querySelector(".table52").innerHTML=num; break;
        //     case 2 : document.querySelector(".table53").innerHTML=num; break;
        //     case 3 : document.querySelector(".table54").innerHTML=num; break;
        // }
    }
}
