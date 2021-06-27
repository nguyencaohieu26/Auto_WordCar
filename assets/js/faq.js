const btn_OpenFAQ = document.querySelectorAll(".faq__title");
const contentFAQ  = document.querySelectorAll(".faq__sub-content");
const faq__maincontent = document.querySelectorAll(".faq__main-content-item");
btn_OpenFAQ.forEach(function(item,index){
  item.addEventListener("click",function(e){
    const contentChose = e.currentTarget.parentElement;
    const parent = e.currentTarget;
    faq__maincontent.forEach(function(item){
      if(contentChose == item){
        item.classList.toggle("active")
        return;
      }
      item.classList.remove("active");
    })
  })
})
