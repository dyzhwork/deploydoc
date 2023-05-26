(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{350:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-配置"}},[s._v("#")]),s._v(" Git 配置")]),s._v(" "),t("p",[s._v("Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。")]),s._v(" "),t("p",[s._v("这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：")]),s._v(" "),t("h2",{attrs:{id:"一、配置用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、配置用户信息"}},[s._v("#")]),s._v(" 一、配置用户信息")]),s._v(" "),t("p",[s._v("对所有本地仓库的用户信息进行配置,配置个人的用户名称和电子邮件地址：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对你的commit操作设置关联的用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yourname"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对你的commit操作设置关联的邮箱地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"youremail@xxx.com"')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用有帮助的彩色命令行输出(一般不配置)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" color.ui auto\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"二、配置-ssh-秘钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、配置-ssh-秘钥"}},[s._v("#")]),s._v(" 二、配置 ssh 秘钥")]),s._v(" "),t("h3",{attrs:{id:"_1-配置-ssh-秘钥背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-ssh-秘钥背景"}},[s._v("#")]),s._v(" ① 配置 ssh 秘钥背景")]),s._v(" "),t("p",[s._v("在往 github 上 push 项目的时候，如果走 https 的方式，每次都需要输入账号密码，非常麻烦。而采用 ssh 的方式，就不再需要输入，只需要在 github 自己账号下配置一个 SSH KEY 即可！")]),s._v(" "),t("p",[s._v("绝大多数人会使用 httpsUrl 克隆来说会比较方便，复制 httpsUrl 然后到 git Bash 里面直接用 clone 命令克隆到本地就好了。而使用 SSHUrl 克隆却需要在克隆之前先配置和添加 SSH 秘钥。")]),s._v(" "),t("p",[s._v("如果要使用 SSHUrl 克隆的话，需要以下几个要求:")]),s._v(" "),t("ul",[t("li",[s._v("你对仓库有权限")]),s._v(" "),t("li",[s._v("配置和添加 SSH 秘钥")])]),s._v(" "),t("h3",{attrs:{id:"_2-https-和-ssh-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-https-和-ssh-的区别"}},[s._v("#")]),s._v(" ② https 和 SSH 的区别")]),s._v(" "),t("ul",[t("li",[s._v("前者可以随意克隆 github 上的项目，而不管是谁的；而后者则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH KEY ，否则无法克隆。")]),s._v(" "),t("li",[s._v("httpsUrl 在 push 的时候是需要验证用户名和密码的；而 SSH 在 push 的时候，是不需要输入用户名的，如果配置 SSH KEY 的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。")])]),s._v(" "),t("h3",{attrs:{id:"_3-生成-ssh-keygen-完整命令如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成-ssh-keygen-完整命令如下"}},[s._v("#")]),s._v(" ③ 生成 ssh-keygen 完整命令如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("其中：")]),s._v(" "),t("ul",[t("li",[s._v("-t rsa 指定密钥类型为 RSA；")]),s._v(" "),t("li",[s._v("-b 4096 指定密钥长度为 4096 位，这是目前推荐的安全长度；")]),s._v(" "),t("li",[s._v('-C "your_email@test.com" 可选项，添加一个注释，方便标识该密钥的用途或所属人。将your_email@test.com替换成你自己的电子邮件地址。')])])]),s._v(" "),t("p",[s._v("执行完整命令后，会提示你输入密钥文件的名称和存储路径,一路回车确认后完成。默认情况下，私钥存储在"),t("code",[s._v("用户目录下")]),s._v(" .ssh/id_rsa 中，公钥存储在"),t("code",[s._v("用户目录下")]),s._v(" .ssh/id_rsa.pub 中。")]),s._v(" "),t("h3",{attrs:{id:"_4-将id-rsa-pub文件内容复制添加到-github-或者-gitee-公钥管理处保存即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将id-rsa-pub文件内容复制添加到-github-或者-gitee-公钥管理处保存即可"}},[s._v("#")]),s._v(" ④ 将"),t("code",[s._v("id_rsa.pub")]),s._v("文件内容复制添加到 github 或者 gitee 公钥管理处保存即可.")]),s._v(" "),t("h3",{attrs:{id:"_5-验证是否设置成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证是否设置成功"}},[s._v("#")]),s._v(" ⑤ 验证是否设置成功")]),s._v(" "),t("p",[s._v("现在验证一下用手中的私有密钥与 GitHub 进行认证和通信")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("出现下面信息即为成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Hi xxx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"三、配置忽略改变大小写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、配置忽略改变大小写"}},[s._v("#")]),s._v(" 三、配置忽略改变大小写")]),s._v(" "),t("p",[s._v("正常情况下,在开发过程中,你所写的代码文件名大小写通常会被默认忽略,也就是说,刚开始新建一个文件如:"),t("code",[s._v("TEST.vue")]),s._v(",但是后续改动成"),t("code",[s._v("Test.vue")]),s._v(",严格来说,这就是两个不同的文件,但是项目中默认 git 不会检测文件名发生变化。对于一开始就新建的文件名问题不大。但是提交了文件推送到远程再修改就有可能造成问题:导致本地代码与远程代码不一致。")]),s._v(" "),t("p",[s._v("所以提交代码时,先利用终端指令来检查下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--get")]),s._v(" core.ignorecase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果上述命令返回"),t("code",[s._v("true")]),s._v(",说明项目中 git 是忽略大小写的,因此你最好执行以下命令:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.ignorecase "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再次执行以下命令:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--get")]),s._v(" core.ignorecase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回 "),t("code",[s._v("false")]),s._v(",则设置成功,禁止忽略大小写,也就是说,修改项目文件名大小写将会提示修改文件。这样设置完成后，进行 git status 可发现当前文件名称差异显示出来了；若是提交后进行的设置，可进入本地代码，将文件名改为 test2（原文件名 TEST），待提交后，再修改为 test")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("温馨提示->需要注意的是:")]),s._v(" "),t("p",[s._v("当前配置设置仅针对当前项目.git，其他项目需重新配置")])]),s._v(" "),t("h2",{attrs:{id:"四、push-到多个仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、push-到多个仓库"}},[s._v("#")]),s._v(" 四、PUSH 到多个仓库")]),s._v(" "),t("h3",{attrs:{id:"_1-首先应该查看-git-当前绑定有哪些仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先应该查看-git-当前绑定有哪些仓库"}},[s._v("#")]),s._v(" ① 首先应该查看 Git 当前绑定有哪些仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("正常情况下,将会返回如下格式")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("origin  git@gitee.com:xxxxxx/yyyyyy.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norigin  git@gitee.com:xxxxxx/yyyyyy.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这个表明你已经绑定一个远程仓库"),t("code",[s._v("git@gitee.com:xxxxxx/yyyyyy.git")]),s._v("了,如果你需要新增另外的仓库"),t("code",[s._v("git@gitee.com:mmmmm/nnnnn.git")]),s._v(",在 push 时同时提交两个仓库,你需要"),t("code",[s._v("新增远端仓库链接")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_2-执行如下命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行如下命令"}},[s._v("#")]),s._v(" ② 执行如下命令:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--add")]),s._v(" origin git@gitee.com:mmmmm/nnnnn.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-此时再次查看远端绑定的仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-此时再次查看远端绑定的仓库"}},[s._v("#")]),s._v(" ③ 此时再次查看远端绑定的仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将会返回")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("orgin   git@gitee.com:xxxxxx/yyyyyy.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norgin   git@gitee.com:xxxxxx/yyyyyy.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norgin   origin git@gitee.com:mmmmm/nnnnn.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_4-这个时候在-git-push-时将会同时推送到两个仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-这个时候在-git-push-时将会同时推送到两个仓库"}},[s._v("#")]),s._v(" ④ 这个时候在 git push 时将会同时推送到两个仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远端master分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);