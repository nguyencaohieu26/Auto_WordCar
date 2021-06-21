// scroll function
    const header__topElement = document.querySelector(".header");
    window.onscroll = function() {myFunction()};
      function myFunction() {
          var header__scroll = document.querySelector(".header__scroll");
          if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            header__scroll.classList.add("active-color")
            header__topElement.style.padding = "0"
          } else {
            header__scroll.classList.remove("active-color");
            header__topElement.style.padding = "0 1.5rem"
          }
    }
// pre loading
    var loadElement = document.querySelector(".pre-loading");
    window.addEventListener("load",function(){
      setTimeout(function(){
        loadElement.style.display = "none"
      },2000)
    })
// open & close login/ register
    const openLoginElement = document.querySelector(".header__login");
    const loginformElement = document.querySelector(".auto-world__login");
    const closeLoginElement = document.querySelector(".close__loginform");
    openLoginElement.addEventListener("click",function(){
      loginformElement.style.display = "block";
    });
    closeLoginElement.addEventListener("click",function(){
      loginformElement.style.display="none"
    });
// chose form
    const choselogin__form = document.querySelectorAll(".btn-login-chose");
    const login__form = document.querySelectorAll(".login-detail__left form");

    function choseactive(index){
      for(var i = 0 ;i<choselogin__form.length;i++){
        choselogin__form[i].classList.remove("active");
      }
      choselogin__form[index].classList.add("active");
    }
    function choseForm(text){
      login__form.forEach(function(item){
       var word = item.getAttribute("name-form");
       if(word == text){
         item.classList.add("active")
         return;
       }else{
        item.classList.remove("active");
       }
      });
    }
    choselogin__form.forEach(function(item,index){
      item.addEventListener("click",function(e){
        var text = e.target.innerText;
        choseForm(text)
        choseactive(index)
      })
    });
   