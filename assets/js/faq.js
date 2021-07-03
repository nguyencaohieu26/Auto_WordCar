const btn_OpenFAQ = document.querySelectorAll(".faq__title");
const contentFAQ  = document.querySelectorAll(".faq__sub-content");
const faq__maincontent = document.querySelectorAll(".faq__main-content-item");
btn_OpenFAQ.forEach(function(item){
  item.addEventListener("click",function(e){
    const contentChose = e.currentTarget.parentElement;
    faq__maincontent.forEach(function(item){
      if(contentChose == item){
        item.classList.toggle("active")
        return;
      }
      item.classList.remove("active");
    })
  })
})
// 
const btn_ChoseFAQPart = document.querySelectorAll(".faq__main-btn-chose");
const faq_listFAQ      = document.querySelectorAll(".faq__main-details-item");
btn_ChoseFAQPart.forEach(function(item,index){
  item.addEventListener("click",function(e){
    e.preventDefault()
    var nameFAQ = e.currentTarget.innerText;
    faq_listFAQ.forEach(function(item){
      if(nameFAQ == item.getAttribute("data-faq")){
        item.classList.add("active");
        return;
      }
      item.classList.remove("active");
    })
    choseactive(index,btn_ChoseFAQPart)
  })
})