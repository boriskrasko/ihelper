const  item  =  (  title,   model,   processor,  memory,  graphic, image,   imageBack,   price,   h, b, l, m  )  => ({ 
         title,   model,   processor,  memory,  graphic,    image,   imageBack,  price,   h, b, l, m})
         
const items =  [
item( 'DELL',  '  Vostro   3470',   '  Intel®   Core™ i7-8700',   '  32 GB DDR4  2400  MHz   (16   GB ×  2)',  'NVIDIA® GeForce® GT 710', 'img/vostro-3470/vostro-3470-sff_01.png',   'img/vostro-3470/vostro-3470-sff_02.png',  '1414.08',  '290',   '92.6',  '293',   '4.81'),
item( 'DELL',  '  Vostro   3670',   '  Intel®   Core™ i5-8400',   '  16 GB DDR4  2400  MHz   (8 GB ×  2)',  '  Intel®   HD Graphics 610/630',   'img/vostro-3670/vostro-3670-mt_01.png', 'img/vostro-3670/vostro-3670-mt_02.png'),
item( 'DELL',  '  Optiplex 3060  micro',  '  Intel®   Core™ i5-8500T',  '  32 GB DDR4  2400  MHz', '  Intel HD 610/630  ', 'img/optiplex-3060/optiplex-3060-mff_01.png',  'img/optiplex-3060/optiplex-3060-mff_02.png'),
item( 'DELL',  '  Optiplex 3060  small',  '  Intel®   Core™ i5-8500',   '  16 GB DDR4  2666  MHz', '  Intel HD 610/630',   'img/optiplex-3060/optiplex-3060-sff_01.png',  'img/optiplex-3060/optiplex-3060-sff_02.png'),
item( 'DELL',  '  Optiplex 3060  Mini  ', '  Intel®   Core™ i3-8100',   '  16 GB DDR4  2666  MHz', '  Intel HD 610/630',   'img/optiplex-3060/optiplex-3060-mt_01.png',   'img/optiplex-3060/optiplex-3060-mt_02.png'),
item( 'DELL',  '  OptiPlex 5250  (AiO)',  '  Intel®   Core™ i3',  '  8  GB DDR4  2400  MHz', 'AMD  Radeon™  R7 M465  2  GB',  'img/optiplex-5250/optiplex-5250-aio_01.png',  'img/optiplex-5250/optiplex-5250-aio_02.png'),
item( 'DELL',  '  XPS   13-9380',   '  Intel®   Quad  Core™ i7-8565U ', '4-16 GB SDRAM LPDDR3', 'Intel®  UHD   Graphics 620', 'img/xps-13/xps-13-9380_01.png',   'img/xps-13/xps-13-9380_02.png'),
item( 'DELL',  '  Latitude 7414',   'Intel®  Core  i7 6600U (2.6GHz/4MB cache)', '8 SDRAM DDR4  2133  MHz', 'AMD  Radeon   R7 M360',   'img/latitude-7414/latitude-7414_01.png',   'img/latitude-7414/latitude-7414_02.png'),
item( 'DELL',  '  Latitude 14 Rugged ', 'Intel®  Core  i5-6300U (2.4GHz, 3MB   cache)', '8 SDRAM DDR4  2133  MHz', 'Intel   HD Graphics 520', 'img/latitude-5414/latitude-5414_01.png',   'img/latitude-5414/latitude-5414_02.png'),
item( 'DELL',  '  Precision   R7920',  '  Intel®   Xeon®',  '  1,5   TB 2666  MHz   DDR4  ECC', 'NVIDIA  NVS   310', 'img/precision-r7920/precision-r7920_01.png',  'img/precision-r7920/precision-r7920_02.png'),
];

