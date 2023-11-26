"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[2333],{9415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(5893),r=t(1151),o=t(4866),i=t(5162);const l={slug:"/panel/webserver",hide_table_of_contents:!0},s="Webserver Configuration",c={id:"documentation/panel/webserver_configuration",title:"Webserver Configuration",description:"When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the Creating SSL Certificates documentation page to learn how to create these certificates before continuing.",source:"@site/docs/documentation/panel/webserver_configuration.mdx",sourceDirName:"documentation/panel",slug:"/panel/webserver",permalink:"/pterodactyl-documentation/docs/panel/webserver",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/panel/webserver_configuration.mdx",tags:[],version:"current",frontMatter:{slug:"/panel/webserver",hide_table_of_contents:!0},sidebar:"DocsSidebar",previous:{title:"Getting Started",permalink:"/pterodactyl-documentation/docs/panel/install"},next:{title:"Additional Configuration",permalink:"/pterodactyl-documentation/docs/panel/configuration"}},d={},u=[{value:"Enabling Configuration",id:"enabling-configuration",level:3},{value:"Enabling Configuration",id:"enabling-configuration-1",level:3},{value:"Enabling Configuration",id:"enabling-configuration-2",level:3},{value:"Enabling Configuration",id:"enabling-configuration-3",level:3},{value:"Next Step: Wings Installation",id:"next-step-wings-installation",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"webserver-configuration",children:"Webserver Configuration"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the ",(0,a.jsx)(n.a,{href:"/pterodactyl-documentation/docs/tutorials/ssl",children:"Creating SSL Certificates"})," documentation page to learn how to create these certificates before continuing."]})}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{value:"Nginx With SSL",label:"Nginx With SSL",default:!0,children:[(0,a.jsx)(n.p,{children:"First, remove the default NGINX configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm /etc/nginx/sites-enabled/default\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called ",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/nginx/sites-available/"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/nginx/conf.d/"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nginx",children:'server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace the example <domain> with your domain\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration",children:"Enabling Configuration"}),(0,a.jsx)(n.p,{children:"The final step is to enable your NGINX configuration and restart it."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n# You need to restart nginx regardless of OS.\nsudo systemctl restart nginx\n"})})]}),(0,a.jsxs)(i.Z,{value:"Nginx Without SSL",label:"Nginx Without SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default NGINX configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm /etc/nginx/sites-enabled/default\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/nginx/sites-available/"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/nginx/conf.d/"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nginx",children:'server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-1",children:"Enabling Configuration"}),(0,a.jsx)(n.p,{children:"The final step is to enable your NGINX configuration and restart it."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n# You need to restart nginx regardless of OS.\nsudo systemctl restart nginx\n"})})]}),(0,a.jsxs)(i.Z,{value:"Apache With SSL",label:"Apache With SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default Apache configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a2dissite 000-default.conf\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/apache2/sites-available"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/httpd/conf.d/"}),"."]}),(0,a.jsxs)(n.p,{children:["Note: When using Apache, make sure you have the ",(0,a.jsx)(n.code,{children:"libapache2-mod-php"})," package installed or else PHP will not display on your webserver."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-apache",children:'<VirtualHost *:80>\n  ServerName <domain>\n  \n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n\n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n\n  <Directory "/var/www/pterodactyl/public">\n    Require all granted\n    AllowOverride all\n  </Directory>\n\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-2",children:"Enabling Configuration"}),(0,a.jsxs)(n.p,{children:["Once you've created the file above, simply run the commands below. If you are on CentOS ",(0,a.jsx)(n.em,{children:"you do not need to run the commands\nbelow!"})," You only need to run ",(0,a.jsx)(n.code,{children:"systemctl restart httpd"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to run any of these commands on CentOS\nsudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\nsudo a2enmod rewrite\nsudo a2enmod ssl\nsudo systemctl restart apache2\n"})})]}),(0,a.jsxs)(i.Z,{value:"Apache Without SSL",label:"Apache Without SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default Apache configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a2dissite 000-default.conf\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/apache2/sites-available"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/httpd/conf.d/"}),"."]}),(0,a.jsxs)(n.p,{children:["Note: When using Apache, make sure you have the ",(0,a.jsx)(n.code,{children:"libapache2-mod-php"})," package installed or else PHP will not display on your webserver."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-apache",children:'<VirtualHost *:80>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  \n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  \n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n    Require all granted\n  </Directory>\n</VirtualHost>\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-3",children:"Enabling Configuration"}),(0,a.jsxs)(n.p,{children:["Once you've created the file above, simply run the commands below. If you are on CentOS ",(0,a.jsx)(n.em,{children:"you do not need to run the commands\nbelow!"})," You only need to run ",(0,a.jsx)(n.code,{children:"systemctl restart httpd"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to run any of these commands on CentOS\nsudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\nsudo a2enmod rewrite\nsudo systemctl restart apache2\n"})})]})]}),"\n",(0,a.jsxs)(n.h4,{id:"next-step-wings-installation",children:["Next Step: ",(0,a.jsx)(n.a,{href:"/pterodactyl-documentation/docs/wings/install",children:"Wings Installation"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(4334);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(7294),r=t(4334),o=t(2466),i=t(6550),l=t(469),s=t(1980),c=t(7392),d=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=f({queryString:t,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function _(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(_,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function S(e){const n=(0,m.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);