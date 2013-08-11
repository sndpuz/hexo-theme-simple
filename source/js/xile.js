var atl = document.getElementsByClassName("arttitle");
for(i=0;i<atl.length;i++){
    if(atl[i].addEventListener)
       atl[i].addEventListener("click", showCon, false);
    if(atl[i].attachEvent)
       atl[i].attachEvent("onclick", showCon); 
}
function showCon() {
    var con = this.parentNode.nextElementSibling;
    if(con.style.display == "none"){
       con.style.display = "block";
    }
    else con.style.display = "none";
}
    function getScrollTop(){
        if(window.pageYOffset != null)
            return window.pageYOffset;
        var d = window.document;
        if(document.compatMode == "CSS1Compat")
            return d.document.documentElement.scrollTop;
        return d.document.body.scrollTop;
    }
    window.onscroll = function(){
        var top = getScrollTop();
        var btn = document.getElementById("btn");
        if(top>0){
          btn.style.display = "block";
        }
        else btn.style.display = "none";
    }
    function backTop(){
         (function() {  
             var top = getScrollTop();  
             if (top > 0) {  
             window.scrollTo(0, top / 1.2)  
             setTimeout(arguments.callee, 10);  
             }  
         })() 
    }