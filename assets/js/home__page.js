// scroll function
    const header__topElement = document.querySelector(".header");
    const movetop2    = document.querySelector(".move-to-top-btn");
    window.onscroll = function() {myFunction()};
      function myFunction() {
          var header__scroll = document.querySelector(".header__scroll");
          if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            header__scroll.classList.add("active-color")
            header__topElement.style.padding = "0"
            movetop2.style.display = "block"
          } else {
            header__scroll.classList.remove("active-color");
            header__topElement.style.padding = "0 1.5rem"
            movetop2.style.display = "none"
          }
    }
// -------------------------------------------------
// smooth scroll
    $(document).ready(function () {
      $("a").click(function (event) {
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          1100,
        );
        event.preventDefault();
      });
    });
// ---------------------------------------------
// pre loading
    var loadElement = document.querySelector(".pre-loading");
    window.addEventListener("load",function(){
      setTimeout(function(){
        loadElement.style.display = "none"
      },800)
    })
   window.addEventListener("reload",function(){
     document.location.reload()
   })
// --------------------------------------------------
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
// ----------------------------------------------------
// chose active
    function choseactive(index,element){
      for(var i = 0 ;i<element.length;i++){
        element[i].classList.remove("active");
      }
      element[index].classList.add("active");
    }
// --------------------------------------------------
// chose form
    const choselogin__form = document.querySelectorAll(".btn-login-chose");
    const login__form = document.querySelectorAll(".login-detail__left form");
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
        choseactive(index,choselogin__form)
      })
    });
// chose active for header nav 
const headerNavLinkElement = document.querySelectorAll('.header__nav-link');
choseactive(0,headerNavLinkElement)
headerNavLinkElement.forEach(function(item,index){
  item.addEventListener("click",function(){
    choseactive(index,headerNavLinkElement);
    return;
  })
})
// ----------------------------------
// chose blog
const readOurblog__imgElement = document.querySelector(".read-ourblog__img");
const ourblogItem__heading    = document.querySelector(".ourblog__content-details h4");
const ourblogItem__desc       = document.querySelector(".ourblog__content-details p");
const ourBlog__btn            = document.querySelectorAll(".btn-ourblog-button");
const readOurblog__content    = document.querySelector(".read-ourblog__content");
const listBlogs = [
  {heading:"Lorem ipsum dolor sit amet, consectetur adipisicing1.",desc:"Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam."},
  {heading:"Lorem ipsum dolor sit amet, consectetur adipisicing2.",desc:"Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
  {heading:"Lorem ipsum dolor sit amet, consectetur adipisicing3.",desc:"Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."},
  {heading:"Lorem ipsum dolor sit amet, consectetur adipisicing4.",desc:"Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque."},
]
function showBlog(number){
  readOurblog__imgElement.src    = `assets/image/index/blog__img/blog__img${number + 1}.jpg`;
  ourblogItem__heading.innerText = listBlogs[number].heading;
  ourblogItem__desc.innerText    = listBlogs[number].desc;
}

function addBlogAnimate(){
  readOurblog__content.classList.add("active");
  setTimeout(function(){
    readOurblog__content.classList.remove("active");
  },200)
}
ourBlog__btn.forEach(function(item,index){
  item.addEventListener("click",function(e){
    e.preventDefault();
    addBlogAnimate()
    choseactive(index,ourBlog__btn)
    showBlog(index);
    return;
  })
})
// ---------------------------------------
const mobilenavLink  = document.querySelectorAll(".mobile-nav__link");
const navmobileList  = document.querySelectorAll(".nav-mobile__child-list");
const icontest = document.querySelectorAll(".mobile-nav-icon")
const header__burger  = document.querySelector(".header__burger");
const header__mobileNav  = document.querySelector(".header__mobile-nav");

mobilenavLink.forEach(function(item,index){
  item.addEventListener("click",function(e){
    var target = e.currentTarget;
    var icon = target.querySelector(".mobile-nav-icon");
    choseactive(index,mobilenavLink)
    icontest.forEach(function(item){
      item.classList.remove("active");
    })
    if(target.classList.contains("active")){
      icon.classList.add("active") 
    }
  })
});
header__burger.addEventListener("click",function(){
  header__mobileNav.classList.toggle("active" )
  mobilenavLink.forEach(function(item){
    item.classList.remove("active")
    icontest.forEach(function(item){
      item.classList.remove("active");
    })
  })
})