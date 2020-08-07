(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),b=n,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||r;return o?a.a.createElement(m,i(i({ref:t},l),{},{components:o})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},54:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(2),a=o(6),r=(o(0),o(104)),s={id:"contratos-inteligentes",title:"Contratos Inteligentes",sidebar_label:"Contratos Inteligentes"},i={unversionedId:"aprender-eosio/contratos-inteligentes",id:"aprender-eosio/contratos-inteligentes",isDocsHomePage:!1,title:"Contratos Inteligentes",description:'Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada o lo que se le denomina "inputs". Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xe1s simple como las reglas de un juego. Las acciones t\xedpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego).',source:"@site/docs/aprender-eosio/contratos-inteligentes.md",permalink:"/docs/aprender-eosio/contratos-inteligentes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/website/docs/aprender-eosio/contratos-inteligentes.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1596836097,sidebar_label:"Contratos Inteligentes",sidebar:"docs",previous:{title:"Cadena de Bloques EOS",permalink:"/docs/aprender-eosio/cadena-de-bloques-eos"},next:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"}},c=[{value:"Framework de dise\xf1o de Contratos Inteligentes",id:"framework-de-dise\xf1o-de-contratos-inteligentes",children:[{value:"Pasos del proceso",id:"pasos-del-proceso",children:[]},{value:"Modelo de datos",id:"modelo-de-datos",children:[]},{value:"Acciones",id:"acciones",children:[]},{value:"Pre y Post-Condiciones",id:"pre-y-post-condiciones",children:[]}]},{value:"Contratos Inteligentes de C\xf3digo Abierto",id:"contratos-inteligentes-de-c\xf3digo-abierto",children:[]},{value:"Esquema de contrato inteligente basico",id:"esquema-de-contrato-inteligente-basico",children:[]}],l={rightToc:c};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Un contrato es un acuerdo que rige los resultados de las acciones una vez dado un conjunto de datos de entrada o lo que se le denomina "inputs". Un contrato puede ir desde los tipo legal (ejemplo transacciones financieras) hasta algo m\xe1s simple como las reglas de un juego. Las acciones t\xedpicas pueden ser transacciones de fondos (en el caso de un contrato financiero) o movimientos de juegos (en el caso de un contrato de juego).'),Object(r.b)("p",null,"Un Contrato Inteligente de EOSIO es software registrado en el blockchain y ejecutado en los nodos de EOSIO, esto implementa las sem\xe1nticas de un contracto cuyo registro de solicitudes de acciones est\xe1n siendo guardadas en el blockchain. El Contrato Inteligente define la interfaz (acciones, par\xe1metros, estructuras de datos) y el c\xf3digo que implementa la interfaz. El c\xf3digo es compilado en el formato ",Object(r.b)("strong",{parentName:"p"},"bytecode can\xf3nico")," el cual puede ser obtenido y ejecutado por los nodos. El blockchain guarda las transacciones (tranferencias legales, moviemientos de juego) del contrato. Cada Contrato Inteligente debe ser acompa\xf1ado de un Contrato Ricardiano que define la legalidad de los t\xe9rminos y condiciones enlazadas del contrato."),Object(r.b)("p",null,"Lee m\xe1s aqu\xed : ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/eosio-cpp/docs"}),"https://developers.eos.io/eosio-cpp/docs")),Object(r.b)("h2",{id:"framework-de-dise\xf1o-de-contratos-inteligentes"},"Framework de dise\xf1o de Contratos Inteligentes"),Object(r.b)("p",null,"Escazes Digital ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/digital-scarcity/equiprental"}),"github repo")," tiene un ejemplo dise\xf1ado para proveer un framework paso a paso y ejemplo de c\xf3mmo crear un Contrato Inteligente en EOS. Usa un simple caso de alquiler de equipos que lista el equipo para alquilar y los alquiladores que pagan por el alquier de dicho equipo."),Object(r.b)("h3",{id:"pasos-del-proceso"},"Pasos del proceso"),Object(r.b)("p",null,"Aqu\xed se pueden ver los pasos generales para desarrollar un Contrato Inteligente.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/steps.png",alt:"alt text",title:"Steps"}))),Object(r.b)("h3",{id:"modelo-de-datos"},"Modelo de datos"),Object(r.b)("p",null,"Define la informaci\xf3n que persistir\xe1 en el Contrato Inteligente.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/datamodel.png",alt:"alt text",title:"Data Model"}))),Object(r.b)("h3",{id:"acciones"},"Acciones"),Object(r.b)("p",null,"Define las acciones o el estado de cambio que deben existir en el Contrato Inteligente.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/actions.png",alt:"alt text",title:"Actions"}))),Object(r.b)("h3",{id:"pre-y-post-condiciones"},"Pre y Post-Condiciones"),Object(r.b)("p",null,"Define las acciones o el estado de cambios que deben existir en tu Contrato Inteligente.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/prepostconditions.png",alt:"alt text",title:"Pre- and Post-Conditions"}))),Object(r.b)("h2",{id:"contratos-inteligentes-de-c\xf3digo-abierto"},"Contratos Inteligentes de C\xf3digo Abierto"),Object(r.b)("p",null,"Nosotros manteneos una lista de Contratos Inteligentes de EOS de c\xf3digo de abierto en el siguiente repositorio:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-contracts"}),"https://github.com/eoscostarica/eos-contracts")),Object(r.b)("p",null,"Tambi\xe9n, \xe9chale un vistazo a esta lista de Contratos Inteligenes de EOS de c\xf3digo abierto mantenida por C\xe9sar Rodr\xedguez:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kesar/eos-awesome-contracts"}),"https://github.com/kesar/eos-awesome-contracts")),Object(r.b)("h2",{id:"esquema-de-contrato-inteligente-basico"},"Esquema de contrato inteligente basico"),Object(r.b)("figure",{class:"video_container"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EbWDHrm2ETY",frameborder:"0",allowfullscreen:"true"}," ")),Object(r.b)("p",null,"Puedes ver m\xe1s en este canal: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/user/grandmoren1/videos"}),"https://www.youtube.com/user/grandmoren1/videos")))}d.isMDXComponent=!0}}]);