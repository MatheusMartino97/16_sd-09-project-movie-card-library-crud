(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(31),a(10)),c=a(1),s=a(12),u=a.n(s),m=a(13),d=a(3),h=a(4),v=a(7),p=a(6),b=a(5),f=a(25),g=a(14),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var E=function(){return JSON.parse(localStorage.getItem("movies"))},O=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},j=function(e){var t=E().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},S=function(e){var t=E();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),O(t),new Promise((function(e){k({status:"OK"})(e)}))},w=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("h1",{className:"loading"},"Carregando...")}}]),a}(n.Component),I=a(17),M=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(g.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(I.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title",className:"input"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle",className:"input"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image",className:"input"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline",className:"input"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre",className:"input"},i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia")),"G\xeanero"))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating",className:"input"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"input"},i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"movie-from"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),_=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.id,r=e.imagePath;return i.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},i.a.createElement("div",{className:"image-box"},i.a.createElement("img",{src:r,alt:"banner"}),i.a.createElement("h1",null,t)),i.a.createElement("div",{className:"text-box"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"link-box"},i.a.createElement(l.b,{to:"/movies/".concat(n)},"VER DETALHES")))}}]),a}(i.a.Component),N=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={movie:"",status:"loading",shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.fetchMovie=n.fetchMovie.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match;this.fetchMovie(),console.log(e.params)}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var a=E().map((function(t){return t.id===parseInt(e.id,10)?Object(g.a)(Object(g.a)({},t),e):t}));O(a),k("OK")(t)}))}(e),this.setState({shouldRedirect:!0})}},{key:"fetchMovie",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,e.next=3,j(t.params.id);case 3:a=e.sent,this.setState({movie:a,status:"loaded"});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(w,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(M,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchMovie=n.fetchMovie.bind(Object(v.a)(n)),n.state={title:"",storyline:"",imagePath:"",genre:"",rating:"",subtitle:"",isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,i,r,o,l,c,s,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,a=t.params,e.next=4,j(a.id);case 4:n=e.sent,i=n.id,r=n.title,o=n.storyline,l=n.imagePath,c=n.genre,s=n.rating,m=n.subtitle,this.setState({id:i,title:r,storyline:o,imagePath:l,genre:c,rating:s,subtitle:m,isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!0===this.state.isLoading)return i.a.createElement(w,null);var t=this.state,a=t.id,n=t.title,r=t.storyline,o=t.imagePath,c=t.genre,s=t.rating,u=t.subtitle;return i.a.createElement("div",{className:"movie-details","data-testid":"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o)}),i.a.createElement("p",null,"Title: ".concat(n)),i.a.createElement("p",null,"Subtitle: ".concat(u)),i.a.createElement("p",null,"Storyline: ".concat(r)),i.a.createElement("p",null,"Genre: ".concat(c)),i.a.createElement("p",null,"Rating: ".concat(s)),i.a.createElement("div",{className:"details-links"},i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(a,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:function(){return e.deleteMovie(a)}},"DELETAR")))}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchMovies=n.fetchMovies.bind(Object(v.a)(n)),n.state={movies:[],isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=E();k(t)(e)}));case 2:t=e.sent,this.setState({movies:t,isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies;return!0===e.isLoading?i.a.createElement(w,null):i.a.createElement("main",{"data-testid":"movie-list"},i.a.createElement("div",{id:"movie-list"},t.map((function(e){return i.a.createElement(_,{key:e.title,movie:e})}))),i.a.createElement("div",{className:"add-div"},i.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O")))}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=E(),n=a[a.length-1].id+1,i=Object(g.a)(Object(g.a)({},t),{},{id:n});a=[].concat(Object(f.a)(a),[i]),O(a),k("OK")(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{id:"new-movie-page","data-testid":"new-movie"},i.a.createElement(M,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),R=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(38);var A=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:x}),i.a.createElement(c.b,{path:"/movies/new",component:P}),i.a.createElement(c.b,{path:"/movies/:id/edit",render:function(e){return i.a.createElement(N,e)}}),i.a.createElement(c.b,{path:"/movies/:id",render:function(e){return i.a.createElement(C,e)}}),i.a.createElement(c.b,{component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.0474de77.chunk.js.map