(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{438:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"es2020-es11-新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es2020-es11-新特性"}},[s._v("#")]),s._v(" ES2020（ES11）新特性")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("点击查看")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("??")]),s._v("操作符")]),s._v(" "),t("li",[t("code",[s._v("?.")]),s._v("操作符")]),s._v(" "),t("li",[s._v("导出加强：export。")]),s._v(" "),t("li",[s._v("动态导入：await import()。")]),s._v(" "),t("li",[s._v("元信息：import.meta。")]),s._v(" "),t("li",[s._v("等待所有的 Promise 结束：Promise.allSettled()。")]),s._v(" "),t("li",[s._v("正则模式：matchAll()。")]),s._v(" "),t("li",[s._v("任意精度的整数：BigInt。")]),s._v(" "),t("li",[s._v("标准化对象：globalThis。")])])]),s._v(" "),t("h2",{attrs:{id:"操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[s._v("#")]),s._v(" ??操作符")]),s._v(" "),t("p",[s._v("??操作符是一个判断是否为空然后赋值的操作，如果没有这个操作符，我们通常使用||来简单的进行这个操作，如下所示：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" yourAge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" someBody"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面的代码意思是如果 someBody.age 是空，那么就将 yourAge 设置成为 18。但是上面代码有个问题，如果 someBody.age=0 的话，上述逻辑也成立。使用??操作符可以解决这个问题。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" yourAge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" someBody"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("?.操作符\n我们有时候在获取某个对象的属性的时候，需要进行对象的 null 判断，否则从 null 对象中取出属性就会报错，但是通常的?:操作符使用起来太复杂了，如果有多个对象和属性连写的情况下更是如此，如果使用?.操作符就会简单很多：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" school"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("class"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("student"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("age\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("同样?.还可以用在对象的方法上：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getAge"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面代码表示，如果 student 的 getAge()方法存在，则调用，否则返回 undefined。")]),s._v(" "),t("h2",{attrs:{id:"动态导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态导入"}},[s._v("#")]),s._v(" 动态导入")]),s._v(" "),t("p",[s._v("在 ES11 之前，我们可以使用下面的方式进行模块的导入：")]),s._v(" "),t("p",[s._v('import * as TestModule from "./test-module.js";\n但是上面的导入方式会有一些问题，首先是效率的问题，所有的 module 都需要在首次加载的时候导入，会导致程序效率的降低。另外上面的模块名字是写死的，不可以在程序运行的时候进行动态修改。也就是说上面的模块导入方式，不能对模块进行动态导入，或者按需导入，在使用上有诸多的不便。')]),s._v(" "),t("p",[s._v("为了解决这个问题，ES11 引入了新的 import()方法，使用这个方法，你可以对模块进行动态导入，并且通过设置模块名为变量的形式，可以对模块名进行动态修改。动态导入返回请求模块的模块名称空间对象的 promise 。因此，可以配合使用 async/await。")]),s._v(" "),t("h2",{attrs:{id:"import-meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-meta"}},[s._v("#")]),s._v(" import.meta")]),s._v(" "),t("p",[s._v("除了动态引入模块之外，import 还提供了一个元属性 meta，它包含了当前引入的模块的信息，目前他里面有一个 url 属性，代表模块被引用的 URL。如果想使用 URL 信息，那么可以在代码中使用 import.meta.url。")]),s._v(" "),t("p",[s._v("import.meta，返回当前模块的元信息。import.meta 只能在模块内部使用，如果在模块外部使用会报错。这个属性返回一个对象，该对象的各种属性就是当前运行的脚本的元信息。具体包含哪些属性，标准没有规定，由各个运行环境自行决定。一般来说，import.meta 至少会有下面两个属性。")]),s._v(" "),t("h3",{attrs:{id:"import-meta-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-meta-url"}},[s._v("#")]),s._v(" import.meta.url")]),s._v(" "),t("p",[s._v("import.meta.url 返回当前模块的 URL 路径。举例来说，当前模块主文件的路径是https://foo.com/main.js，import.meta.url就返回这个路径。如果模块里面还有一个数据文件data.txt，那么就可以用下面的代码，获取这个数据文件的路径。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意，Node.js 环境中，import.meta.url 返回的总是本地路径，即是 file:URL 协议的字符串，比如 file:///home/user/foo.js。")]),s._v(" "),t("h3",{attrs:{id:"import-meta-scriptelement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-meta-scriptelement"}},[s._v("#")]),s._v(" import.meta.scriptElement")]),s._v(" "),t("p",[s._v("import.meta.scriptElement 是浏览器特有的元属性，返回加载模块的那个"),t("code",[s._v("<script>")]),s._v("元素，相当于 "),t("code",[s._v("document.currentScript")]),s._v(" 属性。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HTML")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <script type="module" src="my-module.js" data-foo="abc"><\/script>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// my-module.js 内部执行下面的代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scriptElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "abc"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"export-加强"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-加强"}},[s._v("#")]),s._v(" export 加强")]),s._v(" "),t("p",[s._v("对于导出模块需要重命名的情况，我们不能直接导出，而是必须先在 import 的时候进行重命名，然后再使用 export 将重命名的模块导出：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" myModule "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./test-module.js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" myModule "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果使用 export 的增强，则不需要使用 import，直接使用 export 导出即可：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("myModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./test-module.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"promise-allsettled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise-allsettled"}},[s._v("#")]),s._v(" Promise.allSettled()")]),s._v(" "),t("p",[s._v("自从 Promise 引入之后，有两个方法可以对 Promise 进行组合，分别是 Promise.all()和 Promise.race()，他们分别表示返回所有的 Promise 和返回最快的那个。")]),s._v(" "),t("p",[s._v("对于 Promise.all()来说，它会等待所有的 Promise 都运行完毕之后返回，如果其中有一个 Promise 被 rejected，那么整个 Promise.all()都会被 rejected。在这种情况下，如果有一个 Promise 被 rejected，其他的 Promise 的结果也都获取不了。")]),s._v(" "),t("p",[s._v("为了解决这个问题，ES11 引入了 Promise.allSettled()方法，这个方法会等待所有的 Promise 结束，不管他们是否被 rejected。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" promises "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("promise1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/do1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("promise2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/do2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" allResults "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" Promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("allSettled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("promises"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" errors "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" results"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rejected'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reason"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"string-protype-matchall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-protype-matchall"}},[s._v("#")]),s._v(" String.protype.matchAll()")]),s._v(" "),t("p",[s._v("以前，带字符串参数的 String.match()仅返回第一个匹配。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Between'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" matches "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'e'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("matches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "e"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("添加/g 模式：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Between'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ret "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// (3) ["e","e","e"];')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("ES11 引入了 matchAll()方法。这个方法可以简单的返回一个遍历器，通过遍历这个遍历器，就可以得到所有的匹配的值，如下所示：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regExp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("yyds(\\d+)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yyds1 is a very good yyds2'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" matches "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("matchAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regExp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" match "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" matches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("使用.matchAll()的好理由:")]),s._v(" "),t("ul",[t("li",[s._v("在与捕获组一起使用时，它可以更加优雅，捕获组只是使用()提取模式的正则表达式的一部分。")]),s._v(" "),t("li",[s._v("它返回一个迭代器而不是一个数组，迭代器本身是有用的。")]),s._v(" "),t("li",[s._v("迭代器可以使用扩展运算符(…)转换为数组。")]),s._v(" "),t("li",[s._v("它避免了带有/g 标志的正则表达式，当从数据库或外部源检索未知正则表达式并与陈旧的 RegEx 对象一起使用时，它非常有用。")]),s._v(" "),t("li",[s._v("使用 RegEx 对象创建的正则表达式不能使用点(.)操作符链接。")]),s._v(" "),t("li",[s._v("高级: RegEx 对象更改跟踪最后匹配位置的内部.lastindex 属性，这在复杂的情况下会造成严重破坏。")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'black*raven lime*parrot white*seagull'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(?<color>.*?)\\*(?<bird>[a-z0-9]+)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" match "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("matchAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" index "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" input "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("input\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(" at ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(" with '")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("groups"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("groups"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bird"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"bigint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bigint"}},[s._v("#")]),s._v(" BigInt")]),s._v(" "),t("p",[s._v("ES11 引入了新的数据类型 BigInt，在这之前，javascript 中表示数字的对象是 Number，它可以表示 64-bit 的浮点类型数字。当然它也可以代表整数，但是整数表示的最大值是 2^53，也可以用 Number.MAX_SAFE_INTEGER 来表示。")]),s._v(" "),t("p",[s._v("一般来说 Number 已经够用了，但是如果在某些情况下需要对 64-bit 的整数进行存储或者运算，或者要表示的范围超过了 64-bit 的话，Number 就不够用了。怎么办呢？如果只是存储的话，可以存储为字符串，但是第二种字符串就不适用了。于是引入了 BigInt 来解决这个问题。要表示 BigInt，只需要在数字的后面加上 n 即可。")]),s._v(" "),t("p",[s._v("BigInt 是第七种原始类型。BigInt 是一个任意精度的整数。这意味着变量现在可以表示 ²⁵³ 数字，而不仅仅是 9007199254740992。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bigInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112233445566778899n")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者使用构造函数来构造 bigInt：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bigInt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("BigInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'112233445566778899'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以使用 typeof 来查看 bigInt 的类型。要注意的是虽然 Number 和 BigInt 都代表的是数字，但是两者是不能混用的，你不能将一个 Number 和一个 BigInt 相加。这会报 TypeError 异常。如果非要进行操作，那么可以使用 BigInt 构造函数将 Number 转换成为 BigInt 之后再进行。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 追加 n 以创建 BigInt")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在过去，不支持大于 9007199254740992 的整数值。如果超过，该值将锁定为 MAX_SAFE_INTEGER + 1:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" limit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAX_SAFE_INTEGER")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740991")]),s._v("\n\nlimit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740992")]),s._v("\n\nlimit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740992 <--- MAX_SAFE_INTEGER + 1 exceeded")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" larger "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740991n")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740991n")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" integer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("BigInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9007199254740991")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// initialize with number")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740991n")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" same "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("BigInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9007199254740991'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// initialize with "string"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 9007199254740991n")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"globalthis-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#globalthis-对象"}},[s._v("#")]),s._v(" globalThis 对象")]),s._v(" "),t("p",[s._v("在 ES10 之前，globalThis 还没有标准化，在平时的项目可以通过以下方式来兼容不同的平台。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getGlobal")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" self "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" window "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" window\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" global\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unable to locate global object'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("但即使这样也不总是奏效。因此，ES10 添加了 globalThis 对象，从现在开始，该对象用于在任何平台上访问全局作用域。")])])}),[],!1,null,null,null);t.default=e.exports}}]);