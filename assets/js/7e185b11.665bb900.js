"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[977],{5363:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>M,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(5893),n=t(1151);const o={},s="Minecraft",i={id:"community/game_configuration/minecraft",title:"Minecraft",description:"Configuring a Server Network (BungeeCord, Waterfall, HexaCord, etc.)",source:"@site/docs/community/game_configuration/minecraft.md",sourceDirName:"community/game_configuration",slug:"/community/game_configuration/minecraft",permalink:"/pterodactyl-documentation/docs/community/game_configuration/minecraft",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/game_configuration/minecraft.md",tags:[],version:"current",frontMatter:{},sidebar:"CommunitySidebar",previous:{title:"Creating a Custom Docker Image",permalink:"/pterodactyl-documentation/docs/community/creating_eggs/creating_a_custom_image"},next:{title:"Creating a New Node",permalink:"/pterodactyl-documentation/docs/community/tutorials/add_node"}},l={},a=[{value:"Configuring a Server Network (BungeeCord, Waterfall, HexaCord, etc.)",id:"configuring-a-server-network-bungeecord-waterfall-hexacord-etc",level:2},{value:"Allocations in the Panel",id:"allocations-in-the-panel",level:3},{value:"Example",id:"example",level:4},{value:"proxy server settings",id:"proxy-server-settings",level:3},{value:"bungeecord/waterfall configuration",id:"bungeecordwaterfall-configuration",level:4},{value:"paper/spigot/bukkit settings",id:"paperspigotbukkit-settings",level:3},{value:"server.properties",id:"serverproperties",level:4},{value:"spigot.yml",id:"spigotyml",level:4},{value:"Firewalls",id:"firewalls",level:3},{value:"UFW (Ubuntu)",id:"ufw-ubuntu",level:4},{value:"Firewalld (CentOS)",id:"firewalld-centos",level:4}];function g(A){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,n.a)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"minecraft",children:"Minecraft"}),"\n",(0,r.jsx)(e.h2,{id:"configuring-a-server-network-bungeecord-waterfall-hexacord-etc",children:"Configuring a Server Network (BungeeCord, Waterfall, HexaCord, etc.)"}),"\n",(0,r.jsx)(e.p,{children:"If you want to operate Minecraft proxy servers like BungeeCord, Waterfall, HexaCord, etc. securely, you can do so with pterodactyl alone as long as you stay on the same node. It differs from a traditional setup in a few ways and might require additonal firewall rules, which is what this guide is for."}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"For the setup described below, it is necessary that all servers are on the same node."})}),"\n",(0,r.jsx)(e.admonition,{type:"danger",children:(0,r.jsx)(e.p,{children:"If you are a hosting provider, you should only allow a single proxy network per node, if you are selling them to customers."})}),"\n",(0,r.jsx)(e.h3,{id:"allocations-in-the-panel",children:"Allocations in the Panel"}),"\n",(0,r.jsx)(e.p,{children:"Create a regular allocation for the proxy server which uses the external IP of the node, so users can reach it."}),"\n",(0,r.jsxs)(e.p,{children:["The actual game servers behind the proxy should use allocations with ",(0,r.jsx)(e.code,{children:"127.0.0.1"})," as the address, so they are only reachable on the node, and not from the public."]}),"\n",(0,r.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:t(2895).Z+"",width:"691",height:"253"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"10.1.70.62"})," is an example, replace it with your own public IP address."]}),"\n",(0,r.jsx)(e.h3,{id:"proxy-server-settings",children:"proxy server settings"}),"\n",(0,r.jsxs)(e.p,{children:["As the proxy server, like all servers, is running in a docker container with network isolation, ",(0,r.jsx)(e.code,{children:"localhost"}),"/",(0,r.jsx)(e.code,{children:"127.0.0.1"})," doesn't refer to the node, but to the container. The node can be reached from within the container using ",(0,r.jsx)(e.code,{children:"172.18.0.1"})," (unless the pterodactyl network is configured differently) instead. You therefore need to use this IP in your proxy server configuration."]}),"\n",(0,r.jsx)(e.h4,{id:"bungeecordwaterfall-configuration",children:"bungeecord/waterfall configuration"}),"\n",(0,r.jsx)(e.p,{children:"This will be different for other proxy servers, please refer to their documentation."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:t(5220).Z+"",width:"264",height:"143"})}),"\n",(0,r.jsx)(e.h3,{id:"paperspigotbukkit-settings",children:"paper/spigot/bukkit settings"}),"\n",(0,r.jsx)(e.p,{children:"The servers itself require the regular config options required by server proxies, which usually comes down to disabling online mode. This will differ for other server software, please refer to their documentation."}),"\n",(0,r.jsx)(e.h4,{id:"serverproperties",children:"server.properties"}),"\n",(0,r.jsxs)(e.p,{children:["set online-mode ",(0,r.jsx)(e.code,{children:"false"}),"\n",(0,r.jsx)(e.img,{src:t(1216).Z+"",width:"229",height:"63"})]}),"\n",(0,r.jsx)(e.h4,{id:"spigotyml",children:"spigot.yml"}),"\n",(0,r.jsxs)(e.p,{children:["set bungeecord to ",(0,r.jsx)(e.code,{children:"true"}),"\n",(0,r.jsx)(e.img,{src:t(2492).Z+"",width:"195",height:"48"})]}),"\n",(0,r.jsx)(e.h3,{id:"firewalls",children:"Firewalls"}),"\n",(0,r.jsx)(e.p,{children:"If you are using a firewall, additional rules might be required to allow servers to reach each other on the node. In this case the proxy server needs to reach all of the game servers behind it. Therefore we need to allow traffic from the pterodactyl network to the server ports on localhost."}),"\n",(0,r.jsxs)(e.p,{children:["You can use the following commands as an example. ",(0,r.jsx)(e.code,{children:"172.18.0.1"})," is the default address referring to the node within the pterodactyl network. Replace ",(0,r.jsx)(e.code,{children:"<LOCALHOST_PORT>"})," with the allocated localhost ports of the game servers."]}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"The following commands will allow any server on the node to access the opened ports."})}),"\n",(0,r.jsx)(e.h4,{id:"ufw-ubuntu",children:"UFW (Ubuntu)"}),"\n",(0,r.jsx)(e.p,{children:"Allow access to the pterodactyl pterodactyl0 network on a specific port."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ufw allow in on pterodactyl0 to 172.18.0.1 port <LOCALHOST_PORT> proto tcp\n"})}),"\n",(0,r.jsx)(e.h4,{id:"firewalld-centos",children:"Firewalld (CentOS)"}),"\n",(0,r.jsx)(e.p,{children:"Allow access to pterodactyl0 from the pterodactyl0 network."}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"This command will allow any server to access all other servers as well as all ports on the node."})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"firewall-cmd --permanent --zone=public --add-source=172.18.0.1\n"})})]})}function M(A={}){const{wrapper:e}={...(0,n.a)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(g,{...A})}):g(A)}},5220:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},2895:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},1216:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},2492:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},1151:(A,e,t)=>{t.d(e,{Z:()=>i,a:()=>s});var r=t(7294);const n={},o=r.createContext(n);function s(A){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function i(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(n):A.components||n:s(A.components),r.createElement(o.Provider,{value:e},A.children)}}}]);