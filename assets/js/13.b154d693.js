(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{390:function(a,t,s){"use strict";s.r(t);var e=s(44),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("p",[a._v("文档地址")]),a._v(" "),s("h2",{attrs:{id:"docker-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[a._v("#")]),a._v(" Docker 常用命令")]),a._v(" "),s("h3",{attrs:{id:"镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[a._v("#")]),a._v(" 镜像命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker version # 显示docker版本信息\ndocker info # 显示docker系统信息，包括镜像和容器数量\ndocker 命令 --help # 显示docker帮助信息\n\ndocker images # 显示当前有的镜像\ndocker search 名称 # 搜索镜像 \ndocker pull 名称[:tag] # 下载镜像\ndocker rmi -f # 删除镜像\n")])])]),s("h3",{attrs:{id:"容器命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[a._v("#")]),a._v(" 容器命令")]),a._v(" "),s("h4",{attrs:{id:"启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('docker run [可选参数] 容器\n#参数说明\n--name="Name" # 为启动的容器命名\n-d # 后台运行\n-it # 使用交互方式运行，进入容器查看内容\n-p # 指定端口\n\t-p 主机端口:容器端口\n\t-p ip:主机端口:容器端口\n\t-p 容器端口\n\t容器端口\n-P # 随机指定端口\n-e # 环境配置\n')])])]),s("h4",{attrs:{id:"查看运行的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看运行的容器"}},[a._v("#")]),a._v(" 查看运行的容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker ps # 列出当前运行的容器\n\t-a # 查看曾经运行的容器\n\t-n=? # 显示最近创建的容器\n\t-q # 只显示容器id\n")])])]),s("h4",{attrs:{id:"退出容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[a._v("#")]),a._v(" 退出容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("exit # 直接退出容器并停止\nctrl+p+q # 退出不停止\n")])])]),s("h4",{attrs:{id:"删除容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker rm 容器id # 删除指定容器，不能删除正在运行的容器，强删rm -f\ndocker rm -f $(docker ps -aq) # 全部删除\n")])])]),s("h4",{attrs:{id:"启动和停止容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动和停止容器"}},[a._v("#")]),a._v(" 启动和停止容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker start 容器id 启动容器\ndocker restart 容器id 重启容器\ndocker stop 容器id 停止容器\ndocker kill 容器id 强制停止容器\n")])])]),s("h4",{attrs:{id:"常用其他命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用其他命令"}},[a._v("#")]),a._v(" 常用其他命令")]),a._v(" "),s("h5",{attrs:{id:"显示日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示日志"}},[a._v("#")]),a._v(" 显示日志")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker logs 容器id\n\t-tf # 显示时间戳并且格式化\n\t--tail 数字 # 过滤条数\n")])])]),s("h5",{attrs:{id:"查看容器元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看容器元数据"}},[a._v("#")]),a._v(" 查看容器元数据")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker inspect 容器id\n")])])]),s("h5",{attrs:{id:"进入当前正在运行的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入当前正在运行的容器"}},[a._v("#")]),a._v(" 进入当前正在运行的容器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker exec -it 容器id [bashShell] # 进入容器，容器内部开启个新的终端\n\ndocker attach 容器id # 进入容器，不会开启新终端\n")])])]),s("h5",{attrs:{id:"拷贝文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拷贝文件"}},[a._v("#")]),a._v(" 拷贝文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker cp 容器id:容器内路径 目标主机路径\n")])])]),s("h3",{attrs:{id:"使用数据卷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用数据卷"}},[a._v("#")]),a._v(" 使用数据卷")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-v 主机目录:容器内目录 # docker run时，指定-v命令，可以将主机目录映射到容器内目录\n")])])]),s("h4",{attrs:{id:"具名挂载和匿名挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具名挂载和匿名挂载"}},[a._v("#")]),a._v(" 具名挂载和匿名挂载")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" # docker在默认位置生成路径\n # 匿名挂载\n -v 容器内路径\n \n # 具名挂载\n -v 卷名:容器内路径\n \n # 查看挂载信息\n docker volume\n \t-inspect 查看具体信息\n \t-ls 列出所有卷\n \t\n -v 卷名:容器内路径:ro # readonly 只读 只能在宿主机操作挂载目录，容器内无法操作\n -v 卷名:容器内路径:rw # 可读写\n \n docker run --volumes-from 已创建的容器id # 可以继承容器的挂载\n")])])]),s("h2",{attrs:{id:"dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),s("h3",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),s("ul",[s("li",[a._v("每个保留关键字（指令）都是大写")]),a._v(" "),s("li",[a._v("从上到下执行")]),a._v(" "),s("li",[a._v("# 表示注释")]),a._v(" "),s("li",[a._v("每个指令，多会创建一个镜像层，并且提交")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FROM # 基础镜像\nMAINTAINER # 镜像是谁写的 姓名+邮箱\nRUN # 镜像构建时需要执行的命令\nADD # 添加内容\nWORKDIR # 镜像的工作目录\nVOLUME # 挂载的目录\nEXPOSE # 指定对外端口\nCMD # 指定容器启动时要执行的命令，只有最后一个会生效，会被替换\nENTRYPOINT # 指定容器启动时要执行的命令，可以追加命令\nONBUILD # 当构建一个被继承的DockerFile，会运行\nCOPY # 将文件拷贝到镜像中\nENV # 构建的时候设置环境变量\n")])])]),s("h3",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[a._v("#")]),a._v(" 构建镜像")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker build \n\t-f dockerfiler名 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果文件名不是Dockerfile，则需要添加这个命令")]),a._v("\n")])])]),s("h2",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" Docker Compose")]),a._v(" "),s("h2",{attrs:{id:"docker-swarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[a._v("#")]),a._v(" Docker Swarm")])])}),[],!1,null,null,null);t.default=r.exports}}]);