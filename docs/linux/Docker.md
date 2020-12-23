# Docker

文档地址

## Docker 常用命令

### 镜像命令

```
docker version # 显示docker版本信息
docker info # 显示docker系统信息，包括镜像和容器数量
docker 命令 --help # 显示docker帮助信息

docker images # 显示当前有的镜像
docker search 名称 # 搜索镜像 
docker pull 名称[:tag] # 下载镜像
docker rmi -f # 删除镜像
```

### 容器命令

#### 启动容器

```
docker run [可选参数] 容器
#参数说明
--name="Name" # 为启动的容器命名
-d # 后台运行
-it # 使用交互方式运行，进入容器查看内容
-p # 指定端口
	-p 主机端口:容器端口
	-p ip:主机端口:容器端口
	-p 容器端口
	容器端口
-P # 随机指定端口
-e # 环境配置
```

#### 查看运行的容器

```
docker ps # 列出当前运行的容器
	-a # 查看曾经运行的容器
	-n=? # 显示最近创建的容器
	-q # 只显示容器id
```

#### 退出容器

```
exit # 直接退出容器并停止
ctrl+p+q # 退出不停止
```

#### 删除容器

```
docker rm 容器id # 删除指定容器，不能删除正在运行的容器，强删rm -f
docker rm -f $(docker ps -aq) # 全部删除
```

#### 启动和停止容器

```
docker start 容器id 启动容器
docker restart 容器id 重启容器
docker stop 容器id 停止容器
docker kill 容器id 强制停止容器
```

#### 常用其他命令

##### 显示日志

```
docker logs 容器id
	-tf # 显示时间戳并且格式化
	--tail 数字 # 过滤条数
```

##### 查看容器元数据

```
docker inspect 容器id
```

##### 进入当前正在运行的容器

```
docker exec -it 容器id [bashShell] # 进入容器，容器内部开启个新的终端

docker attach 容器id # 进入容器，不会开启新终端
```

##### 拷贝文件

```
docker cp 容器id:容器内路径 目标主机路径
```

### 使用数据卷

```
-v 主机目录:容器内目录 # docker run时，指定-v命令，可以将主机目录映射到容器内目录
```

#### 具名挂载和匿名挂载

```
 # docker在默认位置生成路径
 # 匿名挂载
 -v 容器内路径
 
 # 具名挂载
 -v 卷名:容器内路径
 
 # 查看挂载信息
 docker volume
 	-inspect 查看具体信息
 	-ls 列出所有卷
 	
 -v 卷名:容器内路径:ro # readonly 只读 只能在宿主机操作挂载目录，容器内无法操作
 -v 卷名:容器内路径:rw # 可读写
 
 docker run --volumes-from 已创建的容器id # 可以继承容器的挂载
```

## Dockerfile

### 基础

- 每个保留关键字（指令）都是大写
- 从上到下执行
- \# 表示注释
- 每个指令，多会创建一个镜像层，并且提交

```
FROM # 基础镜像
MAINTAINER # 镜像是谁写的 姓名+邮箱
RUN # 镜像构建时需要执行的命令
ADD # 添加内容
WORKDIR # 镜像的工作目录
VOLUME # 挂载的目录
EXPOSE # 指定对外端口
CMD # 指定容器启动时要执行的命令，只有最后一个会生效，会被替换
ENTRYPOINT # 指定容器启动时要执行的命令，可以追加命令
ONBUILD # 当构建一个被继承的DockerFile，会运行
COPY # 将文件拷贝到镜像中
ENV # 构建的时候设置环境变量
```

### 构建镜像

```shell
docker build 
	-f dockerfiler名 # 如果文件名不是Dockerfile，则需要添加这个命令
```

## Docker Compose

## Docker Swarm