  // REDUCE element Margin Top on scroll down
function lessMarginTop(elementId) {
    window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight - window.innerHeight; //Height of the whole page in Px
    const scrolled = window.scrollY*1.1; //Px already scrolled
  
    if(scrolled > (scrollable/10)) {//if the page has scrolled more than1/10 of the "reduction" starts 
      var gradient = document.getElementById(elementId);
      gradient.style.marginTop = -scrolled+"px"; //reduce margin Top by Xscrolled Px
    }
  })
}

//SCALE phone -> reduce size of image when scrolling down untill you reach middle of the page
function scale(ratio, imageToScaleId){ //takes2 attribute : ratio on scale & ID of the image to scale
  window.addEventListener("scroll", ()=> {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight; //Height of the whole page in Px
    const scrolled = window.scrollY; //Px already scrolled
    let wayToBottom = scrollable-scrolled; // Number of Px before the bottom page is reached
    let scaleRatio = ratio; //attribute scale
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhonePic").height/2); //center of the page height in Px - Image height/2 

    if(scrolled > (scrollable/10) && halfWay<0) { //if the page has scrolled more than1/10 of the height "scale" starts and finishes when it reaches the middle of the page
    var picToScale = document.getElementById(imageToScaleId);
    picToScale.style.transform = "scale("+wayToBottom/scaleRatio+","+wayToBottom/scaleRatio+")";
    }
  })
}

//GLIDE image left
function glideLeft(imageToGlideId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight+500 - window.innerHeight;
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhonePic").height/2); //center of the page height in Px - Image height/2 
    let picToGlide = document.getElementById(imageToGlideId);

    if(scrolled > (scrollable/10) && halfWay>0) {
      picToGlide.style.marginLeft = ((windowWidth/2)-document.getElementById(imageToGlideId).width/2)-halfWay/1.5+"px"; //reduce margin Left by Xscrolled Px
      picToGlide.style.marginTop = halfWay+scrolled/10+"px";
    }
    else {
      picToGlide.style.marginLeft = (windowWidth/2)-(document.getElementById(imageToGlideId).width/2)+"px";
    }
  })
}

//GLIDE image right
function glideRight(imageToGlideId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight+500 - window.innerHeight;
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhonePic").height/2); //center of the page height in Px - Image height/2 
    let picToGlide = document.getElementById(imageToGlideId);

    if(scrolled > (scrollable/10) && halfWay>0) {
      picToGlide.style.marginLeft = ((windowWidth/2)-document.getElementById(imageToGlideId).width/2)+halfWay/1.5+"px"; //reduce margin Left by Xscrolled Px
      picToGlide.style.marginTop = halfWay+scrolled/10+"px";
    }
    else {
      picToGlide.style.marginLeft = (windowWidth/2)-(document.getElementById(imageToGlideId).width/2)+"px";
    }
  })
}

//OPACITY
function opacity(imageToShowId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhonePic").height/2); //center of the page height in Px - Image height/2 
    let picToShow = document.getElementById(imageToShowId);

    if(scrolled > (scrollable/10) && halfWay>0) {
      picToShow.style.opacity = (scrolled*2/scrollable)-0.8;
      console.log(picToShow.style.opacity);
    }
  })
}


lessMarginTop("container2");
scale(900, "iPhonePic");
scale(900, "iPhoneScreenImg");
scale(900, "iPhoneScreenImg2");
scale(900, "iPhonePicXS");
scale(900, "iPhoneScreenImgXS");
scale(900, "iPhoneScreenImgXS2");
glideLeft("iPhonePic");
glideLeft("iPhoneScreenImg");
glideLeft("iPhoneScreenImg2");
glideRight("iPhonePicXS");
glideRight("iPhoneScreenImgXS");
glideRight("iPhoneScreenImgXS2");
opacity("iPhoneScreenImgXS2");
opacity("iPhoneScreenImg2");