$(document).ready(function(){
    //==============annerweb=====================
    $("#bannerweb").owlCarousel({
        items:1,
        // loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    //================popular===================
    $("#popular").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        margin:10,
        responsive:{
            0:{
                items:1,

            },
            414:{
                items:2
            },

            768:{
                items:3,
            },
            1024:{
                items:4,
                margin:20
                
            },
            1200:{
                items:5,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    //===============featured====================
    $("#featured").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        margin:10,
        responsive:{
            0:{
                items:1,

            },

            414:{
                items:2
            },

            768:{
                items:3,
            },
            1024:{
                items:4,
                margin:20
                
            },
            1200:{
                items:5,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    //==============audio=====================
    $("#audio").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        margin:10,
        responsive:{
            0:{
                items:1,

            },

            414:{
                items:2
            },

            768:{
                items:2,
            },
            1024:{
                items:3,
                margin:20
                
            },
            1200:{
                items:3,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    //==============camera=====================
    $("#camera").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        margin:10,
        responsive:{
            0:{
                items:1,

            },

            414:{
                items:2
            },

            768:{
                items:2,
            },
            1024:{
                items:3,
                margin:20
                
            },
            1200:{
                items:3,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    
    //==============brand=====================
    $("#brand").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        
        responsive:{
            0:{
                items:1,

            },

            414:{
                items:2
            },

            768:{
                items:3,
            },
            1024:{
                items:4,
                margin:20
                
            },
            1200:{
                items:5,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    //==============recently=====================
    $("#recently").owlCarousel({
       
        // loop:true,
        dots:false,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:850,
        margin:10,
        responsive:{
            0:{
                items:1,

            },

            414:{
                items:1,
            },

            768:{
                items:2,
            },
            1024:{
                items:3,
               
                
            },
            1200:{
                items:4,
            }

        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })



    
    
        // AOS.init();

        
        $('.header__menu1__list').slideUp();
        $('.header__nav h2').click(function(event) {
          /* Act on the event */
            $(this).next('.header__menu1__list').slideToggle();	

        });

        if(screen.width < 767){
            $('.header__menu1__sub').slideUp();
            $('.header__menu1__item a').click(function(event) {
                event.preventDefault(); 
                /* Act on the event */
                $(this).next('.header__menu1__sub').slideToggle();	
            });
        }
        if(screen.width < 500){
            $('.header__menu1__sub  ul').slideUp();
            $('.header__menu1__sub li h2').click(function(event) { 
                /* Act on the event */
                $(this).next('ul').slideToggle();	
            });
        }
      
        $('.scrollUp').on('click',(event)=>{
            console.log("abc");
           event.preventDefault();
            $('html,body').animate({scrollTop:0}, 1000);
        }) 

       


})

const bars_menu = document.querySelector(".header__bars__mobile");
const menu2 = document.querySelector(".header__menu2");
const close_menu2 = document.querySelector(".header__menu__close");
const itemMenu2 = document.querySelector(".header__menu2__item");
const subMenu2 = document.querySelector(".header__menu2__sub");
const listMenu2 = document.querySelector(".header__menu2__list");
const goBack = document.querySelector(".header__go__back");
const productCart = document.querySelector(".product__cart");
const Cart = document.querySelector(".section__cart");
const cartClose = document.querySelector(".section__cart__close");
let subMenu;

listMenu2.addEventListener('click',(e)=>{
    if(!menu2.classList.contains("active__menu2")){
        return 0; 
    }
    if(e.target.closest(".header__menu2__item")){
       const itemMenu = e.target.closest(".header__menu2__item");
       showSubmenu(itemMenu);
        console.log("abcasdasd");
    }
})

bars_menu.addEventListener('click',()=>{
   toggleMenu();
})
close_menu2.addEventListener('click',()=>{
    toggleMenu();
})
goBack.addEventListener('click',()=>{
    hideSubMenu();
})

productCart.addEventListener('click',()=>{
    toggleCart();
    
})
cartClose.addEventListener('click',()=>{
    toggleCart();
    
})






function toggleMenu(){
    menu2.classList.toggle("active__menu2");
}

function toggleCart(){
    Cart.classList.toggle("active__cart");
}

function showSubmenu(itemMenu){
    subMenu = itemMenu.querySelector(".header__menu2__sub");
    subMenu.classList.add("active__sub");
    const menuTitle = itemMenu.querySelector("i").parentNode.childNodes[0].textContent;
    menu2.querySelector(".header__current__title").innerHTML = menuTitle; 
    console.log(menuTitle);

}

function hideSubMenu(){
    subMenu.classList.remove("active__sub");
    menu2.querySelector(".header__current__title").innerHTML = ""; 
}


window.addEventListener('scroll',()=>{
    if(this.pageYOffset > 150){      
        document.querySelector(".header__nav").classList.add("fixed");
        document.querySelector(".scrollUp").classList.add("scrollFix");
        document.querySelector(".header__top__flex").classList.add("fix__top__logo");
        // document.querySelector(".active__menu2").style = "padding:12rem 0;";
        
    }else{
        document.querySelector(".header__nav").classList.remove("fixed");
        document.querySelector(".scrollUp").classList.remove("scrollFix");
        document.querySelector(".header__top__flex").classList.remove("fix__top__logo");
        // document.querySelector(".active__menu2").style = "padding:2rem 0;";
    }
})
    
