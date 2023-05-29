(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{351:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"sass-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sass-语法"}},[s._v("#")]),s._v(" Sass 语法")]),s._v(" "),t("ol",[t("li",[s._v("变量：使用 $ 符号定义变量并赋值，例如 $primary-color: #008cba;。在其他地方使用时，可以直接引用该变量。")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("primary-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbody\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $primary-color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，body 元素设置背景颜色，使用"),t("code",[s._v("$primary-color")]),s._v("变量作为背景颜色的值。")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("嵌套规则：通过缩进来表示嵌套关系。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v(".container\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  .header\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  .content\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，.header 和 .content 都是 .container 的子元素，因此它们被嵌套在 .container 中。使用嵌套可以让样式表更加易读和组织。")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("混合器（Mixin）：可以将一组样式封装到一个 mixin 中，然后在需要的地方引用它。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("// 定义一个带有参数的混合器\n="),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mixin-button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$bg-color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" $text-color"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $bg-color\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $text-color\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px 20px\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 16px\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("cursor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pointer\n\n// 使用混合器创建一个类名为 my-button 的样式\n.my-button\n  +"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mixin-button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#4caf50"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #fff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，"),t("code",[s._v("@mixin")]),s._v(" 表示定义一个 mixin，"),t("code",[s._v("border-radius")]),s._v(" 是 mixin 的名称，"),t("code",[s._v("$radius")]),s._v(" 是 mixin 接受的参数。在 "),t("code",[s._v(".box")]),s._v(" 中，通过 "),t("code",[s._v("@include")]),s._v(" 引用了 border-radius mixin，并传入了参数 "),t("code",[s._v("5px")]),s._v("。")])]),s._v(" "),t("p",[s._v("其中，"),t("code",[s._v("=")]),s._v(" 符号和 "),t("code",[s._v("@")]),s._v(" 符号都可以用来定义混合器或函数。 @ 符号用于定义一个普通的混合器，如以下示例：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("// 定义一个混合器\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@mixin-name")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  // 混合器样式\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("// 使用混合器\n.my-selector")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  +mixin-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("继承（Extend）：可以使用 @extend 指令来继承一个选择器的样式。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v(".button\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #008cba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  &"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("hover\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("darken")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("#008cba"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 10%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n.primary-button\n  "),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@extend")]),s._v(" .button"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，"),t("code",[s._v(".primary-button")]),s._v(" 继承了 "),t("code",[s._v(".button")]),s._v(" 的样式，并在此基础上添加了 "),t("code",[s._v("font-weight: bold")]),s._v("属性。使用继承可以减少重复代码。这些是 Sass 的一些基本语法规则，Sass 还提供了条件语句、循环等高级功能，使得样式表更加灵活和易于维护。")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("条件语句：可以使用"),t("code",[s._v("@if")]),s._v(" 指令来执行条件判断。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("$"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n.box\n  "),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@if")]),s._v(" $width > 50px\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，如果 $width 大于 50px，则给 .box 设置宽度为 $width，否则设置宽度为 50px。")])]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("循环：可以使用"),t("code",[s._v("@for")]),s._v("、"),t("code",[s._v("@each")]),s._v(" 和 "),t("code",[s._v("@while")]),s._v(" 指令来执行循环操作。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@for")]),s._v(" $i from 1 through 5 \n  .item-#")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px * $i \n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px \n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这将生成下面的 CSS 代码：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 300px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 400px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item-5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ccc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[t("strong",[s._v("这个例子中，使用 "),t("code",[s._v("@for")]),s._v(" 循环从 1 到 5，其中，"),t("code",[s._v("#{$i}")]),s._v("是一个变量，并在每次迭代中生成一个带有不同宽度的 .item 类。用于计算每个"),t("code",[s._v(".item")]),s._v("元素的宽度。我们在这里使用了 Sass 的插值语法来将变量嵌入到字符串中。")])]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[s._v("注释：和 CSS 一样，Sass 支持单行注释（以 // 开头）和多行注释（以 /_ 开头和以 _/ 结尾）。例如：")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("// This is a single-line comment.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * This is a\n * multi-line comment.\n */")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这些是 Sass 的基本语法规则，掌握这些规则可以更好地编写 Sass 样式表。")])])}),[],!1,null,null,null);t.default=r.exports}}]);