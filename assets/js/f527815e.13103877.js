"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[162],{5527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(5893),s=n(1151);const l={},r="Additional Configuration",o={id:"documentation/wings/configuration",title:"Additional Configuration",description:"These are advanced configurations for Wings. You risk breaking Wings and making containers unusable if",source:"@site/docs/documentation/wings/configuration.md",sourceDirName:"documentation/wings",slug:"/documentation/wings/configuration",permalink:"/pterodactyl-documentation/docs/documentation/wings/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/wings/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Migrating to Wings",permalink:"/pterodactyl-documentation/docs/documentation/wings/migrating"},next:{title:"Setting up MySQL",permalink:"/pterodactyl-documentation/docs/documentation/tutorials/mysql_setup"}},a={},d=[{value:"Private Registries",id:"private-registries",level:2},{value:"Available Keys",id:"available-keys",level:3},{value:"Example of usage",id:"example-of-usage",level:3},{value:"Custom Network Interfaces",id:"custom-network-interfaces",level:2},{value:"Example of usage",id:"example-of-usage-1",level:3},{value:"Enabling Cloudflare proxy",id:"enabling-cloudflare-proxy",level:2},{value:"Container PID Limit",id:"container-pid-limit",level:2},{value:"Example of usage",id:"example-of-usage-2",level:3},{value:"Throttles Limits",id:"throttles-limits",level:2},{value:"Example of usage",id:"example-of-usage-3",level:3},{value:"Installer Limits",id:"installer-limits",level:2},{value:"Example of usage",id:"example-of-usage-4",level:3},{value:"Other values",id:"other-values",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"These are advanced configurations for Wings. You risk breaking Wings and making containers unusable if\nyou misconfigure something. Proceed only if you know what each configuration value does."})}),"\n",(0,i.jsxs)(t.p,{children:["You must apply all changes to your Wings ",(0,i.jsx)(t.code,{children:"config.yml"})," file located at ",(0,i.jsx)(t.code,{children:"/etc/pterodactyl"})," and restart wings. Verify your config file using ",(0,i.jsx)(t.a,{href:"http://www.yamllint.com/",children:"Yaml Lint"})," should you receive errors related to YAML parsing."]}),"\n",(0,i.jsx)(t.h2,{id:"private-registries",children:"Private Registries"}),"\n",(0,i.jsx)(t.p,{children:"You can use these settings to authenticate against (private) docker registries when pulling images."}),"\n",(0,i.jsx)(t.h3,{id:"available-keys",children:"Available Keys"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Setting Key"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,i.jsx)(t.td,{children:"Registry address"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"username"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,i.jsx)(t.td,{children:"Registry username"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"password"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,i.jsx)(t.td,{children:"Registry password"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example-of-usage",children:"Example of usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'docker:\n  registries:\n    registry.example.com:\n      username: "registryusername"\n      password: "registrypassword"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"custom-network-interfaces",children:"Custom Network Interfaces"}),"\n",(0,i.jsxs)(t.p,{children:["You can change the network interface that Wings uses for all containers by editing the network name; it is by default set to ",(0,i.jsx)(t.code,{children:"pterodactyl_nw"}),". For example, to enable Docker host mode change the network name to ",(0,i.jsx)(t.code,{children:"host"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Changing network mode to ",(0,i.jsx)(t.code,{children:"host"})," grants Pterodactyl direct access to all machine interfaces and Panel users can bind to any IP or Port even if it's not allocated to their container. You will lose all benefits of Docker network isolation. It is not recommended for public installations that are hosting other users' servers."]})}),"\n",(0,i.jsx)(t.h3,{id:"example-of-usage-1",children:"Example of usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"docker:\n  network:\n    name: host\n    network_mode: host\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After making changes, the following commands will stop the Wings, remove the Pterodactyl network, and start the Wings again. Run at your own risk.\n",(0,i.jsx)(t.code,{children:"systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings"})]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-cloudflare-proxy",children:"Enabling Cloudflare proxy"}),"\n",(0,i.jsx)(t.p,{children:"Cloudflare proxying of the Wings isn't beneficial since users will be connecting to the machine directly and bypassing any Cloudflare protection. As such, your Node machine IP will still be exposed."}),"\n",(0,i.jsxs)(t.p,{children:["To enable Cloudflare proxy, you must change the Wings port to one of the Cloudflare HTTPS ports with caching enabled (more info ",(0,i.jsx)(t.a,{href:"https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/",children:"here"}),'), such as 8443, because Cloudflare only supports HTTP on port 8080. Select your Node in the Admin Panel, and on the settings tab, change the port. Make sure that you set "Not Behind Proxy" when using Full SSL settings in Cloudflare. Then on Cloudflare dashboard, your FQDN must have an orange cloud enabled beside it.']}),"\n",(0,i.jsx)(t.p,{children:"You are unable to proxy the SFTP port through Cloudflare unless you have their enterprise plan."}),"\n",(0,i.jsx)(t.h2,{id:"container-pid-limit",children:"Container PID Limit"}),"\n",(0,i.jsxs)(t.p,{children:["You can change the total number of processes that can be active in a container at any given moment by changing the ",(0,i.jsx)(t.code,{children:"container_pid_limit"})," value. The default value is ",(0,i.jsx)(t.code,{children:"512"}),".\nYou can set it to ",(0,i.jsx)(t.code,{children:"0"})," to disable the limit completely. However, this is ",(0,i.jsx)(t.em,{children:"not"})," recommended as the limit prevents malicious overloading of the node.\nRestart wings and your game server to apply the new limit."]}),"\n",(0,i.jsx)(t.h3,{id:"example-of-usage-2",children:"Example of usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"docker:\n  ...\n  container_pid_limit: 512\n  ...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"throttles-limits",children:"Throttles Limits"}),"\n",(0,i.jsx)(t.p,{children:"You can use these settings to adjust or completely disable throttling."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Setting Key"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"enabled"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,i.jsx)(t.td,{children:"Whether or not the throttler is enabled"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"lines"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2000"}),(0,i.jsx)(t.td,{children:"Total lines that can be output in a given line_reset_interval period"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"maximum_trigger_count"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{children:"Amount of times throttle limit can be triggered before the server will be stopped"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"line_reset_interval"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,i.jsx)(t.td,{children:"The amount of time after which the number of lines processed is reset to 0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"decay_interval"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"10000"}),(0,i.jsx)(t.td,{children:"Time in milliseconds that must pass without triggering throttle limit before trigger count is decremented"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"stop_grace_period"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,i.jsx)(t.td,{children:"Time that a server is allowed to be stopping for before it is terminated forcefully if it triggers output throttle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"write_limit"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{children:"Impose I/O write limit for backups to the disk, 0 = unlimited. Value greater than 0 throttles write speed to the set value in MiB/s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"download_limit"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{children:"Impose a Network I/O read limit for archives, 0 = unlimited. Value greater than 0 throttles read speed to the set value in MiB/s"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example-of-usage-3",children:"Example of usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"throttles:\n  enabled: true\n  lines: 2000\n  maximum_trigger_count: 5\n  line_reset_interval: 100\n  decay_interval: 10000\n  stop_grace_period: 15\n"})}),"\n",(0,i.jsx)(t.h2,{id:"installer-limits",children:"Installer Limits"}),"\n",(0,i.jsx)(t.p,{children:"Defines the limits on the installer containers that prevents a server's installation process from unintentionally consuming more resources than expected. This is used in conjunction with the server's defined limits. Whichever value is higher will take precedence in the install containers."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Setting Key"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"memory"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1024"}),(0,i.jsx)(t.td,{children:"The maximum amount of memory install container can use unless server memory limit is higher than this value"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"cpu"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,i.jsx)(t.td,{children:"The maximum amount of cpu install container can use unless server cpu limit is higher than this value"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example-of-usage-4",children:"Example of usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"installer_limits:\n  memory: 1024\n  cpu: 100\n"})}),"\n",(0,i.jsx)(t.h2,{id:"other-values",children:"Other values"}),"\n",(0,i.jsxs)(t.p,{children:["More commonly discussed values. View all Wings config values and explanations in ",(0,i.jsx)(t.a,{href:"https://github.com/pterodactyl/wings/tree/develop/config",children:"these two files."})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Setting Key"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Default Value"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"debug"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"false"}),(0,i.jsx)(t.td,{children:"Force Wings to run in debug mode"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tmpfs_size"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"100"}),(0,i.jsx)(t.td,{children:"The size of the /tmp directory in MB when mounted into a container"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"websocket_log_count"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"150"}),(0,i.jsx)(t.td,{children:"The number of lines to display in the console"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"detect_clean_exit_as_crash"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,i.jsx)(t.td,{children:"Mark server as crashed if it's stopped without user interaction, e.g., not pressing stop button"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"(crash detection) timeout"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"60"}),(0,i.jsx)(t.td,{children:"Timeout between server crashes that will not cause the server to be automatically restarted"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"app_name"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'"Pterodactyl"'}),(0,i.jsx)(t.td,{children:"Changes the name of the daemon, shown in the panel's game console"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"check_permissions_on_boot"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,i.jsx)(t.td,{children:"Check all file permissions on each boot. Disable this when you have a very large amount of files and the server startup is hanging on checking permissions"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);