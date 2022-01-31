(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(323)),s={id:"index-usingdotnet",title:"Processing Time Series data with Redis and .NET",sidebar_label:"Using RedisTimeSeries with .NET",slug:"/howtos/redistimeseries/using-dotnet",authors:["steve"]},o={unversionedId:"howtos/redistimeseries/using-dotnet/index-usingdotnet",id:"howtos/redistimeseries/using-dotnet/index-usingdotnet",isDocsHomePage:!1,title:"Processing Time Series data with Redis and .NET",description:"Time Series data can be used to measure anything from remote sensor readings to stock market feeds. Working with time series data in .NET is a snap with Redis and NRedisTimeSeries. In this tutorial, we'll explore how to use them together.",source:"@site/docs/howtos/redistimeseries/using-dotnet/index.md",slug:"/howtos/redistimeseries/using-dotnet",permalink:"/howtos/redistimeseries/using-dotnet",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-dotnet/index.md",version:"current",lastUpdatedAt:1637267916,sidebar_label:"Using RedisTimeSeries with .NET",sidebar:"docs",previous:{title:"How to collect and process time-series data using Redis and Python",permalink:"/howtos/redistimeseries/using-python"},next:{title:"How to collect and process time-series data using Redis and Go",permalink:"/howtos/redistimeseries/using-go"}},c=[{value:"Create your Project",id:"create-your-project",children:[]},{value:"Get a RedisTimeSeries Database",id:"get-a-redistimeseries-database",children:[]},{value:"Connecting to Redis",id:"connecting-to-redis",children:[]},{value:"Create a Time Series",id:"create-a-time-series",children:[]},{value:"Producer Task",id:"producer-task",children:[]},{value:"Consumer Task",id:"consumer-task",children:[]},{value:"Run the App",id:"run-the-app",children:[]},{value:"Run Aggregations in the Time Series",id:"run-aggregations-in-the-time-series",children:[{value:"Create Rules to Store Aggregations",id:"create-rules-to-store-aggregations",children:[]},{value:"Process Results from Aggregations",id:"process-results-from-aggregations",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Time Series data can be used to measure anything from remote sensor readings to stock market feeds. Working with time series data in .NET is a snap with Redis and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/RedisTimeSeries/NRedisTimeSeries"}),"NRedisTimeSeries"),". In this tutorial, we'll explore how to use them together."),Object(a.b)("h2",{id:"create-your-project"},"Create your Project"),Object(a.b)("p",null,"Start out by creating a project with the command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet new console -n TimeSeriesDemoApp\n")),Object(a.b)("p",null,"Next, inside the ",Object(a.b)("inlineCode",{parentName:"p"},"TimeSeriesDemoApp")," directory, run the command: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet add package NRedisTimeSeries\n")),Object(a.b)("h2",{id:"get-a-redistimeseries-database"},"Get a RedisTimeSeries Database"),Object(a.b)("p",null,"The next step is to get a RedisTimeSeries database up and running. The easiest way to do that for development purposes is to use Docker:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run -p 6379:63379 redislabs/redistimeseries\n")),Object(a.b)("p",null,"If you are well past getting started and want to get something into your production, your best bet is to run it in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/howtos/redistimeseries/getting-started"}),"Redis Enterprise"),"."),Object(a.b)("h2",{id:"connecting-to-redis"},"Connecting to Redis"),Object(a.b)("p",null,"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"Program.cs")," file, in here, create a new ConnectionMultiplexer using a connection string (which will vary based on what deployment you're using). Then, for our basic Docker setup, you'll just run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var muxer = ConnectionMultiplexer.Connect("localhost");\nvar db = muxer.GetDatabase();\n')),Object(a.b)("h2",{id:"create-a-time-series"},"Create a Time Series"),Object(a.b)("p",null,"Now that you've gotten a handle to Redis, your next step is to initialize a time series. This will be a bit of a toy example. We are going to start off by just creating a time series called ",Object(a.b)("inlineCode",{parentName:"p"},"sensor"),", we will set its retention period to 1 minute, and we just give it an ",Object(a.b)("inlineCode",{parentName:"p"},"id")," label of ",Object(a.b)("inlineCode",{parentName:"p"},"sensor-1"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'await db.TimeSeriesCreateAsync("sensor", 60000, new List<TimeSeriesLabel>{new TimeSeriesLabel("id", "sensor-1")});\n')),Object(a.b)("h2",{id:"producer-task"},"Producer Task"),Object(a.b)("p",null,"Next, we'll create a task that will run a consumer in the background. Every second it will send a random integer between 1 and 50 into our time series."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var producerTask = Task.Run(async()=>{\n    while(true)\n    {\n        await db.TimeSeriesAddAsync("sensor", "*", Random.Shared.Next(50));\n        await Task.Delay(1000);\n    }    \n});\n')),Object(a.b)("h2",{id:"consumer-task"},"Consumer Task"),Object(a.b)("p",null,"With the Producer created, we'll create a consumer loop that will do the opposite. Every second it will pull the most recent item in the time series off and print it out."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var consumerTask = Task.Run(async()=>{\n    while(true)\n    {\n        await Task.Delay(1000);\n        var result = await db.TimeSeriesGetAsync("sensor");\n        Console.WriteLine($"{result.Time.Value}: {result.Val}");\n    }\n});\n\nawait Task.WhenAll(producerTask, consumerTask);\n')),Object(a.b)("h2",{id:"run-the-app"},"Run the App"),Object(a.b)("p",null,"Now that we produce and consume data run the app with ",Object(a.b)("inlineCode",{parentName:"p"},"dotnet run"),". This will run a continuous loop in the time series as it continually produces and consumes data points."),Object(a.b)("h2",{id:"run-aggregations-in-the-time-series"},"Run Aggregations in the Time Series"),Object(a.b)("p",null,"Now what we've done so far is produce a time series of random integer data for our .NET app to consume. What if we wanted to do something a bit more interesting with it, though? Let's say we wanted to calculate a moving average every 5 seconds. We can do that with ease using Redis TimeSeries."),Object(a.b)("h3",{id:"create-rules-to-store-aggregations"},"Create Rules to Store Aggregations"),Object(a.b)("p",null,"Let's run min, max, and average every 5 seconds on our Time Series. Redis will do this passively in the background after we set up some keys to store them in and set up the rules. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var aggregations = new TsAggregation[]{TsAggregation.Avg, TsAggregation.Min, TsAggregation.Max};\nforeach(var agg in aggregations)\n{\n    await db.TimeSeriesCreateAsync($"sensor:{agg}", 60000, new List<TimeSeriesLabel>{new ("type", agg.ToString()), new("aggregation-for", "sensor-1")});\n    await(db.TimeSeriesCreateRuleAsync("sensor", new TimeSeriesRule($"sensor:{agg}", 5000, agg)));\n}\n')),Object(a.b)("h3",{id:"process-results-from-aggregations"},"Process Results from Aggregations"),Object(a.b)("p",null,"With the rules established, we can consume the relevant time series to get the results. When we were creating the time series for our aggregations, we added a label to all of them: ",Object(a.b)("inlineCode",{parentName:"p"},'new TimeSeriesLabel("aggregation-for", "sensor-1")'),". We essentially told Redis that this time series would be an aggregation for ",Object(a.b)("inlineCode",{parentName:"p"},"sensor-1"),". We can then use that label to find just the time series aggregations of ",Object(a.b)("inlineCode",{parentName:"p"},"sensor-1"),". With this in mind, we can grab all the sensor aggregations in one command to Redis using ",Object(a.b)("inlineCode",{parentName:"p"},"MGET"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var aggregationConsumerTask = Task.Run(async()=>\n{\n    while(true)\n    {\n        await Task.Delay(5000);\n        var results = await db.TimeSeriesMGetAsync(new List<string>(){"aggregation-for=sensor-1"}, true);\n        foreach(var result in results)\n        {\n            Console.WriteLine($"{result.labels.First(x=>x.Key == "type").Value}: {result.value.Val}");\n        }        \n        \n    }\n});\n')),Object(a.b)("p",null,"With all these sets, you can now just update the ",Object(a.b)("inlineCode",{parentName:"p"},"Task.WhenAll")," call at the end to include the new consumer task:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"await Task.WhenAll(producerTask, consumerTask, aggregationConsumerTask);\n")),Object(a.b)("p",null,"When we run the application with ",Object(a.b)("inlineCode",{parentName:"p"},"dotnet run"),", you will see that the application will also print out the average, min, and max for the last 5 seconds of the time series, in addition to the regular ticks of the time series."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Source Code for this demo is located in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-time-series-demo-dotnet"}),"GitHub")),Object(a.b)("li",{parentName:"ul"},"The source code for NRedisTimeSeries is also located in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redistimeseries/nredistimeseries"}),"GitHub")),Object(a.b)("li",{parentName:"ul"},"More information about Redis Time Series can be found at ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://redistimeseries.io/"}),"redistimeseries.io"))))}d.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);