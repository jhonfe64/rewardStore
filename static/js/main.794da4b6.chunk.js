(this["webpackJsonpreward-store"]=this["webpackJsonpreward-store"]||[]).push([[0],{26:function(e,n,t){},37:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var c,a=t(1),r=t.n(a),i=t(28),o=t.n(i),s=(t(37),t(26),t(3)),d=t(6),l=t(7),b=l.a.div(c||(c=Object(d.a)(["\n\n\n\n&.fixed {\n   position: fixed;\n   left: 0;\n   right: 0;\n   background-color: #ffffff;\n   z-index: 10000;\n   top: 0;\n   box-shadow: 1px 1px 5px rgba(0,0,0,0.1);\n}\n\n\n & .logo img {\n   width: 28px;\n }\n\n & ul li a {\n    color: #000000;\n    font-weight: 600;\n }\n\n & ul li span {\n    font-weight: 900;\n }\n\n & .coins {\n    background-color: #ecf0f1;\n    border-radius: 10px;\n    padding: 5px 10px;\n    text-align: left;\n }\n\n & .coins span {\n   display: inline-block;\n   padding-left: 20px;\n }\n\n & .coins svg {\n   color: #f39c12\n }\n"]))),j=t(8),u=t(9),x="https://coding-challenge-api.aerolab.co/products",h={Accept:"application/json",mode:"no-cors",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVlMDNiODY3Mjk2ZTAwMTk5NjQxM2IiLCJpYXQiOjE2MjYyMTEyNTZ9.OzGeRBOP0AnB8kXaVO20X79DFEkO65SEia_3yxmKkU8","Content-Type":"application/json"},m=t(0),p=Object(a.createContext)();function f(e){var n=e.children,t=Object(a.useState)(!1),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(p.Provider,{value:{jumboHeight:r,updateJumboheight:function(e){i(e)}},children:n})}var O=Object(a.createContext)();function g(e){var n=e.children,t=Object(a.useState)(),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(O.Provider,{value:{coinsFigure:r,updateCoinsFigure:function(e){i(e)}},children:n})}var v=t(22),N=t.n(v),w=t(32),y=function(e,n,t){var c=Object(a.useState)([]),r=Object(s.a)(c,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(w.a)(N.a.mark((function e(n,t,c){var a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,fetch(n,{headers:t});case 4:if((a=e.sent).ok){e.next=9;break}throw new Error("HTTP error! status: ".concat(a.status));case 9:return e.next=11,a.json();case 11:r=e.sent,o(r);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.name+" "+e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(n,t,c){return e.apply(this,arguments)}})()(e,n,t)}),[e,n,t]),[i]},C=t(4);var k,P=function(){var e=Object(a.useContext)(O),n=e.coinsFigure,t=e.updateCoinsFigure,c=Object(a.useContext)(p),r=c.jumboHeight,i=c.updateJumboheight,o=Object(a.useRef)(),d=Object(C.f)().pathname;Object(a.useEffect)((function(){"/"!==d&&i(!0)}),[]);var l=y("https://coding-challenge-api.aerolab.co/user/me",h),x=Object(s.a)(l,1)[0],f=Number(localStorage.getItem("actualCoinsFigure"));return Object(a.useEffect)((function(){t(x&&!f?x.points:f)}),[x]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b,{ref:o,className:"pt-4 pb-4 ".concat(!0===r&&"fixed"),children:Object(m.jsxs)("div",{className:"container d-flex justify-content-between align-items-center position-relative",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:"./img/aerolab-logo.svg",alt:""})}),Object(m.jsxs)("ul",{className:"d-flex align-items-center",children:[Object(m.jsxs)("li",{className:"mr-3 coins d-flex justify-content-between",children:[Object(m.jsx)(j.a,{icon:u.b}),Object(m.jsx)("span",{children:n})]}),Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:x.name})})]})]})})})},S=l.a.div(k||(k=Object(d.a)(["\n\n    height: 90vh;\n    overflow: hidden;\n\n    & div div.headPhones {\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    & div div.headPhones img {\n        object-fit: cover;\n    }\n\n    & div.description {\n\n        h2, h5 {\n            color: #ffffff;\n            font-weight: 100;\n        }\n\n        h2 {\n            font-size: 5rem;\n        }\n\n        h5 {\n            font-size: 2.5rem;\n        }\n    }\n\n    & div.cablePhone {\n        height: 45%;\n        overflow: hidden;\n    }\n\n    & div.cablePhone img {\n        object-fit: cover;\n    }\n\n    & div.name {\n        background-image: linear-gradient(to right, #F54B64, #F78361);\n        height: 55%;\n    }\n\n    @media only screen and  (max-width: 655px){\n        height: auto;\n    }    \n\n    @media only screen and  (max-width: 655px){\n        & div.name h2  {\n            font-size: 3.2rem;\n            text-align: center;\n        }\n        & div.name h5  {\n            font-size: 2rem;\n            text-align: center;\n        }\n    }\n\n    @media only screen and  (max-width: 560px){\n        & div.name h2  {\n            font-size: 1.7rem;\n        }\n        & div.name h5  {\n            font-size: .8rem;\n        }\n    }\n"])));var I,E,M=function(){var e=Object(a.useContext)(p).updateJumboheight,n=Object(a.useRef)();return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){var t=n.current.clientHeight,c=window.scrollY;e(c>=t)}))}),[e]),Object(m.jsx)(S,{className:"container-fluid",ref:n,children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"row d-flex",children:[Object(m.jsx)("div",{className:"headPhones pr-0 col-6 d-none d-lg-block",children:Object(m.jsx)("img",{className:"w-100 h-100",src:"img/headphones.jpg",alt:"headphones"})}),Object(m.jsxs)("div",{className:"d-flex flex-wrap col-12 col-lg-6 ",children:[Object(m.jsx)("div",{className:"w-100 name  d-flex flex-wrap align-items-center",children:Object(m.jsxs)("div",{className:"p-5 w-100 description",children:[Object(m.jsx)("h2",{children:"Rewards Store"}),Object(m.jsx)("h5",{children:"Lorem ipsum dolor sit amet."})]})}),Object(m.jsx)("div",{className:"w-100 cablePhone pt-3",children:Object(m.jsx)("img",{className:"w-100 h-100",src:"img/audifono.jpg",alt:""})})]})]})})})},z=l.a.div(I||(I=Object(d.a)(["\n    & div button {\n        background-color: #ecf0f1;\n        border: none;\n        width: 45px;\n        height: 45px;\n        border-radius: 100%;\n    }\n"]))),F=l.a.div(E||(E=Object(d.a)(["\n\n    & div.cardContainer {\n        width: 30%;\n        border: 1px solid #ecf0f1;\n        padding: 10px;\n\n        &:hover h4.buy {\n            background: white;\n            color: rgb(10,212,250);\n            transition: .3s;\n        }\n        \n        @media only screen and (max-width: 800px){\n            width: 48%;\n        }\n\n        @media only screen and (max-width: 550px){\n            width: 100%;\n        }\n    }\n\n    & div.cardContainer:hover {\n       box-shadow: 1px 1px 5px rgba(0,0,0,0.3);\n       transition: 0.1s;\n    }\n\n    & div.cardContainer .imgContainer img {\n        width: 100%;\n        object-fit: cover;\n    }\n\n    & h4.noBuy {\n        background-color: rgba(0,0,0,0.2);\n        color: #ffffff;\n        padding: 5px 20px;\n        border-radius: 10px;\n        z-index: 1000;\n        & svg {\n            color: #f39c12;\n        }\n    }\n\n    & h4.buy {\n        z-index: 1000;\n        background-color: rgb(10,212,250);\n        width: 40px;\n        height: 40px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        border-radius: 100%;\n        right: 0;\n    }\n\n    & .description h4 {\n        color: #95a5a6;\n    }\n\n    & .hoverPrice {\n        background-color: rgba(10,212,250,0.8);\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        transition: opacity 0.3s;\n\n        & h3 {\n            color: #ffffff;\n            text-align: center;\n\n            & svg {\n                color: #F7AE15;\n            }\n        }\n\n        & button {\n            background-color: #ffffff;\n            border: none;\n            padding: 10px 50px !important;\n            border-radius: 20px;\n            font-size: 1.2rem;\n            cursor: pointer;\n        }\n\n        &:hover {\n            opacity: 1;\n        }\n    }\n\n    & .rechargeCoins {\n        background-color: rgba(255,0,0,0.6);\n        & a {\n            background-color: white;\n            color: #000000;\n            font-weight: 900;\n            border-radius: 20px;\n            font-size: 1.2rem;\n        }\n    }\n"]))),A=Object(a.createContext)();function T(e){var n=e.children,t=Object(a.useState)(""),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(A.Provider,{value:{productId:r,updateProductId:function(e){i(e)}},children:n})}var J=Object(a.createContext)();function R(e){var n=e.children,t=Object(a.useState)(null),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(J.Provider,{value:{successModalStatus:r,updateSuccessmodal:function(e){i(e)}},children:n})}var V=t(13);var B=function(e){var n=e.products,t=Object(a.useContext)(O),c=t.coinsFigure,r=t.updateCoinsFigure,i=Object(a.useContext)(J),o=i.successModalStatus,d=i.updateSuccessmodal,l=Object(a.useState)(0),b=Object(s.a)(l,2),x=b[0],h=b[1],p=Object(a.useContext)(A),f=(p.productId,p.updateProductId);return localStorage.setItem("actualCoinsFigure",c),Object(a.useEffect)((function(){c>0&&x>0&&!0===o&&r(c-Number(x))}),[o]),Object(m.jsx)(F,{className:"d-flex flex-wrap justify-content-between w-100",children:n.map((function(e){return Object(m.jsxs)("div",{className:"cardContainer mb-5 position-relative pt-3 pr-3",children:[c<e.cost?Object(m.jsxs)("h4",{className:"position-absolute noBuy",children:["te faltan ",e.cost-c,Object(m.jsx)(j.a,{className:"ml-3",icon:u.b})]}):Object(m.jsx)("h4",{className:"position-absolute buy d-flex mr-3",children:Object(m.jsx)(j.a,{icon:u.c})}),Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:e.img.url,alt:e.name})}),Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h4",{className:"text-center mb-1 mt-3",children:e.name}),Object(m.jsx)("h5",{className:"text-center pb-4",children:e.category})]}),e.cost-c<0?Object(m.jsx)("div",{className:"position-absolute hoverPrice d-flex justify-content-center align-items-center",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{className:"pb-2",children:[e.cost," ",Object(m.jsx)(j.a,{className:"ml-3",icon:u.b})]}),Object(m.jsx)("button",{className:"p-2 w-100",onClick:function(e){!function(e){h(e.target.getAttribute("productcost")),c>0&&d(!0)}(e),function(e){f(e.target.getAttribute("productid"))}(e)},productcost:e.cost,productid:e._id,children:"Redimir ahora"})]})}):Object(m.jsx)("div",{className:"position-absolute hoverPrice rechargeCoins d-flex justify-content-center align-items-center",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"mb-3",children:"No tienes suficiente dinero"}),Object(m.jsx)(V.b,{className:"nav-link active  w-100 d-block p-2 text-center",target:"_blank",to:"/get-coins",children:"Obtener mas monedas"})]})})]},e.name)}))})};var H,D=function(){return Object(m.jsx)("div",{className:"col-12 d-flex justify-content-center mt-5",children:Object(m.jsx)("h1",{children:"loading....."})})},G=function(e,n,t,c){var r=Object(a.useState)(0),i=Object(s.a)(r,2),o=i[0],d=i[1];return Object(a.useEffect)((function(){0!==c&&fetch(e,{method:"POST",headers:n,body:t}).then((function(e){return e.json()})).then((function(e){d(e)})).catch((function(e){console.log(e)}))}),[c,t,n,e]),[o]},L=(t(50),l.a.div(H||(H=Object(d.a)(["\n    width: 30%;\n    border: 1px solid #ecf0f1;\n\n    @media only screen and (max-width: 800px){\n            width: 48%;\n        }\n\n    @media only screen and (max-width: 550px){\n            width: 100%;\n    }\n    \n"]))));var X=function(e){var n=e.products;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"d-flex flex-wrap justify-content-between col-12 p-0 mt-5",children:[Object(m.jsx)("h1",{className:"w-100 mt-5 mb-5",children:"Productos redimidos"}),n[0].map((function(e){return Object(m.jsxs)(L,{className:"mb-4 pb-4",children:[Object(m.jsx)("div",{className:"w-100",children:Object(m.jsx)("img",{className:"w-100",src:e.img.url,alt:e.name})}),Object(m.jsx)("h4",{className:"text-center",children:e.name})]})})),Object(m.jsx)("div",{className:"w-100 mb-5",children:Object(m.jsx)(V.b,{className:"backbtn pr-5 pl-5 pt-2 pl-2 pb-2",to:"/",children:"Volver"})})]})})},Y=Object(a.createContext)();function _(e){var n=e.children,t=Object(a.useState)([]),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(Y.Provider,{value:{indexProducts:r,updateIndexProducts:function(e){i(e)}},children:n})}var Q=t(17),U=Object(a.createContext)();function Z(e){var n=e.children,t=Object(a.useState)({category:"",price:""}),c=Object(s.a)(t,2),r=c[0],i=c[1];return Object(m.jsx)(U.Provider,{value:{filtersValues:r,updateCategory:function(e){i(Object(Q.a)(Object(Q.a)({},r),{},{category:e}))},updatePrice:function(e){i(Object(Q.a)(Object(Q.a)({},r),{},{price:e}))}},children:n})}var q,K=function(e,n){var t=Object(a.useState)(1),c=Object(s.a)(t,2),r=c[0],i=c[1],o=Math.ceil(e.length/n);return{next:function(){i((function(e){return Math.min(e+1,o)}))},prev:function(){i((function(e){return Math.max(e-1,1)}))},jump:function(e){var n=Math.max(1,e);i((function(e){return Math.min(n,o)}))},currentData:function(){var t=(r-1)*n,c=t+n;return e.slice(t,c)},currentPage:r,maxPage:o}},W=function(){var e=Object(C.f)().pathname,n=y(x,h,x),t=Object(s.a)(n,1)[0],c=Object(a.useContext)(A).productId,r=Object(a.useContext)(Y),i=r.indexProducts,o=r.updateIndexProducts,d=Object(a.useContext)(U).filtersValues,l=Object(a.useState)([]),b=Object(s.a)(l,2),j=b[0],u=b[1],p=Object(a.useState)(1),f=Object(s.a)(p,2),O=(f[0],f[1]),g=function(e){"next"===e.target.getAttribute("name")&&(O(2),v.jump(2)),"back"===e.target.getAttribute("name")&&(O(1),v.jump(1))},v=(Math.ceil(j.length/16),K(j,16)),N=v.currentData();Object(a.useEffect)((function(){var e=i.filter((function(e){return""!==e.category?d.category===e.category:e}));e.length>=0&&u(e)}),[d.category,i]),Object(a.useEffect)((function(){u(i)}),[i]),t&&o(t);var w=JSON.stringify({productId:c});G("https://private-anon-a69557cdcd-aerolabchallenge.apiary-proxy.com/redeem",h,w,c);var k=y("https://coding-challenge-api.aerolab.co/user/history",h,c);return j&&"max"===d.price&&""!==d.price&&j.sort((function(e,n){return n.cost-e.cost})),j&&"min"===d.price&&""!==d.price&&j.sort((function(e,n){return e.cost-n.cost})),Object(m.jsxs)(z,{children:[Object(m.jsxs)("div",{className:"container d-flex mt-5",children:["/record"===e&&k.length>0&&Object(m.jsx)(X,{products:k}),"/"===e&&t.length>0&&Object(m.jsx)(B,{products:N}),k.length<=0||t.length<=0&&Object(m.jsx)(D,{})]}),N.length>=16&&Object(m.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(m.jsx)("button",{className:"p-2",name:"back",onClick:g,children:"1"}),Object(m.jsx)("button",{className:"ml-2 p-2",name:"next",onClick:g,children:"2"})]})]})},$=l.a.div(q||(q=Object(d.a)(["\n    margin-top: 125px;\n    & button {\n        border: none;\n        font-size: 1.2rem;\n        padding-right: 150px;\n        padding-left: 150px;\n        border-radius: 5px;\n        cursor: pointer;\n\n        & svg {\n            color: #f39c12;\n        }\n\n        &:hover {\n            background-color: #bdc3c7 !important;\n            transition: .3s;\n        }\n    }\n\n    & a {\n        background-color: #0d6efd;\n        font-size: 1.2rem;\n        padding: 15px 150px;\n        border-radius: 5px;\n        color: #ffffff;\n\n        & svg {\n            margin-right: 20px;\n        }\n    }\n\n    @media only screen and (max-width: 768px){\n        & button {\n            width: 100%;\n        }\n    }\n"])));var ee,ne=function(){var e=Object(a.useState)(0),n=Object(s.a)(e,2),t=n[0],c=n[1],r=JSON.stringify({amount:Number(t)});G("https://private-anon-6ac56a34c9-aerolabchallenge.apiary-proxy.com/user/points",h,r,t);var i=function(e){c(e.target.value),setTimeout((function(){c(0)}),1e3)},o=Number(localStorage.getItem("actualCoinsFigure"));return Object(a.useEffect)((function(){localStorage.setItem("actualCoinsFigure",o+Number(t))}),[r]),Object(m.jsxs)($,{className:"container",children:[Object(m.jsx)("h1",{className:"mb-5",children:"Recarga monedas aqu\xed"}),Object(m.jsxs)("h2",{children:["Tienes ",o," monedas"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("button",{onClick:i,className:"d-block mb-3 pt-3 pb-3",value:"1000",children:["1000",Object(m.jsx)(j.a,{className:"ml-5",icon:u.b})]}),Object(m.jsxs)("button",{onClick:i,className:"d-block mb-3 pt-3 pb-3",value:"5000",children:["5000",Object(m.jsx)(j.a,{className:"ml-5",icon:u.b})]}),Object(m.jsxs)("button",{onClick:i,className:"d-block mb-3 pt-3 pb-3",value:"7500",children:["7500",Object(m.jsx)(j.a,{className:"ml-5",icon:u.b})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(V.b,{to:"/",children:[Object(m.jsx)(j.a,{icon:u.a}),"Regresar"]})]})},te=l.a.div(ee||(ee=Object(d.a)(["\n/* \n    border-bottom: 1px solid #ecf0f1; */\n\n    &.container > div {\n        justify-content: space-between;\n    } \n\n    &.marginTop {\n        margin-top: 160px !important;\n        transition: .3s;\n    }\n\n    & select, .filterPrice {\n        border: 2px solid #ecf0f1;\n        padding: 8px 20px;\n        border-radius: 5px;\n        user-select: none;\n        font-weight: 400;\n    }\n\n    & select, .filterPrice :focus {\n        outline: none;\n    }\n\n    & a {\n        background-color: #0d6efd;\n        color: #ffffff;\n        border-radius: 5px;\n    }\n\n    & button {\n        background-color: #ecf0f1;\n        border: none;\n        border-radius: 5px;\n        cursor: pointer;\n    }\n\n    @media only screen and (max-width: 782px){\n        & select, .filterPrice, a, button {\n            width: 100%;\n            margin: 0 !important;\n            padding-top: 8px;\n            padding-bottom: 8px;\n            margin-bottom: 10px !important;\n            text-align: center;\n        }\n    }\n"])));var ce,ae=function(){var e=Object(a.useContext)(p).jumboHeight,n=Object(a.useContext)(U),t=n.filtersValues,c=n.updateCategory,r=n.updatePrice;return Object(m.jsxs)(te,{className:"container mt-4 mb-4 mt-md-5 ".concat(!0===e&&"marginTop"),children:[Object(m.jsx)("div",{className:"row d-flex",children:Object(m.jsxs)("div",{className:"col-12 d-flex flex-wrap",children:[Object(m.jsxs)("select",{className:"mr-3",name:"categoriesSelect",id:"",onChange:function(e){"categoriesSelect"===e.target.name&&c(e.target.value)},value:t.category,children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Seleccionar categoria"},""),Object(m.jsx)("option",{name:"phones",value:"Phones",children:"Phones"}),Object(m.jsx)("option",{name:"gaming",value:"Gaming",children:"Gaming"}),Object(m.jsx)("option",{name:"laptops",value:"Laptops",children:"Laptops"}),Object(m.jsx)("option",{name:"cameras",value:"Cameras",children:"Cameras"}),Object(m.jsx)("option",{name:"monitorsAndTv",value:"Monitors & TV",children:"Monitors and TV"}),Object(m.jsx)("option",{name:"drones",value:"Drones",children:"Drones"}),Object(m.jsx)("option",{name:"phonesAccessories",value:"Phone Accessories",children:"Phones Accessories"}),Object(m.jsx)("option",{name:"startHome",value:"Smart Home",children:"Smart Home"}),Object(m.jsx)("option",{name:"pcAccessories",value:"PC Accessories",children:"PC Accessories"}),Object(m.jsx)("option",{name:"tabletsAndErenders",value:"Tablets & E-readers",children:"Tablets & E-readers"})]}),Object(m.jsxs)("select",{className:"mr-3",name:"categoriesSelect",id:"",value:t.price,onChange:function(e){r(e.target.value)},children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Filtrar por"},""),Object(m.jsx)("option",{name:"max",value:"max",children:"Precio m\xe1ximo"}),Object(m.jsx)("option",{name:"min",value:"min",children:"Precio m\xednimo"})]}),Object(m.jsx)(V.b,{to:"/record",target:"_blank",className:"text-center d-flex align-items-center pr-3 pl-3",children:"Ver historial"}),Object(m.jsx)("button",{onClick:function(){window.location.reload()},className:"ml-3 rounded pr-3 pl-3 border-0",children:"Reset filtros"})]})}),t.category&&Object(m.jsxs)("h2",{className:"mt-5",children:["Resultados para ",t.category]})]})},re=l.a.div(ce||(ce=Object(d.a)(["\n    background: rgba(255,255,255,0.4);\n    color: #ffffff;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n    border-radius: 10px;\n\n    & div div div + span {\n        font-size: 8.5rem;\n    }\n\n    & button {\n        padding: 10px 40px;\n        border: none;\n        color: #ffffff;\n        font-size: 1rem;\n        background: #000000;\n        border-radius: 10px;\n    }\n"])));var ie=function(){var e=Object(a.useContext)(O).coinsFigure,n=Object(a.useContext)(J),t=(n.successModalStatus,n.updateSuccessmodal);return Object(m.jsx)(re,{className:"position-fixed container col-11 col-md-4 pt-4 pb-5",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"text-center w-100",children:[Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)("span",{className:"pr-5",onClick:function(){t(!1)},children:Object(m.jsx)(j.a,{className:"ml-3",icon:u.e})})}),Object(m.jsx)("span",{children:Object(m.jsx)(j.a,{className:"mb-3 happyFace",icon:u.d})}),Object(m.jsx)("h2",{className:"pb-3",children:"Has agregado un nuevo Producto"}),Object(m.jsxs)("button",{children:["Todavia tienes ",e,Object(m.jsx)(j.a,{className:"ml-3",icon:u.b})]})]})})})};var oe=function(){var e=Object(a.useContext)(J).successModalStatus;return Object(m.jsx)(g,{children:Object(m.jsx)(f,{children:Object(m.jsx)(V.a,{children:Object(m.jsxs)(C.c,{children:[Object(m.jsx)(C.a,{path:"/",exact:!0,children:Object(m.jsxs)("div",{className:"App ".concat(e&&"bodyBackground"),style:{marginBottom:"100px"},children:[Object(m.jsx)(P,{}),Object(m.jsx)(M,{}),Object(m.jsx)(ae,{}),Object(m.jsx)(W,{}),e&&Object(m.jsx)(ie,{})]})}),Object(m.jsxs)(C.a,{path:"/get-coins",exact:!0,children:[Object(m.jsx)(P,{}),Object(m.jsx)(ne,{})]}),Object(m.jsxs)(C.a,{path:"/record",exact:!0,children:[Object(m.jsx)(P,{}),Object(m.jsx)(W,{})]})]})})})})};t(56);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Z,{children:Object(m.jsx)(_,{children:Object(m.jsx)(R,{children:Object(m.jsx)(T,{children:Object(m.jsx)(oe,{})})})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.794da4b6.chunk.js.map