(this.webpackJsonpmatkasuunnitelma=this.webpackJsonpmatkasuunnitelma||[]).push([[0],{608:function(t,a,e){"use strict";e.r(a);var n=e(0),i=e.n(n),u=e(19),c=e.n(u),l=e(92),r=e.n(l),o=e(27),s=e(122),j=e(38),d=e(648),b=e(650),m=e(610),p=e(657),k=e(51),h=e(21),v=e(645),O=e(651),x=e(652),f=e(653),g=e(659),y=e(661),F=e(10),S=Object(v.a)((function(){return{tausta:{backgroundColor:"#F5FFFA",minHeight:"120px",paddingTop:"20px",paddingLeft:"70px"},tekstikentta:{fontSize:"16pt",paddingLeft:"20px",color:"#003333"},tekstikentta2:{fontSize:"22pt",paddingLeft:"20px",paddingTop:"20px",color:"#003333"},button:{fontSize:"12pt",padding:"10px",margin:"20px",background:"linear-gradient(45deg, #e6fff2 30%, #E0FFFF 90%)",boxShadow:"0 3px 5px 2px #F5F5F5",color:"#003333"}}}));var H=function(t){var a=S(),e=Object(n.useState)(!1),i=Object(j.a)(e,2),u=i[0],c=i[1],l=function(){c(!1)};return Object(F.jsx)(d.a,{className:a.tausta,maxWidth:"md",children:t.matka.tiedotTallennettu?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(b.a,{className:a.tekstikentta,children:["Matkakohde: ",t.matka.kohde," ",Object(F.jsx)("br",{}),"L\xe4ht\xf6p\xe4iv\xe4: ",Object(g.a)(t.matka.lahtopaiva,"d.M.y HH:mm"),Object(F.jsx)("br",{}),"Paluup\xe4iv\xe4: ",Object(g.a)(t.matka.paluupaiva,"d.M.y HH:mm"),Object(F.jsx)("br",{}),"Matkan kesto: ",Object(y.a)(t.matka.paluupaiva,t.matka.lahtopaiva)," p\xe4iv\xe4\xe4",Object(F.jsx)("br",{}),"Kohdevaluutta: ",t.matka.valuutta,Object(F.jsx)("br",{}),"Budjetti: ",t.matka.budjetti," \u20ac",t.matka.valuutta?Object(F.jsxs)(F.Fragment,{children:["  / ",(t.matka.budjetti*t.matka.valuutanarvo).toFixed(2)," ",t.matka.valuutta," ",Object(F.jsx)("br",{})]}):Object(F.jsx)("br",{})]}),Object(F.jsxs)(b.a,{className:a.tekstikentta2,children:["L\xe4ht\xf6\xf6n on viel\xe4 ",Object(y.a)(t.matka.lahtopaiva,new Date)," p\xe4iv\xe4\xe4. Hyv\xe4\xe4 matkaa!"]}),Object(F.jsx)(O.a,{component:k.b,to:"/uusimatka",variant:"contained",size:"large",className:a.button,children:"Muokkaa matkan tietoja"}),Object(F.jsx)(O.a,{variant:"contained",size:"large",className:a.button,onClick:function(){c(!0)},children:"Poista matka"}),Object(F.jsxs)(x.a,{open:u,onClose:l,children:[Object(F.jsx)(f.a,{children:"Haluatko varmasti poistaa matkan?"}),Object(F.jsx)(O.a,{onClick:function(){t.setMatka({kohde:"",valuutta:"",lahtopaiva:0,paluupaiva:0,budjetti:"",valuutanarvo:0,tiedotTallennettu:!1})},color:"primary",children:"Kyll\xe4"}),Object(F.jsx)(O.a,{onClick:l,color:"primary",autoFocus:!0,children:"Ei"})]})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(b.a,{className:a.tekstikentta,children:"Aloita lis\xe4\xe4m\xe4ll\xe4 matkan tiedot"}),Object(F.jsx)(O.a,{component:k.b,to:"/uusimatka",variant:"contained",size:"large",className:a.button,children:"Lis\xe4\xe4 uusi matka"})]})})},N=e(663),M=e(656),T=e(665),B=e(660),L=e(667),C=e(22),W=e(658),z=e(126),E=e(145),P=Object(v.a)((function(){return{tausta:{backgroundColor:"#F5FFFA",minHeight:"120px",paddingTop:"20px",paddingLeft:"70px"},tekstikentta:{fontSize:"16pt",paddingLeft:"20px"},button:{padding:"10px",margin:"20px",backgroundColor:"#e6fff2"}}}));var A=function(t){var a=P(),e=Object(n.useState)(null),i=Object(j.a)(e,2),u=i[0],c=i[1],l=Object(n.useState)(null),r=Object(j.a)(l,2),s=r[0],m=r[1],p=Object(n.useState)(""),v=Object(j.a)(p,2),x=v[0],f=v[1],g=Object(n.useRef)({}),y=Object(n.useState)({}),S=Object(j.a)(y,2),H=S[0],A=S[1],w=Object(h.e)();Object(n.useEffect)((function(){g.current.kohde=t.matka.kohde,g.current.budjetti=t.matka.budjetti,t.matka.lahtopaiva&&c(t.matka.lahtopaiva),t.matka.paluupaiva&&m(t.matka.paluupaiva),t.matka.valuutta&&f(t.matka.valuutta)}),[]);var V=function(t){var a=t.target.value;g.current[t.target.name]=a};return Object(F.jsx)(d.a,{className:a.tausta,maxWidth:"md",children:Object(F.jsx)(C.a,{utils:z.a,locale:E.fi,children:Object(F.jsxs)("form",{onSubmit:function(a){a.preventDefault();var e={};if(g.current.kohde||(e=Object(o.a)(Object(o.a)({},e),{},{kohde:"Matkakohde puuttuu"})),g.current.budjetti&&!isNaN(g.current.budjetti)||(e=Object(o.a)(Object(o.a)({},e),{},{budjetti:"Budjetti puuttuu tai on virheellinen"})),u||(e=Object(o.a)(Object(o.a)({},e),{},{pvmaika:"Anna l\xe4ht\xf6p\xe4iv\xe4m\xe4\xe4r\xe4"})),s||(e=Object(o.a)(Object(o.a)({},e),{},{paluupvmaika:"Anna paluup\xe4iv\xe4m\xe4\xe4r\xe4"})),Object.entries(e).length>0)A(Object(o.a)({},e));else{A({});var n={kohde:g.current.kohde,valuutta:x,valuutanarvo:t.valuutat[x],lahtopaiva:u,paluupaiva:s,budjetti:g.current.budjetti,tiedotTallennettu:!0,jaljella:0,kulut:0};t.setMatka(n),w.push("/")}},children:[Object(F.jsx)(b.a,{children:"Lis\xe4\xe4 uusi matka"}),Object(F.jsx)(N.a,{name:"kohde",label:"Matkakohde",variant:"outlined",fullWidth:!0,defaultValue:t.matka.kohde,style:{marginBottom:10},error:Boolean(H.kohde),helperText:H.kohde,onChange:V}),Object(F.jsx)(W.a,{clearable:!0,label:"L\xe4ht\xf6p\xe4iv\xe4",inputVariant:"outlined",fullWidth:!0,cancelLabel:"Peruuta",ampm:!1,value:u,format:"d.M.y HH:mm",onChange:c,error:Boolean(H.pvmaika),helperText:H.pvmaika,style:{marginBottom:10}}),Object(F.jsx)(W.a,{clearable:!0,label:"Paluup\xe4iv\xe4 (l\xe4ht\xf6p\xe4iv\xe4 on annettava ensin)",inputVariant:"outlined",fullWidth:!0,cancelLabel:"Peruuta",ampm:!1,value:s,disabled:!u,minDate:u,format:"d.M.y HH:mm",onChange:m,error:Boolean(H.paluupvmaika),helperText:H.paluupvmaika,style:{marginBottom:10}}),Object(F.jsx)(N.a,{name:"budjetti",label:"Budjetti (sy\xf6t\xe4 budjetti ainoastaan numeroina)",variant:"outlined",fullWidth:!0,style:{marginBottom:10},defaultValue:t.matka.budjetti,error:Boolean(H.budjetti),helperText:H.budjetti,onChange:V}),Object(F.jsxs)(M.a,{variant:"outlined",className:a.syote,fullWidth:!0,children:[Object(F.jsx)(T.a,{style:{paddingLeft:5,paddingRight:5},children:"Kohdevaluutta (ei pakollinen)"}),Object(F.jsx)(B.a,{value:x,defaultValue:t.matka.valuutta,displayEmpty:!0,onChange:function(t){f(t.target.value)},children:Object.keys(t.valuutat).sort().map((function(a){return Object(F.jsxs)(L.a,{value:a,children:[a," (",t.valuutat[a],")"]},a)}))})]}),Object(F.jsx)(O.a,{type:"submit",variant:"contained",fullWidth:!0,style:{marginBottom:10},className:a.button,children:"Tallenna matka"}),Object(F.jsx)(O.a,{component:k.b,to:"/",variant:"contained",fullWidth:!0,className:a.button,children:"Peruuta"})]})})})},w=e.p+"static/media/beach.78c7e244.jpg",V=Object(v.a)((function(){return{tausta:{minHeight:"200px",paddingTop:"20px",backgroundImage:"url(".concat(w,")")},tekstikentta:{paddingTop:"20px",fontSize:"36pt",textAlign:"center",color:"#003333"}}}));var I=function(t){var a=V();return Object(F.jsx)(d.a,{className:a.tausta,maxWidth:"md",children:Object(F.jsx)(b.a,{className:a.tekstikentta,children:t.children})})},J=Object(v.a)((function(){return{tausta:{background:"linear-gradient(45deg, #e6fff2 30%, #E0FFFF 90%)",minHeight:"80px",paddingTop:"20px"},tekstikentta:{fontSize:"12pt",textAlign:"center",color:"#003333"}}}));var D=function(){var t=J();return Object(F.jsx)(d.a,{className:t.tausta,maxWidth:"md",children:Object(F.jsxs)(b.a,{className:t.tekstikentta,children:["\xa9 2021 H. Hyv\xe4rinen ",Object(F.jsx)("br",{}),"Photos from Pixabay.com"]})})};var K=function(){var t=Object(n.useState)({kohde:"",valuutta:"",lahtopaiva:0,paluupaiva:0,budjetti:"",valuutanarvo:0,tiedotTallennettu:!1}),a=Object(j.a)(t,2),e=a[0],i=a[1],u=Object(n.useState)({valuuttakurssit:[],virhe:null,tiedotHaettu:!1}),c=Object(j.a)(u,2),l=c[0],v=c[1],O=function(){var t=Object(s.a)(r.a.mark((function t(){var a,e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.ratesapi.io/api/latest");case 3:return a=t.sent,t.next=6,a.json();case 6:e=t.sent,v(Object(o.a)(Object(o.a)({},l),{},{valuuttakurssit:e.rates,tiedotHaettu:!0})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),v(Object(o.a)(Object(o.a)({},l),{},{valuuttakurssit:[],tiedotHaettu:!0,virhe:"Virhe: yhteytt\xe4 valuuttapalvelimelle ei voitu muodostaa. (".concat(t.t0,")")}));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(),localStorage.getItem("matka")?i(JSON.parse(localStorage.getItem("matka"))):(i(),console.log(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("matka",JSON.stringify(e))}),[e]),Object(F.jsx)(k.a,{children:Object(F.jsxs)(d.a,{children:[Object(F.jsx)(I,{children:"Matkasuunnitelma"}),Object(F.jsx)(h.a,{path:"/matkasuunnitelma/",exact:!0,children:Object(F.jsx)(H,{matka:e,setMatka:i,valuutat:l.valuuttakurssit})}),Object(F.jsx)(h.a,{path:"/matkasuunnitelma/uusimatka",children:Object(F.jsx)(A,{matka:e,setMatka:i,valuutat:l.valuuttakurssit})}),l.virhe?Object(F.jsx)(b.a,{color:"error",children:l.virhe}):l.tiedotHaettu?Object(F.jsx)(b.a,{}):Object(F.jsx)(m.a,{open:!0,children:Object(F.jsx)(p.a,{color:"inherit"})}),Object(F.jsx)(D,{})]})})};c.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(K,{})}),document.getElementById("root"))}},[[608,1,2]]]);
//# sourceMappingURL=main.66d934ae.chunk.js.map