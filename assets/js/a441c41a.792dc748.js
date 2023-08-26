"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={},l="Additional Configuration",o={unversionedId:"documentation/panel/additional_configuration",id:"documentation/panel/additional_configuration",title:"Additional Configuration",description:"Backups",source:"@site/docs/documentation/panel/additional_configuration.md",sourceDirName:"documentation/panel",slug:"/documentation/panel/additional_configuration",permalink:"/pterodactyl-documentation/docs/documentation/panel/additional_configuration",draft:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/docs/documentation/panel/additional_configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Webserver Configuration",permalink:"/pterodactyl-documentation/docs/documentation/panel/webserver_configuration"},next:{title:"Updating the Panel",permalink:"/pterodactyl-documentation/docs/documentation/panel/updating"}},s={},u=[{value:"Backups",id:"backups",level:2},{value:"Using Local Backups",id:"using-local-backups",level:3},{value:"Using S3 Backups",id:"using-s3-backups",level:3},{value:"Multipart Upload",id:"multipart-upload",level:4},{value:"Storage Class",id:"storage-class",level:4},{value:"Reverse Proxy Setup",id:"reverse-proxy-setup",level:2},{value:"NGINX Specific Configuration",id:"nginx-specific-configuration",level:3},{value:"Cloudflare Specific Configuration",id:"cloudflare-specific-configuration",level:3},{value:"reCAPTCHA",id:"recaptcha",level:2},{value:"Configuring reCAPTCHA",id:"configuring-recaptcha",level:3},{value:"Disabling reCAPTCHA",id:"disabling-recaptcha",level:3},{value:"Editing your database",id:"editing-your-database",level:4},{value:"2FA",id:"2fa",level:2},{value:"Disable 2FA requirement",id:"disable-2fa-requirement",level:3},{value:"Disable 2FA for a specific user",id:"disable-2fa-for-a-specific-user",level:3},{value:"Telemetry",id:"telemetry",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What data is collected?",id:"what-data-is-collected",level:3},{value:"How is the data stored?",id:"how-is-the-data-stored",level:3},{value:"Why?",id:"why",level:3},{value:"Enabling Telemetry",id:"enabling-telemetry",level:3},{value:"Disabling Telemetry",id:"disabling-telemetry",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"additional-configuration"},"Additional Configuration"),(0,i.kt)("h2",{id:"backups"},"Backups"),(0,i.kt)("p",null,"Pterodactyl Panel allows users to create backups of their servers. In order to create backups, a backup storage method has to be configured."),(0,i.kt)("p",null,"When changing Pterodactyl Panel's backup storage method, users may still download or delete existing backups from the prior storage driver. In the instance of migrating from S3 to local backups, S3 credentials must remain configured after switching to the local backup storage method."),(0,i.kt)("h3",{id:"using-local-backups"},"Using Local Backups"),(0,i.kt)("p",null,"By default, Pterodactyl Panel uses local storage via Wings for backups. That said, this method of backup storage can be explicitly set with the following configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Sets your panel to use local storage via Wings for backups\nAPP_BACKUP_DRIVER=wings\n")),(0,i.kt)("p",null,"Do note that, when using local storage via Wings, the destination for backups is set in Wings' ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," with the following setting key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"system:\n  backup_directory: /path/to/backup/storage\n")),(0,i.kt)("h3",{id:"using-s3-backups"},"Using S3 Backups"),(0,i.kt)("p",null,"AWS S3 (or compatible storage) can be used to store remote or cloud-based backups. The following configuration options have to be set in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file or as environment variables in order to enable it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Sets your panel to use s3 for backups\nAPP_BACKUP_DRIVER=s3\n\n# Info to actually use s3\nAWS_DEFAULT_REGION=\nAWS_ACCESS_KEY_ID=\nAWS_SECRET_ACCESS_KEY=\nAWS_BACKUPS_BUCKET=\nAWS_ENDPOINT=\n")),(0,i.kt)("p",null,"For some configurations, you might have to change your S3 URL from ",(0,i.kt)("inlineCode",{parentName:"p"},"bucket.domain.com")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"domain.com/bucket"),". To accomplish this, add ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_USE_PATH_STYLE_ENDPOINT=true")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("h4",{id:"multipart-upload"},"Multipart Upload"),(0,i.kt)("p",null,"The S3 backup is using the S3 multipart upload capabilities. In rare situations, you might want to adjust the size of a single part or the lifespan of the generated pre-signed URLs. The default part size is 5GB, and the default pre-signed URL lifespan is 60 minutes."),(0,i.kt)("p",null,"You can configure the maximal part size using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKUP_MAX_PART_SIZE")," environment variable. You must specify the size in bytes. To define the pre-signed URL lifespan, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKUP_PRESIGNED_URL_LIFESPAN")," variable. The expected unit is minutes."),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," snippet configures 1GB parts and uses 120 minutes as the pre-signed URL lifespan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"BACKUP_MAX_PART_SIZE=1073741824\nBACKUP_PRESIGNED_URL_LIFESPAN=120\n")),(0,i.kt)("h4",{id:"storage-class"},"Storage Class"),(0,i.kt)("p",null,"Should you need to specify a storage class, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_BACKUPS_STORAGE_CLASS")," environment variable. Default option is ",(0,i.kt)("inlineCode",{parentName:"p"},"STANDARD")," (S3 Standard)."),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," snippet sets the class to ",(0,i.kt)("inlineCode",{parentName:"p"},"STANDARD_IA")," (this is an example)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# STANDARD_IA is an example.\nAWS_BACKUPS_STORAGE_CLASS=STANDARD_IA\n")),(0,i.kt)("h2",{id:"reverse-proxy-setup"},"Reverse Proxy Setup"),(0,i.kt)("p",null,"When running Pterodactyl behind a reverse proxy, such as ",(0,i.kt)("a",{parentName:"p",href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-"},"Cloudflare's Flexible SSL"),"\nor Nginx/Apache/Caddy, etc., you will need to make a quick modification to the Panel to ensure things continue to work as expected. By default, when using these reverse proxies,\nyour Panel will not correctly handle requests. You'll most likely be unable to login or see security warnings in your browser console as it attempts to load insecure assets.\nThis is because the internal logic the Panel uses to determine how links should be generated thinks it is running over HTTP and not over HTTPS."),(0,i.kt)("p",null,"You will need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the Panel's root directory to contain ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUSTED_PROXIES=*")," at minimum. We highly suggest providing a specific IP address\n(or comma-separated list of IPs) rather than allowing ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". For example, if your proxy is running on the same machine as the server,\nthe chances are that something like ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUSTED_PROXIES=127.0.0.1")," will work for you."),(0,i.kt)("h3",{id:"nginx-specific-configuration"},"NGINX Specific Configuration"),(0,i.kt)("p",null,"For Pterodactyl to properly respond to an NGINX reverse proxy, the NGINX ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," config must contain the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Nginx"},"proxy_set_header X-Real-IP $remote_addr;\nproxy_set_header Host $host;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto $scheme;\nproxy_redirect off;\nproxy_buffering off;\nproxy_request_buffering off;\n")),(0,i.kt)("h3",{id:"cloudflare-specific-configuration"},"Cloudflare Specific Configuration"),(0,i.kt)("p",null,"If you're using Cloudflare's Flexible SSL you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUSTED_PROXIES")," to contain ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/ips/"},"their IP addresses"),".\nBelow is an example of how to set this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")),(0,i.kt)("h2",{id:"recaptcha"},"reCAPTCHA"),(0,i.kt)("p",null,"The Panel uses invisible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge."),(0,i.kt)("h3",{id:"configuring-recaptcha"},"Configuring reCAPTCHA"),(0,i.kt)("p",null,"While we provide a global Site Key and Secret Key by default, we highly recommend changing it for your own setup."),(0,i.kt)("p",null,"You can generate your own keys in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/recaptcha/admin"},"reCAPTCHA Admin Console"),"."),(0,i.kt)("p",null,"The keys can then be applied using the Settings in the admin panel. The reCAPTCHA settings can be found on the ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," tab."),(0,i.kt)("h3",{id:"disabling-recaptcha"},"Disabling reCAPTCHA"),(0,i.kt)("admonition",{title:"SECURITY WARNING",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We do not recommend disabling reCAPTCHA. It is a security mechanism that makes it harder to perform brute-force attacks on user accounts.")),(0,i.kt)("p",null,"If users have trouble logging in, or your Panel isn't exposed to the internet, it can make sense to disable reCAPTCHA."),(0,i.kt)("p",null,"reCAPTCHA can easily be disabled using the admin panel. In the Settings, select the ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," tab and set the ",(0,i.kt)("strong",{parentName:"p"},"Status")," of reCAPTCHA to ",(0,i.kt)("strong",{parentName:"p"},"disabled"),"."),(0,i.kt)("h4",{id:"editing-your-database"},"Editing your database"),(0,i.kt)("p",null,"If you cannot access your panel, you can modify the database directly using the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\nUPDATE panel.settings SET value = 'false' WHERE `key` = 'settings::recaptcha:enabled';\n")),(0,i.kt)("h2",{id:"2fa"},"2FA"),(0,i.kt)("p",null,"If possible you should use the panel to update your 2FA settings. If you can't access your panel for what ever reason you can use the following steps."),(0,i.kt)("h3",{id:"disable-2fa-requirement"},"Disable 2FA requirement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\nUPDATE panel.settings SET value = 0 WHERE `key` = 'settings::pterodactyl:auth:2fa_required';\n")),(0,i.kt)("h3",{id:"disable-2fa-for-a-specific-user"},"Disable 2FA for a specific user"),(0,i.kt)("p",null,"Run the following command in your ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/pterodactyl")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan p:user:disable2fa\n")),(0,i.kt)("h2",{id:"telemetry"},"Telemetry"),(0,i.kt)("p",null,"Since 1.11, the Panel collects anonymous metrics about the Panel and all connected nodes.\nThis feature is enabled by default, but can be disabled."),(0,i.kt)("p",null,"The data collected by this feature is not sold or used for advertising purposes.  Aggregate statistics\nmay be made public or shared with third-parties for the purposes of improving the software."),(0,i.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"The Telemetry system works by first generating a random UUIDv4 identifier for the Panel installation.\nThis identifier is stored in the database so people load-balancing multiple Panel instances can still\nhave a unique identifier.  This identifier is then sent to a remote server, along the associated\ntelemetry data.  The telemetry data is collected every 24 hours, there is no ongoing collection\nor local storage of the telemetry data, we collect the data right before we send it to the remote\nserver."),(0,i.kt)("p",null,"Currently, all telemetry collection logic is handled by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pterodactyl/panel/blob/1.0-develop/app/Services/Telemetry/TelemetryCollectionService.php#L53"},"TelemetryCollectionService"),"\non the panel.  This service is responsible for collecting all the data that is sent to the remote\nserver."),(0,i.kt)("h3",{id:"what-data-is-collected"},"What data is collected?"),(0,i.kt)("p",null,"If you wish to see the full data that is collected, please look at the TelemetryCollectionService\n(as linked above), or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan p:telemetry")," command to view the exact data that will\nbe sent to the remote server."),(0,i.kt)("p",null,"As of 2022-12-12, the data collected consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unique identifier for the Panel"),(0,i.kt)("li",{parentName:"ul"},"Version of the Panel"),(0,i.kt)("li",{parentName:"ul"},"PHP version"),(0,i.kt)("li",{parentName:"ul"},"Backup storage driver (S3, Local, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Cache driver (Redis, Memcached, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Database driver and version (MySQL, MariaDB, PostgreSQL, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Resources",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allocations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},"Total number of used allocations (assigned to a server)"))),(0,i.kt)("li",{parentName:"ul"},"Backups",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},"Sum of the total amount of bytes stored by backups"))),(0,i.kt)("li",{parentName:"ul"},"Eggs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Map of egg UUIDs to the number of servers using that egg")," (removed in 1.11.2)"))),(0,i.kt)("li",{parentName:"ul"},"Locations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"))),(0,i.kt)("li",{parentName:"ul"},"Mounts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"))),(0,i.kt)("li",{parentName:"ul"},"Nests",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Map of nest UUIDs to the number of servers using eggs in that nest")," (removed in 1.11.2)"))),(0,i.kt)("li",{parentName:"ul"},"Nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"))),(0,i.kt)("li",{parentName:"ul"},"Servers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},"Number of servers that are suspended"))),(0,i.kt)("li",{parentName:"ul"},"Users",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total number"),(0,i.kt)("li",{parentName:"ul"},"Number of users that are admins"))))),(0,i.kt)("li",{parentName:"ul"},"Nodes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Node UUID"),(0,i.kt)("li",{parentName:"ul"},"Version of Wings on the node"),(0,i.kt)("li",{parentName:"ul"},"Docker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Version"),(0,i.kt)("li",{parentName:"ul"},"Cgroups",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Driver"),(0,i.kt)("li",{parentName:"ul"},"Version"))),(0,i.kt)("li",{parentName:"ul"},"Containers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Total"),(0,i.kt)("li",{parentName:"ul"},"Running"),(0,i.kt)("li",{parentName:"ul"},"Paused"),(0,i.kt)("li",{parentName:"ul"},"Stopped"))),(0,i.kt)("li",{parentName:"ul"},"Storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Driver"),(0,i.kt)("li",{parentName:"ul"},"Filesystem"))),(0,i.kt)("li",{parentName:"ul"},"runc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Version"))))),(0,i.kt)("li",{parentName:"ul"},"System",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Architecture (",(0,i.kt)("inlineCode",{parentName:"li"},"amd64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"arm64"),", etc.)"),(0,i.kt)("li",{parentName:"ul"},"CPU Threads"),(0,i.kt)("li",{parentName:"ul"},"Memory Bytes"),(0,i.kt)("li",{parentName:"ul"},"Kernel Version"),(0,i.kt)("li",{parentName:"ul"},"Operating System (Debian, Fedora, RHEL, Ubuntu, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Operating System Type (bsd, linux, windows, etc.)")))))),(0,i.kt)("h3",{id:"how-is-the-data-stored"},"How is the data stored?"),(0,i.kt)("p",null,"Currently, the data is stored with Cloudflare, we ingest all telemetry data with a Worker which does\nbasic processing such as validation and then inserts it into Cloudflare D1.  Right now, there is not\nan API or visualization for any of the data collected, and it can only be manually queried.  Only\nMatthew is able to query the data at this time, but we are working on alternatives to make this data\nmore accessible."),(0,i.kt)("h3",{id:"why"},"Why?"),(0,i.kt)("p",null,"The primary reason for collecting this data is to help us make better decisions about the future of\nthis software.  With the release of 1.11, the minimum PHP version requirement jumped from 7.4 to 8.0,\nhowever, we wanted to add a feature that required PHP 8.1 which would've made the version requirement\njump larger and potentially cause issues for some users.  By collecting this data, we can hopefully\nhave more insight to how changes like this will affect the community and make better decisions in the\nfuture.  This is especially important for information like the architecture, kernel version, and\noperating system nodes are using.  For example, we want to utilize a feature that is only present in\nsome filesystems, but we have no idea how many people are using those filesystems, so we cannot\ndetermine if it's worth the effort to implement."),(0,i.kt)("p",null,"Some of the data is not as useful for making decisions, but is still useful for us to know.\nFor example, have you ever wondered how many Panel instances there are?  How many servers are being\nran across all of those instances?  How many users are using the Panel?  How many of those users are\nadmins?  How many servers are using a specific egg?  How many servers are using a specific nest?\nAll of these questions can be answered by the data we collect, and can help us and the community\nbetter understand how the software is being used."),(0,i.kt)("p",null,"If you have any questions about the data we collect, please feel free to reach out to us on Discord.\nOur goal is to be as transparent as possible, and we want to make sure that the community understands\nwhat we are doing and why."),(0,i.kt)("h3",{id:"enabling-telemetry"},"Enabling Telemetry"),(0,i.kt)("p",null,"Telemetry is enabled by default, if you want to enable it after disabling it, edit your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file\nand either remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"PTERODACTYL_TELEMETRY_ENABLED")," line, or set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"PTERODACTYL_TELEMETRY_ENABLED=true\n")),(0,i.kt)("p",null,"You may also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan p:environment:setup")," command to enable telemetry, optionally with\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry")," flag for a non-interactive setup."),(0,i.kt)("h3",{id:"disabling-telemetry"},"Disabling Telemetry"),(0,i.kt)("p",null,"To disable telemetry, edit your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and set ",(0,i.kt)("inlineCode",{parentName:"p"},"PTERODACTYL_TELEMETRY_ENABLED")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"PTERODACTYL_TELEMETRY_ENABLED=false\n")),(0,i.kt)("p",null,"You may also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan p:environment:setup")," command to disable telemetry, optionally with\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry=false")," flag for a non-interactive setup."))}c.isMDXComponent=!0}}]);