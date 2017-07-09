var coverNumber = 6;

/* type in the number of cover pictures here */

(function (){
    var i = 0;
    function loadImage(){
        var imageObject = new Image();
        imageObject.src = 'cover/' + i + '.jpg';
        imageObject.onload = function() {
            i++;
            if(i < coverNumber){
                    loadImage();
            } else {
                return;
            }
        };
    }
    loadImage();
})();


window.onload = function() {
    var i = 1;
    var firstDiv = false;
    window.onscroll = function() {
        var globalHeader = document.querySelector("header#globalHeader");
        if(window.pageYOffset >= 480){
            globalHeader.classList.add("fixed");
        } else {
            globalHeader.classList.remove("fixed");
        }
    };
    

    var headerCover = document.querySelector("header#globalHeader div.headerCover");
    var firstCover = document.createElement('div');
    
    firstCover.style.backgroundImage = "url('cover/0.jpg')";
    firstCover.className = "front";
    headerCover.appendChild(firstCover);   headerCover.appendChild(document.createElement('div'));
    
    headerCover.style.backgroundImage = "none";

    
    function changeCover(){
        var coverDiv = headerCover.children;
        if(firstDiv){
            coverDiv[0].style.backgroundImage = "url('cover/" +  i + ".jpg')";
            coverDiv[0].classList.add('front');
            coverDiv[1].classList.remove('front');
            firstDiv = false;
        } else {
            coverDiv[1].style.backgroundImage = "url('cover/" +  i + ".jpg')";
            coverDiv[1].classList.add('front');
            coverDiv[0].classList.remove('front');
            firstDiv = true;
        }
        
        if(++i >= coverNumber){
            i = 0;
        }
    }
    setInterval(changeCover, 20000);
};