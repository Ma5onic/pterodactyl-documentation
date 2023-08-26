"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Getting Started",l={unversionedId:"documentation/panel/getting_started",id:"documentation/panel/getting_started",title:"Getting Started",description:"Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order to run and use this panel.",source:"@site/docs/documentation/panel/getting_started.md",sourceDirName:"documentation/panel",slug:"/documentation/panel/getting_started",permalink:"/pterodactyl-documentation/docs/documentation/panel/getting_started",draft:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/docs/documentation/panel/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Community Standards",permalink:"/pterodactyl-documentation/docs/documentation/project/community"},next:{title:"Webserver Configuration",permalink:"/pterodactyl-documentation/docs/documentation/panel/webserver_configuration"}},s={},p=[{value:"Picking a Server OS",id:"picking-a-server-os",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Example Dependency Installation",id:"example-dependency-installation",level:3},{value:"Installing Composer",id:"installing-composer",level:3},{value:"Download Files",id:"download-files",level:2},{value:"Installation",id:"installation",level:2},{value:"Environment Configuration",id:"environment-configuration",level:3},{value:"Database Setup",id:"database-setup",level:3},{value:"Add The First User",id:"add-the-first-user",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Queue Listeners",id:"queue-listeners",level:2},{value:"Crontab Configuration",id:"crontab-configuration",level:3},{value:"Create Queue Worker",id:"create-queue-worker",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"Next Step: Webserver Configuration",id:"next-step-webserver-configuration",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order to run and use this panel."),(0,r.kt)("p",null,"You are expected to understand how to read documentation to use this Panel. We have spent many hours detailing how to install or upgrade our\nsoftware; take some time and read rather than copy and pasting and then complaining when things do not work. This panel does\nnot exist as a drag-and-drop service to run your servers. It is a highly complex system requiring multiple dependencies and\nadministrators willing to spend some time learning how to use it. ",(0,r.kt)("strong",{parentName:"p"},"If you expect to be able to install this with no understanding\nof basic linux system administration you should stop and turn around now.")),(0,r.kt)("admonition",{title:"Looking for something simple to setup?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://wisp.gg"},"WISP")," is a Pterodactyl powered SaaS suitable for enterprise and personal use. Offering all the features without the setup hassle, and fully compatible with Pterodactyl eggs. Comparable to MultiCraft or TCAdmin while offering new and unique features. Click here to ",(0,r.kt)("a",{parentName:"p",href:"https://wisp.gg/features"},"learn more"),".")),(0,r.kt)("h2",{id:"picking-a-server-os"},"Picking a Server OS"),(0,r.kt)("p",null,"Pterodactyl runs on a wide range of operating systems, so pick whichever you are most comfortable using."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Pterodactyl does not support most OpenVZ systems due to incompatibilities with Docker. If you are planning on running\nthis software on an OpenVZ based system you will ","\u2014"," most likely ","\u2014"," not be successful.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Ubuntu")),(0,r.kt)("td",{parentName:"tr",align:null},"20.04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation written assuming Ubuntu 20.04 as the base OS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"22.04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"MariaDB can be installed without the repo setup script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"CentOS")),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Extra repos are required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Note that CentOS 8 is EOL. Use Rocky or Alma Linux.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Debian")),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP ",(0,r.kt)("inlineCode",{parentName:"li"},"8.0")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"8.1")," (recommended) with the following extensions: ",(0,r.kt)("inlineCode",{parentName:"li"},"cli"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gd"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PDO"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mbstring"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tokenizer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bcmath"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"dom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zip"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"fpm")," if you are planning to use NGINX."),(0,r.kt)("li",{parentName:"ul"},"MySQL ",(0,r.kt)("inlineCode",{parentName:"li"},"5.7.22")," and higher (MySQL ",(0,r.kt)("inlineCode",{parentName:"li"},"8")," recommended) ",(0,r.kt)("strong",{parentName:"li"},"or")," MariaDB ",(0,r.kt)("inlineCode",{parentName:"li"},"10.2")," and higher."),(0,r.kt)("li",{parentName:"ul"},"Redis (",(0,r.kt)("inlineCode",{parentName:"li"},"redis-server"),")"),(0,r.kt)("li",{parentName:"ul"},"A webserver (Apache, NGINX, Caddy, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"composer")," v2")),(0,r.kt)("h3",{id:"example-dependency-installation"},"Example Dependency Installation"),(0,r.kt)("p",null,"The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP, Redis, and MariaDB\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\n\n# Add Redis official APT repository\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\n\n# MariaDB repo setup script can be skipped on Ubuntu 22.04\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Install Dependencies\napt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server\n')),(0,r.kt)("h3",{id:"installing-composer"},"Installing Composer"),(0,r.kt)("p",null,"Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n")),(0,r.kt)("h2",{id:"download-files"},"Download Files"),(0,r.kt)("p",null,"The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/pterodactyl\ncd /var/www/pterodactyl\n")),(0,r.kt)("p",null,"Once you have created a new directory for the Panel and moved into it you'll need to download the Panel files. This\nis as simple as using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to download our pre-packaged content. Once it is downloaded you'll need to unpack the archive\nand then set the correct permissions on the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap/cache/")," directories. These directories\nallow us to store files as well as keep a speedy cache available to reduce load times."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz\ntar -xzvf panel.tar.gz\nchmod -R 755 storage/* bootstrap/cache/\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Now that all of the files have been downloaded we need to configure some core aspects of the Panel."),(0,r.kt)("admonition",{title:"Database Configuration",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need a database setup and a user with the correct permissions created for that database before\ncontinuing any further. See below to create a user and database for your Pterodactyl panel quickly. To find more detailed information\nplease have a look at ",(0,r.kt)("a",{parentName:"p",href:"/pterodactyl-documentation/docs/documentation/tutorials/mysql_setup"},"Setting up MySQL"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -p\n\n# Remember to change 'yourPassword' below to be a unique password\nCREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';\nCREATE DATABASE panel;\nGRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;\nexit\n"))),(0,r.kt)("p",null,"First we will copy over our default environment settings file, install core dependencies, and then generate a\nnew application encryption key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\ncomposer install --no-dev --optimize-autoloader\n\n# Only run the command below if you are installing this Panel for\n# the first time and do not have any Pterodactyl Panel data in the database.\nphp artisan key:generate --force\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Back up your encryption key (APP_KEY in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys).\nStore it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups.")),(0,r.kt)("h3",{id:"environment-configuration"},"Environment Configuration"),(0,r.kt)("p",null,"Pterodactyl's core environment is easily configured using a few different CLI commands built into the app. This step\nwill cover setting up things such as sessions, caching, database credentials, and email sending."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan p:environment:setup\nphp artisan p:environment:database\n\n# To use PHP\'s internal mail sending (not recommended), select "mail". To use a\n# custom SMTP server, select "smtp".\nphp artisan p:environment:mail\n')),(0,r.kt)("h3",{id:"database-setup"},"Database Setup"),(0,r.kt)("p",null,"Now we need to setup all of the base data for the Panel in the database you created earlier. ",(0,r.kt)("strong",{parentName:"p"},"The command below\nmay take some time to run depending on your machine. Please ",(0,r.kt)("em",{parentName:"strong"},"DO NOT")," exit the process until it is completed!")," This\ncommand will setup the database tables and then add all of the Nests & Eggs that power Pterodactyl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate --seed --force\n")),(0,r.kt)("h3",{id:"add-the-first-user"},"Add The First User"),(0,r.kt)("p",null,"You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below.\nAt this time passwords ",(0,r.kt)("strong",{parentName:"p"},"must")," meet the following requirements: 8 characters, mixed case, at least one number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan p:user:make\n")),(0,r.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,r.kt)("p",null,"The last step in the installation process is to set the correct permissions on the Panel files so that the webserver can\nuse them correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R www-data:www-data /var/www/pterodactyl/*\n\n# If using NGINX on CentOS:\nchown -R nginx:nginx /var/www/pterodactyl/*\n\n# If using Apache on CentOS:\nchown -R apache:apache /var/www/pterodactyl/*\n")),(0,r.kt)("h2",{id:"queue-listeners"},"Queue Listeners"),(0,r.kt)("p",null,"We make use of queues to make the application faster and handle sending emails and other actions in the background.\nYou will need to setup the queue worker for these actions to be processed."),(0,r.kt)("h3",{id:"crontab-configuration"},"Crontab Configuration"),(0,r.kt)("p",null,"The first thing we need to do is create a new cronjob that runs every minute to process specific Pterodactyl tasks, such\nas session cleanup and sending scheduled tasks to daemons. You'll want to open your crontab using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo crontab -e")," and\nthen paste the line below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1\n")),(0,r.kt)("h3",{id:"create-queue-worker"},"Create Queue Worker"),(0,r.kt)("p",null,"Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible\nfor sending emails and handling many other background tasks for Pterodactyl."),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"pteroq.service")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," with the contents below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"# Pterodactyl Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Pterodactyl Queue Worker\nAfter=redis-server.service\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("admonition",{title:"Redis on CentOS",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are using CentOS, you will need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-server.service")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.service")," at the ",(0,r.kt)("inlineCode",{parentName:"p"},"After=")," line in order to ensure ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," starts before the queue worker.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are not using ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," for anything you should remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"After=")," line, otherwise you will encounter errors\nwhen the service starts.")),(0,r.kt)("p",null,"If you are using redis for your system, you will want to make sure to enable that it will start on boot. You can do that by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now redis-server\n")),(0,r.kt)("p",null,"Finally, enable the service and set it to boot on machine start."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now pteroq.service\n")),(0,r.kt)("h3",{id:"telemetry"},"Telemetry"),(0,r.kt)("p",null,"Since 1.11, Pterodactyl will collect anonymous telemetry to help us better understand how the\nsoftware is being used. To learn more about this feature and to opt-out, please see our ",(0,r.kt)("a",{parentName:"p",href:"/pterodactyl-documentation/docs/documentation/panel/additional_configuration#telemetry"},"Telemetry"),"\ndocumentation. Make sure to continue with the rest of the installation process."),(0,r.kt)("h4",{id:"next-step-webserver-configuration"},"Next Step: ",(0,r.kt)("a",{parentName:"h4",href:"./webserver_configuration"},"Webserver Configuration")))}c.isMDXComponent=!0}}]);