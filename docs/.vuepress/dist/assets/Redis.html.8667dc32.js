import{_ as p,o as e,c as i,a}from"./app.200834ab.js";var s="/myweb/images/db-redis-overview.png",r="/myweb/images/\u7F13\u5B58\u51FB\u7A7F.png",l="/myweb/images/\u7F13\u5B58\u96EA\u5D29.png",t="/myweb/images/\u57FA\u672C\u6563\u5217\u7B97\u6CD5.png",d="/myweb/images/\u4E3B\u4ECE\u590D\u5236.png",n="/myweb/images/\u8BFB\u5199\u5206\u79BB.png",h="/myweb/images/\u5355\u54E8\u5175.png",o="/myweb/images/\u54E8\u5175\u8BEF\u5224.png",g="/myweb/images/\u54E8\u5175\u96C6\u7FA4.png",m="/myweb/images/\u54E8\u5175\u5206\u7247\u96C6\u7FA4.png",c="/myweb/images/\u5E03\u9686\u8FC7\u6EE4\u5668\u539F\u7406.png",u="/myweb/images/semlinker.png",b="/myweb/images/kakuqo.png",_="/myweb/images/\u5E03\u9686\u8FC7\u6EE4\u5668\u8BEF\u5224\u7387\u516C\u5F0F.png",v="/myweb/images/\u5E03\u9686\u8FC7\u6EE4\u5668\u957F\u5EA6\u8BA1\u7B97.png";const R={},k=a('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><blockquote><p>Redis \u662F\u4E00\u79CD\u652F\u6301 key-value \u7B49\u591A\u79CD\u6570\u636E\u7ED3\u6784\u7684\u5B58\u50A8\u7CFB\u7EDF\u3002\u53EF\u7528\u4E8E\u7F13\u5B58\u3001\u4E8B\u4EF6\u53D1\u5E03\u6216\u8BA2\u9605\uFF0C\u9AD8\u901F\u961F\u5217\u7B49\u957F\u6C5F\u3002\u652F\u6301\u7F51\u7EDC\uFF0C\u63D0\u4F9B\u5B57\u7B26\u4E32\u3001\u54C8\u5E0C\u3001\u5217\u8868\u3001\u961F\u5217\u3001\u96C6\u5408\u7ED3\u6784\u76F4\u63A5\u5B58\u53D6\uFF0C\u57FA\u4E8E\u5185\u5B58\uFF0C\u53EF\u6301\u4E45\u5316\u3002</p></blockquote><p><img src="'+s+'" alt="db-redis-overview.png"></p><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><h3 id="\u57FA\u7840\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u7840\u6570\u636E\u7C7B\u578B</h3><h4 id="string-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#string-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> String \u5B57\u7B26\u4E32</h4><ul><li><strong>\u7ED3\u6784\u5B58\u50A8\u7684\u503C\uFF1A</strong> \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6574\u6570\u3001\u6D6E\u70B9\u6570</li><li><strong>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B\uFF1A</strong> \u5BF9\u6574\u4E2A\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\u8FDB\u884C\u64CD\u4F5C\uFF1B\u5BF9\u6574\u6570\u8D27\u6D6E\u70B9\u6570\u8FDB\u884C\u81EA\u589E\u6216\u81EA\u51CF\u64CD\u4F5C\uFF1B</li></ul><h4 id="list-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#list-\u96C6\u5408" aria-hidden="true">#</a> List \u96C6\u5408</h4><ul><li><strong>\u7ED3\u6784\u5B58\u50A8\u7684\u503C\uFF1A</strong> \u4E00\u4E2A\u8054\u4FDD\uFF0C\u94FE\u8868\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A\u5B57\u7B26\u4E32</li><li><strong>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B\uFF1A</strong> \u5BF9\u94FE\u8868\u7684\u4E24\u7AEF\u8FDB\u884C push \u6216 pop \u64CD\u4F5C\uFF0C\u8BFB\u53D6\u5355\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF1B\u6839\u636E\u503C\u67E5\u627E\u6216\u5220\u9664\u5143\u7D20\uFF1B</li></ul><h4 id="set-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#set-\u96C6\u5408" aria-hidden="true">#</a> Set \u96C6\u5408</h4><ul><li><strong>\u7ED3\u6784\u5B58\u50A8\u7684\u503C\uFF1A</strong> \u5305\u542B\u5B57\u7B26\u4E32\u7684\u65E0\u5E8F\u96C6\u5408</li><li><strong>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B\uFF1A</strong> \u5B57\u7B26\u4E32\u7684\u96C6\u5408\uFF0C\u5305\u542B\u57FA\u7840\u7684\u65B9\u6CD5\u6709\u770B\u662F\u5426\u5B58\u5728\u3001\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\uFF1B\u8FD8\u5305\u542B\u8BA1\u7B97\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49</li></ul><h4 id="hash-\u6563\u5217" tabindex="-1"><a class="header-anchor" href="#hash-\u6563\u5217" aria-hidden="true">#</a> Hash \u6563\u5217</h4><ul><li><strong>\u7ED3\u6784\u5B58\u50A8\u7684\u503C\uFF1A</strong> \u5305\u542B\u952E\u503C\u5BF9\u7684\u65E0\u5E8F\u6563\u5217\u8868</li><li><strong>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B\uFF1A</strong> \u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20</li></ul><h4 id="zset-\u6709\u5E8F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#zset-\u6709\u5E8F\u96C6\u5408" aria-hidden="true">#</a> Zset \u6709\u5E8F\u96C6\u5408</h4><ul><li><strong>\u7ED3\u6784\u5B58\u50A8\u7684\u503C\uFF1A</strong> \u548C\u6563\u5217\u4E00\u6837\uFF0C\u7528\u4E8E\u5B58\u50A8\u952E\u503C\u5BF9</li><li><strong>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B\uFF1A</strong> \u5B57\u7B26\u4E32\u6210\u8BED\u4E0E\u6D6E\u70B9\u6570\u4E4B\u95F4\u7684\u6709\u5E8F\u6620\u5C04\uFF1B\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\u6709\u5206\u6570\u7684\u5927\u5C0F\u51B3\u5B9A\uFF1B\u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20\u4EE5\u53CA\u6839\u636E\u5206\u503C\u8303\u56F4\u6216\u6210\u5458\u6765\u83B7\u53D6\u5143\u7D20</li></ul><h3 id="\u7279\u6B8A\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u7279\u6B8A\u6570\u636E\u7C7B\u578B</h3><ul><li>HyperLogLogs\uFF08\u57FA\u6570\u7EDF\u8BA1\uFF09</li><li>Bitmap\uFF08\u4F4D\u5B58\u50A8\uFF09</li><li>geospatial\uFF08\u5730\u7406\u4F4D\u7F6E\uFF09</li><li>Stream</li></ul><h2 id="\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565" aria-hidden="true">#</a> \u7F13\u5B58\u6DD8\u6C70\u7B56\u7565</h2><p>Redis\u670D\u52A1\u5668\u7E41\u5FD9\u65F6,\u6709\u5927\u91CF\u4FE1\u606F\u8981\u4FDD\u5B58</p><p>\u5982\u679CRedis\u670D\u52A1\u5668\u5185\u5B58\u5168\u6EE1,\u518D\u8981\u5F80Redis\u4E2D\u4FDD\u5B58\u65B0\u7684\u6570\u636E,\u5C31\u9700\u8981\u6DD8\u6C70\u8001\u6570\u636E,\u624D\u80FD\u4FDD\u5B58\u65B0\u6570\u636E</p><ul><li>noeviction\uFF1A\u8FD4\u56DE\u9519\u8BEF**(\u9ED8\u8BA4)**</li><li>allkeys-random\uFF1A\u6240\u6709\u6570\u636E\u4E2D\u968F\u673A\u5220\u9664\u6570\u636E</li><li>volatile-random\uFF1A\u6709\u8FC7\u671F\u65F6\u95F4\u7684\u6570\u636E\u5E93\u4E2D\u968F\u673A\u5220\u9664\u6570\u636E</li><li>volatile-ttl\uFF1A\u5220\u9664\u5269\u4F59\u6709\u6548\u65F6\u95F4\u6700\u5C11\u7684\u6570\u636E</li><li>allkeys-lru\uFF1A\u6240\u6709\u6570\u636E\u4E2D\u5220\u9664\u4E0A\u6B21\u4F7F\u7528\u65F6\u95F4\u6700\u4E45\u7684\u6570\u636E</li><li>volatile-lru\uFF1A\u6709\u8FC7\u671F\u65F6\u95F4\u7684\u6570\u636E\u4E2D\u5220\u9664\u4E0A\u6B21\u4F7F\u7528\u65F6\u95F4\u6700\u4E45\u7684\u6570\u636E</li><li>allkeys-lfu\uFF1A\u6240\u6709\u6570\u636E\u4E2D\u5220\u9664\u4F7F\u7528\u9891\u7387\u6700\u5C11\u7684</li><li>volatile-lfu\uFF1A\u6709\u8FC7\u671F\u65F6\u95F4\u7684\u6570\u636E\u4E2D\u5220\u9664\u4F7F\u7528\u9891\u7387\u6700\u5C11\u7684</li></ul><h2 id="\u7F13\u5B58\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a> \u7F13\u5B58\u7A7F\u900F</h2><p>\u6B63\u5E38\u4E1A\u52A1\u4E0B,\u4ECE\u6570\u636E\u5E93\u67E5\u8BE2\u51FA\u7684\u6570\u636E\u53EF\u4EE5\u4FDD\u5B58\u5728Redis\u4E2D</p><p>\u4E0B\u6B21\u67E5\u8BE2\u65F6\u76F4\u63A5\u4ECERedis\u4E2D\u83B7\u5F97,\u5927\u5E45\u63D0\u9AD8\u54CD\u5E94\u901F\u5EA6,\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD</p><p>\u6240\u8C13\u7F13\u5B58\u7A7F\u900F,\u5C31\u662F\u67E5\u8BE2\u4E86\u4E00\u4E2A\u6570\u636E\u5E93\u4E2D\u90FD\u4E0D\u5B58\u5728\u7684\u6570\u636E</p><p>\u6211\u4EECRedis\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u6570\u636E,\u5B83\u5230\u6570\u636E\u5E93\u67E5,\u4E5F\u6CA1\u6709</p><p>\u5982\u679C\u8FD9\u6837\u7684\u8BF7\u6C42\u591A\u4E86,\u90A3\u4E48\u6570\u636E\u5E93\u538B\u529B\u5C31\u4F1A\u5F88\u5927</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5411Redis\u4E2D\u4FDD\u5B58null\u503C,\u6765\u9632\u6B62\u4E00\u4E2A\u67E5\u8BE2\u53CD\u590D\u7A7F\u900F</p><p>\u4F46\u662F\u8FD9\u6837\u7684\u7B56\u7565\u6709\u95EE\u9898</p><p>\u5982\u679C\u7528\u6237\u4E0D\u65AD\u66F4\u6362\u67E5\u8BE2\u5173\u952E\u5B57,\u53CD\u590D\u7A7F\u900F,\u4E5F\u662F\u5BF9\u6570\u636E\u5E93\u6027\u80FD\u6781\u5927\u7684\u5A01\u80C1</p><p>\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</p><p>\u4E8B\u5148\u521B\u5EFA\u597D\u5E03\u9686\u8FC7\u6EE4\u5668,\u5B83\u53EF\u4EE5\u5728\u8FDB\u5165\u4E1A\u52A1\u903B\u8F91\u5C42\u65F6\u5224\u65AD\u7528\u6237\u67E5\u8BE2\u7684\u4FE1\u606F\u6570\u636E\u5E93\u4E2D\u662F\u5426\u5B58\u5728,\u5982\u679C\u4E0D\u5B58\u5728\u4E8E\u6570\u636E\u5E93\u4E2D,\u76F4\u63A5\u7EC8\u6B62\u67E5\u8BE2\u8FD4\u56DE</p><h2 id="\u7F13\u5B58\u51FB\u7A7F" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a> \u7F13\u5B58\u51FB\u7A7F</h2><p>\u6B63\u5E38\u8FD0\u884C\u7684\u60C5\u51B5,\u6211\u4EEC\u8BBE\u8BA1\u7684\u5E94\u8BE5\u5728Redis\u4E2D\u4FDD\u5B58\u7684\u6570\u636E,\u5982\u679C\u6709\u8BF7\u6C42\u8BBF\u95EE\u5230Redis\u800CRedis\u6CA1\u6709\u8FD9\u4E2A\u6570\u636E</p><p>\u5BFC\u81F4\u8BF7\u6C42\u4ECE\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u8FD9\u79CD\u73B0\u8C61\u5C31\u662F\u7F13\u5B58\u51FB\u7A7F</p><p>\u4F46\u662F\u8FD9\u4E2A\u60C5\u51B5\u4E5F\u4E0D\u662F\u5F02\u5E38\u60C5\u51B5,\u56E0\u4E3A\u6211\u4EEC\u5927\u591A\u6570\u6570\u636E\u90FD\u9700\u8981\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4,\u800C\u8FC7\u671F\u65F6\u95F4\u5230\u65F6\u8FD9\u4E9B\u6570\u636E\u4E00\u5B9A\u4F1A\u4ECE\u6570\u636E\u5E93\u4E2D\u540C\u6B65</p><p>\u51FB\u7A7F\u53EA\u662F\u8FD9\u4E2A\u73B0\u8C61\u7684\u540D\u79F0,\u5E76\u4E0D\u662F\u4E0D\u5141\u8BB8\u7684</p><p><img src="'+r+'" alt="\u7F13\u5B58\u51FB\u7A7F.png"></p><h2 id="\u7F13\u5B58\u96EA\u5D29" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a> \u7F13\u5B58\u96EA\u5D29</h2><p>\u4E0A\u9762\u8BB2\u5230\u51FB\u7A7F\u73B0\u8C61</p><p>\u540C\u4E00\u65F6\u95F4\u53D1\u751F\u5C11\u91CF\u51FB\u7A7F\u662F\u6B63\u5E38\u7684</p><p>\u4F46\u662F\u5982\u679C\u51FA\u73B0\u540C\u4E00\u65F6\u95F4\u5927\u91CF\u51FB\u7A7F\u73B0\u8C61\u5C31\u4F1A\u5982\u4E0B\u56FE</p><p><img src="'+l+`" alt="\u7F13\u5B58\u96EA\u5D29.png"></p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B,Mysql\u4F1A\u77ED\u65F6\u95F4\u51FA\u73B0\u5F88\u591A\u65B0\u7684\u67E5\u8BE2\u8BF7\u6C42,\u8FD9\u6837\u5C31\u4F1A\u53D1\u751F\u6027\u80FD\u95EE\u9898</p><p>\u5982\u4F55\u907F\u514D\u8FD9\u6837\u7684\u95EE\u9898?</p><p>\u56E0\u4E3A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u901A\u5E38\u662F\u540C\u65F6\u52A0\u8F7D\u7684\u6570\u636E\u8BBE\u7F6E\u4E86\u76F8\u540C\u7684\u6709\u6548\u671F</p><p>\u6211\u4EEC\u9700\u8981\u5728\u8BBE\u7F6E\u6709\u6548\u671F\u65F6\u6DFB\u52A0\u4E00\u4E2A\u968F\u673A\u6570,\u5927\u91CF\u6570\u636E\u5C31\u4E0D\u4F1A\u540C\u65F6\u5931\u6548\u4E86,</p><h2 id="redis\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#redis\u6301\u4E45\u5316" aria-hidden="true">#</a> Redis\u6301\u4E45\u5316</h2><p>Redis\u5C06\u4FE1\u606F\u4FDD\u5B58\u5728\u5185\u5B58</p><p>\u5185\u5B58\u7684\u7279\u5F81\u5C31\u662F\u4E00\u65E6\u65AD\u7535,\u6240\u6709\u4FE1\u606F\u90FD\u4E22\u5931,Redis\u6765\u8BB2,\u6240\u6709\u6570\u636E\u4E22\u5931,\u5C31\u9700\u8981\u4ECE\u6570\u636E\u5E93\u4ECE\u65B0\u67E5\u8BE2\u6240\u6709\u6570\u636E,\u8FD9\u4E2A\u662F\u6162\u7684</p><p>\u66F4\u6709\u53EF\u80FD,Redis\u672C\u8EAB\u662F\u6709\u65B0\u6570\u636E\u7684,\u8FD8\u6CA1\u6709\u548C\u6570\u636E\u5E93\u540C\u6B65\u5C31\u65AD\u7535\u4E86</p><p>\u6240\u4EE5Redis\u652F\u6301\u4E86\u6301\u4E45\u5316\u65B9\u6848,\u5728\u5F53\u524D\u670D\u52A1\u5668\u5C06Redis\u4E2D\u7684\u6570\u636E\u4FDD\u5B58\u5728\u5F53\u5730\u786C\u76D8\u4E0A</p><p>Redis\u6062\u590D\u7B56\u7565\u6709\u4E24\u79CD</p><p><strong>RDB:</strong>(Redis Database Backup)</p><p>\u6570\u636E\u5E93\u5FEB\u7167,(\u5C06\u5F53\u524D\u6570\u636E\u5E93\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u7684\u6570\u636E\u4FDD\u5B58\u5728\u786C\u76D8\u4E0A),Redis\u751F\u6210\u4E00\u4E2Adump.rdb\u7684\u6587\u4EF6</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728Redis\u5B89\u88C5\u7A0B\u5E8F\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E</p><p>\u7A7A\u767D\u4F4D\u7F6E\u7F16\u5199\u5982\u4E0B\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>save 60 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>60\u8868\u793A\u79D2\u6570,\u65E21\u5206\u949F</p><p>5\u8868\u793Akey\u88AB\u4FEE\u6539\u7684\u6B21\u6570</p><p>\u914D\u7F6E\u6548\u679C:1\u5206\u949F\u5185\u5982\u679C\u67095\u4E2Akey\u4EE5\u4E0A\u88AB\u4FEE\u6539,\u5C31\u542F\u52A8rdb\u6570\u636E\u5E93\u5FEB\u7167\u7A0B\u5E8F</p><p>\u4F18\u70B9:</p><ul><li>\u56E0\u4E3A\u662F\u6574\u4F53Redis\u6570\u636E\u7684\u4E8C\u8FDB\u5236\u683C\u5F0F,\u6570\u636E\u6062\u590D\u662F\u6574\u4F53\u6062\u590D\u7684</li></ul><p>\u7F3A\u70B9:</p><ul><li><p>\u751F\u6210\u7684rdb\u6587\u4EF6\u662F\u4E00\u4E2A\u786C\u76D8\u4E0A\u7684\u6587\u4EF6,\u8BFB\u5199\u6548\u7387\u662F\u8F83\u4F4E\u7684</p></li><li><p>\u5982\u679C\u7A81\u7136\u65AD\u7535,\u53EA\u80FD\u6062\u590D\u6700\u540E\u4E00\u6B21\u751F\u6210\u7684rdb\u4E2D\u7684\u6570\u636E</p></li></ul><p><strong>AOF</strong>(Append Only File):</p><p>AOF\u7B56\u7565\u662F\u5C06Redis\u8FD0\u884C\u8FC7\u7684\u6240\u6709\u547D\u4EE4(\u65E5\u5FD7)\u5907\u4EFD\u4E0B\u6765</p><p>\u8FD9\u6837\u5373\u4F7F\u4FE1\u606F\u4E22\u5931,\u6211\u4EEC\u4E5F\u53EF\u80FD\u6839\u636E\u8FD0\u884C\u8FC7\u7684\u65E5\u5FD7,\u6062\u590D\u4E3A\u65AD\u7535\u524D\u7684\u6837\u5B50</p><p>\u5B83\u7684\u914D\u7F6E\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7279\u70B9:\u53EA\u4FDD\u5B58\u547D\u4EE4\u4E0D\u4FDD\u5B58\u6570\u636E</p><p>\u7406\u8BBA\u4E0ARedis\u8FD0\u884C\u8FC7\u7684\u547D\u4EE4\u90FD\u53EF\u4EE5\u4FDD\u5B58\u4E0B\u6765</p><p>\u4F46\u662F\u5B9E\u9645\u60C5\u51B5\u4E0B,Redis\u975E\u5E38\u7E41\u5FD9\u65F6,\u6211\u4EEC\u4F1A\u5C06\u65E5\u5FD7\u547D\u4EE4\u7F13\u5B58\u4E4B\u540E,\u6574\u4F53\u53D1\u9001\u7ED9\u5907\u4EFD,\u51CF\u5C11io\u6B21\u6570\u4EE5\u63D0\u9AD8\u5907\u4EFD\u7684\u6027\u80FD\u548C\u5BF9Redis\u6027\u80FD\u7684\u5F71\u54CD</p><p>\u5B9E\u9645\u5F00\u53D1\u4E2D,\u914D\u7F6E\u4E00\u822C\u4F1A\u91C7\u7528\u6BCF\u79D2\u5C06\u65E5\u5FD7\u6587\u4EF6\u53D1\u9001\u4E00\u6B21\u7684\u7B56\u7565,\u65AD\u7535\u6700\u591A\u4E22\u59311\u79D2\u6570\u636E</p><p>\u4E3A\u4E86\u51CF\u5C11\u65E5\u5FD7\u7684\u5927\u5C0F</p><p>Redis\u652F\u6301AOF rewrite</p><p>\u5C06\u4E00\u4E9B\u5DF2\u7ECF\u8FDB\u884C\u5220\u9664\u7684\u6570\u636E\u7684\u65B0\u589E\u547D\u4EE4\u4E5F\u4ECE\u65E5\u5FD7\u4E2D\u79FB\u9664,\u8FBE\u5230\u51CF\u5C11\u65E5\u5FD7\u5BB9\u91CF\u7684\u76EE\u7684</p><h2 id="redis\u5B58\u50A8\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#redis\u5B58\u50A8\u539F\u7406" aria-hidden="true">#</a> Redis\u5B58\u50A8\u539F\u7406</h2><p>Redis\u5C06\u5185\u5B58\u5212\u5206\u4E3A16384\u4E2A\u69FD(\u7C7B\u4F3Chash\u69FD)</p><p>\u5C06\u6570\u636E(key)\u4F7F\u7528CRC16\u7B97\u6CD5\u8BA1\u7B97\u51FA\u4E00\u4E2A\u57280~16383\u4E4B\u95F4\u7684\u503C</p><p>\u5C06\u6570\u636E\u5B58\u5230\u8FD9\u4E2A\u69FD\u4E2D</p><p>\u5F53\u518D\u6B21\u4F7F\u7528\u8FD9\u4E2Akey\u8BA1\u7B97\u65F6,\u76F4\u63A5\u4ECE\u8FD9\u4E2A\u69FD\u83B7\u53D6,\u5927\u5E45\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387</p><p><img src="`+t+'" alt="\u57FA\u672C\u6563\u5217\u7B97\u6CD5.png"></p><p>\u5B9E\u9645\u4E0A\u8FD9\u5C31\u662F\u6700\u57FA\u672C&quot;\u6563\u5217\u7B97\u6CD5&quot;</p><h2 id="redis\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#redis\u96C6\u7FA4" aria-hidden="true">#</a> Redis\u96C6\u7FA4</h2><p>\u6700\u5C0F\u72B6\u6001Redis\u662F\u4E00\u53F0\u670D\u52A1\u5668</p><p>\u8FD9\u53F0\u670D\u52A1\u5668\u7684\u72B6\u6001\u76F4\u63A5\u51B3\u5B9A\u7684Redis\u7684\u8FD0\u884C\u72B6\u6001</p><p>\u5982\u679C\u5B83\u5B95\u673A\u4E86,\u90A3\u4E48Redis\u670D\u52A1\u5C31\u6CA1\u4E86</p><p>\u7CFB\u7EDF\u9762\u4E34\u5D29\u6E83\u98CE\u9669</p><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u4E3B\u673A\u8FD0\u884C\u65F6\u4F7F\u7528\u4E00\u53F0\u5907\u673A</p><p><strong>\u4E3B\u4ECE\u590D\u5236</strong></p><p><img src="'+d+'" alt="\u4E3B\u4ECE\u590D\u5236.png"></p><p>\u4E5F\u5C31\u662F\u4E3B\u673A(master)\u5DE5\u4F5C\u65F6,\u5B89\u6392\u4E00\u53F0\u5907\u7528\u673A(slave)\u5B9E\u65F6\u540C\u6B65\u6570\u636E,\u4E07\u4E00\u4E3B\u673A\u5B95\u673A,\u6211\u4EEC\u53EF\u4EE5\u5207\u6362\u5230\u5907\u673A\u8FD0\u884C</p><p>\u7F3A\u70B9,\u8FD9\u6837\u7684\u65B9\u6848,slave\u8282\u70B9\u6CA1\u6709\u4EFB\u4F55\u5B9E\u8D28\u4F5C\u7528,\u53EA\u8981master\u4E0D\u5B95\u673A\u5B83\u5C31\u548C\u6CA1\u6709\u4E00\u6837,\u6CA1\u6709\u4F53\u73B0\u4EF7\u503C</p><p><strong>\u8BFB\u5199\u5206\u79BB</strong></p><p><img src="'+n+'" alt="\u8BFB\u5199\u5206\u79BB.png"></p><p>\u8FD9\u6837slave\u5728master\u6B63\u5E38\u5DE5\u4F5C\u65F6\u4E5F\u80FD\u5206\u62C5Master\u7684\u5DE5\u4F5C\u4E86</p><p>\u4F46\u662F\u5982\u679Cmaster\u5B95\u673A,\u5B9E\u9645\u4E0A\u4E3B\u5907\u673A\u7684\u5207\u6362,\u5B9E\u9645\u4E0A\u8FD8\u662F\u9700\u8981\u4EBA\u5DE5\u4ECB\u5165\u7684,\u8FD9\u8FD8\u662F\u9700\u8981\u65F6\u95F4\u7684</p><p>\u90A3\u4E48\u5982\u679C\u60F3\u5B9E\u73B0\u6545\u969C\u662F\u81EA\u52A8\u5207\u6362,\u4E00\u5B9A\u662F\u6709\u914D\u7F6E\u597D\u7684\u56FA\u5B9A\u7B56\u7565\u7684</p><p><strong>\u54E8\u5175\u6A21\u5F0F</strong>:\u6545\u969C\u81EA\u52A8\u5207\u6362</p><p><img src="'+h+'" alt="\u5355\u54E8\u5175.png"></p><p>\u54E8\u5175\u8282\u70B9\u6BCF\u9694\u56FA\u5B9A\u65F6\u95F4\u5411\u6240\u6709\u8282\u70B9\u53D1\u9001\u8BF7\u6C42</p><p>\u5982\u679C\u6B63\u5E38\u54CD\u5E94\u8BA4\u4E3A\u8BE5\u8282\u70B9\u6B63\u5E38</p><p>\u5982\u679C\u6CA1\u6709\u54CD\u5E94,\u8BA4\u4E3A\u8BE5\u8282\u70B9\u51FA\u73B0\u95EE\u9898,\u54E8\u5175\u80FD\u81EA\u52A8\u5207\u6362\u4E3B\u5907\u673A</p><p>\u5982\u679C\u4E3B\u673Amaster\u4E0B\u7EBF,\u81EA\u52A8\u5207\u6362\u5230\u5907\u673A\u8FD0\u884C</p><p>\u4F46\u662F\u8FD9\u6837\u7684\u6A21\u5F0F\u5B58\u5728\u95EE\u9898</p><p><img src="'+o+'" alt="\u54E8\u5175\u8BEF\u5224.png"></p><p>\u4F46\u662F\u5982\u679C\u54E8\u5175\u5224\u65AD\u8282\u70B9\u72B6\u6001\u65F6\u53D1\u751F\u4E86\u8BEF\u5224,\u90A3\u4E48\u5C31\u4F1A\u9519\u8BEF\u5C06master\u4E0B\u7EBF,\u964D\u4F4E\u6574\u4F53\u8FD0\u884C\u6027\u80FD</p><p><strong>\u54E8\u5175\u96C6\u7FA4</strong></p><p>\u4E0A\u6B21\u8BFE\u6211\u4EEC\u8BF4\u4E86\u54E8\u5175</p><p>\u5982\u679C\u54E8\u5175\u670D\u52A1\u5668\u662F\u4E00\u4E2A\u8282\u70B9,\u5B83\u8BEF\u5224master\u8282\u70B9\u51FA\u73B0\u4E86\u6545\u969C,\u5C06master\u8282\u70B9\u4E0B\u7EBF</p><p>\u4F46\u662Fmaster\u5176\u5B9E\u662F\u6B63\u5E38\u5DE5\u4F5C\u7684,\u6574\u4F53\u7CFB\u7EDF\u6548\u7387\u5C31\u4F1A\u5927\u6253\u6298\u6263</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u54E8\u5175\u8282\u70B9\u505A\u6210\u96C6\u7FA4,\u7531\u591A\u4E2A\u54E8\u5175\u6295\u7968\u51B3\u5B9A\u662F\u5426\u4E0B\u7EBF\u67D0\u4E00\u4E2A\u8282\u70B9</p><p><img src="'+g+'" alt="\u54E8\u5175\u96C6\u7FA4.png"></p><p>\u54E8\u5175\u96C6\u7FA4\u4E2D,\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u5B9A\u65F6\u5411master\u548Cslave\u53D1\u9001ping\u8BF7\u6C42</p><p>\u5982\u679Cping\u8BF7\u6C42\u67092\u4E2A(\u96C6\u7FA4\u7684\u534A\u6570\u8282\u70B9)\u4EE5\u4E0A\u7684\u54E8\u5175\u8282\u70B9\u6CA1\u6709\u6536\u5230\u6B63\u5E38\u54CD\u5E94,\u4F1A\u8BA4\u4E3A\u8BE5\u8282\u70B9\u4E0B\u7EBF</p><p><strong>\u5206\u7247\u96C6\u7FA4</strong></p><p>\u5F53\u4E1A\u52A1\u4E0D\u65AD\u6269\u5C55,\u5E76\u53D1\u4E0D\u65AD\u589E\u9AD8\u65F6</p><p>\u6709\u53EF\u80FD\u4E00\u4E2AMaster\u8282\u70B9\u505A\u5199\u64CD\u4F5C\u6027\u80FD\u4E0D\u8DB3,\u79F0\u4E3A\u4E86\u7CFB\u7EDF\u6027\u80FD\u7684\u74F6\u9888</p><p>\u8FD9\u65F6,\u5C31\u53EF\u4EE5\u90E8\u7F72\u591A\u4E2AMaster\u8282\u70B9,\u6BCF\u4E2A\u8282\u70B9\u4E5F\u652F\u6301\u4E3B\u4ECE\u590D\u5236</p><p>\u53EA\u662F\u6BCF\u4E2A\u8282\u70B9\u8D1F\u8D23\u4E0D\u540C\u7684\u5206\u7247</p><p>Redis0~16383\u53F7\u69FD,</p><p>\u4F8B\u5982MasterA\u590D\u52360~5000</p><p>MasterB\u590D\u52365001~10000</p><p>MasterC\u590D\u523610001~16383</p><p>\u4E00\u4E2Akey\u6839\u636ECRC16\u7B97\u6CD5\u53EA\u80FD\u5F97\u5230\u56FA\u5B9A\u7684\u7ED3\u679C,\u4E00\u5B9A\u5728\u6307\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\u627E\u5230\u6570\u636E</p><p><img src="'+m+'" alt="\u54E8\u5175\u5206\u7247\u96C6\u7FA4.png"></p><p>\u6709\u4E86\u8FD9\u4E2A\u96C6\u7FA4\u7ED3\u6784,\u6211\u4EEC\u5C31\u80FD\u66F4\u52A0\u7A33\u5B9A\u548C\u66F4\u52A0\u9AD8\u6548\u7684\u5904\u7406\u4E1A\u52A1\u8BF7\u6C42\u4E86</p><p><strong>\u4E3A\u4E86\u8282\u7701\u54E8\u5175\u670D\u52A1\u5668\u7684\u6210\u672C,\u6709\u4E9B\u5DE5\u4F5C\u5728Redis\u96C6\u7FA4\u4E2D\u76F4\u63A5\u6DFB\u52A0\u54E8\u5175\u529F\u80FD,\u65E2master/slave\u8282\u70B9\u5B8C\u6210\u6570\u636E\u8BFB\u5199\u4EFB\u52A1\u7684\u540C\u65F6\u4E5F\u90FD\u4E92\u76F8\u68C0\u6D4B\u5B83\u4EEC\u7684\u5065\u5EB7\u72B6\u6001</strong></p><h1 id="\u5E03\u9686\u8FC7\u6EE4\u5668\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u5E03\u9686\u8FC7\u6EE4\u5668\u4ECB\u7ECD" aria-hidden="true">#</a> \u5E03\u9686\u8FC7\u6EE4\u5668\u4ECB\u7ECD</h1><h2 id="\u4EC0\u4E48\u662F\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5E03\u9686\u8FC7\u6EE4\u5668</h2><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u80FD\u591F\u5B9E\u73B0\u4F7F\u7528\u8F83\u5C11\u7684\u7A7A\u95F4\u6765\u5224\u65AD\u4E00\u4E2A\u6307\u5B9A\u7684\u5143\u7D20\u662F\u5426\u5305\u542B\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D</p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u5E76\u4E0D\u4FDD\u5B58\u8FD9\u4E9B\u6570\u636E,\u6240\u4EE5\u53EA\u80FD\u5224\u65AD\u662F\u5426\u5B58\u5728,\u800C\u5E76\u4E0D\u80FD\u53D6\u51FA\u6539\u5143\u7D20</p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u5E38\u89C1\u4F7F\u7528\u573A\u666F</p><ol><li>idea\u4E2D\u7F16\u5199\u4EE3\u7801,\u4E00\u4E2A\u5355\u8BCD\u662F\u5426\u5305\u542B\u5728\u6B63\u786E\u62FC\u5199\u7684\u8BCD\u5E93\u4E2D(\u62FC\u5199\u4E0D\u6B63\u786E\u5212\u7EFF\u7EBF\u7684\u63D0\u793A)</li><li>\u516C\u5B89\u7CFB\u7EDF,\u6839\u636E\u8EAB\u4EFD\u8BC1\u53F7\\\u4EBA\u8138\u4FE1\u606F,\u5224\u65AD\u8BE5\u4EBA\u662F\u5426\u5728\u8FFD\u9003\u540D\u5355\u4E2D</li><li>\u722C\u866B\u68C0\u67E5\u4E00\u4E2A\u7F51\u5740\u662F\u5426\u88AB\u722C\u53D6\u8FC7</li></ol><p>.....</p><p>\u5B97\u65E8\u51E1\u662F\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u64CD\u4F5C,\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83</p><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668</h2><p>\u5E38\u89C4\u7684\u68C0\u67E5\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\u7684\u601D\u8DEF\u662F\u904D\u5386\u96C6\u5408,\u5224\u65AD\u5143\u7D20\u662F\u5426\u76F8\u7B49</p><p>\u8FD9\u6837\u7684\u67E5\u8BE2\u6548\u7387\u975E\u5E38\u4F4E\u4E0B</p><p>\u8981\u4FDD\u8BC1\u5FEB\u901F\u786E\u5B9A\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528HashMap</p><p>\u56E0\u4E3AHashMap\u5185\u90E8\u7684\u6563\u5217\u673A\u5236,\u4FDD\u8BC1\u66F4\u5FEB\u66F4\u9AD8\u6548\u7684\u627E\u5230\u5143\u7D20</p><p>\u6240\u4EE5\u5F53\u6570\u636E\u91CF\u8F83\u5C0F\u65F6,\u7528HashMap\u6216HashSet\u4FDD\u5B58\u5BF9\u8C61\u7136\u540E\u4F7F\u7528\u5B83\u6765\u5224\u5B9A\u5143\u7D20\u662F\u5426\u5B58\u5728\u662F\u4E0D\u9519\u7684\u9009\u62E9</p><p>\u4F46\u662F\u5982\u679C\u6570\u636E\u91CF\u592A\u5927,\u6BCF\u4E2A\u5143\u7D20\u90FD\u8981\u751F\u6210\u54C8\u5E0C\u503C\u6765\u4FDD\u5B58,\u6211\u4EEC\u4E5F\u8981\u4F9D\u9760\u54C8\u5E0C\u503C\u6765\u5224\u5B9A\u662F\u5426\u5B58\u5728,\u4E00\u822C\u60C5\u51B5\u4E0B,\u6211\u4EEC\u4E3A\u4E86\u4FDD\u8BC1\u5C3D\u91CF\u5C11\u7684\u54C8\u5E0C\u503C\u51B2\u7A81\u9700\u89818\u5B57\u8282\u54C8\u5E0C\u503C\u505A\u4FDD\u5B58</p><p>long\u53D6\u503C\u8303\u56F4:-9223372036854775808-----9223372036854775807</p><p>5\u4EBF\u6761\u6570\u636E \u6BCF\u67618\u5B57\u8282\u8BA1\u7B97\u540E\u7ED3\u679C\u4E3A\u9700\u89813.72G\u5185\u5B58,\u968F\u7740\u5185\u5B58\u6570\u589E\u957F,\u8FD9\u4E2A\u6570\u5B57\u53EF\u80FD\u66F4\u5927</p><p>\u6240\u4EE5Hash\u6563\u5217\u6216\u7C7B\u4F3C\u7B97\u6CD5\u53EF\u4EE5\u4FDD\u8BC1\u9AD8\u6548\u5224\u65AD\u5143\u7D20\u662F\u5426\u5B58\u5728,\u4F46\u662F\u6D88\u8017\u5185\u5B58\u8F83\u591A</p><p>\u6240\u4EE5\u6211\u4EEC\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u5B9E\u73B0,\u9AD8\u6548\u5224\u65AD\u662F\u5426\u5B58\u5728\u7684\u540C\u65F6,\u8FD8\u80FD\u8282\u7701\u5185\u5B58\u7684\u6548\u679C</p><p>\u4F46\u662F\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u7B97\u6CD5\u5929\u751F\u4F1A\u6709\u8BEF\u5224\u60C5\u51B5,\u9700\u8981\u80FD\u591F\u5BB9\u5FCD,\u624D\u80FD\u4F7F\u7528</p><h2 id="\u5E03\u9686\u8FC7\u6EE4\u5668\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5E03\u9686\u8FC7\u6EE4\u5668\u539F\u7406" aria-hidden="true">#</a> \u5E03\u9686\u8FC7\u6EE4\u5668\u539F\u7406</h2><ul><li>\u5DF4\u987F.\u5E03\u9686\u4E8E\u2F00\u4E5D\u4E03\u96F6\u5E74\u63D0\u51FA</li><li>\u2F00\u4E2A\u5F88\u957F\u7684\u2F06\u8FDB\u5236\u5411\u91CF\uFF08\u4F4D\u6570\u7EC4\uFF09</li><li>\u2F00\u7CFB\u5217\u968F\u673A\u51FD\u6570 (\u54C8\u5E0C)</li><li>\u7A7A\u95F4\u6548\u7387\u548C\u67E5\u8BE2\u6548\u7387\u2FBC</li><li>\u6709\u2F00\u5B9A\u7684\u8BEF\u5224\u7387\uFF08\u54C8\u5E0C\u8868\u662F\u7CBE\u786E\u5339\u914D\uFF09</li></ul><p><img src="'+c+'" alt="\u5E03\u9686\u8FC7\u6EE4\u5668\u539F\u7406.png"></p><p>semlinker</p><p>\u6211\u4EEC\u4F7F\u7528\u4E0D\u540C\u76843\u4E2Ahash\u7B97\u6CD5\u4E3A\u4F8B</p><p>\u7B97\u6CD51:semlinker--&gt;2</p><p>\u7B97\u6CD52:semlinker--&gt;6</p><p>\u7B97\u6CD53:semlinker--&gt;4</p><p>\u4F1A\u5728\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u4EA7\u751F\u5982\u4E0B\u5F71\u54CD</p><p><img src="'+u+'" alt="semlinker.png"></p><p>\u67E5\u8BE2&quot;Good&quot;\u5728\u4E0D\u5728\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D</p><p>\u7B97\u6CD51:Good--&gt;7</p><p>\u7B97\u6CD52:Good--&gt;3</p><p>\u7B97\u6CD53:Good--&gt;6</p><p>\u6211\u4EEC\u5224\u65ADGood\u5355\u8BCD\u751F\u6210\u76843,6,7\u4E09\u4E2A\u4F4D\u7F6E,\u53EA\u8981\u6709\u4E00\u4E2A\u4F4D\u7F6E\u662F0</p><p>\u5C31\u8868\u793A\u5F53\u524D\u96C6\u5408\u4E2D\u6CA1\u6709Good\u8FD9\u4E2A\u5355\u8BCD</p><p>\u4E00\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u4E0D\u53EF\u80FD\u5B58\u4E00\u4E2A\u5355\u8BCD,\u4E00\u822C\u5E03\u9686\u8FC7\u6EE4\u5668\u90FD\u662F\u4FDD\u5B58\u5927\u91CF\u6570\u636E\u7684</p><p>\u5982\u679C\u6709\u65B0\u7684\u5143\u7D20\u4FDD\u5B58\u5728\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D</p><p>kakuqo</p><p>\u7B97\u6CD51:kakuqo--&gt;3</p><p>\u7B97\u6CD52:kakuqo--&gt;4</p><p>\u7B97\u6CD53:kakuqo--&gt;7</p><p><img src="'+b+'" alt="kakuqo.png"></p><p>\u65B0\u7684\u5355\u8BCD\u751F\u62103,4,7\u4E2A\u4F4D\u7F6E</p><p>\u90A3\u4E48\u73B0\u5728\u8FD9\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D2,3,4,6,7\u90FD\u662F1\u4E86</p><p>\u5982\u679C\u53C8\u6709\u5355\u8BCDbad</p><p>bad</p><p>\u7B97\u6CD51:bad--&gt;2</p><p>\u7B97\u6CD52:bad--&gt;3</p><p>\u7B97\u6CD53:bad--&gt;6</p><p>\u5224\u65AD\u5E03\u9686\u8FC7\u6EE4\u56682,3,6\u90FD\u662F1,\u6240\u4EE5\u5E03\u9686\u8FC7\u6EE4\u5668\u4F1A\u8BA4\u4E3Abad\u662F\u5B58\u5728\u4E8E\u8FD9\u4E2A\u96C6\u5408\u4E2D\u7684</p><p><strong>\u8BEF\u5224\u5C31\u662F\u8FD9\u6837\u4EA7\u751F\u7684</strong></p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u8BEF\u5224\u7684\u6548\u679C:</p><ul><li>\u5E03\u9686\u8FC7\u6EE4\u5668\u5224\u65AD\u4E0D\u5B58\u5728\u7684,\u4E00\u5B9A\u4E0D\u5728\u96C6\u5408\u4E2D</li><li>\u5E03\u9686\u8FC7\u6EE4\u5668\u5224\u65AD\u5B58\u5728\u7684,\u6709\u53EF\u80FD\u4E0D\u5728\u96C6\u5408\u4E2D</li></ul><p>\u8FC7\u77ED\u7684\u5E03\u9686\u8FC7\u6EE4\u5668\u5982\u679C\u4FDD\u5B58\u4E86\u5F88\u591A\u7684\u6570\u636E,\u53EF\u80FD\u9020\u6210\u4E8C\u8FDB\u5236\u4F4D\u7F6E\u503C\u90FD\u662F1\u7684\u60C5\u51B5,\u4E00\u65E6\u53D1\u9001\u8FD9\u79CD\u60C5\u51B5,\u5E03\u9686\u8FC7\u6EE4\u5668\u5C31\u4F1A\u5224\u65AD\u4EFB\u4F55\u5143\u7D20\u90FD\u5728\u5F53\u524D\u96C6\u5408\u4E2D,\u5E03\u9686\u8FC7\u6EE4\u5668\u4E5F\u5C31\u5931\u6548\u4E86</p><p>\u6240\u4EE5\u6211\u4EEC\u8981\u7ED9\u5E03\u9686\u8FC7\u6EE4\u5668\u4E00\u4E2A\u5408\u9002\u7684\u5927\u5C0F\u624D\u80FD\u8BA9\u5B83\u66F4\u597D\u7684\u4E3A\u7A0B\u5E8F\u670D\u52A1</p><ul><li>\u4F18\u70B9 <ul><li>\u7A7A\u95F4\u6548\u7387\u548C\u67E5\u8BE2\u6548\u7387\u2FBC</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u6709\u2F00\u5B9A\u8BEF\u5224\u7387\u5373\u53EF\uFF08\u5728\u53EF\u63A5\u53D7\u8303\u56F4\u5185\uFF09\u3002</li><li>\u5220\u9664\u5143\u7D20\u56F0\u96BE(\u4E0D\u80FD\u5C06\u8BE5\u5143\u7D20hash\u7B97\u6CD5\u7ED3\u679C\u4F4D\u7F6E\u4FEE\u6539\u4E3A0,\u56E0\u4E3A\u53EF\u80FD\u4F1A\u5F71\u54CD\u5176\u4ED6\u5143\u7D20)</li><li>\u6781\u7AEF\u60C5\u51B5\u4E0B,\u5982\u679C\u5E03\u9686\u8FC7\u6EE4\u5668\u6240\u6709\u4E3A\u4F4D\u7F6E\u90FD\u662F1,\u90A3\u4E48\u4EFB\u4F55\u5143\u7D20\u90FD\u4F1A\u88AB\u5224\u65AD\u4E3A\u5B58\u5728\u4E8E\u96C6\u5408\u4E2D</li></ul></li></ul><h2 id="\u8BBE\u8BA1\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u8BBE\u8BA1\u5E03\u9686\u8FC7\u6EE4\u5668</h2><p>\u6211\u4EEC\u5728\u542F\u52A8\u5E03\u9686\u8FC7\u6EE4\u5668\u65F6,\u9700\u8981\u7ED9\u5B83\u5206\u914D\u4E00\u4E2A\u5408\u7406\u5927\u5C0F\u7684\u5185\u5B58</p><p>\u8FD9\u4E2A\u5927\u5C0F\u5E94\u8BE5\u6EE1\u8DB3</p><p>1.\u4E00\u4E2A\u53EF\u63A5\u53D7\u8303\u56F4\u7684\u5927\u5C0F</p><p>2.\u4E0D\u80FD\u6709\u592A\u9AD8\u7684\u8BEF\u5224\u7387</p><p>\u5185\u5B58\u7EA6\u8282\u7701,\u8BEF\u5224\u7387\u8D8A\u9AD8</p><p>\u5185\u5B58\u8D8A\u5927,\u8BEF\u5224\u7387\u8D8A\u4F4E</p><p>\u6570\u5B66\u5BB6\u5DF2\u7ECF\u7ED9\u6211\u4EEC\u4E86\u516C\u5F0F\u8BA1\u7B97\u8BEF\u5224\u7387</p><p><img src="'+_+'" alt="\u5E03\u9686\u8FC7\u6EE4\u5668\u8BEF\u5224\u7387\u516C\u5F0F.png"></p><p>\u4E0A\u9762\u662F\u6839\u636E\u8BEF\u5224\u7387\u8BA1\u7B97\u5E03\u9686\u8FC7\u6EE4\u5668\u957F\u5EA6\u7684\u516C\u5F0F</p><p>n \u662F\u5DF2\u7ECF\u6DFB\u52A0\u5143\u7D20\u7684\u6570\u91CF\uFF1B</p><p>k \u54C8\u5E0C\u7684\u6B21\u6570\uFF1B</p><p>m \u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u957F\u5EA6(\u4F4D\u6570\u7684\u5927\u5C0F)</p><p>\u8BA1\u7B97\u7ED3\u679C\u5C31\u662F\u8BEF\u5224\u7387</p><p>\u5982\u679C\u6211\u4EEC\u5DF2\u7ECF\u786E\u5B9A\u53EF\u63A5\u53D7\u7684\u8BEF\u5224\u7387,\u60F3\u8BA1\u7B97\u9700\u8981\u591A\u5C11 \u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u957F\u5EA6</p><p><img src="'+v+'" alt="\u5E03\u9686\u8FC7\u6EE4\u5668\u957F\u5EA6\u8BA1\u7B97.png"></p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u8BA1\u7B97\u5668</p><p>https://hur.st/bloomfilter</p><p>windows\u5B89\u88C5redisbloom\u5E03\u9686\u8FC7\u6EE4\u5668</p><p>https://blog.csdn.net/weixin_44770915/article/details/107918770</p>',206),x=[k];function f(y,w){return e(),i("div",null,x)}var M=p(R,[["render",f],["__file","Redis.html.vue"]]);export{M as default};
