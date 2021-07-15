(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var i=a(3),s=a(7),r=(a(0),a(205)),n=(a(210),a(211),a(206),a(207),{id:"index-redismod",title:"Redis Modules in a Docker Container",sidebar_label:"RedisMod",slug:"/explore/redismod"}),o={unversionedId:"explore/redismod/index-redismod",id:"explore/redismod/index-redismod",isDocsHomePage:!1,title:"Redis Modules in a Docker Container",description:"This simple container image bundles together the latest stable releases of Redis and select Redis modules from Redis Labs.",source:"@site/docs/explore/redismod/index-redismod.mdx",slug:"/explore/redismod",permalink:"/explore/redismod",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redismod/index-redismod.mdx",version:"current",sidebar_label:"RedisMod",sidebar:"docs",previous:{title:"Redis DataSource for Grafana",permalink:"/explore/redisdatasource"},next:{title:"RIOT",permalink:"/explore/riot"}},l=[{value:"Modules included in the container",id:"modules-included-in-the-container",children:[]},{value:"Step 1. Install Docker",id:"step-1-install-docker",children:[]},{value:"Step 2. Running Redismod Docker container",id:"step-2-running-redismod-docker-container",children:[]},{value:"Step 3. Connect to Redis database",id:"step-3-connect-to-redis-database",children:[]},{value:"Step 4. Verify if all the Redis modules are getting loaded",id:"step-4-verify-if-all-the-redis-modules-are-getting-loaded",children:[]},{value:"Step 5. Testing Redis Modules",id:"step-5-testing-redis-modules",children:[]},{value:"References",id:"references",children:[]}],d={toc:l};function c(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This simple container image bundles together the latest stable releases of Redis and select Redis modules from Redis Labs.\nThis image is based on the official image of Redis from Docker. By default, the container starts with Redis' default configuration and all included modules loaded."),Object(r.b)("h3",{id:"modules-included-in-the-container"},"Modules included in the container"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-search/"}),"RediSearch"),": a full-featured search engine"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-graph/"}),"RedisGraph"),": a graph database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-timeseries/"}),"RedisTimeSeries"),": a timeseries database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-ai/"}),"RedisAI"),": a tensor and deep learning model server"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-json/"}),"RedisJSON"),": a native JSON data type"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-bloom/"}),"RedisBloom"),": native Bloom and Cuckoo Filter data types"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://redislabs.com/modules/redis-gears/"}),"RedisGears"),": a dynamic execution framework")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The latest redismod:preview Docker image holds RedisJSON 2.0 and RediSearch 2.2 Private Preview Release.This Private Preview Releases delivers real-time document capabilities with active-active support. The ability to index, query, and use full-text search on JSON documents using RediSearch is the coolest new feature of this release. Try it out today -"),Object(r.b)("p",{parentName:"div"},"docker run -p 6379:6379 redislabs/redismod:preview"))),Object(r.b)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker"),Object(r.b)("p",null,"To use RedisMod on a local Mac, the first step is to install Docker for your operating system.\nRun the docker version command in a terminal window to make sure that docker is installed correctly."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker version\n")),Object(r.b)("p",null,"It should display Docker Engine Server and Client version successfully."),Object(r.b)("h3",{id:"step-2-running-redismod-docker-container"},"Step 2. Running Redismod Docker container"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(r.b)("h3",{id:"step-3-connect-to-redis-database"},"Step 3. Connect to Redis database"),Object(r.b)("p",null,"You can either use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/create/homebrew"}),"redis-cli")," or use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"RedisInsight")," to connect to Redis database.\nLet's try using redis-cli as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli\n")),Object(r.b)("h3",{id:"step-4-verify-if-all-the-redis-modules-are-getting-loaded"},"Step 4. Verify if all the Redis modules are getting loaded"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," $ redis-cli \n 127.0.0.1:6379> info modules\n # Modules\n module:name=rg,ver=10006,api=1,filters=0,usedby=[],using=[ai],options=[]\n module:name=ai,ver=10002,api=1,filters=0,usedby=[rg],using=[],options=[]\n module:name=timeseries,ver=10408,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=graph,ver=20402,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ReJSON,ver=10007,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=search,ver=20006,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(r.b)("h3",{id:"step-5-testing-redis-modules"},"Step 5. Testing Redis Modules"),Object(r.b)("p",null,"Let us test drive RediSearch modules as discussed below in detail."),Object(r.b)("h4",{id:"insert-data-into-redisearch"},"Insert data into RediSearch"),Object(r.b)("p",null,"We are now ready to insert some data. This example uses movies data stored as Redis Hashes, so let\u2019s insert a couple of movies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'  HSET movies:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "Luke Skywalker begins Jedi training with Yoda." release_year 1980 genre "Action"   \n rating 8.7 votes 1127635\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' HSET movies:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his empire to his son." release_year 1972     \n genre "Drama" rating 9.2 votes 1563839 \n')),Object(r.b)("p",null,"Your Redis database now contains two Hashes. It is simple to retrieve information using the HMGET command, if you know the key of the movies (movies:11002):"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{})," HMGET movies:11002 title rating\n")),Object(r.b)("h4",{id:"create-an-index-in-redisearch"},"Create an index in RediSearch"),Object(r.b)("p",null,"To be able to query the hashes on the field for title, say, or genre, you must first create an index. To create an index, you must define a schema to list the fields and their types that are indexed, and that you can use in your queries."),Object(r.b)("p",null,"Use the FT.CREATE command to create an index, as shown here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),' FT.CREATE idx:movies ON hash PREFIX 1 "movies:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n')),Object(r.b)("h4",{id:"search-the-movies-in-the-redisearch-index"},"Search the movies in the RediSearch index"),Object(r.b)("p",null,"You can now use the FT.SEARCH to search your database, for example, to search all movies sorted by release year:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," FT.SEARCH idx:movies * SORTBY release_year ASC RETURN 2 title release_year\n")),Object(r.b)("p",null,'To test drive rest of Redis modules, please visit the links mentioned under "References" section.'),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/RedisLabsModules/redismod"}),"Redismod GITHUB repository")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisjson"}),"RedisJSON Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redistimeseries"}),"RedisTimeSeries Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisgraph"}),"RedisGraph Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisbloom"}),"RedisBloom Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisgears"}),"RedisGears Tutorial"))))}c.isMDXComponent=!0},207:function(e,t,a){"use strict";var i=a(0),s=a.n(i),r=a(205),n=a(213);a(206),a(55);t.a=function(e){var t=s.a.useState(!1),a=t[0],i=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(r.a,{components:n.a},e.children)))}},208:function(e,t,a){"use strict";var i=a(0),s=a(209);t.a=function(){var e=Object(i.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},209:function(e,t,a){"use strict";var i=a(0),s=Object(i.createContext)(void 0);t.a=s},210:function(e,t,a){"use strict";var i=a(0),s=a.n(i),r=a(208),n=a(212),o=a(56),l=a.n(o),d=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,m=e.groupId,u=e.className,p=Object(r.a)(),h=p.tabGroupChoices,O=p.setTabGroupChoices,f=Object(i.useState)(o),j=f[0],v=f[1],g=i.Children.toArray(e.children);if(null!=m){var N=h[m];null!=N&&N!==j&&b.some((function(e){return e.value===N}))&&v(N)}var R=function(e){v(e),null!=m&&O(m,e)},y=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(n.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case c:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},a)}))),t?Object(i.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},211:function(e,t,a){"use strict";var i=a(3),s=a(0),r=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:s}),t)}}}]);