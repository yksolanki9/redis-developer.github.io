(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var s=n(0),o=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=s,b=d["".concat(r,".").concat(p)]||d[p]||h[p]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var s=n(21),o=n(212);function a(){var e=Object(s.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,s){var a=void 0===s?{}:s,r=a.forcePrependBaseUrl,i=void 0!==r&&r,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},212:function(e,t,n){"use strict";function s(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!s(e)}n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}))},352:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/authenticated_checkin_attempt-dda7ba858a32459b5bf1036c3e8f7097.png"},353:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/checkin_attempt_401_response-43c38047e04e90c03f93dd66f9a87b21.png"},354:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login_request-759155812731080875c661a227473961.png"},355:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/local_cookie-ad2e6af0381765295e2406dfaae3c6be.png"},356:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cookie_detail-7961ca9385ecd5fb2bfc45f2477c60ac.png"},357:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/authenticated_checkin_202_response-2754620cf2dcf735a2340a7a9512ba55.png"},358:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/logout_request-ed887f48a08ba5b5f862e41b46d51a21.png"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(3),o=n(7),a=(n(0),n(203)),r=(n(204),{id:"index-sessionstorage",title:"Scaling an Express Application with Redis as a Session Store",sidebar_label:"Session Storage",slug:"/develop/node/nodecrashcourse/sessionstorage"}),i={unversionedId:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",id:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",isDocsHomePage:!1,title:"Scaling an Express Application with Redis as a Session Store",description:"We're building our application as a series of components, with Redis as a data store and cache.  Most of these components talk to the user via the HTTP request / response cycle, which is inherently stateless.  However, we want to maintain state, or remember things about the user from one request to the next in some circumstances.",source:"@site/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",slug:"/develop/node/nodecrashcourse/sessionstorage",permalink:"/develop/node/nodecrashcourse/sessionstorage",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",version:"current",sidebar_label:"Session Storage",sidebar:"docs",previous:{title:"Caching with Redis and Express Middleware",permalink:"/develop/node/nodecrashcourse/caching"},next:{title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",permalink:"/develop/node/nodecrashcourse/advancedstreams"}},c=[{value:"Hands-on Exercise",id:"hands-on-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{class:"text--center"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/T8xay-l4HrM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(a.b)("p",null,"We're building our application as a series of components, with Redis as a data store and cache.  Most of these components talk to the user via the HTTP request / response cycle, which is inherently stateless.  However, we want to maintain state, or remember things about the user from one request to the next in some circumstances.  "),Object(a.b)("p",null,"We can identify users by having the application set a cookie in the response that is returned to the user - their browser will then attach this cookie to future requests.  This can then be used to store information about the user in a server-side session object that Express keeps track of by means of the ID in the cookie."),Object(a.b)("p",null,"You can think of the cookie as a sort of key, and the session object as a value.  We could store these in memory in our server, but this approach limits us to a single server instance that would lose all of session data if it were to crash and restart."),Object(a.b)("p",null,"Fortunately, Redis makes an excellent store for session data - it's fast and durable, and allows us to scale system components horizontally by adding more instances of them.  We've used the npm package \"connect-redis\" to add Redis as a session store for the Authentication and Checkin Receiver services, with minimal code required."),Object(a.b)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),Object(a.b)("p",null,"In this exercise, you'll enable the authentication functionality in the Checkin Receiver service, and use Postman to establish a session with the Authentication service in order to submit an authenticated checkin to the system."),Object(a.b)("p",null,"First, stop the Checkin Receiver if you have it running.  Press Ctrl-C in its terminal window."),Object(a.b)("p",null,"Now, restart the Checkin Receiver with the optional authentication functionality enabled:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),'$ npm run checkinreceiver auth\n\n> js-crash-course@0.0.1 checkinreceiver \n> node ./src/checkinreceiver.js "auth"\n\ninfo: Authentication enabled, checkins require a valid user session.\ninfo: Checkin receiver listening on port 8082.\n')),Object(a.b)("p",null,"Note that the Checkin Receiver reports that authentication is now enabled."),Object(a.b)("p",null,"In a second terminal window, cd to the node-js-crash-course directory that you cloned the project repo into, and start the Authentication Service which will listen on port 8083:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"$ npm run auth\n\n> js-crash-course@0.0.1 auth /Users/simonprickett/source/github/node-js-crash-course\n> node ./src/auth.js\n\ninfo: Authentication service listening on port 8083.\n")),Object(a.b)("p",null,"Open up a new request in Postman, and make a POST request to perform a checkin as follows:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Authenticated Checkin Attempt",src:n(352).default})),Object(a.b)("p",null,'Click "Send" - this time, the Checkin Receiver service should reject the request as you haven\'t authenticated with the system.  You should see a 401 Unauthorized response:'),Object(a.b)("p",null,Object(a.b)("img",{alt:"Checkin Attempt 401 Response",src:n(353).default})),Object(a.b)("p",null,"And in the Checkin Receiver's terminal window, you should see that it rejected your request as it couldn't find your session:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"debug: Rejecting checkin - no valid user session found.\n")),Object(a.b)("p",null,"The Checkin Receiver rejected your request because it couldn't find a value for 'user' in your request's session (check out the code in ",Object(a.b)("inlineCode",{parentName:"p"},"src/checkinreceiver.js"),")."),Object(a.b)("p",null,"Let's try again, but this time we'll login first.  This will establish a session and we'll be able to see how that gets stored in Redis\u2026"),Object(a.b)("p",null,"Keep your checkin request tab in Postman, and open a new tab to create a POST request to the Authentication service."),Object(a.b)("p",null,"Set the URL to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:8083/login")," and the JSON body to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json"}),'{"email": "al.appelhof@example.com", "password": "secret123"}\n')),Object(a.b)("p",null,"Your request should look like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Login Request",src:n(354).default})),Object(a.b)("p",null,'Click "Send" to login.  The Authentication Service will check the supplied credentials against what\'s stored in Redis at key ',Object(a.b)("inlineCode",{parentName:"p"},"ncc:user:77"),' and create a session object for that user, adding the email address to the "user" property in the session.  Postman should show a 200 (success) response code and the text "OK".'),Object(a.b)("p",null,'Click the blue "Cookies" text in Postman, and you should see that a cookie was set for "checkinapp" on localhost.  Click on the "checkinapp" text to see the contents of the cookie:'),Object(a.b)("p",null,Object(a.b)("img",{alt:"Local Cookies",src:n(355).default}),"\n",Object(a.b)("img",{alt:"Cookie Detail",src:n(356).default})),Object(a.b)("p",null,"Now flip back to your tab in Postman that has the checkin request for user 77.  Send the request again, and this time it should succeed, as Postman will also send the cookie containing your session ID and the Checkin Receiver will then be able to validate you have an authenticated session.  This time, you should get a 202 Accepted response:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Authenticated Checkin 202 Response",src:n(357).default})),Object(a.b)("p",null,'When the Checkin Receiver got your request, it used the value in your cookie to look up and load your session from Redis (connect-redis does this for us), then checked that the session had a "user" property set.  Any system component that\'s running on a localhost URL can now access your session and query and store information in it.'),Object(a.b)("p",null,"Finally, let's see what the session looks like in Redis... using redis-cli or the RedisInsight browser, find all the session keys like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> keys ncc:session:*\n1) "ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl"\n')),Object(a.b)("p",null,"Note that the key name contains the session ID that was in your cookie.  connect-redis manages these keys for us as Redis Strings, all our application needs to do is manipulate the request's session object."),Object(a.b)("p",null,"Let's see what's in our session and when it expires:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> get ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n"{\\"cookie\\":{\\"originalMaxAge\\":null,\\"expires\\":null,\\"httpOnly\\":true,\\"path\\":\\"/\\"},\\"user\\":\\"al.appelhof@example.com\\"}"\n127.0.0.1:6379> ttl ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n(integer) 85693\n')),Object(a.b)("p",null,"We didn't specify a session length in our code when setting up connect-redis, so it's defaulted to expiring sessions after a day."),Object(a.b)("p",null,"Finally, let's logout from the Authentication Service and ensure that our session data gets removed from Redis.  In Postman, create a GET request as follows and click Send:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Logout Request",src:n(358).default})),Object(a.b)("p",null,"The code in the logout handler destroys your session, which should then disappear from Redis:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> get ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n(nil)\n")),Object(a.b)("p",null,"Next, we'll move on to look at how to scale up our checkin processing to cope with all these new users!"),Object(a.b)("h2",{id:"external-resources"},"External Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"https://www.npmjs.com/package/connect-redis"}),"connect-redis session store package on npm")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"https://redislabs.com/blog/cache-vs-session-store/"}),"Cache vs Session Store")," - a blog article from Redis Labs")))}u.isMDXComponent=!0}}]);