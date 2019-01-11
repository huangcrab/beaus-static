(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),s=(a(26),a(5)),c=a(6),i=a(8),m=a(7),u=a(9),d=a(46);function p(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-3 mb-5"},"Beau's Seasonal:"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur ipsum enim ratione quam soluta quaerat distinctio sapiente nihil. Odit est itaque ipsa non laudantium enim excepturi hic aliquam illo?"),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/beaus-seasonal",className:"btn btn-lg brown text-white",role:"button"},"Start here")))}var b=a(17),h=a(14),g=r.a.createContext(),E=function(e,t){switch(t.type){case"LOAD_BEER":return Object(h.a)({},e,{beer:t.payload});case"LOAD_BEERS":return Object(h.a)({},e,{beers:t.payload});case"SET_LOCATION":return Object(h.a)({},e,{location:t.payload});default:return e}},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={key:"MDo4MGMwOTk4MC0xMDRhLTExZTktYmEzNi0zMzQ4ODcyMDk4NGI6VmtodmM0cEFISnpLbk9vY3RrSXpRMk5nQ3pUdThVOHB0UEFT",key2:"AIzaSyAI6yDH5gaOYwcbJorZZ3SNbCXF7IoczZ0",beer:{},beers:[],stores:[],nearbyStores:[],location:"",location_lat:"",location_long:"",error:{},loading_stores:!1,loading_beers:!1,dispatch:function(e){a.setState(function(t){return E(t,e)})},getStores:function(e){a.setState({loading_stores:!0});var t=new Headers;t.set("Authorization","Token ".concat(a.state.key)),fetch("https://lcboapi.com/stores?product_id=".concat(e),{method:"GET",headers:t}).then(function(e){return e.json()}).then(function(e){a.setState({stores:e.result}),a.setState({loading_stores:!1})}).catch(function(e){return a.setState({error:e})})},getBeers:function(){a.setState({loading_beers:!0});var e=new Headers;e.set("Authorization","Token ".concat(a.state.key)),fetch("https://lcboapi.com/products?per_page=50&q=beau's+beer",{method:"GET",headers:e}).then(function(e){return e.json()}).then(function(t){if(t.pager.total_pages>1){var n=[];n.push.apply(n,Object(b.a)(t.result));for(var r=[],l=2;l<=t.pager.total_pages;l++)r.push(fetch("https://lcboapi.com/products?per_page=50&q=beau's+beer&page=".concat(l),{method:"GET",headers:e}).then(function(e){return e.json()}).then(function(e){return e.result}));Promise.all(r).then(function(e){e.forEach(function(e){return n.push.apply(n,Object(b.a)(e))}),a.setState({beers:n}),a.setState({loading_beers:!1})}).catch(function(e){return a.setState({error:e})})}else a.setState({beers:t.result}),a.setState({loading_beers:!1})}).catch(function(e){return a.setState({error:e})})},getAddress:function(e){fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,"&key=").concat(a.state.key2)).then(function(e){return e.json()}).then(function(e){a.setState({location:e.results[0].formatted_address})})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),v=g.Consumer;function N(e){var t=this,a=function(e,t){t({type:"LOAD_BEER",payload:e})};return r.a.createElement(v,null,function(n){var l=e.beer,o=n.dispatch;return r.a.createElement("div",{className:"beer-card card pb-0",onClick:a.bind(t,l,o)},r.a.createElement(d.a,{to:"/beaus-seasonal/".concat(l.id)},r.a.createElement("img",{src:l.image_thumb_url?l.image_thumb_url:"https://beaus.ca/wp-content/themes/beaus_2016/assets/build/img/beaus-black-logo.svg",className:"card-img-top",alt:l.name})),r.a.createElement("div",{className:"card-body pb-0"},r.a.createElement("p",null,l.name),r.a.createElement("p",{className:""},"CAD: ",.01*l.price_in_cents)))})}var k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.value.getBeers()}},{key:"render",value:function(){var e=this.props.value,t=e.loading_beers,a=e.beers;return r.a.createElement("div",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Seasonal List"),r.a.createElement("p",{className:""})),r.a.createElement("div",{className:"beer-grid"},t?"Loading":a.filter(function(e){return"Beau's All Natural Brewing"===e.producer_name&&!0===e.is_seasonal&&!1===e.is_dead}).map(function(e){return r.a.createElement(N,{key:e.id,beer:e})})))}}]),t}(n.Component);function y(){return r.a.createElement(v,null,function(e){return r.a.createElement(k,{value:e})})}var w=a(10);function _(e){var t=" "+e.store.address_line_1+" "+e.store.address_line_2+", "+e.store.city+", "+e.store.postal_code;return r.a.createElement("div",{className:"card pb-0 store-card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card-body pb-0"},r.a.createElement("h4",null,e.store.name),r.a.createElement("p",{className:"store-address"},r.a.createElement("i",{className:"fas fa-map-marker-alt"})," :"," ",r.a.createElement("a",{href:"https://www.google.com/maps/place/".concat(t,"?hl=en"),target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",{className:"store-contact"},r.a.createElement("i",{className:"fas fa-phone"})," :",r.a.createElement("a",{href:"tel:".concat(e.store.telephone)}," ",e.store.telephone),r.a.createElement("br",null)," ",r.a.createElement("i",{className:"fas fa-fax"})," : ",e.store.fax)))))}var S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={longitude:"",latitude:"",location:"",showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.onInputChange=function(e){a.props.value.dispatch({type:"SET_LOCATION",payload:e.target.value})},a.onStoreClick=function(){a.props.value.getStores(a.props.id)},a.onShowMapClick=function(){fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(a.props.value.location,"&key=AIzaSyAI6yDH5gaOYwcbJorZZ3SNbCXF7IoczZ0")).then(function(e){return e.json()}).then(function(e){console.log(e),0!==e.results.length&&(a.setState({latitude:e.results[0].geometry.location.lat}),a.setState({longitude:e.results[0].geometry.location.lng}))})},a.onGetLocationClick=function(e){var t;navigator.geolocation.getCurrentPosition(function(n){t=n,a.setState({latitude:t.coords.latitude}),a.setState({longitude:t.coords.longitude}),e(t.coords.latitude+","+t.coords.longitude)},function(e){console.log("Error occurred. Error code: "+e.code)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.value,a=t.beer,n=t.getAddress,l=t.loading_stores,o=t.stores,s=t.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card beer-info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"beer-image "},a.image_url?r.a.createElement("img",{className:"beer-image",src:a.image_url,alt:a.name}):r.a.createElement("img",{className:"beer-image-holder",src:"/assets/tall.jpg",alt:a.name}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"beer-info-text p-2"},r.a.createElement("strong",{className:"mb-2 text-m-brown"},a.origin),r.a.createElement("h3",{className:"mb-3 text-brown"},a.name),r.a.createElement("div",{className:"mb-1 text-muted"},a.style),r.a.createElement("p",{className:"mb-10"},a.tasting_note,r.a.createElement("br",null),r.a.createElement("br",null),a.serving_suggestion,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"font-weight-bold"},"CAD: ",.01*a.price_in_cents),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"text-muted"},a.tags?a.tags.split(" ").map(function(e){return"#"+e}):null)),r.a.createElement("div",{className:"button-wrap"},r.a.createElement("div",{onClick:this.onStoreClick,className:"button text-brown","data-target":".store-modal","data-toggle":"modal"},"Check In-Store Availablity")))))),r.a.createElement("div",{className:"modal fade store-modal",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-lg"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Product available in following ",o.length," locations"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{onClick:this.onGetLocationClick.bind(this,n),className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fas fa-map-marker-alt"}))),r.a.createElement("input",{type:"text",placeholder:"Enter your address",className:"form-control",value:s,onChange:this.onInputChange.bind(this)}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:this.onShowMapClick,className:"btn btn-outline-secondary",type:"button"},"Search")))),""!==this.state.latitude?r.a.createElement("div",{className:"map-wrapper"},r.a.createElement(w.Map,{google:this.props.google,zoom:11,center:{lat:this.state.latitude,lng:this.state.longitude}},r.a.createElement(w.Marker,{onClick:this.onMarkerClick,title:"Your Location",position:{lat:this.state.latitude,lng:this.state.longitude},name:"Your Location"}),r.a.createElement(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name))),o!==[]?o.map(function(t){var a=" "+t.address_line_1+" "+t.address_line_2+", "+t.city+", "+t.postal_code;return r.a.createElement(w.Marker,{key:t.id,onClick:e.onMarkerClick,title:t.name,position:{lat:t.latitude,lng:t.longitude},name:t.name,address:a})}):"loading",o!==[]?o.map(function(t){return r.a.createElement(w.InfoWindow,{marker:e.state.activeMarker,visible:e.state.showingInfoWindow,onClose:e.onClose,key:t.id},r.a.createElement("div",null,r.a.createElement("h4",null,e.state.selectedPlace.name),r.a.createElement("a",{href:"https://www.google.com/maps/place/".concat(e.state.selectedPlace.address,"?hl=en"),target:"_blank",rel:"noopener noreferrer"},e.state.selectedPlace.address)))}):null)):null,r.a.createElement("div",{className:"stores-grid"},l?"loading":o.map(function(e){return r.a.createElement(_,{key:e.id,store:e})}))))))}}]),t}(n.Component),C=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyAI6yDH5gaOYwcbJorZZ3SNbCXF7IoczZ0"})(S);function O(e){return r.a.createElement(v,null,function(t){return r.a.createElement(C,{value:t,id:e.match.params.id})})}function j(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"nav-brand"},r.a.createElement("h3",{className:"text-muted"},r.a.createElement(d.a,{to:"/",className:"nav-link"},"Beau's Seasonal"))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{to:"/beaus-seasonal",className:"nav-link"},"Seasonal"))))),r.a.createElement("hr",null))}function I(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9 lazyparadise ",(new Date).getFullYear()))}var A=a(48),M=a(47),x=(a(42),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(A.a,null,r.a.createElement("div",{className:"App container"},r.a.createElement(j,null),r.a.createElement(M.a,{exact:!0,path:"/",component:p}),r.a.createElement(M.a,{exact:!0,path:"/beaus-seasonal",component:y}),r.a.createElement(M.a,{exact:!0,path:"/beaus-seasonal/:id",component:O}),r.a.createElement(I,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.c0344dc1.chunk.js.map