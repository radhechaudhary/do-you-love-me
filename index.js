let yes=document.getElementsByClassName('yes')[0]
var no=document.getElementsByClassName('no')[0]

let count=0;

no.addEventListener('click', function no(){
    if(count>=2){
        function changeposition(){
            document.getElementsByClassName('no')[0].style.transition="all 1s";
            document.getElementsByClassName('no')[0].style.position="absolute";
            document.getElementsByClassName('no')[0].style.top=`${Math.floor(Math.random()*90)}%`;
            document.getElementsByClassName('no')[0].style.left=`${Math.floor(Math.random()*90)}%`;
        }
        changeposition()
        document.getElementsByClassName('no')[0].addEventListener('mouseenter', function changeposition(){
            document.getElementsByClassName('no')[0].style.transition="all 1s"
            document.getElementsByClassName('no')[0].style.position="absolute";
            document.getElementsByClassName('no')[0].style.top=`${Math.floor(Math.random()*90)}%`;
            document.getElementsByClassName('no')[0].style.left=`${Math.floor(Math.random()*90)}%`;
            
        })
        document.getElementsByClassName('no')[0].removeEventListener('click', no())
    }
    else{
        let main=document.querySelectorAll(".main");
        document.querySelector(".box").appendChild(main[0]);
        count ++
    }
    
});
yes.addEventListener('click', function yes(){
    let main=document.querySelectorAll(".main");
    document.getElementsByClassName('bttns')[0].style.display="none";
    document.querySelector(".box").prepend(main[3-count]);
    count=0;
});