const navItem1 = document.getElementById('nav-item1');
const row1 = document.getElementById('row1');
const navItem2 = document.getElementById('nav-item2');
const row2 = document.getElementById('row2');
const navItem3 = document.getElementById('nav-item3');
const row3 = document.getElementById('row3');
const navItem4 = document.getElementById('nav-item4');
const row4 = document.getElementById('row4');
const drop = document.querySelector('.drop')
const selectNav = document.getElementById('select-nav')
const selectChild = document.querySelector('.select-child')
const selectChildList = document.getElementById('select-child_list')
const all = document.getElementById('all')
const app = document.getElementById('app')
const card = document.getElementById('card')
const web = document.getElementById('web')
const portfolioWraper = document.getElementById('portfolio-wraper')
const portfolioCard = document.querySelectorAll('.portfolio-card')
const portfolioWeb = document.querySelectorAll('.portfolio-web')
const portfolioApp = document.querySelectorAll('.portfolio-app')
const meunuBtn = document.querySelector('.menu-btn')
const mainNavigationItem = document.querySelectorAll('.main-navigation_item')
const  mainNavigationItems = document.querySelector('.main-navigation_items')
const navigation = document.querySelector('.main-navigation')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const hidenMenu = document.querySelector('.hiden-menu')
const scrollBtn = document.querySelector('.scroltoTopBtn')
window.addEventListener('scroll',() => {
    portfolioApp.forEach(item => {
        item.classList.toggle('porfolio-rsp',window.innerWidth <= 600)
    })
})
meunuBtn.addEventListener('click',() => {
   meunuBtn.classList.toggle('active')
   navigation.classList.toggle('nonene')
   mainNavigationItems.classList.toggle('active13')
   
   
})
mainNavigationItem.forEach(item => {
    item.addEventListener('click',() => {
        meunuBtn.classList.remove('active')
        navigation.classList.add('nonene')
        mainNavigationItems.classList.remove('active13')
    })
})
window.addEventListener('scroll',() => {
scrollBtn.classList.toggle('active',window.scrollY > 500)
})
scrollBtn.addEventListener('click',()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

// window.addEventListener('scroll',() => {
//     const sections = document.querySelectorAll('.reaval');
//    for (let i = 0; i < sections.length; i++) {
//     let windowHeight = window.innerHeight;
//     let sectionsTop = sections[i].getBoundingClientRect().top;
//     let sectionsPoint = 50

//     if (sectionsTop < windowHeight - sectionsPoint) {
//         sections[i].classList.add('actives')
//     }
    
//    }
// })
// select ===============================================
drop.addEventListener('mouseover',() => {
    selectNav.classList.remove('none')
})
drop.addEventListener('mouseleave',()=>{
    selectNav.classList.add('none')
})
selectChild.addEventListener('mouseover',()=> {
 selectChildList.classList.remove('none')
})
selectChild.addEventListener('mouseleave',()=> {
    selectChildList.classList.add('none')
   })

// navItems=======================================================
navItem1.addEventListener('click',() => {
    navItem1.classList.add('nav-item_active')
    navItem2.classList.remove('nav-item_active')
    navItem3.classList.remove('nav-item_active')
    navItem4.classList.remove('nav-item_active')
    row1.classList.remove('none')
    row2.classList.add('none')
    row3.classList.add('none')
    row4.classList.add('none')
})
navItem2.addEventListener('click',() => {
    navItem2.classList.add('nav-item_active')
    navItem1.classList.remove('nav-item_active')
    navItem3.classList.remove('nav-item_active')
    navItem4.classList.remove('nav-item_active')
    row2.classList.remove('none')
    row1.classList.add('none')
    row3.classList.add('none')
    row4.classList.add('none')
})
navItem3.addEventListener('click',() => {
    navItem3.classList.add('nav-item_active')
    navItem2.classList.remove('nav-item_active')
    navItem1.classList.remove('nav-item_active')
    navItem4.classList.remove('nav-item_active')
    row3.classList.remove('none')
    row1.classList.add('none')
    row2.classList.add('none')
    row4.classList.add('none')
})
navItem4.addEventListener('click',() => {
    navItem4.classList.add('nav-item_active')
    navItem2.classList.remove('nav-item_active')
    navItem3.classList.remove('nav-item_active')
    navItem1.classList.remove('nav-item_active')
    row4.classList.remove('none')
    row1.classList.add('none')
    row3.classList.add('none')
    row2.classList.add('none')
})
// portfolio ====================================
all.addEventListener('click',(e) => {
    all.classList.add('portfolio_active')
    app.classList.remove('portfolio_active')
    card.classList.remove('portfolio_active')
    web.classList.remove('portfolio_active')
    e.preventDefault()
    portfolioWraper.classList.add('portfolio-items')
    // portfolioWraper.classList.remove('portfolio-wraper')
    portfolioWraper.classList.remove('portfolio_active2')
    portfolioApp.forEach(item => {
        item.classList.remove('none')
        item.classList.remove('app')
    })
    portfolioWeb.forEach(item => {
        item.classList.remove('none')
        item.classList.remove('card')
    })
    portfolioCard.forEach(item => {
        item.classList.remove('none')
        item.classList.remove('card')
    })

})
app.addEventListener('click',(e) => {
    all.classList.remove('portfolio_active')
    app.classList.add('portfolio_active')
    card.classList.remove('portfolio_active')
    web.classList.remove('portfolio_active')
    e.preventDefault()
    portfolioCard.forEach(c => {
        c.classList.add('none')
    })
    portfolioWeb.forEach(item => {
        item.classList.add('none')
    })
    portfolioCard.forEach(item => {
        item.classList.add('none')
    })
    portfolioApp.forEach(item => {
        e.preventDefault()
    item.classList.remove('none')
    portfolioWraper.classList.add('portfolio_active2')
    portfolioWraper.classList.remove('portfolio-items')
    item.classList.add('app')
    })
})
card.addEventListener('click',(e) => {
    all.classList.remove('portfolio_active')
    app.classList.remove('portfolio_active')
    card.classList.add('portfolio_active')
    web.classList.remove('portfolio_active')
    e.preventDefault()
    portfolioApp.forEach(c => {
        c.classList.add('none')
    })
    portfolioWeb.forEach(item => {
        item.classList.add('none')
    })
    portfolioCard.forEach(item => {
    item.classList.remove('none')
    portfolioWraper.classList.add('portfolio_active2')
    portfolioWraper.classList.remove('portfolio-items')
    item.classList.add('app')
    })
})
web.addEventListener('click',(e) => {
    all.classList.remove('portfolio_active')
    app.classList.remove('portfolio_active')
    card.classList.remove('portfolio_active')
    web.classList.add('portfolio_active')
    e.preventDefault()
    e.preventDefault()
    portfolioApp.forEach(c => {
        c.classList.add('none')
    })
    portfolioCard.forEach(c => {
        c.classList.add('none')
    })
    portfolioWeb.forEach(item => {
    item.classList.remove('none')
    portfolioWraper.classList.add('portfolio_active2')
    portfolioWraper.classList.remove('portfolio-items')
    item.classList.add('app')
    })
})

// ScrollReveal({ 
//     distance:'80px',
//     duration:2000,
//     delay:200
// });

// ScrollReveal().reveal('.portfolio, .service-items, .Team, .optimaze, .main-section_info, .main-section_description, .card',
//  { origin:'bottom'});
// ScrollReveal().reveal('.main-section_video', { origin:'left' });
// ScrollReveal().reveal('.clients', { origin:'top' });
// ScrollReveal().reveal('.contact',{origin:'left'})
