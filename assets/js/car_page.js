// -------------------------------------------------------
// function open features
const openOtherFeature   = document.querySelector(".open__searchcar");
const otherfeatures_car  = document.querySelector(".otherfeatures-car");
openOtherFeature.addEventListener("click",function(e){
  // Change icon
  var item = e.currentTarget.querySelector(".fas");
  if(item.classList.contains("fa-plus-circle")){
    item.classList.remove("fa-plus-circle");
    item.classList.add("fa-minus-circle");
  }else{
    item.classList.add("fa-plus-circle");
    item.classList.remove("fa-minus-circle");
  }  
  // open features
  otherfeatures_car.classList.toggle("active")
})
// ---------------------------------------------------
// price range slider
$(function () {
  $("#slider-range__price").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [0, 15000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range__price").slider("values", 0) +
      " - $" +
      $("#slider-range__price").slider("values", 1),
  );
});
// -----------------------------------------------------
// show expand img
const expandImgElement      = document.querySelectorAll(".btn-expand__img")
const imageFullsize         = document.querySelector(".ImageFullsize");
const close__showfullImg    = document.querySelector(".close__showfullImg");
const imagecar_storeElement = document.querySelector(".car-item__showfull");
expandImgElement.forEach(function(item){
  item.addEventListener("click",function(e){
    e.preventDefault();
    var element = e.currentTarget.parentElement.parentElement.parentElement;
    var elementImage = element.querySelector("img").src;
    imageFullsize.src = elementImage;
    imagecar_storeElement.classList.add("active");
  })
});
close__showfullImg.addEventListener("click",function(){
  imagecar_storeElement.classList.remove("active");
})
// -------------------------------------------------
// function change grid display
const changeGrid_btn = document.querySelectorAll(".select__grid-type");
const gridElmentList = document.querySelector(".categories-car__list");
choseactive(1,changeGrid_btn)
changeGrid_btn.forEach(function(item,index){
item.addEventListener("click",function(e){
  e.preventDefault();
  var compareElement = e.currentTarget.getAttribute("data-grid");
  if(compareElement === 'grid-1'){
    gridElmentList.classList.add("change");
    choseactive(index,changeGrid_btn)
    return;
  }
  if(compareElement === 'grid-2'){
    choseactive(index,changeGrid_btn)
    closeGrid1();
  }
})
});
function closeGrid1(){ 
  gridElmentList.classList.remove("change");
}
window.addEventListener("resize",function(){
  if(window.innerWidth < 650){
    closeGrid1()
    for(let song of changeGrid_btn){
      song.classList.remove("active");
    }
  }
})
// show gallery car
const viewElement           = document.querySelectorAll(".btn-view__gallery")
const gallery_carElement    = document.querySelector(".gallery-car");
const close__galleryBtn     = document.querySelector(".close__gallery-car");
const gallery__imageElement = document.querySelector(".gallery-car__img");
const car__listImg          = document.querySelectorAll(".imagecar")
const gallery_Nextbtn       = document.querySelector(".btnNext");
const gallery_Prevbtn       = document.querySelector(".btnPrev");
var carImage_index = 0;
function prevImg(){
  carImage_index--;
  if(carImage_index < 0){
    carImage_index = car__listImg.length - 1;
  }
  showImgChose(carImage_index);
}
function nextImg(){
  carImage_index++;
  if(carImage_index > car__listImg.length - 1){
    carImage_index = 0;
  }
  showImgChose(carImage_index);
}
function showImgChose(number){
  var srcElement = car__listImg[number].src;
  gallery__imageElement.src = srcElement;
}
viewElement.forEach(function(item,index){
  item.addEventListener("click",function(e){
    e.preventDefault();
    gallery_carElement.style.display = "flex";
    showImgChose(index)
    return;
  })
})
gallery_Nextbtn.addEventListener("click",function(){
  nextImg();
})
gallery_Prevbtn.addEventListener("click",function(){
  prevImg();
})
close__galleryBtn.addEventListener("click",function(){
  gallery_carElement.style.display = "none";
})


