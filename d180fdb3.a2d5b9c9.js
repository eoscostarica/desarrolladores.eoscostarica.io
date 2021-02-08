(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{118:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(132)),s={id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes"},c={unversionedId:"kubernetes",id:"kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Kubernetes es una plataforma de c\xf3digo abierto, que fue creada por Google, utilizada para la gesti\xf3n, el despliegue, la escalabilidad y el monitoreo de contenedores Docker.",source:"@site/docs/kubernetes.md",slug:"/kubernetes",permalink:"/docs/kubernetes",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/kubernetes.md",version:"current",lastUpdatedBy:"Steph Delgado",lastUpdatedAt:1612819092,sidebar_label:"Kubernetes",sidebar:"docs",previous:{title:"Plantilla readme",permalink:"/docs/plantilla-readme"},next:{title:"Protocolo EOSIO",permalink:"/docs/aprender-eosio/protocolo-eosio"}},i=[{value:"Caracter\xedsticas de Kubernetes:",id:"caracter\xedsticas-de-kubernetes",children:[]},{value:"Arquitectura de Kubernetes",id:"arquitectura-de-kubernetes",children:[]},{value:"Esquema de Arquitectura de Kubernetes",id:"esquema-de-arquitectura-de-kubernetes",children:[]},{value:"Conceptos Clave en k8s",id:"conceptos-clave-en-k8s",children:[]}],u={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kubernetes es una plataforma de c\xf3digo abierto, que fue creada por Google, utilizada para la gesti\xf3n, el despliegue, la escalabilidad y el monitoreo de contenedores Docker. "),Object(o.b)("h3",{id:"caracter\xedsticas-de-kubernetes"},"Caracter\xedsticas de Kubernetes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Distribuci\xf3n inteligente de contenedores."),Object(o.b)("li",{parentName:"ul"},"Administraci\xf3n de las cargas de trabajos (provee balanceo de carga)."),Object(o.b)("li",{parentName:"ul"},"F\xe1cil gesti\xf3n de servicios y aplicaciones."),Object(o.b)("li",{parentName:"ul"},"Alta disponibilidad."),Object(o.b)("li",{parentName:"ul"},"Gran flexibilidad y permite trabajo modular."),Object(o.b)("li",{parentName:"ul"},"Monitoreo de contenedores.")),Object(o.b)("h3",{id:"arquitectura-de-kubernetes"},"Arquitectura de Kubernetes"),Object(o.b)("p",null,"Hay dos roles principales, \u201cmaster\u201d y \u201cnode\u201d. El master se encarga de manejar y orquestar los diferentes microservicios entre los 4 nodos disponibles del cluster."),Object(o.b)("h3",{id:"esquema-de-arquitectura-de-kubernetes"},"Esquema de Arquitectura de Kubernetes"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png",alt:"image"})),Object(o.b)("h3",{id:"conceptos-clave-en-k8s"},"Conceptos Clave en k8s"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cluster:")," Es un grupo de dispositivos que pueden ser f\xedsicos o virtuales y que se encuentran unidos muchas veces por una red y, por lo cual, se comportan como una."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Nodo Kubernetes:")," Es una m\xe1quina que se est\xe1 ejecutando en Kubernetes, en la cual se pueden programar \u201cpods\u201d."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pod:")," Es un grupo de uno o m\xe1s containers que comparten el almacenamiento y las configuraciones necesarias para ser ejecutados."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Replication Controller:")," Es quien maneja los fallos antes comentados y recrea, en caso de ser necesario, los pods. Adem\xe1s, tambi\xe9n se asegura de que el n\xfamero de r\xe9plicas del pod se est\xe9 ejecutando."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Service:")," Es una abstracci\xf3n que define un conjunto l\xf3gico de pods, as\xed como las reglas y la l\xf3gica para acceder a ellos."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Infraestructura como C\xf3digo IaC"),"\nSe crear\xe1 un repositorio con c\xf3digo para el dise\xf1o y despliegue de la infraestructura del proyecto Este representar\xe1 el estado deseado en los servidores, as\xed como im\xe1genes pre-compiladas de cada servicio que se desea desplegar."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/devops#kubernetes"},"M\xe1s informaci\xf3n")))}l.isMDXComponent=!0},132:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(m,c(c({ref:r},u),{},{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);