(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),s=(a(0),a(296)),r=(a(301),a(302),a(297),a(298),{id:"index-browser",title:"Visualize Redis Database keys using the RedisInsight Browser Tool",sidebar_label:"Visualize Redis Database keys using the RedisInsight Browser Tool",slug:"/explore/redisinsightv2/browser",authors:["ajeet"]}),l={unversionedId:"explore/redisinsightv2/browser/index-browser",id:"explore/redisinsightv2/browser/index-browser",isDocsHomePage:!1,title:"Visualize Redis Database keys using the RedisInsight Browser Tool",description:"My Image",source:"@site/docs/explore/redisinsightv2/browser/index-browser.mdx",slug:"/explore/redisinsightv2/browser",permalink:"/explore/redisinsightv2/browser",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/browser/index-browser.mdx",version:"current",sidebar_label:"Visualize Redis Database keys using the RedisInsight Browser Tool",sidebar:"docs",previous:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsightv2/getting-started"},next:{title:"RedisInsight Developer Hub for Redis Interactive Tutorials",permalink:"/explore/redisinsight"}},o=[{value:"What&#39;s New in the RedisInsight v2.0 Browser Tool?",id:"whats-new-in-the-redisinsight-v20-browser-tool",children:[{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight",children:[]},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight",children:[]},{value:"Step 3. Connect to a Redis Database",id:"step-3-connect-to-a-redis-database",children:[]},{value:"Step 4. Add Redis database",id:"step-4-add-redis-database",children:[]},{value:"Step 5: Open &quot;Browser Tool&quot;",id:"step-5-open-browser-tool",children:[]},{value:"Step 6: Importing keys",id:"step-6-importing-keys",children:[]},{value:"Step 7: Cloning the repository",id:"step-7-cloning-the-repository",children:[]},{value:"Importing the user database:",id:"importing-the-user-database",children:[]},{value:"Step 8. Modifying a key",id:"step-8-modifying-a-key",children:[]},{value:"Step 9: Using CLI",id:"step-9-using-cli",children:[]}]},{value:"Further References",id:"further-references",children:[]}],c={toc:o};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(790).default})),Object(s.b)("p",null,"RedisInsight is a 100% free Redis GUI that allows you to visualise, monitor, and optimize while developing your applications with Redis. It provides an intuitive and efficient GUI for Redis allowing developers like you to interact with your databases and manage your data. RedisInsight v2.0 now incorporates a completely new tech stack based on the popular Electron and Elastic UI frameworks. You can run the application locally along with your favorite IDE, and it remains cross-platform, supported on Linux, Windows, and MacOS."),Object(s.b)("h2",{id:"whats-new-in-the-redisinsight-v20-browser-tool"},"What's New in the RedisInsight v2.0 Browser Tool?"),Object(s.b)("p",null,"RedisInsight Browser lets you explore keys in your Redis server. You can add, edit and delete a key. You can even update the key expiry and copy the key name to be used in different parts of the application. Below are the list of features available under the browser tool:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browse, filter and visualize key-value Redis data structures"),Object(s.b)("li",{parentName:"ul"},"Visual cues per data type"),Object(s.b)("li",{parentName:"ul"},"Quick view of size and ttl in the main browser view"),Object(s.b)("li",{parentName:"ul"},"Ability to filter by pattern and/or data type"),Object(s.b)("li",{parentName:"ul"},"Ability to change the number of keys to scan through during filtering"),Object(s.b)("li",{parentName:"ul"},"CRUD support for Lists, Hashes, Strings, Sets, Sorted Sets"),Object(s.b)("li",{parentName:"ul"},"Search within the data structure (except for Strings)"),Object(s.b)("li",{parentName:"ul"},"CRUD support for RedisJSON")),Object(s.b)("p",null,"In order to understand the capabilities of the browser tool, let us take a simple example and demonstrate each of the browser tool's options:"),Object(s.b)("h3",{id:"step-1-download-redisinsight"},"Step 1. Download RedisInsight"),Object(s.b)("p",null,"To use RedisInsight on a local Mac, you can download the software directly from the Redis official website:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link")," to access a form that allows you to select the operating system of your choice."),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(791).default})),Object(s.b)("p",null,"Fill out the rest of the form and click \u201cDownload\u201d. Please note that the package name is the combination of the platform and version as shown here: redisinsight-preview-platform-version"),Object(s.b)("h3",{id:"step-2-install-redisinsight"},"Step 2. Install RedisInsight"),Object(s.b)("p",null,"Click on the RedisInsight executable and install it in your system."),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(792).default})),Object(s.b)("p",null,"Once the RedisInsight software is installed, click on its icon to open the RedisInsight application. It will display the End-User License Agreement and Privacy Settings. Enable Analytics and Encrypt sensitive information as per your preference."),Object(s.b)("h3",{id:"step-3-connect-to-a-redis-database"},"Step 3. Connect to a Redis Database"),Object(s.b)("p",null,'There are multiple ways you can connect to a Redis database - either by creating a new Redis Enterprise Cloud database or connecting to an existing database. To connect to Redis Enterprise Cloud, choose the "Create a Free on Redis Cloud" option.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(793).default})),Object(s.b)("p",null,"Once clicked, it will redirect to ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free/?utm_source=redis&utm_medium=app&utm_campaign=redisinsight"}),"the link")," where you will need to complete the form."),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(794).default})),Object(s.b)("p",null,"You can follow ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/create/rediscloud"}),"this link")," to create a New Redis Enterprise Cloud database.\nIn case you have an existing Redis database, follow the below steps."),Object(s.b)("p",null,'Assuming that you already have Redis database up and running locally, proceed to the next step to select "ADD REDIS DATABASE".'),Object(s.b)("h3",{id:"step-4-add-redis-database"},"Step 4. Add Redis database"),Object(s.b)("p",null,"Enter the requested details, including Host (endpoint), Port, and Alias in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(795).default})),Object(s.b)("p",null,"Once added, you will see the database added as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:a(796).default})),Object(s.b)("h3",{id:"step-5-open-browser-tool"},'Step 5: Open "Browser Tool"'),Object(s.b)("p",null,'Click on the "Key" icon on the left sidebar to open up the browser tool.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(797).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-6-importing-keys"},"Step 6: Importing keys"),Object(s.b)("p",null,"Let us import a user database (6k keys). This dataset contains users stored as Redis Hashes."),Object(s.b)("h3",{id:""}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Users")),Object(s.b)("p",null,"The user hashes contain the following fields:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"user:id")," : The key of the hash."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"first_name")," : First Name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"last_name")," : Last name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"email")," : email address."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"gender")," : Gender (male/female)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ip_address")," : IP address."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"country")," : Country Name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"country_code")," : Country Code."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"city")," : City of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"longitude")," : Longitude of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"latitude")," : Latitude of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"last_login")," : Epoch time of the last login.")),Object(s.b)("h3",{id:"step-7-cloning-the-repository"},"Step 7: Cloning the repository"),Object(s.b)("p",null,"Open up the CLI terminal and run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),Object(s.b)("h3",{id:"importing-the-user-database"},"Importing the user database:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -h localhost -p 6379 < ./import_users.redis\n")),Object(s.b)("p",null,"Refresh the keys view by clicking as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(798).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can get a real-time view of the data in your Redis database as shown below:"),Object(s.b)("p",null,"Select any key in the keys view and the key's value gets displayed in the right hand side that includes Fields and values."),Object(s.b)("h3",{id:"step-8-modifying-a-key"},"Step 8. Modifying a key"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(799).default,title:"image_tooltip"})),Object(s.b)("p",null,"Enter key name, field and value."),Object(s.b)("h3",{id:"step-9-using-cli"},"Step 9: Using CLI"),Object(s.b)("p",null,"RedisInsight CLI lets you run commands against a Redis server. You don\u2019t need to remember the syntax - the integrated help shows you all the arguments and validates your command as you type."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:a(800).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"further-references"},"Further References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight"))),Object(s.b)("div",null,Object(s.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(s.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}d.isMDXComponent=!0},298:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(296),r=a(304);a(297),a(55);t.a=function(e){var t=n.a.useState(!1),a=t[0],i=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(s.a,{components:r.a},e.children)))}},299:function(e,t,a){"use strict";var i=a(0),n=a(300);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},300:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},301:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(299),r=a(303),l=a(56),o=a.n(l),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,b=e.values,u=e.groupId,p=e.className,h=Object(s.a)(),m=h.tabGroupChoices,g=h.setTabGroupChoices,f=Object(i.useState)(l),O=f[0],j=f[1],y=i.Children.toArray(e.children);if(null!=u){var w=m[u];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var v=function(e){j(e),null!=u&&g(u,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},p)},b.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},302:function(e,t,a){"use strict";var i=a(3),n=a(0),s=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:n}),t)}},790:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_redisinsight_browser-85ec5d9c54e2ce969e06499e3f47a05b.png"},791:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-7789978165fdfe1a78b00eaac329c844.png"},792:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-4375767a2d84a432972e4c34152ad0fc.png"},793:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image31-cc1ee9ebe1ac98480415bc844fc3763f.png"},794:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image41-44ac3b77adcabddddd823226bd090f9b.png"},795:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_61-f2ae30fb1dd6cd8a3b158943319c4217.png"},796:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_db-0742b337e1136a4d17c652af6b454307.png"},797:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_browser-1cbcc538d5dbae990b1984e056ac8308.png"},798:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_browser1-1d28034d6bf36af12a6949ea7a5bfeb7.png"},799:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_browser31-5c8aa716e9904119f438c160afba76b2.png"},800:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_browser4-53cd99366c57111f024a562f491f12d6.png"}}]);