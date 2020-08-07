(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(2),o=t(6),r=(t(0),t(104)),c={id:"linea-de-comando",title:"L\xednea de Comando",sidebar_label:"L\xednea de Comando"},i={unversionedId:"herramientas/linea-de-comando",id:"herramientas/linea-de-comando",isDocsHomePage:!1,title:"L\xednea de Comando",description:"CLEOS",source:"@site/docs/herramientas/linea-de-comando.md",permalink:"/docs/herramientas/linea-de-comando",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/website/docs/herramientas/linea-de-comando.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1596836097,sidebar_label:"L\xednea de Comando",sidebar:"docs",previous:{title:"Glosario",permalink:"/docs/herramientas/glosario"},next:{title:"Opciones de Configuraci\xf3n de Nodeos",permalink:"/docs/herramientas/opciones-configuracion-nodeos"}},s=[{value:"CLEOS",id:"cleos",children:[]},{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Como utilizar Cleos",id:"como-utilizar-cleos",children:[{value:"Comando Cleos",id:"comando-cleos",children:[]},{value:"Subcomandos de Cleos",id:"subcomandos-de-cleos",children:[]}]},{value:"Ejemplo de cleos",id:"ejemplo-de-cleos",children:[]}],l={rightToc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cleos"},"CLEOS"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," es una herramienta de l\xednea de comandos que interact\xfaa con la API REST expuesta por nodeos. Los desarrolladores tambi\xe9n pueden usar cleos para implementar y probar contratos inteligentes EOSIO."),Object(r.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," se distribuye como parte de ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/README.md"}),"EOSIO"),". Para instalar ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," siga las instrucciones descritas en la ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/install/index"}),"secci\xf3n de Instalaci\xf3n de software EOSIO"),"."),Object(r.b)("h2",{id:"como-utilizar-cleos"},"Como utilizar Cleos"),Object(r.b)("p",null,"Para usar ",Object(r.b)("inlineCode",{parentName:"p"},"cleos"),", necesita el dominio o direcci\xf3n IP (y n\xfamero de puerto) de una instancia de ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," en ejecuci\xf3n. La instancia de ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," debe configurarse para cargar ",Object(r.b)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," cuando se inicia. Esto permite que ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos")," responda a las solicitudes de RPC que provienen de ",Object(r.b)("inlineCode",{parentName:"p"},"cleos"),"."),Object(r.b)("h3",{id:"comando-cleos"},"Comando Cleos"),Object(r.b)("p",null,"Ver referencia completa de comandos en el siguiente enlace a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eos/latest/cleos/index"}),"Documentaci\xf3n Cleos")),Object(r.b)("p",null,"Para obtener una lista de todos los comandos ",Object(r.b)("inlineCode",{parentName:"p"},"cleos"),", ejecute:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Command Line Interface to EOSIO Client\nUsage: cleos [OPTIONS] SUBCOMMAND\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -u,--url TEXT=http://127.0.0.1:8888/\n                              the http/https URL where nodeos is running\n  --wallet-url TEXT=unix:///Users/username/eosio-wallet/keosd.sock\n                              the http/https URL where keosd is running\n  -r,--header                 pass specific HTTP header; repeat this option to pass multiple headers\n  -n,--no-verify              don't verify peer certificate when using HTTPS\n  --no-auto-keosd             don't automatically launch a keosd if one is not currently running\n  -v,--verbose                output verbose errors and action console output\n  --print-request             print HTTP request to STDERR\n  --print-response            print HTTP response to STDERR\n\nSubcommands:\n  version                     Retrieve version information\n  create                      Create various items, on and off the blockchain\n  convert                     Pack and unpack transactions\n  get                         Retrieve various items and information from the blockchain\n  set                         Set or update blockchain state\n  transfer                    Transfer tokens from account to account\n  net                         Interact with local p2p network connections\n  wallet                      Interact with local wallet\n  sign                        Sign a transaction\n  push                        Push arbitrary transactions to the blockchain\n  multisig                    Multisig contract commands\n  wrap                        Wrap contract commands\n  system                      Send eosio.system contract action to the blockchain.\n")),Object(r.b)("h3",{id:"subcomandos-de-cleos"},"Subcomandos de Cleos"),Object(r.b)("p",null,"Para obtener ayuda con cualquier subcomando en particular, ejecute ",Object(r.b)("inlineCode",{parentName:"p"},"cleos SUBCOMMAND --help"),". Por ejemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos create --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Create various items, on and off the blockchain\nUsage: cleos create SUBCOMMAND\n\nSubcommands:\n  key                         Create a new keypair and print the public and private keys\n  account                     Create a new account on the blockchain\n                              (assumes system contract does not restrict RAM usage)\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cleos")," tambi\xe9n puede proporcionar ayuda para uso de subcomandos dentro de subcomandos. Por ejemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos create account --help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)\nUsage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n")),Object(r.b)("h2",{id:"ejemplo-de-cleos"},"Ejemplo de cleos"),Object(r.b)("p",null,"El siguiente comando ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," crea una billetera local llamada ",Object(r.b)("inlineCode",{parentName:"p"},"mibilletera")," y muestra la contrase\xf1a en la pantalla:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cleos wallet create -n mibilletera --to-console\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Creating wallet: mibilletera\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5JbF34UdA193Eps1bjrWVJRaNMt1VKddLn4Dx6SPVTfMDRnMBWN"\n')))}d.isMDXComponent=!0},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||r;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);