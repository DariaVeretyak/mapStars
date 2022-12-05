(this.webpackJsonpmapStars=this.webpackJsonpmapStars||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"number":1,"name":"Modern technologies","description":"Thanks to modern technologies, our company has developed a simple and effective technology for promoting and developing your business. GEO advertising imitates word of mouth, allowing you to use the client not only for profit but also to attract new customers."},{"number":2,"name":"Affordable price","description":"Pay once - get the result constantly. Our pricing policy is very flexible, transparent, and affordable. Moreover, it is equally accessible to both small and medium-sized and large businesses."},{"number":3,"name":"Ease of implementation","description":"Just a few simple implementation steps and GEO advertising starts working for your business. After the introduction of technology, the main condition for successful work is the fulfillment of three elementary tasks by the staff."},{"number":4,"name":"An experience","description":"During almost 5 years of individual work and experiments, our company has solved many puzzles and problems, and also found a lot of pitfalls in working with Internet services. We bring this experience to you"},{"number":5,"name":"Automation","description":"Manage. Plan. Develop. The main principle of GEO advertising from Mappers is automation. This is the basis of technology. To automate the process of promotion and promotion of the business, to allow applying a minimum of effort and get a good result."},{"number":6,"name":"Efficiency","description":"Our technology has passed the stages of experimentation, testing, and implementation at more than 100 facilities in Ukraine and abroad. We have shared the results of our work on our website. Cafes, restaurants, hotels, and many other types of businesses are already using GEO advertising technology every day."}]')},35:function(e){e.exports=JSON.parse('[{"name":"business","title":"My business","whom":"Suitable for new or small business","includes":["Registering your business on a Google map","Setting up Google My Business","Standard photo shoot by Google Trusted Photographer","Recommendations for promotion on the Google Map","Google website"]},{"name":"advanced","title":"Advanced","whom":"Promotion with help of the unique technology of motivation","includes":["Registering your business on a Google map","Setting up Google My Business","Keyword Optimization","Extended Photoshoot by Google Certified Photographer","The technology of motivation and social recommendations","30 days of free consultation and email support","Google website"]},{"name":"advertising","title":"GEO advertising","whom":"Efficient GEO ads","includes":["Registering your business on a Google map","Setting up Google My Business","Keyword Optimization","Extended Photoshoot by Google Certified Photographer","Standard panoramic photo session","The technology of motivation and social recommendations","70 days of free consultation and email support","Website development"]},{"name":"maximum","title":"Maximum","whom":"Maximum clients aquisition","includes":["Registering your business on a Google map","Keyword Optimization","Extended Photoshoot by Google Certified Photographer","Standard panoramic photo session","Making a 30-second video for Google maps","The technology of motivation and social recommendations","Google My Business training course for employees","90 days of free consultation and email support","Website development"]}]')},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(0),o=s.n(a),n=s(32),i=s.n(n),c=s(11),r=s(4),l=s(10),d=s.n(l),h=s(1),m=o.a.createContext(),u=function(e){var t=e.children,s=Object(a.useState)("Eng"),o=Object(r.a)(s,2),n=o[0],i=o[1],c={lang:n,changeLanguage:function(e){i(e)}};return Object(a.useEffect)((function(){null!==localStorage.getItem("lang")&&i(JSON.parse(localStorage.getItem("lang")||""))}),[]),Object(a.useEffect)((function(){"Eng"!==n?localStorage.setItem("lang",JSON.stringify(n)):localStorage.removeItem("lang")}),[n]),Object(h.jsx)(m.Provider,{value:c,children:t})},b=s(18),j=s(17),p=(s(43),function(e){var t=e.getStarted,s=e.techRef,o=e.advantagesRef,n=e.howWorkRef,i=e.packagesRef,l=e.contactRef,m=Object(a.useState)(!1),u=Object(r.a)(m,2),p=u[0],g=u[1],f=function(e){window.scrollTo({top:e.offsetTop,left:0,behavior:"smooth"})},_=["Eng","Ukr","Rus","Ger"],O=Object(a.useState)(_[0]),x=Object(r.a)(O,2),v=x[0],w=x[1];return Object(h.jsx)("div",{className:"Header",children:Object(h.jsxs)("div",{className:"Header__conteiner",children:[Object(h.jsx)("div",{className:d()("Header__logo + ".concat(p?"Header__logo--open":""))}),Object(h.jsx)("nav",{className:d()("Header__nav + ".concat(p?"Header__nav--open":"")),children:Object(h.jsxs)("ul",{className:d()("Header__nav-ul + ".concat(p?"Header__nav-ul--open":"")),children:[Object(h.jsx)("li",{className:"Header__nav-li",children:Object(h.jsx)(c.b,{className:d()("Header__link + ".concat(p?"Header__link--open":"")),to:"/technology",onClick:function(){f(s.current),g(!1)},children:"Technology"})}),Object(h.jsx)("li",{className:"Header__nav-li",children:Object(h.jsx)(c.b,{to:"/advantages",className:d()("Header__link + ".concat(p?"Header__link--open":"")),onClick:function(){f(o.current),g(!1)},children:"Advantages"})}),Object(h.jsx)("li",{className:"Header__nav-li",children:Object(h.jsx)(c.b,{to:"/howWorks",className:d()("Header__link + ".concat(p?"Header__link--open":"")),onClick:function(){f(n.current),g(!1)},children:"How it works"})}),Object(h.jsx)("li",{className:"Header__nav-li",children:Object(h.jsx)(c.b,{to:"/packages",className:d()("Header__link + ".concat(p?"Header__link--open":"")),onClick:function(){f(i.current),g(!1)},children:"Packages"})}),Object(h.jsx)("li",{className:"Header__nav-li",children:Object(h.jsx)(c.b,{to:"/contact",className:d()("Header__link + ".concat(p?"Header__link--open":"")),onClick:function(){f(l.current),g(!1)},children:"Contact"})})]})}),Object(h.jsxs)("div",{className:"Header__actions",children:[Object(h.jsx)("label",{htmlFor:"language",className:"Header__changeLanguage",children:Object(h.jsx)("select",{className:"Header__select",name:"language",id:"language",value:v,onChange:function(e){w(e.target.value)},onKeyDown:function(e,t){"Enter"===e&&w(t)},children:_.map((function(e){return Object(h.jsx)("option",{children:e},e)}))})}),Object(h.jsx)("button",{type:"button",className:"Header__getStarted",onClick:function(){return t()},children:"Get started"}),Object(h.jsx)("button",{className:d()("Header__hamburger + ".concat(p?"Header__hamburger--open":"")),type:"button",onClick:function(){return g(!p)},children:p?Object(h.jsx)(b.a,{icon:j.d}):Object(h.jsx)(b.a,{icon:j.c})})]})]})})}),g=s(2),f=s(33),_=(s(44),function(e){var t=e.closeDialog,s=Object(f.a)({mode:"onBlur"}),a=s.register,o=s.handleSubmit,n=s.reset,i=s.formState,c=i.errors,r=i.isValid;return Object(h.jsxs)("div",{className:"GetStartedDialog",children:[Object(h.jsx)("button",{type:"button",className:"GetStartedDialog__close",onClick:function(){return t()},children:Object(h.jsx)(b.a,{icon:j.d})}),Object(h.jsx)("p",{className:"GetStartedDialog__name",children:"Contact Form"}),Object(h.jsx)("h2",{className:"GetStartedDialog__title",children:"Drop Us a Line."}),Object(h.jsxs)("form",{method:"dialog",className:"GetStartedDialog__form",onSubmit:o((function(){n()})),children:[Object(h.jsxs)("div",{className:"GetStartedDialog__formEl",children:[Object(h.jsx)("label",{className:"GetStartedDialog__label",children:Object(h.jsx)("input",Object(g.a)(Object(g.a)({type:"text",className:"GetStartedDialog__input"},a("name",{required:"Field is mandatory",minLength:{value:2,message:"The minimum number of characters in the name is 2"},pattern:{message:"Please enter valid name"}})),{},{placeholder:"First Name*"}))}),Object(h.jsx)("div",{className:"GetStartedDialog__errorBlock",children:(null===c||void 0===c?void 0:c.name)&&(null===c||void 0===c?void 0:c.name.message)})]}),Object(h.jsxs)("div",{className:"GetStartedDialog__formEl",children:[Object(h.jsx)("label",{className:"GetStartedDialog__label",children:Object(h.jsx)("input",Object(g.a)({className:"GetStartedDialog__input",type:"email",placeholder:"E-mail*"},a("email",{required:"Field is mandatory",pattern:{value:/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,message:"Please enter valid email"}})))}),Object(h.jsx)("div",{className:"GetStartedDialog__errorBlock",children:(null===c||void 0===c?void 0:c.email)&&(null===c||void 0===c?void 0:c.email.message)})]}),Object(h.jsx)("div",{className:"GetStartedDialog__formEl",children:Object(h.jsx)("label",{className:"GetStartedDialog__label",children:Object(h.jsx)("textarea",{className:"GetStartedDialog__textArea",placeholder:"Message...",name:"message"})})}),Object(h.jsx)("button",{type:"submit",className:"GetStartedDialog__btn",disabled:!r,children:"Send a Message"})]})]})}),O=s.p+"static/media/homePage.00fd5450.png",x=(s(45),function(e){var t=e.getStarted,s=Object(a.useState)(!1),o=Object(r.a)(s,2),n=o[0],i=o[1],c=document.body.scrollHeight;Object(a.useEffect)((function(){window.scrollTo({top:c,left:0,behavior:"smooth"})}),[n]);for(var l=[],d=1;d<=10;d+=1)l.push(d);for(var m=[],u=1;u<=7;u+=1)m.push(u);return Object(h.jsx)("section",{className:"HomePage",children:Object(h.jsxs)("div",{className:"HomePage__conteiner",children:[Object(h.jsxs)("div",{className:"HomePage__content",children:[Object(h.jsxs)("h1",{className:"HomePage__h1",children:["MapStars",Object(h.jsx)("br",{}),"Technology"]}),Object(h.jsx)("h4",{className:"HomePage__subtitle",children:"Get new customers regularly with the help of modern technologies"}),Object(h.jsxs)("button",{className:"HomePage__btn",type:"button",onClick:function(){return t()},children:["Get started",Object(h.jsx)("span",{children:Object(h.jsx)(b.a,{icon:j.b})})]})]}),Object(h.jsxs)("div",{className:"HomePage__animation",children:[Object(h.jsx)("img",{className:"HomePage__backgroundImg",src:O,alt:"background"}),Object(h.jsxs)("div",{className:"HomePage__decor",children:[Object(h.jsx)("div",{className:"HomePage__decoration HomePage__decoration--1"}),Object(h.jsx)("div",{className:"HomePage__decoration HomePage__decoration--2"}),Object(h.jsx)("div",{className:"HomePage__decoration HomePage__decoration--3"}),m.map((function(e){return Object(h.jsx)("div",{className:"HomePage__ellipse HomePage__ellipse--".concat(e)},e)})),l.map((function(e){return Object(h.jsx)("div",{className:"HomePage__app HomePage__app--".concat(e)},e)}))]})]}),Object(h.jsx)("button",{type:"button",className:"HomePage__scroll",onClick:function(){return i(!0)},children:Object(h.jsx)(b.a,{icon:j.a})})]})})}),v=(s(46),function(e){for(var t=e.techRef,s=[],a=1;a<=4;a+=1)s.push(a);return Object(h.jsxs)("section",{className:"Technology App__section",id:"technology",ref:t,children:[Object(h.jsx)("div",{className:"Technology__images",children:s.map((function(e){return Object(h.jsx)("div",{className:"Technology__img Technology__img--".concat(e)},e)}))}),Object(h.jsxs)("div",{className:"Technology__content",children:[Object(h.jsx)("h2",{className:"Technology__title",children:"Technology"}),Object(h.jsxs)("span",{className:"Technology__info",children:[Object(h.jsx)("strong",{children:"GEO advertising is a technology for the automatic promotion of a business using modern technologies and services."}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"The technology is specially made to promote almost all types of businesses. Cafes, restaurants, beauty salons and hairdressers, hotels and hostels, service stations and tire shops, repair service centers, online stores, grocery stores, supermarkets, photo studios, publishing houses, confectioneries, and many others have already used the technology."]})]})]})}),w=s(34),y=(s(47),function(e){var t=e.advantagesRef;return Object(h.jsxs)("section",{className:"Advantages App__section",ref:t,children:[Object(h.jsx)("h2",{className:"Advantages__title",children:"Advantages"}),Object(h.jsx)("ul",{className:"Advantages__list",children:w.map((function(e){return Object(h.jsxs)("li",{className:"Advantages__block",children:[Object(h.jsx)("div",{className:"Advantages__logo Advantages__logo--".concat(e.number)}),Object(h.jsx)("h4",{className:"Advantages__block-name",children:e.name}),Object(h.jsx)("p",{className:"Advantages__block-info",children:e.description})]},e.name)}))})]})}),k=(s(48),function(e){var t=e.step,s=e.title,a=e.content;return Object(h.jsxs)("div",{className:"HowWorkBlock",children:[Object(h.jsx)("p",{className:"HowWorkBlock__step",children:t}),Object(h.jsx)("h3",{className:"HowWorkBlock__title",children:s}),Object(h.jsx)("p",{className:"HowWorkBlock__content",children:a})]})});k.defaultProps={content:""};s(49);var N=function(e){var t=e.howWorkRef;return Object(h.jsxs)("section",{className:"HowWork",ref:t,children:[Object(h.jsx)("h2",{className:"HowWork__title",children:"How does it work?"}),Object(h.jsx)("p",{className:"HowWork__steps",children:"Three easy steps to implement GEO technology"}),Object(h.jsxs)("div",{className:"HowWork__content",children:[Object(h.jsxs)("div",{className:"HowWork__step HowWork__step--1",children:[Object(h.jsx)("div",{className:"HowWork__images HowWork__images--1"}),Object(h.jsx)(k,{step:"01",title:"Registration",content:"At the first stage, our specialists register your business\n  in the Google My Business global business directory, as well as in\n  some other services. We will collect and publish: basic information\n  about your business (description, exact address, photos, phone\n  numbers, work schedule), and optimize and customize the profile of\n  the institution.\n  Our company will be glad to offer you a standard photo session of\n  your business. As well as a modern 360\xb0 panoramic photo session.\n  If your company does not have a website, we will set up a free\n  business page for you from Google or a more advanced version from\n  Stars Maps.\n  Google search provides the user with information about nearby,\n  popular, and accessible places. After registration, potential\n  visitors can easily find information about your business using\n  Google Search, and Google Maps. By registering, you will increase\n  the number of new customers and calls for your business."})]}),Object(h.jsxs)("div",{className:"HowWork__step HowWork__step--2",children:[Object(h.jsx)(k,{step:"02",title:"The technology of Motivation and Social Recommendations",content:"Motivation technology is a proprietary development of our company. It is designed to increase the number of reviews and recommendations about your business at the expense of old customers, which directly affects the number of new customers. To implement the technology, we use carriers - motivators. They come in various formats: a tabletop, a signboard, a banner, a business card, a sticker, a product packaging element, a leaflet, and so on. Our task is to integrate the use of the motivator into your business process. With your help or on your own, the client, using a mobile device, read the QR code from the motivator and goes to a special website of the institution's complaint. On this page, he will be able to share social recommendations and leave feedback about visiting your establishment, thus promoting you on the network. Advertising messages about your establishment will be distributed on social networks (Facebook, Instagram) or in the form of messages via instant messengers (Viber, WhatsApp, Telegram). The introduction of technology significantly increases the number of reviews left on Google Maps, which subsequently increases the popularity and frequency of issuance in Google services. Each client turns into a tool to attract new visitors, our technology is a modern version of word of mouth for your business."}),Object(h.jsx)("div",{className:"HowWork__images HowWork__images--2"})]}),Object(h.jsxs)("div",{className:"HowWork__step HowWork__step--3",children:[Object(h.jsx)("div",{className:"HowWork__images HowWork__images--3"}),Object(h.jsx)(k,{step:"03",title:"Statistics, analytics, development, support",content:"Thanks to modern technologies, information is easily recorded and collected for further analysis. In your Google My Business personal account of your institution, you can see complete statistics about views, the number of calls, and routes laid. At your request, we can provide additional reports and recommendations, following which you can more effectively and quickly promote your services and products on the market. Our clients can always contact us for advice. Like you, our company is constantly growing and developing. Very soon we plan to bring to the market new proposals for advertising and development. Now we are working on a system for measuring customer loyalty and a video presentation of the institution. Our research department is constantly working on testing promotional elements of Google, Facebook, Instagram, and other platforms. Staying in touch with us, you will always learn about the latest in the world of advertising. The success of your business is in our interest. Stars Maps is a new generation advertising agency and technology!"})]})]})]})},S=(s(50),function(){for(var e=[],t=1;t<=14;t+=1)e.push(t);return Object(h.jsx)("section",{className:"Services",children:Object(h.jsxs)("div",{className:"Services__info",children:[Object(h.jsx)("h2",{className:"Services__title",children:"30+"}),Object(h.jsxs)("p",{className:"Services__subtitle",children:["We work with such",Object(h.jsx)("br",{}),"services"]}),Object(h.jsx)("div",{className:"Services__apps",children:e.map((function(e){return Object(h.jsx)("div",{className:"Services__app Services__app--".concat(e)},e)}))})]})})}),H=s(35),G=(s(51),function(e){var t=e.getStarted,s=e.packagesRef;return Object(h.jsxs)("section",{className:"Packages",ref:s,children:[Object(h.jsx)("h2",{className:"Packages__title",children:"Packages services"}),Object(h.jsx)("ul",{className:"Packages__packages",children:H.map((function(e){return Object(h.jsxs)("li",{className:"Packages__package",children:[Object(h.jsxs)("div",{className:"Packages__package-top Packages__package-top--".concat(e.name),children:[Object(h.jsx)("h4",{className:"Packages__package-name",children:e.title}),Object(h.jsx)("p",{className:"Packages__package-whom",children:e.whom})]}),Object(h.jsx)("h3",{className:"Packages__includes",children:"The package includes:"}),Object(h.jsx)("ul",{className:"Packages__options",children:e.includes.map((function(e){return Object(h.jsx)("li",{className:"Packages__option",children:e},e)}))}),Object(h.jsx)("button",{className:"Packages__btn",type:"button",onClick:function(){return t()},children:"Get started"})]},e.name)}))})]})}),P=s(14),A=s(23),T=(s(52),s(53),s(54),s(55),s(56),function(){return Object(h.jsxs)(A.a,{autoplay:{delay:5e3,disableOnInteraction:!1},modules:[P.a,P.b],pagination:{clickable:!0},className:"Slider",children:[Object(h.jsx)(A.b,{children:Object(h.jsxs)("div",{className:"Slider__block",children:[Object(h.jsx)("h3",{className:"Slider__title",children:"Car wash Ceramic Pro Latvia"}),Object(h.jsx)("p",{className:"Slider__info",children:"Ceramic Pro is the first client of the company in Latvia, as well as the first client abroad. After changing the car wash system and approach to working with the client, under the new Ceramic Pro brand, the task was to bring more customers in the 16/17 tourist season than in the 15/16 season. The main focus of the photo session/photo presentation was to be the Ceramic Pro logo and new corporate identity, as well as the workflow and higher level of the average customer. This project has become a pilot project for our company in terms of introducing a unique Motivator design with the logo of the client's company. The task was also to orient the issue in Google search for a Russian-speaking tourist/client. The result was not long in coming, already in the next 16/17 season in Jurmala, 17% more customers turned to the car wash than in the 15/16 season. According to our forecasts, they should grow up to 25% over the next"})]})}),Object(h.jsx)(A.b,{children:Object(h.jsxs)("div",{className:"Slider__block",children:[Object(h.jsx)("h3",{className:"Slider__title",children:"Slide2"}),Object(h.jsx)("p",{className:"Slider__info",children:"Ceramic Pro is the first client of the company in Latvia, as well as the first client abroad. After changing the car wash system and approach to working with the client, under the new Ceramic Pro brand, the task was to bring more customers in the 16/17 tourist season than in the 15/16 season. The main focus of the photo session/photo presentation was to be the Ceramic Pro logo and new corporate identity, as well as the workflow and higher level of the average customer. This project has become a pilot project for our company in terms of introducing a unique Motivator design with the logo of the client's company. The task was also to orient the issue in Google search for a Russian-speaking tourist/client. The result was not long in coming, already in the next 16/17 season in Jurmala, 17% more customers turned to the car wash than in the 15/16 season. According to our forecasts, they should grow up to 25% over the next"})]})}),Object(h.jsx)(A.b,{children:Object(h.jsxs)("div",{className:"Slider__block",children:[Object(h.jsx)("h3",{className:"Slider__title",children:"Slide3"}),Object(h.jsx)("p",{className:"Slider__info",children:"Ceramic Pro is the first client of the company in Latvia, as well as the first client abroad. After changing the car wash system and approach to working with the client, under the new Ceramic Pro brand, the task was to bring more customers in the 16/17 tourist season than in the 15/16 season. The main focus of the photo session/photo presentation was to be the Ceramic Pro logo and new corporate identity, as well as the workflow and higher level of the average customer. This project has become a pilot project for our company in terms of introducing a unique Motivator design with the logo of the client's company. The task was also to orient the issue in Google search for a Russian-speaking tourist/client. The result was not long in coming, already in the next 16/17 season in Jurmala, 17% more customers turned to the car wash than in the 15/16 season. According to our forecasts, they should grow up to 25% over the next"})]})}),Object(h.jsx)(A.b,{children:Object(h.jsxs)("div",{className:"Slider__block",children:[Object(h.jsx)("h3",{className:"Slider__title",children:"Slide4"}),Object(h.jsx)("p",{className:"Slider__info",children:"Ceramic Pro is the first client of the company in Latvia, as well as the first client abroad. After changing the car wash system and approach to working with the client, under the new Ceramic Pro brand, the task was to bring more customers in the 16/17 tourist season than in the 15/16 season. The main focus of the photo session/photo presentation was to be the Ceramic Pro logo and new corporate identity, as well as the workflow and higher level of the average customer. This project has become a pilot project for our company in terms of introducing a unique Motivator design with the logo of the client's company. The task was also to orient the issue in Google search for a Russian-speaking tourist/client. The result was not long in coming, already in the next 16/17 season in Jurmala, 17% more customers turned to the car wash than in the 15/16 season. According to our forecasts, they should grow up to 25% over the next"})]})})]})}),C=(s(57),function(){return Object(h.jsxs)("section",{className:"Examples App__section",children:[Object(h.jsx)("h2",{className:"Examples__title",children:"Implementation examples"}),Object(h.jsxs)("div",{className:"Examples__content",children:[Object(h.jsxs)("div",{className:"Examples__prev",children:[Object(h.jsxs)("div",{className:"Examples__block",children:[Object(h.jsx)("p",{className:"Examples__increase",children:"Increase in the flow of customers"}),Object(h.jsx)("p",{className:"Examples__indicators",children:"+40%"})]}),Object(h.jsx)("div",{className:"Examples__block"}),Object(h.jsx)("div",{className:"Examples__block"}),Object(h.jsxs)("div",{className:"Examples__block",children:[Object(h.jsx)("p",{className:"Examples__increase",children:"Increase in the flow of customers"}),Object(h.jsx)("p",{className:"Examples__indicators",children:"+10%"})]})]}),Object(h.jsx)(T,{})]})]})}),E=(s(58),function(){for(var e=[],t=1;t<=8;t+=1)e.push(t);return Object(h.jsxs)("section",{className:"Awards App__section",children:[Object(h.jsx)("h1",{className:"Awards__title",children:"Our awards"}),Object(h.jsx)("p",{className:"Awards__subtitle",children:"Our company has a number of cities in the service of Google and Booking"}),Object(h.jsx)("div",{className:"Awards__companies",children:e.map((function(e){return Object(h.jsx)("div",{className:"Awards__company Awards__company--".concat(e)},e)}))})]})}),R=(s(59),function(){return Object(h.jsxs)("section",{className:"UsefulInfo App__section",children:[Object(h.jsxs)("div",{className:"UsefulInfo__content",children:[Object(h.jsx)("h4",{className:"UsefulInfo__subtitle",children:"Useful information"}),Object(h.jsx)("h2",{className:"UsefulInfo__title",children:"How does Google Search work?"}),Object(h.jsxs)("p",{className:"UsefulInfo__info",children:["Today, the largest search resource on the planet is Google Search. It is practically a monopoly in the field of information search. That is why our company, when creating its GEO advertising technology, used this system as a basis.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Let's figure out together how exactly Google Search works. When a user enters a search query, Google Search processes it in less than one second and returns the search results in a specific sequence.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Android phones, 75% of phones based on other systems, as well as laptops and home computers use Google in one or another way."]}),Object(h.jsxs)("div",{className:"UsefulInfo__firstBlock",children:[Object(h.jsxs)("h2",{className:"UsefulInfo__title UsefulInfo__title--firstBlock",children:["First block:",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"UsefulInfo__title UsefulInfo__title--firstBlock",children:"Advertisements"})]}),Object(h.jsx)("p",{className:"UsefulInfo__info UsefulInfo__info--first",children:'Search results tagged "advertising". Such ads are always displayed at the top of the list (from 1 to 4 ads) and at the bottom of the list (from 1 to 5 ads). The place in the list is determined by the Google Adwords auction. Google Adwords guarantees your ad or website visits but requires constant financial investment. For example, the cost of such advertising per month for clothing stores in Lisbon will be about 5000 \u20ac. and more. Agree, not every small or medium business can afford such an advertising budget. However, our clients often use Adwords in tandem with GEO advertising.'})]})]}),Object(h.jsx)("div",{className:"UsefulInfo__images"})]})}),W=(s(60),function(){return Object(h.jsxs)("section",{className:"SettingUp",children:[Object(h.jsxs)("div",{className:"SettingUp__info",children:[Object(h.jsx)("h2",{className:"SettingUp__title",children:"Setting up"}),Object(h.jsxs)("div",{className:"SettingUp__nav",children:[Object(h.jsx)("button",{className:"SettingUp__btn SettingUp__btn--adWords",type:"button",children:"AdWords ads"}),Object(h.jsx)("button",{className:"SettingUp__btn SettingUp__btn--booking",type:"button",children:Object(h.jsx)("a",{className:"SettingUp__link",href:"https://www.booking.com/",target:"_blank",rel:"noopener noreferrer",children:"Booking.com"})})]}),Object(h.jsxs)("p",{className:"SettingUp__content",children:['Any business seeks to make a profit through customer satisfaction. But satisfying such needs, no business seeks to use the client to promote their product or service. This happens on its own, in the form of "word of mouth", as it is popularly called. Modern business keeps in touch with the client using mobile applications such as Instagram, Telegram or Twitter, instant messengers (Viber, Skype, WhatsApp), or social networks (Facebook, etc.).',Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"What if we offer you a simple technique that will allow you to bring more new customers at the expense of old ones, using social networks and mobile applications? Moreover, not on the scale of a simple word of mouth, but a modern one, using the above social networks and mobile applications?",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"With a few simple implementation steps, and simple instructions for use and your clients will work for you."]})]}),Object(h.jsx)("div",{className:"SettingUp__images"})]})}),I=(s(61),function(e){var t=e.getStarted,s=e.contactRef;return Object(h.jsxs)("section",{className:"Contacts App__section",ref:s,children:[Object(h.jsx)("h2",{className:"Contacts__subtitle",children:"Ready for take-off?"}),Object(h.jsx)("h1",{className:"Contacts__title",children:"Get in touch"}),Object(h.jsxs)("div",{className:"Contacts__contacts",children:[Object(h.jsx)("button",{className:"Contacts__btn",type:"button",children:Object(h.jsx)("a",{className:"Contacts__link",href:"tel:+351 913 448 547",target:"_blank",rel:"noopener noreferrer",children:"+351 913 448 547"})}),Object(h.jsx)("button",{className:"Contacts__btn",type:"button",children:Object(h.jsx)("a",{className:"Contacts__link Contacts__link--telegram",href:"https://t.me/mapstars",target:"_blank",rel:"noopener noreferrer",children:"mapstars"})}),Object(h.jsx)("button",{className:"Contacts__btn",type:"button",children:Object(h.jsx)("a",{className:"Contacts__link",href:"mailto:info@mapstars.pt",target:"_blank",rel:"noopener noreferrer",children:"info@mapstars.pt"})})]}),Object(h.jsx)("button",{className:"Contacts__get-started Contacts__get-started--blur",type:"button"}),Object(h.jsx)("button",{className:"Contacts__get-started",type:"button",onClick:function(){return t()},children:"Get started"})]})}),F=s.p+"static/media/logo.70296b9b.svg",M=(s(62),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,1)[0];return Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsx)("a",{href:"#header",children:Object(h.jsx)("img",{className:"Footer__logo",src:F,alt:"logo"})}),Object(h.jsx)("nav",{className:d()("Footer__nav + ".concat(t?"Footer__nav--open":"")),children:Object(h.jsxs)("ul",{className:"Footer__nav-ul",children:[Object(h.jsx)("li",{className:"Footer__nav-li",children:Object(h.jsx)(c.c,{href:"/privacy",className:"Footer__link",children:"Privacy Policy"})}),Object(h.jsx)("li",{className:"Footer__nav-li",children:Object(h.jsx)(c.c,{to:"/terms",className:"Footer__link",children:"Terms of Service"})}),Object(h.jsx)("li",{className:"Footer__nav-li",children:Object(h.jsx)(c.c,{to:"/shedule",className:"Footer__link",children:"Schedule a Call"})})]})}),Object(h.jsxs)("div",{className:"Footer__social-links",children:[Object(h.jsx)("a",{className:"Footer__social-link Footer__social-link--facebook",href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"."}),Object(h.jsx)("a",{className:"Footer__social-link Footer__social-link--twitter",href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:"."}),Object(h.jsx)("a",{className:"Footer__social-link Footer__social-link--instagram",href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:"."}),Object(h.jsx)("a",{className:"Footer__social-link Footer__social-link--linkedin",href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:"."})]})]})}),U=(s(63),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0],o=t[1],n=Object(a.useRef)(null),i=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useRef)(null),m=Object(a.useRef)(null),b=function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),o(!0)};return Object(h.jsx)(u,{children:Object(h.jsxs)("div",{className:d()("App + ".concat(s?"App--dialog":"")),children:[Object(h.jsx)(p,{getStarted:b,techRef:n,advantagesRef:i,howWorkRef:c,packagesRef:l,contactRef:m}),s&&Object(h.jsx)(_,{closeDialog:function(){o(!1)}}),Object(h.jsxs)("div",{className:"App__mainBlock",children:[Object(h.jsx)(x,{getStarted:b}),Object(h.jsx)(v,{techRef:n}),Object(h.jsx)(y,{advantagesRef:i}),Object(h.jsx)(N,{howWorkRef:c}),Object(h.jsx)(S,{}),Object(h.jsx)(R,{}),Object(h.jsx)(G,{getStarted:b,packagesRef:l}),Object(h.jsx)(C,{}),Object(h.jsx)(E,{}),Object(h.jsx)(W,{}),Object(h.jsx)(I,{getStarted:b,contactRef:m})]}),Object(h.jsx)(M,{})]})})});s(64);i.a.render(Object(h.jsx)(c.a,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.91cdbf4e.chunk.js.map