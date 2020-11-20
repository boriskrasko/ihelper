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
]

new   Vue({
el:'#app',
data: {
items:   items,
item: items[0],
selectedItemIndex:   0,
priceVisible:  false,
htmlContentVisible:  false,
htmlContentVisible2:  false,
modalVisible:  false,
searchListVisible:   true,
btnPriceVisible:  true,
optionalVisible:  false,
backSide:   true,
intelProcessor:   false,
search:  '',
activeColor: '#222',
},

methods: {
selectItem(item,  index)   {
this.selectedItemIndex  =  index;
this.item   =  item
}

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