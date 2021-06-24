// assets/image/car-details/car-option/option1.png
const imgSpe             = document.querySelector(".car__speImage");
const nextSpe            = document.querySelector(".btnNextSpe");
const prevSpe            = document.querySelector(".btnPrevSpe");
const btn_changedemo     = document.querySelectorAll(".btn-product-option");
const imgdemo            = document.querySelector(".car-product__demo img");
const listspeImg         = [1,2,3,4,5,6,7,8]
var imgSpeIndex          = 1;
// ----------------------------------------------------
// Change demo color
  function changeColorDemo(index){
    imgdemo.src = `assets/image/car-details/car-demo/large${index + 1}.jpg`
  }
  btn_changedemo.forEach(function(item,index){
    item.addEventListener("click",function(){
      changeColorDemo(index);
      return;
    })
  })
// ---------------------------------------------
// show spe
  function showSpe(item){
    imgSpe.src = `assets/image/car-details/car_specification/specification_car${item + 1}.jpg`
  }
  function prevImageSpe(){
    imgSpeIndex--;
    if(imgSpeIndex < 0){
      imgSpeIndex = listspeImg.length -1;
    }
    showSpe(imgSpeIndex);
  }
  showSpe(1);
  function nextImgageSpe(){
    imgSpeIndex++;
    if(imgSpeIndex > listspeImg.length - 1){
      imgSpeIndex = 1
    }
    showSpe(imgSpeIndex);
  }
  nextSpe.addEventListener("click",function(){
  nextImgageSpe();
  })
  prevSpe.addEventListener("click",function(){
    prevImageSpe();
  })
