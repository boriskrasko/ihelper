Vue.component('bottom', {
	template: `
 <div class="footer">
         <div class="wrapper">
            <div class="navbar">
               <nav>
                  <ul>
                     <li><a href="">Consulting</a></li>
                     <li><a href="">Optimizing download speed</a></li>
                     <li><a href="">Hard disk data recovery</a></li>
                     <li><a href="">Remote computer assistance</a></li>
                     <li><a href="">System administration</a></li>
                     <li><a href="">Antivirus support</a></li>
                     <li><a href="">Cloud storage</a></li>
                     <li><a href="">Archiving and backup</a></li>
                     <li><a href="">Cleaning and tweaking the registry</a></li>
                     <li><a href="">LAN design</a></li>
                     <li><a href="">Installing and configuring SLL certificates</a></li>
                     <li><a href="">FTP servers and protocols management</a></li>
                     <li><a href="">Internal optimization of SPA and sites</a></li>
                     <li><a href="">Turnkey IT solutions creation</a></li>
                     <li><a href="">Item navbar menu</a></li>
                     <li><a href="">Item navbar menu</a></li>
                  </ul>
               </nav>
            </div>
            <div class="contact">
               <div class="head">
                  <div class="dell">
                     <img src="img/dell.png">
                  </div>
               </div>
               <div class="foot">
                  <div class="partner">
                     <img src="img/dell-emc.png">
                  </div>
                  <div class="location">
                     <address>"Ayhelper Bai"<br>
                        Dzerzhinsky, 5<br>
                        220036 Minsk, BY Belarus<br>
                        +375298933459<br><a href="mailto:admin@ihelper.by">
                        admin@ihelper.by</a><br>
                        <a href="https://ihelper.by">ihelper.by</a>
                     </address>
                  </div>
               </div>
            </div>
         </div>
         <div class="footnav">
            <nav>
               <ul class="os">
                  <li>
                     <hr>
                  </li>
                  <li><img src="svg/logo/windows_logo.svg"><a href="">Windows</a></li>
                  <li><img src="svg/logo/apple_logo.svg"><a href="">macOS</a></li>
                  <li><img src="svg/logo/linux_logo.svg"><a href="">Linux</a></li>
               </ul>
            </nav>
         </div>
         <div class="basement">
            <p>
               As a Microsoft IoT partner, we can offer any programs and services available on the international IT market. The products and services presented on the site are only part of our offer. We also develop unique IT solutions for companies and individual entrepreneurs. Our programmers are ready to solve a problem of any complexity: from setting up a PC to developing powerful applications and optimizing online businesses.<a href="">Contact us.</a>
            </p>
            <p class="copyright">2020 © iHelper.by</p>
         </div>
      </div>
	`
})

var app = new   Vue({
el: '#footer'
})
