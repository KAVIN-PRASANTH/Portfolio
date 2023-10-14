
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var wh=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=60;
        if(revealtop<wh-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
