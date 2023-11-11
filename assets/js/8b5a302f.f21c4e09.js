"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[9142],{5079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const s={slug:"/wings/migrating"},r="Migrating to Wings",a={id:"documentation/wings/migrating",title:"Migrating to Wings",description:"This guide is for people looking to migrate from the old Node.JS daemon to Wings. Please see the",source:"@site/docs/documentation/wings/migrating.md",sourceDirName:"documentation/wings",slug:"/wings/migrating",permalink:"/pterodactyl-documentation/docs/wings/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/wings/migrating.md",tags:[],version:"current",frontMatter:{slug:"/wings/migrating"},sidebar:"DocsSidebar",previous:{title:"Upgrading Wings",permalink:"/pterodactyl-documentation/docs/wings/upgrading"},next:{title:"Additional Configuration",permalink:"/pterodactyl-documentation/docs/wings/configuration"}},d={},l=[{value:"Install Wings",id:"install-wings",level:2},{value:"Copy New Configuration File",id:"copy-new-configuration-file",level:2},{value:"Remove Old Daemon",id:"remove-old-daemon",level:2},{value:"Remove Standalone SFTP",id:"remove-standalone-sftp",level:3},{value:"Daemonize Wings",id:"daemonize-wings",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"migrating-to-wings",children:"Migrating to Wings"}),"\n",(0,i.jsxs)(n.p,{children:["This guide is for people looking to migrate from the old Node.JS daemon to Wings. Please see the\n",(0,i.jsx)(n.a,{href:"/pterodactyl-documentation/docs/wings/install",children:"install guide"})," if you are trying to install Wings for the first time on\na new node."]}),"\n",(0,i.jsx)(n.admonition,{title:"Panel Version Requirement",type:"danger",children:(0,i.jsxs)(n.p,{children:["You ",(0,i.jsx)(n.strong,{children:"must"})," be running Pterodactyl Panel 1.X in order to use Wings."]})}),"\n",(0,i.jsx)(n.p,{children:"You'll have a brief offline period as you perform this process, however no running game processes\nwill be affected. Plus, chances are your Panel will be offline (or in maintenance mode) during this\nso your users should not notice anything out of the ordinary."}),"\n",(0,i.jsx)(n.h2,{id:"install-wings",children:"Install Wings"}),"\n",(0,i.jsx)(n.p,{children:"The first step for installing the daemon is to make sure we have the required directory structure setup. To do so,\nrun the commands below which will create the base directory and download the wings executable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p /etc/pterodactyl\ncurl -L -o /usr/local/bin/wings https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_amd64\nchmod u+x /usr/local/bin/wings\n"})}),"\n",(0,i.jsx)(n.h2,{id:"copy-new-configuration-file",children:"Copy New Configuration File"}),"\n",(0,i.jsx)(n.p,{children:"Once you have installed Wings, you'll need to copy over a new configuration file from the Panel. This file\nis in a new format, and should be easier for you to manage and edit in the future."}),"\n",(0,i.jsxs)(n.p,{children:["Simply copy and paste the code block and paste it into a file called ",(0,i.jsx)(n.code,{children:"config.yml"})," within the ",(0,i.jsx)(n.code,{children:"/etc/pterodactyl"}),"\ndirectory and save it."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(556).Z+"",width:"3280",height:"2130"})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Please note that any modifications you previously made to the configuration will be lost with this. If you have\nmodifications to our default settings, the best option is to start Wings once with the copied configuration which\nwill then populate all of the other configuration settings."}),(0,i.jsx)(n.p,{children:"From there you can make any adjustments as necessary."})]}),"\n",(0,i.jsx)(n.h2,{id:"remove-old-daemon",children:"Remove Old Daemon"}),"\n",(0,i.jsxs)(n.p,{children:["Now that Wings is installed, we need to remove all of the old daemon code from the server since it is not being\nused anymore. To do this, simply execute the following commands \u2014 assuming your old daemon is in the default\n",(0,i.jsx)(n.code,{children:"/srv/daemon"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Stop the old daemon.\nsystemctl stop wings\n\n# Delete the entire directory. There is nothing stored in here that we actually need for the\n# purposes of this migration. Remember, server data is stored in /srv/daemon-data.\nrm -rf /srv/daemon\n\n# Optionally, remove NodeJS from your system if it was not used for anything else.\napt -y remove nodejs # or: yum remove nodejs\n"})}),"\n",(0,i.jsx)(n.h3,{id:"remove-standalone-sftp",children:"Remove Standalone SFTP"}),"\n",(0,i.jsx)(n.p,{children:"If you've used the standalone SFTP server with the old daemon, we need to remove it's systemd service as well, as it's no longer needed.\nYou can do so using the following commands."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# stop and disable the standalone sftp\nsystemctl disable --now pterosftp\n\n# delete the systemd service\nrm /etc/systemd/system/pterosftp.service\n"})}),"\n",(0,i.jsx)(n.h2,{id:"daemonize-wings",children:"Daemonize Wings"}),"\n",(0,i.jsxs)(n.p,{children:["You'll then need to edit your existing ",(0,i.jsx)(n.code,{children:"systemd"})," service file for Wings to point to the new control software. To do\nthis, open ",(0,i.jsx)(n.code,{children:"/etc/systemd/system/wings.service"})," and replace the entire contents of the file with the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, start wings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"systemctl daemon-reload\nsystemctl enable --now wings\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"What if Wings doesn't start?",type:"caution",children:[(0,i.jsx)(n.p,{children:"If you encounter issues starting Wings at this point, run the following command to start Wings directly and check\nfor any specific error output."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo wings --debug\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},556:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/wings_configuration_example-03cd0238debffc71495335a54fc0c890.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);