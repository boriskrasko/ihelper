Vue.component('top', {
	template: `
  <div class="header">
         <div class="logo">
            <div class="wrapper">
               <img src="svg/logo.svg">
            </div>
            <span class="title">iHELPER</span>
            <span class="subtitle">information technology</span>
         </div>
         <div class="topnav">
            <nav>
               <ul class="func">
                  <li><button class="in"><img src="svg/func/add.svg"></button></li>
                  <li><button class="moon"><img src="svg/func/moon.svg"></button></li>
               </ul>
               <ul class="social">
                  <li><button class="fb"><img src="svg/social/facebook.svg"></button></li>
                  <li><button class="vk"><img src="svg/social/vk.svg"></button></li>
                  <li><button class="tw"><img src="svg/social/twitter.svg"></button></li>
                  <li><button class="inst"><img src="svg/social/instagram.svg"></button></li>
               </ul>
               <ul class="lang">
                  <li><button><img src="svg/lang/usa.svg"></button>rus</li>
               </ul>
            </nav>
            <nav>
               <ul class="topmenu">
                  <li class="logo-min">
                     <span class="title">iHELPER</span>
                     <span class="subtitle">information technology</span>
                  </li>
                  <li><a href="">Development</a></li>
                  <li><a href="">Service</a></li>
                  <li><a href="support.html">Support</a></li>
               </ul>
            </nav>
            <section>
               <div>
                  <h1>Remote assistance to your computer</h1>
                  <h2>IT consulting</h2>
               </div>
               <div class="microsoft"><img src="img/microsoft-gold-partner.png"></div>
            </section>
         </div>
      <div>
	`
})

var app = new   Vue({
el: '#header'
})
