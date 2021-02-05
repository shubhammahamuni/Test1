// your JS here
var blocks = document.querySelectorAll('div');
var block_ip = document.getElementById('block_id');
var colour_ip = document.getElementById('colour_id');

//blocks[4].style.background = "red";
function applyfunction()
{
     block_no = Number(block_ip.value)
     
      if(block_no != 0 && block_no <=9 &&  colour_ip.value != "")
      {  
        blocks[block_no].style.background = colour_ip.value;
     }

    //console.log(block_no , color_id) ;   
    
}

function resetfunction()
{
    for(let i =1;i<=9;i++)
    {
        blocks[i].style.background = "transparent";
    }
}