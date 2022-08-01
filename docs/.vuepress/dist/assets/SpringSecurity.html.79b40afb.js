import{_ as e,o as a,c as i,a as r}from"./app.7f226d87.js";var p="/images/\u666E\u901A\u767B\u9646.png",s="/images/session\u5171\u4EAB.png",t="/images/jwt\u4EE4\u724C.png",n="/images/jwt\u767B\u9646\u6D41\u7A0B.png";const h={},d=r('<h1 id="spring-security" tabindex="-1"><a class="header-anchor" href="#spring-security" aria-hidden="true">#</a> Spring Security</h1><p>Spring Security\u6846\u67B6\u7528\u4E8E\u5B9E\u73B0\u767B\u5F55</p><p>\u540C\u65F6\u8FD8\u53EF\u4EE5\u5C06\u5F53\u524D\u767B\u5F55\u7528\u6237\u7684\u6743\u9650\u4FE1\u606F\u4FDD\u5B58</p><p>\u6211\u4EEC\u5728\u9879\u76EE\u4E2D\u8981\u9A8C\u8BC1\u5F53\u524D\u7528\u6237\u662F\u5426\u5177\u5907\u67D0\u4E2A\u6743\u9650\u65F6</p><p>\u53EF\u4EE5\u518D\u63A7\u5236\u5668\u65B9\u6CD5\u4EE3\u7801\u524D\u6DFB\u52A0@PreAuthorize(&quot;[\u6743\u9650\u540D\u79F0]&quot;)SpringSecurity\u5728\u8FD0\u884C\u8BE5\u65B9\u6CD5\u4E4B\u524D\u8FDB\u884C\u6838\u67E5</p><p>\u5982\u679C\u4E0D\u5177\u5907\u8FD9\u4E2A\u6743\u9650\u4F1A\u8FD4\u56DE403\u72B6\u6001\u7801</p><h1 id="\u5173\u4E8E\u5355\u70B9\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5355\u70B9\u767B\u5F55" aria-hidden="true">#</a> \u5173\u4E8E\u5355\u70B9\u767B\u5F55</h1><h2 id="\u5FAE\u670D\u52A1\u7684\u4F1A\u8BDD\u4FDD\u6301\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u7684\u4F1A\u8BDD\u4FDD\u6301\u95EE\u9898" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u7684\u4F1A\u8BDD\u4FDD\u6301\u95EE\u9898</h2><p>\u6211\u4EEC\u5728\u5FAE\u670D\u52A1\u7684\u67B6\u6784\u4E0B,\u5B8C\u6210\u767B\u5F55,\u548C\u5355\u673A\u6A21\u5F0F\u7684\u767B\u5F55\u662F\u6709\u5F88\u5927\u533A\u522B\u7684</p><p>\u9996\u5148\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u666E\u901A\u767B\u5F55\u548C\u5FAE\u670D\u52A1\u767B\u5F55\u7684\u533A\u522B</p><p><img src="'+p+'" alt="\u666E\u901A\u767B\u9646.png"></p><p>\u4E0A\u9762\u7684\u56FE\u7247,\u8868\u793A\u6211\u4EEC\u5728\u5FAE\u670D\u52A1\u7CFB\u7EDF\u4E2D\u767B\u5F55\u65F6\u9047\u5230\u7684\u95EE\u9898</p><p>\u6211\u4EEC\u5728\u7528\u6237\u6A21\u5757\u4E2D\u767B\u5F55,\u53EA\u662F\u5C06\u7528\u6237\u4FE1\u606F\u4FDD\u5B58\u5728\u7528\u6237\u6A21\u5757\u7684session\u4E2D</p><p>\u800C\u8FD9\u4E2Asession\u4E0D\u4F1A\u548C\u5176\u4ED6\u6A21\u5757\u5171\u4EAB</p><p>\u6240\u4EE5\u5728\u6211\u4EEC\u8BBF\u95EE\u8BA2\u5355\u6A21\u5757\u6216\u5176\u4ED6\u6A21\u5757\u65F6,\u901A\u8FC7sessionid\u5E76\u4E0D\u80FD\u83B7\u5F97\u5728\u7528\u6237\u6A21\u5757\u4E2D\u767B\u5F55\u6210\u529F\u7684\u4FE1\u606F</p><p>\u8FD9\u6837\u5C31\u4E22\u5931\u7684\u7528\u6237\u4FE1\u606F,\u4E0D\u80FD\u5B8C\u6210\u4E1A\u52A1</p><p>\u5E02\u9762\u4E0A\u73B0\u5728\u5927\u591A\u4F7F\u7528JWT\u6765\u5B9E\u73B0\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u7684\u4F1A\u8BDD\u4FDD\u6301</p><p>\u4E5F\u5C31\u662F\u5728\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A\u767B\u5F55\u6210\u529F\u540E,\u5FAE\u670D\u52A1\u7684\u5176\u4ED6\u6A21\u5757\u4E5F\u80FD\u8BC6\u522B\u7528\u6237\u7684\u767B\u5F55\u4FE1\u606F</p><p>\u8FD9\u4E2A\u6280\u672F\u5C31\u662F\u5355\u70B9\u767B\u5F55</p><h2 id="\u5355\u70B9\u767B\u5F55\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u767B\u5F55\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u5355\u70B9\u767B\u5F55\u89E3\u51B3\u65B9\u6848</h2><h3 id="session\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#session\u5171\u4EAB" aria-hidden="true">#</a> Session\u5171\u4EAB</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u6838\u5FC3\u601D\u60F3\u662F\u5C06\u7528\u6237\u7684\u767B\u5F55\u4FE1\u606F\u5171\u4EAB\u7ED9\u5176\u4ED6\u6A21\u5757</p><p>\u9002\u7528\u4E8E\u5C0F\u578B\u7684,\u7528\u6237\u91CF\u4E0D\u5927\u7684\u5FAE\u670D\u52A1\u9879\u76EE</p><p><img src="'+s+'" alt="session\u5171\u4EAB.png"></p><p>\u5C06\u767B\u5F55\u6210\u529F\u7684\u7528\u6237\u4FE1\u606F\u5171\u4EAB\u7ED9Redis</p><p>\u5176\u4ED6\u6A21\u5757\u6839\u636EsessionId\u83B7\u5F97Redis\u4E2D\u4FDD\u5B58\u7684\u7528\u6237\u4FE1\u606F\u5373\u53EF</p><ul><li>\u8FD9\u6837\u505A\u6700\u5927\u7684\u7F3A\u70B9\u5C31\u662F\u5185\u5B58\u4E25\u91CD\u5197\u4F59,\u4E0D\u9002\u5408\u5927\u91CF\u7528\u6237\u7684\u5FAE\u670D\u52A1\u9879\u76EE</li></ul><h3 id="jwt\u4EE4\u724C" tabindex="-1"><a class="header-anchor" href="#jwt\u4EE4\u724C" aria-hidden="true">#</a> JWT\u4EE4\u724C</h3><p>\u8FD9\u79CD\u767B\u5F55\u65B9\u5F0F,\u6700\u5927\u7684\u4F18\u70B9\u5C31\u662F\u4E0D\u5360\u7528\u5185\u5B58</p><p><img src="'+t+'" alt="jwt\u4EE4\u724C.png"></p><p>\u751F\u6210\u7684JWT\u7531\u5BA2\u6237\u7AEF\u81EA\u5DF1\u4FDD\u5B58,\u4E0D\u5360\u7528\u670D\u52A1\u5668\u5185\u5B58</p><p>\u5728\u9700\u8981\u8868\u660E\u81EA\u5DF1\u7528\u6237\u8EAB\u4EFD\\\u4FE1\u606F\u65F6,\u5C06JWT\u4FE1\u606F\u4FDD\u5B58\u5230\u8BF7\u6C42\u5934\u4E2D\u53D1\u9001\u8BF7\u6C42\u5373\u53EF</p><h2 id="jwt\u767B\u5F55\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#jwt\u767B\u5F55\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> Jwt\u767B\u5F55\u6D41\u7A0B\u56FE</h2><p><img src="'+n+'" alt="jwt\u767B\u9646\u6D41\u7A0B.png"></p>',34),c=[d];function o(l,u){return a(),i("div",null,c)}var g=e(h,[["render",o],["__file","SpringSecurity.html.vue"]]);export{g as default};