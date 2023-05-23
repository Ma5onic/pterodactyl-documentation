"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},8222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={},s="Creating SSL Certificates",c={unversionedId:"Documentation/Tutorials/creating_ssl_certificates",id:"Documentation/Tutorials/creating_ssl_certificates",title:"Creating SSL Certificates",description:"This tutorial briefly covers creating new SSL certificates for your panel and wings.",source:"@site/docs/Documentation/Tutorials/creating_ssl_certificates.md",sourceDirName:"Documentation/Tutorials",slug:"/Documentation/Tutorials/creating_ssl_certificates",permalink:"/pterodactyl-documentation/docs/Documentation/Tutorials/creating_ssl_certificates",draft:!1,editUrl:"https://github.com/pterodactyl/documentation/docs/Documentation/Tutorials/creating_ssl_certificates.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Setting up MySQL",permalink:"/pterodactyl-documentation/docs/Documentation/Tutorials/mysql_setup"},next:{title:"Using Mounts",permalink:"/pterodactyl-documentation/docs/Documentation/Guides/mounts"}},u={},p=[{value:"Creating a Certificate",id:"creating-a-certificate",level:2},{value:"HTTP challenge",id:"http-challenge",level:3},{value:"DNS challenge",id:"dns-challenge",level:3},{value:"Auto Renewal",id:"auto-renewal",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Obtaining CloudFlare API Key",id:"obtaining-cloudflare-api-key",level:3},{value:"Creating a Certificate",id:"creating-a-certificate-1",level:3},{value:"Auto Renewal",id:"auto-renewal-1",level:3}],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-ssl-certificates"},"Creating SSL Certificates"),(0,r.kt)("p",null,"This tutorial briefly covers creating new SSL certificates for your panel and wings."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Method 1: Certbot",label:"Method 1: Certbot",default:!0,mdxType:"TabItem"},"To begin, we will install certbot, a simple script that automatically renews our certificates and allows much easier creation of them. The command below is for Ubuntu distributions, but you can always check [Certbot's official site](https://certbot.eff.org/) for installation instructions. We have also included a command below to install certbot's Nginx/Apache plugin so you won't have to stop your webserver.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install -y certbot\n# Run this if you use Nginx\nsudo apt install -y python3-certbot-nginx\n# Run this if you use Apache\nsudo apt install -y python3-certbot-apache\n")),(0,r.kt)("h2",{id:"creating-a-certificate"},"Creating a Certificate"),(0,r.kt)("p",null,"After installing the certbot, we need to generate a certificate. There are a couple of ways to do that, but the easiest\nis to use the web server-specific certbot plugin you just installed. For Wings-only machines that don't need a web server, use the standalone or DNS method of the certbot as you don't need a web server for it."),(0,r.kt)("p",null,"Then, in the command below, you should replace ",(0,r.kt)("inlineCode",{parentName:"p"},"example.com")," with the domain you would like to generate a certificate\nfor.  When you have multiple domains you would like certificates for, simply add more ",(0,r.kt)("inlineCode",{parentName:"p"},"-d anotherdomain.com")," flags to the\ncommand. You can also look into generating a wildcard certificate but that is not covered in this tutorial."),(0,r.kt)("p",null,"When you are using certbot's Nginx/Apache plugin, you won't need to restart your webserver to have the certificate\napplied assuming that you've already configured the webservers to use SSL as instructed in the ",(0,r.kt)("a",{parentName:"p",href:"https://pterodactyl.io/panel/1.0/webserver_configuration.html"},"web server configuration step"),"."),(0,r.kt)("h3",{id:"http-challenge"},"HTTP challenge"),(0,r.kt)("p",null,"HTTP challenge requires you to expose port 80 for the challenge verification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Nginx\ncertbot certonly --nginx -d example.com\n# Apache\ncertbot certonly --apache -d example.com\n# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.\ncertbot certonly --standalone -d example.com\n")),(0,r.kt)("h3",{id:"dns-challenge"},"DNS challenge"),(0,r.kt)("p",null,"DNS challenge requires you to create a new TXT DNS record to verify domain ownership, instead of having to expose port 80. The instructions are displayed when you run the certbot command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"certbot -d example.com --manual --preferred-challenges dns certonly\n")),(0,r.kt)("h3",{id:"auto-renewal"},"Auto Renewal"),(0,r.kt)("p",null,"You'll also probably want to configure the automatic renewal of certificates to prevent unexpected certificate expirations.\nYou can open crontab with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo crontab -e")," and add the line from below to the bottom of it for attempting renewal every day at 23 (11 PM)."),(0,r.kt)("p",null,"Deploy hook would restart the Nginx service to apply a new certificate when it's renewed successfully. Change ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," in the restart command to suit your own needs, such as to ",(0,r.kt)("inlineCode",{parentName:"p"},"apache")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wings"),"."),(0,r.kt)("p",null,"For advanced users, we suggest installing and using ",(0,r.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh"),"\nwhich provides more options, and is much more powerful than certbot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"\n')),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you get an ",(0,r.kt)("inlineCode",{parentName:"p"},"Insecure Connection")," or SSL/TLS related error when trying to access your panel or wings, the certificate has likely expired.\nThis can be easily fixed by renewing the SSL certificate, although using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"certbot renew")," might not do the job if port 80 is in use, as it'll return errors like: ",(0,r.kt)("inlineCode",{parentName:"p"},"Error: Attempting to renew cert (domain) from /etc/letsencrypt/renew/domain.conf produced an unexpected error"),"."),(0,r.kt)("p",null,"This will happen especially if you're running Nginx instead of Apache. The solution for this is to use Nginx or Apache plugins with ",(0,r.kt)("inlineCode",{parentName:"p"},"--nginx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--apache"),". Alternatively, you can stop Nginx, then renew the certificate, finally restart Nginx. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," with your own web server or with ",(0,r.kt)("inlineCode",{parentName:"p"},"wings")," should you be renewing the certificate for Wings."),(0,r.kt)("p",null,"Stop Nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop nginx\n")),(0,r.kt)("p",null,"Renew the certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"certbot renew\n")),(0,r.kt)("p",null,"Once the process has complete, you can restart the Nginx service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start nginx\n")),(0,r.kt)("p",null,"You may also need to restart Wings as not every service is able to automatically apply an updated certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart wings\n"))),(0,r.kt)(l.Z,{value:"Method 2: acme.sh",label:"Method 2: acme.sh",mdxType:"TabItem"},"This is for advanced users, whose server systems do not have access to port 80. The command below is for Ubuntu distributions and CloudFlare API (you may google for other APIs for other DNS providers), but you can always check [acme.sh's official site](https://github.com/Neilpang/acme.sh) for installation instructions.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.acme.sh | sh\n")),(0,r.kt)("h3",{id:"obtaining-cloudflare-api-key"},"Obtaining CloudFlare API Key"),(0,r.kt)("p",null,'After installing acme.sh, we need to fetch a CloudFlare API key. On Cloudfare\'s website, select your domain, then on the right side, copy your "Zone ID" and "Account ID" then click on "Get your API token", click on "Create Token" > select the template "Edit zone DNS" > select the scope of "Zone Ressources" and then click on "Continue to summary", copy your token.'),(0,r.kt)("h3",{id:"creating-a-certificate-1"},"Creating a Certificate"),(0,r.kt)("p",null,"Since the configuration file is based on Certbot, we need to create the folder manually."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/letsencrypt/live/example.com\n")),(0,r.kt)("p",null,"After installing acme.sh and obtaining CloudFlare API key, we need to then generate a certificate. First input the CloudFlare API credentials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export CF_Token="Your_CloudFlare_API_Key"\nexport CF_Account_ID="Your_CloudFlare_Account_ID"\nexport CF_Zone_ID="Your_CloudFlare_Zone_ID"\n\n')),(0,r.kt)("p",null,"Then create the certificate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'acme.sh --issue --dns dns_cf -d "example.com" --server letsencrypt \\\n--key-file /etc/letsencrypt/live/example.com/privkey.pem \\\n--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem\n')),(0,r.kt)("h3",{id:"auto-renewal-1"},"Auto Renewal"),(0,r.kt)("p",null,"After running the script for the first time, it will be added to the crontab automatically. You may edit the auto renewal interval by editing the crontab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo crontab -e\n")))))}m.isMDXComponent=!0}}]);