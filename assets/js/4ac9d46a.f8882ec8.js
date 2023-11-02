"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[398],{5677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(5893),i=t(1151);const o={},r="Installing Wings",l={id:"documentation/wings/installing",title:"Installing Wings",description:"Wings is the next generation server control plane from Pterodactyl. It has been rebuilt from the",source:"@site/docs/documentation/wings/installing.md",sourceDirName:"documentation/wings",slug:"/documentation/wings/installing",permalink:"/pterodactyl-documentation/docs/documentation/wings/installing",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/wings/installing.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Legacy Upgrades",permalink:"/pterodactyl-documentation/docs/documentation/panel/legacy_upgrade"},next:{title:"Upgrading Wings",permalink:"/pterodactyl-documentation/docs/documentation/wings/upgrading"}},a={},d=[{value:"Supported Systems",id:"supported-systems",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing Docker",id:"installing-docker",level:3},{value:"Start Docker on Boot",id:"start-docker-on-boot",level:4},{value:"Enabling Swap",id:"enabling-swap",level:4},{value:"Installing Wings",id:"installing-wings-1",level:2},{value:"Configure",id:"configure",level:2},{value:"Starting Wings",id:"starting-wings",level:3},{value:"Daemonizing (using systemd)",id:"daemonizing-using-systemd",level:3},{value:"Node Allocations",id:"node-allocations",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-wings",children:"Installing Wings"}),"\n",(0,s.jsx)(n.p,{children:"Wings is the next generation server control plane from Pterodactyl. It has been rebuilt from the\nground up using Go and lessons learned from our first Nodejs Daemon."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["You should only install Wings if you are running ",(0,s.jsx)(n.strong,{children:"Pterodactyl 1.x"}),". Do not install this software\nfor previous versions of Pterodactyl."]})}),"\n",(0,s.jsx)(n.h2,{id:"supported-systems",children:"Supported Systems"}),"\n",(0,s.jsx)(n.p,{children:"The following is a list of supported operating systems. Please be aware that this is not an exhaustive list,\nthere is a high probability that you can run the software on other Linux distributions without much effort.\nYou are responsible for determining which packages may be necessary on those systems. There is also a very\nhigh probability that new releases of the supported OSes below will work just fine, you are not restricted to\nonly the versions listed below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operating System"}),(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Supported"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Ubuntu"})}),(0,s.jsx)(n.td,{children:"20.04"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"Documentation written assuming Ubuntu 20.04 as the base OS."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"22.04"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CentOS"})}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"Note that CentOS 8 is EOL. Use Rocky or Alma Linux."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Debian"})}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Windows"})}),(0,s.jsx)(n.td,{children:"All"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u274c"}),(0,s.jsx)(n.td,{children:"This software will not run in Windows environments."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsx)(n.p,{children:"To run Wings, you will need a Linux system capable of running Docker containers. Most VPS and almost all\ndedicated servers should be capable of running Docker, but there are edge cases."}),"\n",(0,s.jsxs)(n.p,{children:["When your provider uses ",(0,s.jsx)(n.code,{children:"Virtuozzo"}),", ",(0,s.jsx)(n.code,{children:"OpenVZ"})," (or ",(0,s.jsx)(n.code,{children:"OVZ"}),"), or ",(0,s.jsx)(n.code,{children:"LXC"})," virtualization, you will most likely be unable to\nrun Wings. Some providers have made the necessary changes for nested virtualization to support Docker. Ask your provider's support team to make sure. KVM is guaranteed to work."]}),"\n",(0,s.jsxs)(n.p,{children:["The easiest way to check is to type ",(0,s.jsx)(n.code,{children:"systemd-detect-virt"}),".\nIf the result doesn't contain ",(0,s.jsx)(n.code,{children:"OpenVZ"})," or",(0,s.jsx)(n.code,{children:"LXC"}),", it should be fine. The result of ",(0,s.jsx)(n.code,{children:"none"})," will appear when running dedicated hardware without any virtualization."]}),"\n",(0,s.jsx)(n.p,{children:"Should that not work for some reason, or you're still unsure, you can also run the command below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dane@pterodactyl:~$ sudo dmidecode -s system-manufacturer\nVMware, Inc.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"curl"}),"\n",(0,s.jsx)(n.li,{children:"Docker"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,s.jsx)(n.p,{children:"For a quick install of Docker CE, you can execute the command below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sSL https://get.docker.com/ | CHANNEL=stable bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you would rather do a manual installation, please reference the official Docker documentation for how to install Docker CE on your server. Some quick links\nare listed below for commonly supported systems."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",children:"Ubuntu"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",children:"CentOS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",children:"Debian"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Check your Kernel",type:"caution",children:(0,s.jsxs)(n.p,{children:["Please be aware that some hosts install a modified kernel that does not support important docker features. Please\ncheck your kernel by running ",(0,s.jsx)(n.code,{children:"uname -r"}),". If your kernel ends in ",(0,s.jsx)(n.code,{children:"-xxxx-grs-ipv6-64"})," or ",(0,s.jsx)(n.code,{children:"-xxxx-mod-std-ipv6-64"})," you're\nprobably using a non-supported kernel."]})}),"\n",(0,s.jsx)(n.h4,{id:"start-docker-on-boot",children:"Start Docker on Boot"}),"\n",(0,s.jsx)(n.p,{children:"If you are on an operating system with systemd (Ubuntu 16+, Debian 8+, CentOS 7+) run the command below to have Docker start when you boot your machine."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now docker\n"})}),"\n",(0,s.jsx)(n.h4,{id:"enabling-swap",children:"Enabling Swap"}),"\n",(0,s.jsxs)(n.p,{children:["On most systems, Docker will be unable to setup swap space by default. You can confirm this by running ",(0,s.jsx)(n.code,{children:"docker info"})," and looking for the output of ",(0,s.jsx)(n.code,{children:"WARNING: No swap limit support"})," near the bottom."]}),"\n",(0,s.jsx)(n.p,{children:"Enabling swap is entirely optional, but we recommended doing it if you will be hosting for others and to prevent OOM errors."}),"\n",(0,s.jsxs)(n.p,{children:["To enable swap, open ",(0,s.jsx)(n.code,{children:"/etc/default/grub"})," as a root user and find the line starting with ",(0,s.jsx)(n.code,{children:"GRUB_CMDLINE_LINUX_DEFAULT"}),". Make\nsure the line includes ",(0,s.jsx)(n.code,{children:"swapaccount=1"})," somewhere inside the double-quotes."]}),"\n",(0,s.jsxs)(n.p,{children:["After that, run ",(0,s.jsx)(n.code,{children:"sudo update-grub"})," followed by ",(0,s.jsx)(n.code,{children:"sudo reboot"})," to restart the server and have swap enabled.\nBelow is an example of what the line should look like, ",(0,s.jsx)(n.em,{children:"do not copy this line verbatim. It often has additional OS-specific parameters."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"GRUB Configuration",type:"tip",children:(0,s.jsxs)(n.p,{children:["Some Linux distros may ignore ",(0,s.jsx)(n.code,{children:"GRUB_CMDLINE_LINUX_DEFAULT"}),". Therefore you might have to use ",(0,s.jsx)(n.code,{children:"GRUB_CMDLINE_LINUX"})," instead should the default one not work for you."]})}),"\n",(0,s.jsx)(n.h2,{id:"installing-wings-1",children:"Installing Wings"}),"\n",(0,s.jsx)(n.p,{children:"The first step for installing Wings is to ensure we have the required directory structure setup. To do so,\nrun the commands below, which will create the base directory and download the wings executable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mkdir -p /etc/pterodactyl\ncurl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"\nchmod u+x /usr/local/bin/wings\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"OVH/SYS Servers",type:"caution",children:(0,s.jsxs)(n.p,{children:["If you are using a server provided by OVH or SoYouStart please be aware that your main drive space is probably allocated to\n",(0,s.jsx)(n.code,{children:"/home"}),", and not ",(0,s.jsx)(n.code,{children:"/"})," by default. Please consider using ",(0,s.jsx)(n.code,{children:"/home/daemon-data"})," for server data. This can be easily\nset when creating the node."]})}),"\n",(0,s.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,s.jsx)(n.p,{children:"Once you have installed Wings and the required components, the next step is to create a node on your installed Panel. Go to your Panel administrative view, select Nodes from the sidebar, and on the right side click Create New button."}),"\n",(0,s.jsxs)(n.p,{children:["After you have created a node, click on it and there will be a tab called Configuration. Copy the code block content, paste it into a new file called ",(0,s.jsx)(n.code,{children:"config.yml"})," in ",(0,s.jsx)(n.code,{children:"/etc/pterodactyl"})," and save it."]}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can click on the Generate Token button, copy the bash command and paste it into your terminal."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example image of wings configuration",src:t(556).Z+"",width:"3280",height:"2130"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["When your Panel is using SSL, the Wings must also have one created for its FQDN. See ",(0,s.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/tutorials/creating_ssl_certificates",children:"Creating SSL Certificates"})," documentation page for how to create these certificates before continuing."]})}),"\n",(0,s.jsx)(n.h3,{id:"starting-wings",children:"Starting Wings"}),"\n",(0,s.jsxs)(n.p,{children:["To start Wings, simply run the command below, which will start it in a debug mode. Once you confirmed that it is running without errors, use ",(0,s.jsx)(n.code,{children:"CTRL+C"})," to terminate the process and daemonize it by following the instructions below. Depending on your server's internet connection pulling and starting Wings for the first time may take a few minutes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo wings --debug\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may optionally add the ",(0,s.jsx)(n.code,{children:"--debug"})," flag to run Wings in debug mode."]}),"\n",(0,s.jsx)(n.h3,{id:"daemonizing-using-systemd",children:"Daemonizing (using systemd)"}),"\n",(0,s.jsxs)(n.p,{children:["Running Wings in the background is a simple task, just make sure that it runs without errors before doing\nthis. Place the contents below in a file called ",(0,s.jsx)(n.code,{children:"wings.service"})," in the ",(0,s.jsx)(n.code,{children:"/etc/systemd/system"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="/etc/systemd/system/wings.service"',children:"[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\nRequires=docker.service\nPartOf=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, run the commands below to reload systemd and start Wings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now wings\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node-allocations",children:"Node Allocations"}),"\n",(0,s.jsx)(n.p,{children:"Allocation is a combination of IP and Port that you can assign to a server. Each created server must have at least one allocation. The allocation would be the IP address of your network interface. In some cases, such as when behind NAT, it would be the internal IP. To create new allocations go to Nodes > your node > Allocation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"example image of node allocations",src:t(2603).Z+"",width:"3811",height:"1984"})}),"\n",(0,s.jsxs)(n.p,{children:["Type ",(0,s.jsx)(n.code,{children:"hostname -I | awk '{print $1}'"})," to find the IP to be used for the allocation. Alternatively, you can type ",(0,s.jsx)(n.code,{children:'ip addr | grep "inet "'})," to see all your available interfaces and IP addresses. Do not use 127.0.0.1 for allocations."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2603:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/node_allocations-8edc65689cffc402429f0ef64db9fc02.png"},556:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/wings_configuration_example-03cd0238debffc71495335a54fc0c890.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);