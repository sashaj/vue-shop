(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],p=0,_=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(_.length)_.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0eec":function(t,e,a){t.exports=a.p+"img/chicken-barbecue.152bb546.jpg"},1565:function(t,e,a){},1812:function(t,e,a){t.exports=a.p+"img/meat.114da9bc.jpg"},"1a9e":function(t,e,a){},"1c5b":function(t,e,a){t.exports=a.p+"img/veggie.265e33c6.jpg"},"277c":function(t,e,a){},"339e":function(t,e,a){t.exports=a.p+"img/double-pepperoni.7bc5b90c.jpg"},"3ee6":function(t,e,a){t.exports=a.p+"img/cheese.2200ccdf.jpg"},"500f":function(t,e,a){t.exports=a.p+"img/mexican.430177ba.jpg"},"569e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vMainWrapper")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-main-wrapper"},[a("vHeader"),a("keep-alive",[a("router-view")],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-header"},[n("div",{staticClass:"v-header__left"},[n("router-link",{attrs:{to:{name:"catalogue"}}},[n("div",{staticClass:"logo__wrapper"},[n("img",{attrs:{src:a("9d64"),alt:""}})]),n("span",{staticClass:"v-header__logo-title"},[t._v("Allonzo")])])],1),n("div",{staticClass:"v-header__right"},["catalogue"!==t.$route.name?n("router-link",{attrs:{to:{name:"catalogue"}}},[n("div",{staticClass:"v-header__link-to-catalogue btn"},[t._v("To Menu")])]):t._e(),"catalogue"==t.$route.name?n("div",{staticClass:"search__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-field",attrs:{type:"text",name:"",placeholder:"Search by name"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),n("button",{staticClass:"seach_btn"},[n("i",{staticClass:"material-icons",on:{click:function(e){return t.search(t.searchValue)}}},[t._v("search")])])]):t._e(),"cart"!==t.$route.name?n("router-link",{staticClass:"v-header__link-to-cart btn",attrs:{to:{name:"cart"}}},[n("i",{staticClass:"material-icons"},[t._v("shopping_basket")]),t._v(" "+t._s(t.TOTAL_CART_ITEMS)+" ")]):t._e()],1)])},u=[],l=a("5530"),p=a("2f62"),_={name:"v-header",data:function(){return{searchValue:""}},methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["SET_SEARCH_VALUE","SORT_BY_CATEGORIES","SEARCH_PRODUCTS"])),{},{search:function(t){this.SET_SEARCH_VALUE(t),t&&(this.SEARCH_PRODUCTS(),this.$root.$emit("refreshUiSlider"))}}),computed:Object(l["a"])({},Object(p["c"])(["TOTAL_CART_ITEMS"]))},m=_,d=(a("e6ad"),a("2877")),f=Object(d["a"])(m,s,u,!1,null,null,null),v=f.exports,T={name:"v-main-wrapper",components:{vHeader:v},data:function(){return{title:"Main wrapper"}}},h=T,E=(a("75b1"),Object(d["a"])(h,o,c,!1,null,"10838a69",null)),C=E.exports,g={name:"App",components:{vMainWrapper:C}},O=g,I=(a("034f"),Object(d["a"])(O,r,i,!1,null,null,null)),S=I.exports,R={ADD_TO_CART:function(t,e){var a=t.commit;a("SET_CART",e),a("CALCULATE_TOTAL_CART_ITEMS")},DELETE_FROM_CART:function(t,e){var a=t.commit;a("REMOVE_FROM_CART",e),a("CALCULATE_TOTAL_CART_ITEMS")},DECREMENT_CART_ITEM:function(t,e){var a=t.commit;a("DECREMENT",e)},INCREMENT_CART_ITEM:function(t,e){var a=t.commit;a("INCREMENT",e)},TOGGLE_OPTIONS_VISIBILITY:function(t){var e=t.commit;e("TOGGLE_OPTIONS_VISIBILITY")},OPTION_SELECT:function(t,e){var a=t.commit;a("OPTION_SELECT",e)},TURNOFF_SELECT_VISIBILITY:function(t){var e=t.commit;e("TURNOFF_SELECT_VISIBILITY")},NOUISLIDER_CURRENT_VALUES:function(t,e,a){var n=t.commit;n("NOUISLIDER_CURRENT_VALUES",e,a)},SET_SEARCH_VALUE:function(t,e){var a=t.commit;a("SET_SEARCH_VALUE",e)},SEARCH_PRODUCTS:function(t,e){var a=t.commit;a("SEARCH_PRODUCTS",e)},FILTER_SEARCH:function(t,e){var a=t.commit;a("FILTER_SEARCH",e)},TOGGLE_FORM_SUBMITTED:function(t){var e=t.commit;e("FORM_SUBMITTED_TOGGLE")},NULLIFY_CART:function(t){var e=t.commit;e("NULLIFY_CART")}},b=(a("4160"),a("159b"),a("bc3a")),L=a.n(b),A={GET_PRODUCTS_FROM_API:function(t){var e=t.commit,a="https://allonzo-pizza.herokuapp.com/products";return L()(a,{method:"GET",withCredentials:!1}).then((function(t){if(t)return t.data.forEach((function(t){t.quantity=1})),e("SET_PRODUCTS_TO_STATE",t.data),t.data})).catch((function(t){return e("SET_OFFLINE_DATA"),console.log(t),t}))},GET_CURRENCY_RATES:function(t){var e=t.commit;return L()("https://api.exchangeratesapi.io/latest",{method:"GET"}).then((function(t){if(t)return e("SET_USD_RATE",t),t})).catch((function(t){return console.log(t),t}))},SEND_FORM:function(t,e){var a=t.commit,n="https://allonzo-pizza.herokuapp.com/form";L()({method:"post",url:n,data:e,withCredentials:!1}).then((function(t){t&&a("FORM_SUBMITTED_TOGGLE")})).catch((function(t){return console.log(t),a("FORM_SUBMITTED_TOGGLE"),t}))}},N=(a("4de4"),a("caad"),a("d81d"),a("a434"),a("b0c0"),a("2532"),a("2909")),U={SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){if(t.cart.length){var a=!1;t.cart.map((function(t){t.article===e.article&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},CALCULATE_TOTAL_CART_ITEMS:function(t){t.total_cart_items=0;for(var e=0;e<t.cart.length;e++)t.total_cart_items+=t.cart[e].quantity},NULLIFY_CART:function(t){t.total_cart_items=0;for(var e=0;e<t.cart.length;e++)t.cart[e].quantity=1;t.cart=[]},REMOVE_FROM_CART:function(t,e){t.cart[e].quantity=1,t.cart.splice(e,1)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--},TOGGLE_OPTIONS_VISIBILITY:function(t){t.are_options_visible=!t.are_options_visible},TURNOFF_SELECT_VISIBILITY:function(t){t.are_options_visible=!1},OPTION_SELECT:function(t,e){t.selected_option=e.name},FILTER_SEARCH:function(t){t.sorted_products=Object(N["a"])(t.products),t.sorted_products=t.sorted_products.filter((function(e){return"all"!==t.selected_option?e.price>=t.nouisliderConfig.currentValues[0]&&e.price<=t.nouisliderConfig.currentValues[1]&&e.category===t.selected_option:"all"==t.selected_option?e.price>=t.nouisliderConfig.currentValues[0]&&e.price<=t.nouisliderConfig.currentValues[1]:void 0}))},SEARCH_PRODUCTS:function(t){t.searchValue.length&&(t.sorted_products=Object(N["a"])(t.products),t.selected_option="all",t.sorted_products=t.sorted_products.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())})))},NOUISLIDER_CURRENT_VALUES:function(t,e){t.nouisliderConfig.currentValues=e},SET_SEARCH_VALUE:function(t,e){t.searchValue=e},SET_OFFLINE_DATA:function(t){t.products=t.offline_data.products,t.products.forEach((function(t){t.quantity=1}))},SET_USD_RATE:function(t,e){t.usd=e.data.rates.USD},FORM_SUBMITTED_TOGGLE:function(t){t.isFormSubmitted=!t.isFormSubmitted}},j={SEARCH_VALUE:function(t){return t.searchValue},PRODUCTS:function(t){return t.products},CART:function(t){return t.cart},SELECT_OPTIONS:function(t){return t.select_options},SELECTED_OPTION:function(t){return t.selected_option},ARE_OPTIONS_VISIBLE:function(t){return t.are_options_visible},SORTED_PRODUCTS:function(t){return t.sorted_products},NOUISLIDER_CONFIG:function(t){return t.nouisliderConfig},TOTAL_CART_ITEMS:function(t){return t.total_cart_items},USD:function(t){return t.usd},ISFORMSUBMITTED:function(t){return t.isFormSubmitted}},D={products:[],cart:[],usd:{},total_cart_items:0,sorted_products:[],cart_item_data:[],isFormSubmitted:!1,select_options:[{name:"all",value:"all"},{name:"small",value:"small"},{name:"medium",value:"medium"},{name:"big",value:"big"}],searchValue:"",selected_option:"all",are_options_visible:!1,nouisliderConfig:{start:5,orientation:"vertical",end:30,step:.01,tooltips:!0,rangeStart:0,rangeEnd:30,currentValues:[12,30]},offline_data:{products:[{image:"1.jpg",name:"T-shirt 1",price:2100,article:"T1",available:!0,category:"Мужские"},{image:"2.jpg",name:"T-shirt 2",price:3150,article:"T2",available:!0,category:"Женские"},{image:"3.jpg",name:"T-shirt 3",price:4200,article:"T3",available:!1,category:"Женские"},{image:"4.jpg",name:"T-shirt 4",price:5300,article:"T4",available:!0,category:"Мужские"},{image:"5.jpg",name:"T-shirt 5",price:6500,article:"T5",available:!1,category:"Женские"},{image:"6.jpeg",name:"T-shirt 6",price:8700,article:"T6",available:!0,category:"Женские"}]}};n["a"].use(p["a"]);var F=Object(l["a"])(Object(l["a"])({},R),A),P=new p["a"].Store({state:D,mutations:U,actions:F,getters:j}),y=P,M=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-catalogue"},[a("h1",{staticClass:"v-catalogue__title"},[t._v("Menu")]),a("div",{staticClass:"v-catalogue__right"},[a("div",{ref:"slider",staticClass:"slider"}),a("vSelect")],1),a("div",{staticClass:"v-catalogue__left"},[a("div",{staticClass:"v-catalogue__list"},[t._l(t.SORTED_PRODUCTS,(function(e){return a("vCatalogueItem",{key:e.article,attrs:{product_data:e},on:{addToCart:t.addToCart}})})),t.SORTED_PRODUCTS.length?t._e():a("p",[t._v("Nothing found with selected search terms")])],2)])])},x=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-catologue-item"},[t.isPopupVisible?n("v-popup",{on:{closePopup:t.closeInfoPopup}},[n("div",{staticClass:"v-popup-item"},[n("div",{staticClass:"v-popup-item__image-wrapper"},[n("img",{staticClass:"v-catalogue-item__image",attrs:{src:a("7584")("./"+t.product_data.image)}})]),n("p",{staticClass:"v-popup-item__name"},[t._v(t._s(t.product_data.name))]),n("p",{staticClass:"v-popup-item__description"},[t._v(" "+t._s(t.product_data.description)+" ")]),n("div",{staticClass:"v-popup-item__info"},[n("p",{staticClass:"v-popup-item__price"},[t._v("Price: "+t._s(t.product_data.price)+"€")]),n("p",{staticClass:"v-popup-item__size"},[t._v("Size: "+t._s(t.product_data.category))]),n("p",{staticClass:"v-popup-item__size"},[t._v(" Calories: "+t._s(t.getRandomInfo[0])+"kcal. ")]),n("p",{staticClass:"v-popup-item__size"},[t._v("Weight: "+t._s(t.getRandomInfo[1])+"g.")])]),n("button",{staticClass:"v-catalogue-item__add_to_cart_btn btn",on:{click:t.addToCart}},[n("i",{staticClass:"material-icons"},[t._v("add_shopping_cart")])])])]):t._e(),n("div",{staticClass:"v-catalogue-item__image-wrapper",on:{click:t.showPopupInfo}},[n("img",{staticClass:"v-catalogue-item__image",attrs:{src:a("7584")("./"+t.product_data.image)}})]),n("div",{staticClass:"v-catalogue-item__main-info"},[n("p",{staticClass:"v-catalogue-item__name"},[t._v(t._s(t.product_data.name))]),n("p",{staticClass:"v-catalogue-item__price"},[t._v(t._s(t.product_data.price))])]),n("p",{staticClass:"v-catalogue-item__description"},[t._v(t._s(t.product_data.description))]),n("div",{staticClass:"v-catalogue-time__btns"},[n("button",{staticClass:"v-catalogue-item__show_info btn",on:{click:t.showPopupInfo}},[n("i",{staticClass:"material-icons"},[t._v("info")])]),n("button",{staticClass:"v-catalogue-item__add_to_cart_btn btn",class:{active:t.product_data.article==t.basketClicked},on:{click:t.addToCart}},[n("i",{staticClass:"material-icons"},[t._v("add_shopping_cart")])])])],1)},V=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"popup__wrapper",staticClass:"v-popup__wrapper"},[a("div",{staticClass:"v-popup"},[a("div",{staticClass:"v-popup__header"},[a("span",[a("i",{staticClass:"material-icons close",on:{click:t.closePopup}})])]),a("div",{staticClass:"v-popup__content"},[t._t("default")],2)])])},$=[],B={name:"v-popup",methods:{closePopup:function(){this.$emit("closePopup")}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.$refs.popup__wrapper&&t.closePopup()}))}},H=B,Y=(a("7823"),Object(d["a"])(H,G,$,!1,null,null,null)),q=Y.exports,z={name:"v-catalogue-item",components:{vPopup:q},data:function(){return{isPopupVisible:!1,basketClicked:""}},props:{product_data:{type:Object,default:function(){return{}}}},methods:{addToCart:function(){var t=this;this.basketClicked=this.product_data.article,this.$emit("addToCart",this.product_data),setTimeout((function(){t.basketClicked=""}),1e3)},closeInfoPopup:function(){this.isPopupVisible=!1},showPopupInfo:function(){this.isPopupVisible=!0},getRandomInt:function(t,e){return parseInt(Math.random()*(e-t)+t)}},computed:{getRandomInfo:function(){switch(this.product_data.category){case"small":return[this.getRandomInt(220,300),this.getRandomInt(390,410)];case"medium":return[this.getRandomInt(350,450),this.getRandomInt(590,610)];case"big":return[this.getRandomInt(500,470),this.getRandomInt(740,750)];default:return 0}}}},W=z,J=(a("dd1e"),Object(d["a"])(W,k,V,!1,null,null,null)),K=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-select__wrapper"},[a("p",{staticClass:"v-select__title"},[t._v("Group by size:")]),a("div",{staticClass:"v-select"},[a("p",{staticClass:"v-select__default-option",on:{click:function(e){return t.TOGGLE_OPTIONS_VISIBILITY()}}},[t._v(t._s(t.SELECTED_OPTION))]),t.ARE_OPTIONS_VISIBLE?a("div",{staticClass:"v-select__options"},t._l(t.SELECT_OPTIONS,(function(e){return a("p",{key:e.value,on:{click:function(a){return t.launchFilterSearch(e)}}},[t._v(t._s(e.name))])})),0):t._e()])])},X=[],Z={name:"v-select",computed:Object(l["a"])({},Object(p["c"])(["SELECT_OPTIONS","SELECTED_OPTION","ARE_OPTIONS_VISIBLE","NOUISLIDER_CURRENT_VALUES"])),methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["GET_PRODUCTS_FROM_API","TOGGLE_OPTIONS_VISIBILITY","OPTION_SELECT","TURNOFF_SELECT_VISIBILITY","FILTER_SEARCH"])),{},{launchFilterSearch:function(t){this.OPTION_SELECT(t),this.FILTER_SEARCH()}}),mounted:function(){document.addEventListener("click",this.TURNOFF_SELECT_VISIBILITY,!0)},beforeDestroy:function(){document.removeEventListener("click",this.TURNOFF_SELECT_VISIBILITY)}},tt=Z,et=(a("6f4e"),Object(d["a"])(tt,Q,X,!1,null,"5ff6e7dd",null)),at=et.exports,nt=a("e9fa"),rt=a.n(nt),it={name:"v-catalogue",components:{vCatalogueItem:K,vSelect:at},computed:Object(l["a"])(Object(l["a"])({},Object(p["c"])(["PRODUCTS","CART","SELECTED_OPTION","SORTED_PRODUCTS","NOUISLIDER_CONFIG","SEARCH_VALUE","TOTAL_CART_ITEMS"])),{},{filteredProducts:function(){return this.SORTED_PRODUCTS.length?this.SORTED_PRODUCTS:[]}}),methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART","NOUISLIDER_CURRENT_VALUES","SEARCH_PRODUCTS","GET_CURRENCY_RATES","FILTER_SEARCH"])),{},{addToCart:function(t){this.ADD_TO_CART(t)}}),mounted:function(){var t=this,e=this.$refs.slider;this.GET_PRODUCTS_FROM_API().then((function(){t.FILTER_SEARCH()})),rt.a.create(e,{start:[this.NOUISLIDER_CONFIG.start,this.NOUISLIDER_CONFIG.end],range:{min:this.NOUISLIDER_CONFIG.rangeStart,max:this.NOUISLIDER_CONFIG.rangeEnd},tooltips:this.NOUISLIDER_CONFIG.tooltips,step:this.NOUISLIDER_CONFIG.step,format:{from:function(t){return parseInt(t)},to:function(t){return parseInt(t)}},connect:!0}),this.NOUISLIDER_CURRENT_VALUES(e.noUiSlider.get()),e.noUiSlider.on("change",(function(){t.NOUISLIDER_CURRENT_VALUES(e.noUiSlider.get()),t.FILTER_SEARCH()})),this.GET_CURRENCY_RATES(),this.$root.$on("refreshUiSlider",(function(){e.noUiSlider.updateOptions({range:{min:t.NOUISLIDER_CONFIG.rangeStart,max:t.NOUISLIDER_CONFIG.rangeEnd}})}))}},ot=it,ct=(a("f418"),Object(d["a"])(ot,w,x,!1,null,null,null)),st=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-cart"},[a("h1",[t._v("Basket")]),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.CART.length,expression:"!CART.length"}]},[t._v("there are no products in basket...")]),t._l(t.CART,(function(e,n){return a("vCartItem",{key:e.article,attrs:{cart_item_data:e},on:{deleteFromCart:function(e){return t.deleteFromCart(n)},increment:function(e){return t.increment(n)},decrement:function(e){return t.decrement(n)}}})})),a("div",{directives:[{name:"show",rawName:"v-show",value:t.CART.length,expression:"CART.length"}],staticClass:"v-cart__total-price-wrapper"},[a("p",{staticClass:"v-cart__total-title"},[t._v("Total price:")]),a("p",{staticClass:"v-cart__total-currency"},[t._v(t._s(t.cartTotalCost)+"€")]),a("p",{staticClass:"v-cart__total-currency"},[t._v("or")]),a("p",{staticClass:"v-cart__total-currency"},[t._v(t._s(t.cartTotalCostUSD)+"$")])]),a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.CART.length,expression:"CART.length"}],attrs:{to:{name:"order-form"}}},[a("button",{staticClass:"link-to-order btn"},[t._v("Proceed")])])],2)},lt=[],pt=(a("13d5"),a("b680"),a("b85c")),_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-cart-item"},[n("div",{staticClass:"v-cart-item__left"},[n("div",{staticClass:"v-cart-item__image-wrapper"},[n("img",{staticClass:"v-cart-item__image",attrs:{src:a("7584")("./"+t.cart_item_data.image)}})]),n("p",{staticClass:"v-cart-item__name"},[t._v(t._s(t.cart_item_data.name))])]),n("div",{staticClass:"v-cart-item__right"},[n("div",{staticClass:"v-cart-item__quantity-wrapper"},[n("span",{staticClass:"qty_btn btn",on:{click:t.decrementItem}},[t._v("-")]),n("span",{staticClass:"v-cart-item__quantity"},[t._v(t._s(t.cart_item_data.quantity))]),n("span",{staticClass:"qty_btn qty_btn-increment btn",on:{click:t.incrementItem}},[t._v("+")])]),n("span",{staticClass:"v-cart-item__price"},[t._v(t._s(t.totalItemPrice)+" €")]),n("button",{staticClass:"v-cart-item__delete",on:{click:t.deleteFromCart}},[n("i",{staticClass:"material-icons"},[t._v("remove_shopping_cart")])])])])},mt=[],dt={name:"v-cart-item",props:{cart_item_data:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{totalItemPrice:function(){return this.$props.cart_item_data.price*this.$props.cart_item_data.quantity}},methods:{deleteFromCart:function(){this.$emit("deleteFromCart")},decrementItem:function(){this.$emit("decrement")},incrementItem:function(){this.$emit("increment")}}},ft=dt,vt=(a("6c9b"),Object(d["a"])(ft,_t,mt,!1,null,null,null)),Tt=vt.exports,ht={name:"v-cart",components:{vCartItem:Tt},data:function(){return{}},computed:Object(l["a"])(Object(l["a"])({},Object(p["c"])(["CART","USD"])),{},{cartTotalCost:function(){var t=[];if(this.CART.length){var e,a=Object(pt["a"])(this.CART);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(n.price*n.quantity)}}catch(r){a.e(r)}finally{a.f()}return t=t.reduce((function(t,e){return t+e})),t}return 0},cartTotalCostUSD:function(){var t=this.cartTotalCost*this.USD;return t.toFixed(2)}}),methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"])),{},{deleteFromCart:function(t){this.DELETE_FROM_CART(t)},increment:function(t){this.INCREMENT_CART_ITEM(t)},decrement:function(t){this.DECREMENT_CART_ITEM(t)}})},Et=ht,Ct=(a("dbe8"),Object(d["a"])(Et,ut,lt,!1,null,null,null)),gt=Ct.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-order-form"},[n("h1",[t._v("Delivery Information")]),n("v-popup",{directives:[{name:"show",rawName:"v-show",value:t.ISFORMSUBMITTED,expression:"ISFORMSUBMITTED"}],on:{closePopup:t.closeDeliveryPopup}},[n("div",{staticClass:"v-order-form__popup"},[n("div",{staticClass:"v-order-form__image"},[n("img",{attrs:{src:a("9d64"),alt:""}})]),n("p",{staticClass:"v-order-form__success"},[t._v("You order has been successfully submitted!")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.formErrors.length,expression:"formErrors.length"}],staticClass:"v-order-form__errors-wrapper"},[n("span",[t._v("Please correct the following error(s):")]),n("ul",t._l(t.formErrors,(function(e){return n("li",{key:e.name},[t._v(t._s(e))])})),0)]),n("form",{ref:"deliveryForm",staticClass:"v-order-form__form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{name:"phone",type:"tel",placeholder:"Phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],attrs:{name:"street",type:"text",placeholder:"Street"},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.houseNumber,expression:"houseNumber"}],attrs:{name:"house number",type:"number",placeholder:"House number"},domProps:{value:t.houseNumber},on:{input:function(e){e.target.composing||(t.houseNumber=e.target.value)}}}),n("input",{attrs:{name:"flat",type:"number",placeholder:"Flat number"}}),n("input",{attrs:{name:"section",type:"number",placeholder:"Section number"}}),n("input",{attrs:{name:"floor",type:"number",placeholder:"Floor number"}}),n("textarea",{attrs:{name:"comments",placeholder:"Comments",cols:"30",rows:"10"}}),n("button",{staticClass:"v-order-form__submit",on:{click:t.checkForm}},[t._v("Order")])])],1)},It=[],St={components:{vPopup:q},data:function(){return{phone:null,street:null,houseNumber:null,formErrors:[]}},methods:Object(l["a"])(Object(l["a"])({},Object(p["b"])(["SEND_FORM","TOGGLE_FORM_SUBMITTED","NULLIFY_CART"])),{},{checkForm:function(t){if(t.preventDefault(),this.phone&&this.houseNumber&&this.street){var e=this.$refs.deliveryForm,a=new FormData(e);this.SEND_FORM(a)}else this.formErrors=[],this.phone||this.formErrors.push("*Phone is required."),this.houseNumber||this.formErrors.push("*House number is required."),this.street||this.formErrors.push("*Street is required.")},closeDeliveryPopup:function(){this.NULLIFY_CART(),this.TOGGLE_FORM_SUBMITTED(),this.$router.push("/")}}),computed:Object(l["a"])({},Object(p["c"])(["ISFORMSUBMITTED"]))},Rt=St,bt=(a("64d2"),Object(d["a"])(Rt,Ot,It,!1,null,null,null)),Lt=bt.exports;n["a"].use(M["a"]);var At=new M["a"]({routes:[{path:"/",name:"catalogue",component:st},{path:"/cart",name:"cart",component:gt},{path:"/order-form",name:"order-form",component:Lt}]}),Nt=At;a("569e"),a("d1e78");n["a"].config.productionTip=!1,new n["a"]({store:y,router:Nt,render:function(t){return t(S)}}).$mount("#app")},"64d2":function(t,e,a){"use strict";var n=a("e569"),r=a.n(n);r.a},"6b20":function(t,e,a){},"6c36":function(t,e,a){t.exports=a.p+"img/hawaii.c5cfe9f4.jpg"},"6c9b":function(t,e,a){"use strict";var n=a("6b20"),r=a.n(n);r.a},"6d99":function(t,e,a){t.exports=a.p+"img/four-seasons.7c38866c.jpg"},"6f4e":function(t,e,a){"use strict";var n=a("84ce"),r=a.n(n);r.a},7584:function(t,e,a){var n={"./arriva.jpeg":"defd","./cheese-chicken.jpg":"d73c","./cheese.jpg":"3ee6","./chicken-barbecue.jpg":"0eec","./crazy-pepperoni.jpg":"cce5","./double-pepperoni.jpg":"339e","./four-cheeses.jpg":"f312","./four-seasons.jpg":"6d99","./ham-cheese.jpg":"b6d7","./ham-mushrooms.jpeg":"add8","./hawaii.jpg":"6c36","./italian.jpg":"e228","./katana.png":"a32b","./logo.png":"9d64","./margherita.jpg":"9d27","./meat.jpg":"1812","./mexican.jpg":"500f","./pepperoni.jpeg":"a0f1","./veggie.jpg":"1c5b","./wutang.jpg":"f28a"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="7584"},"75b1":function(t,e,a){"use strict";var n=a("1a9e"),r=a.n(n);r.a},7782:function(t,e,a){},7823:function(t,e,a){"use strict";var n=a("1565"),r=a.n(n);r.a},"7c3d":function(t,e,a){},"84ce":function(t,e,a){},"85ec":function(t,e,a){},"9d27":function(t,e,a){t.exports=a.p+"img/margherita.782f23eb.jpg"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.3c4edf36.png"},a0f1:function(t,e,a){t.exports=a.p+"img/pepperoni.02b9f315.jpeg"},a32b:function(t,e,a){t.exports=a.p+"img/katana.88af480c.png"},add8:function(t,e,a){t.exports=a.p+"img/ham-mushrooms.e853eb8b.jpeg"},b6d7:function(t,e,a){t.exports=a.p+"img/ham-cheese.b5be883d.jpg"},cce5:function(t,e,a){t.exports=a.p+"img/crazy-pepperoni.e9dd589c.jpg"},d73c:function(t,e,a){t.exports=a.p+"img/cheese-chicken.c2c01531.jpg"},dbe8:function(t,e,a){"use strict";var n=a("7c3d"),r=a.n(n);r.a},dd1e:function(t,e,a){"use strict";var n=a("e495"),r=a.n(n);r.a},defd:function(t,e,a){t.exports=a.p+"img/arriva.e1da4d64.jpeg"},e228:function(t,e,a){t.exports=a.p+"img/italian.a145a873.jpg"},e495:function(t,e,a){},e569:function(t,e,a){},e6ad:function(t,e,a){"use strict";var n=a("7782"),r=a.n(n);r.a},f28a:function(t,e,a){t.exports=a.p+"img/wutang.bfd1d957.jpg"},f312:function(t,e,a){t.exports=a.p+"img/four-cheeses.d39a0a07.jpg"},f418:function(t,e,a){"use strict";var n=a("277c"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b3a7c7ba.js.map