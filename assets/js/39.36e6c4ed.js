(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{360:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、配置改变大小写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、配置改变大小写"}},[s._v("#")]),s._v(" 一、配置改变大小写")]),s._v(" "),t("p",[s._v("正常情况下,在开发过程中,你所写的代码文件名大小写通常会被默认忽略,也就是说,刚开始新建一个文件如:"),t("code",[s._v("TEST.vue")]),s._v(",但是后续改动成"),t("code",[s._v("Test.vue")]),s._v(",严格来说,这就是两个不同的文件,但是项目中默认 git 不会检测文件名发生变化。对于一开始就新建的文件名问题不大。但是提交了文件推送到远程再修改就有可能造成问题:导致本地代码与远程代码不一致。")]),s._v(" "),t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://dyzhwork.github.io/images/Git/git2.png",expression:"'https://dyzhwork.github.io/images/Git/git2.png'"}],staticStyle:{display:"block",margin:"auto",width:"50%"}}),s._v(" "),t("p",[s._v("所以提交代码时,先利用终端指令来检查下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--get")]),s._v(" core.ignorecase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果上述命令返回"),t("code",[s._v("true")]),s._v(",说明项目中 git 是忽略大小写的,因此你最好执行以下命令:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.ignorecase "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再次执行以下命令:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--get")]),s._v(" core.ignorecase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回 "),t("code",[s._v("false")]),s._v(",则设置成功,禁止忽略大小写,也就是说,修改项目文件名大小写将会提示修改文件。这样设置完成后，进行 git status 可发现当前文件名称差异显示出来了；若是提交后进行的设置，可进入本地代码，将文件名改为 test2（原文件名 TEST），待提交后，再修改为 test")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("温馨提示->需要注意的是:")]),s._v(" "),t("p",[s._v("当前配置设置仅针对当前项目.git，其他项目需重新配置")])])])}),[],!1,null,null,null);t.default=n.exports}}]);