Vue.component('app', {
	template: `
 <div class="app">
	 <transition name="modal">
            <div class="modal" v-if="modalVisible" v-on:click="modalVisible = false; isActive = false;">
               <div class="btns">
                  <button class="close" v-on:click="modalVisible = !modalVisible; isActive = !isActive">
                  <img src="svg/close.svg">
                  </button>
               </div>
               <div class="content">
                  <div>
                     <strong>{{item.model}}</strong>
                     <strong>Processor:</strong>
                     <ul>
                        <li>Intel® Celeron® G4900 (2&nbsp;MB, 3,1&nbsp;GHz)</li>
                        <li>Intel® Pentium® G5400 (4&nbsp;MB, 3,7&nbsp;GHz)</li>
                        <li>Intel® Core™ i3-8100 (6&nbsp;MB, 3,60&nbsp;GHz)</li>
                        <li>Intel® Core™ i5-8400 (9&nbsp;MB, do 4,0 GHz)</li>
                        <li>Intel® Core™ i7-8700 (12&nbsp;MB, do 4,6&nbsp;GHz)</li>
                     </ul>
                     <strong>Memory</strong>
                     <ul>
                        <li>4&nbsp;GB DDR4 (4&nbsp;GB × 1)</li>
                        <li>8&nbsp;GB DDR4 2400&nbsp;MHz (4&nbsp;GB&nbsp;×&nbsp;2</li>
                        <li>12&nbsp;GB DDR4 2400&nbsp;MHz (4&nbsp;GB + 8&nbsp;GB)</li>
                        <li>16&nbsp;GB DDR4 2400&nbsp;MHz (16&nbsp;GB&nbsp;×&nbsp;1</li>
                        <li>24&nbsp;GB DDR4 2400&nbsp;MHz (8&nbsp;GB + 16&nbsp;GB)</li>
                        <li>32&nbsp;GB DDR4 2400&nbsp;MHz (16&nbsp;GB × 2)</li>
                     </ul>
                     <strong>Graphics</strong>
                     <ul>
                        <li>Intel® HD Graphics 610/630</li>
                        <li>NVIDIA® GeForce® GT 710 2&nbsp;GB DDR3</li>
                     </ul>
                  </div>
                  <div><img v-bind:src="item.imageBack"></div>
               </div>
            </div>
         </transition>
	<div class="flex">
            <div class="processor" v-bind:class="[(modalVisible || isScale || isBackCase) ? 'intel' : '']">
               <img src="img/processor-intel.png">
            </div>
            <div class="sidebar" v-bind:class="[(modalVisible || isScale || isBackCase) ? 'blur' : '']">
               <div class="wrapper">
                  <nav>
                    <ul class="l-items">
                        <li><a href="index.html">Main</a></li>
                        <li class="item-m"><a href="">Development</a></li>
                        <li class="item-m"><a href="">Service</a></li>
                        <li class="item-m"><a href="support.html">Support</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Hosting</a></li>
                        <li><a href="">Contact</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div class="banner server" v-bind:class="[(modalVisible || isScale || isBackCase) ? 'blur' : '']">
               <div class="man"></div>
            </div>
            <div class="about bb-red">
               <div class="front" v-on:click="isScale = !isScale; isActive = !isActive; isBackCase = false; modalVisible = false">
                  <img v-bind:src="item.image" v-bind:class="[isScale ? 'scale' : '']">
               </div>
               <div class="description" v-bind:class="[(modalVisible || isScale || isBackCase) ? 'blur' : '']">
                  <ul>
                     <li><strong>{{item.title}}</strong></li>
                     <li>Model - <strong>{{item.model}}</strong></li>
                     <li>Processor - <br><strong>{{item.processor}}</strong></li>
                     <li>Memory - <br><strong>{{item.memory}}</strong></li>
                     <li>Graphics - <br><strong>{{item.graphic}}</strong></li>
                     <li class="price">
                        <transition vue-role="transition" name="price">
                           <span v-if="priceVisible">{{item.price}} BYN</span>
                        </transition>
                     </li>
                  </ul>
                  <div class="btns">
                     <button class="btn" v-on:click="modalVisible = !modalVisible; isActive = !isActive">
                     {{specBtnText}}
                     </button>
                     <button class="btn" v-on:click="priceVisible = !priceVisible">
                     {{priceBtnText}}
                     </button>
                  </div>
               </div>
            </div>
            <div class="back" v-bind:class="[(modalVisible || isScale)  ? 'blur' : 'b']" v-on:click="isBackCase = !isBackCase; isActive = !isActive; isScale = false">
               <img v-bind:src="item.imageBack" v-bind:class="[isBackCase ? 'scaleBackCase' : '']">
            </div>
         </div>
         <div class="search">
            <input placeholder="Search:" type="" name="" v-model="search">
            <ul v-for="(item, index) of filteredItems" v-on:click="selectItem(item, index)"
               :class="{'active': selectedItemIndex === index}">{{item.model}}
            </ul>
         </div>
         <div class="layer" v-bind:class="[(isScale || isBackCase) ? 'block' : '']">
            <div class="details">
               <div>
                  <p>The perfect solution for the office.</p>
                  <p><strong>Processor</strong></p>
                  <ul>
                     <li>Intel® 8th Generation Celeron® G4900 (2M Cache, 3.1 GHz)</li>
                     <li>8th Generation Intel® Pentium® G5400 (4MB Cache, 3.7 GHz)</li>
                     <li>8th Generation Intel® Core ™ i3-8100 (6MB Cache, 3.60 GHz)</li>
                     <li>8th Generation Intel® Core ™ i5-8400 (9MB Cache, up to 4.0 GHz)</li>
                     <li>8th Generation Intel® Core ™ i7-8700 (12MB Cache, up to 4.6 GHz)</li>
                  </ul>
                  <p><strong>Operating system</strong></p>
                  <ul>
                     <li>Windows® 10 (64-bit)&nbsp;</li>
                     <li>Windows® 10 Professional (64 bit)&nbsp;</li>
                     <li>Windows® 10 National Academic STF (64 bit)&nbsp;</li>
                     <li>Ubuntu</li>
                  </ul>
                  <p><strong>Memory</strong></p>
                  <ul>
                     <li>4 GB DDR4 (4 GB x 1)</li>
                     <li>8 GB DDR4 2400 MHz (4 GB x 2 or 8 GB x 1)</li>
                     <li>12 GB DDR4 2400 MHz (4 GB + 8 GB)</li>
                     <li>16 GB DDR4 2400 MHz (16 GB × 1 or 8 GB × 2)</li>
                     <li>24 GB DDR4 2400 MHz (8 GB + 16 GB)</li>
                     <li>32 GB DDR4 2400 MHz (16 GB x 2)</li>
                  </ul>
                  <p><strong>Graphics Card</strong></p>
                  <ul>
                     <li>Integrated Intel® HD Graphics 610/630</li>
                     <li>NVIDIA® GeForce® GT 710 with 2GB DDR3 memory</li>
                  </ul>
               </div>
               <div>
                  <p><strong>Dimensions</strong></p>
                  <ul>
                     <li>Height: 290mm × Width: 92.6mm × Depth: 293mm</li>
                     <li>Weight: 4.81 kg</li>
                  </ul>
                  <p><strong>Security</strong></p>
                  <ul>
                     <li>McAfee Security Center</li>
                     <li>Physical Security - Kensington anti-theft lock slot in chassis and lock</li>
                     <li>TPM 2.0 module (hardware and software)</li>
                     <li>Microsoft Windows Bitlocker&nbsp;</li>
                     <li>Wipe data from local hard drives via BIOS (secure erase function)&nbsp;</li>
                     <li>Computrace BIOS Agent Support - Manage Computrance and Proactive systems</li>
                  </ul>
                  <p><strong>Standard I / O ports</strong></p>
                  <p><strong>Front:</strong></p>
                  <ul>
                     <li>2 USB 3.0 ports</li>
                     <li>1 universal audio jack</li>
                     <li>1 5-in-1 memory card reader</li>
                  </ul>
                  <p><strong>Back:</strong>&nbsp;</p>
                  <ul>
                     <li>4 USB 2.0 ports</li>
                     <li>1 Gigabit Ethernet port</li>
                     <li>1 HDMI</li>
                     <li>1 VGA</li>
                     <li>1 triple audio jack supporting 5.1 surround sound</li>
                  </ul>
                  <p><strong>Power</strong></p>
                  <ul>
                     <li>standard 240W power supply</li>
                  </ul>
               </div>
               <div class="basement">
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p class="copyright">2020 © iHelper.by</p>
               </div>
            </div>
         </div>
     </div>
	` ,
	data() {
		return {
			items:  items,
			item: items[0],
			selectedItemIndex:   0,
			priceVisible:  false,
			modalVisible:  false,
			intelProcessor:   false,
			search:  '',
			isActive: false,
			isScale: false,
			isBackCase: false
		}
	},
	methods: {
		selectItem(item,  index)   {
		this.selectedItemIndex  =  index;
		this.item   =  item
		},
		toggleClass: function(event) {
		       this.isActive = !this.isActive;
		},
		toggleScale: function(event) {
		       this.isScale = !this.isScale;
		},
		toggleBackCase: function(event) {
		       this.isBackCase = !this.isBackCase;
		},
		},
		computed:   {
		priceBtnText() {
		return   this.priceVisible ?  'Hide' :  'Price'
		},
		specBtnText()  {
		return   this.modalVisible ?  'Close'   :  'Specs'
		},

		filteredItems()   {
		var   self  =  this
		const filtered =  this.items.filter(function(item){
		  return   item.model.toLowerCase( ).indexOf(self.search.toLowerCase(  )) >  -1
		})
		return   filtered
		}
	}
})

var app = new   Vue({
el: '#app',
})
