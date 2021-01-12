# vscode的多项目的工作区配置

​因为一些工作上的原因，所以希望能够对工作的项目做一些单独的配置，包括但不限于对于插件的启停，对于部分插件的特殊配置等。

​一开始想到的方案是将所有文件夹均加入到一个工作区中，但这样有个问题，你必须打开工作区才能启用对应的工作区配置，而如果将几个项目添加到一个工作区后，打开一个工作区就会导致打开了多个项目，对于我现在这种一个窗口对应一个项目而言，感觉很不习惯。如果单独在每个项目下配置一个独有的工作区，感觉又十分的麻烦。

最终在[知乎的评论区](https://zhuanlan.zhihu.com/p/54770077)里找到了一个曲线的解决方案，就是通过强链接的方式，将配置文件直接链接到每个项目下面，这样，只要修改一个文件，其他工作区配置也会同步修改，同时，vscode能够读取到当前目录下的工作区文件，所以只需要打开项目文件夹，仍能够使用工作区的配置。不过由于手动配置强链接仍然感觉有点麻烦，所以我决定写个shell文件来完成这件事。

## 脚本解析

### 参数定义

首先需要定义好需要用到的一些参数，以及这些参数是否要通过命令行获取

- file: 该参数是用来定义需要进行链接的文件，命令行通过 `-f [file]` 来获取
- path: 当前运行的文件路径
- dir：将要去进行链接的目标路径，命令行通过`-d [dir]`来获取
- curDir：是链接的路径是dir还是dir的子路径，默认是子路径，命令行通过`-c`使用dir路径
- aliasName：将要链接生成的目标文件别名，命令行通过`-n [name]`来获取

我是通过getopts来进行的参数的获取及部分判断。

```shell
file="" #当前文件
path=`pwd` #当前的路径
dir=$path #要进行链接的路径
curDir=false #是链接到当前链接文件夹还是子文件夹
aliasName=null #链接文件的别名


while getopts :f:d:n:c opt
do
  case "$opt" in
      f) file="$OPTARG" ;;
      d) dir="$OPTARG" ;;
      n) aliasName="$OPTARG" ;;
      c) curDir=true ;;
      :)  # 没有为需要参数的选项指定参数
           echo "This option -$OPTARG requires an argument."
          exit 1 ;;
      ?) # 发现了无效的选项
          echo "-$OPTARG is not an option"
          exit 2 ;;
  esac
done
```

### 参数校验

#### 判断文件是否存在

这里就是用`-f`来判断文件是否存在。我这里同时判断了`$path/$file`的全路径，但感觉没必要，因为如果脚本执行和文件在同一路径下，文件使用的是相对位置，不需要拼路径也能找到；如果不在同一路径下，文件使用绝对路径，同样不需要拼路径。

```shell
if [ ! -f "$file" ];then
  if [ -f "$path/$file" ];then
    file=""$path/$file""
  else
    echo "$file 文件不存在"
    exit 3
  fi
fi
```

#### 判断目标目录是否存在

```shell
if [ ! -d "$dir" ];then
  echo "$dir 目录地址不正确"
  exit 4
fi
```



### 数据准备

判断有没有别名，如果有的话，目标文件名就是别名+当前文件的类型；如果没有的话，目标文件名就是当前文件名。

```shell
if [ "$aliasName" == null ];then
  filename=`basename $file`
else
  filename="$aliasName.${file##*.}"
fi
```



### 做一次确认

用read方法，给用户做最后一次确认，输入的不是y|yes，退出程序。

```shell
echo "当前的文件-----$file"
echo "将要链接的文件名-----$filename"
if [ "$curDir" == true ];then
  echo "将要链接到的目录-----$dir"
else
  echo "将要链接到的目录-----$dir/*"
fi

read -r -p "确定吗? [Y/n] " input
case $input in
    [yY][eE][sS]|[yY])
  		echo "Yes"
  		;;

    [nN][oO]|[nN])
	  	echo "No"
      exit 9
      ;;

    *)
		  echo "Invalid input..."
	  	exit 9
	  	;;
esac
```

### 执行

我这里使用强链接，遍历目录来进行目标目录下的目标文件的链接生成

```shell
if [ "$curDir" == true ];then
  echo "强链接到 $dir 目录下"
  toGenerateFile="$dir/$filename"
  echo "$file ---链接--- $dir/$filename"
  ln $file $toGenerateFile
else
  echo "强链接到 $dir 的子目录下"
  for childDir in $dir/*
  do
    if [ -d "$childDir" ];then 
      toGenerateFile="$childDir/$filename"
      # 如果已经存在文件，则跳过
      if [ ! -f "$toGenerateFile" ];then
        echo "$file ---链接--- $toGenerateFile"
        ln $file $toGenerateFile
      fi
    fi
  done
fi
```



## 功能

+ [ √ ] 主要功能，遍历生成强链接工作区文件
+ [ √ ] 可配置的目标目录
+ [ √ ] 可配置的目标文件别名
+ [ × ] 工作区插件配置。 我没有搞清楚工作区插件禁用的配置vscode到底存在哪里，目前单纯复制工作区配置文件不会同步工作区的插件禁用配置。
+ [ × ] 自动修改gitignore文件



## 总结

目前该方案还有一些缺点和一些功能没有实现，有时间的话会继续完善。不知道类似这方面的需求其他人有没有，如果需求量大的话希望vscode能够给出一个比较好的官方解决方案，也祝vscode能够越做越好。

## 完整代码

```shell
#!/bin/sh

file="" #当前文件
path=`pwd` #当前的路径
dir=$path #要进行链接的路径
curDir=false #是链接到当前链接文件夹还是子文件夹
aliasName=null #链接文件的别名


while getopts :f:d:n:c opt
do
  case "$opt" in
      f) file="$OPTARG" ;;
      d) dir="$OPTARG" ;;
      n) aliasName="$OPTARG" ;;
      c) curDir=true ;;
      :)  # 没有为需要参数的选项指定参数
           echo "This option -$OPTARG requires an argument."
          exit 1 ;;
      ?) # 发现了无效的选项
          echo "-$OPTARG is not an option"
          exit 2 ;;
  esac
done

#echo $file $dir "$path/$file"

# 判断文件是否存在
if [ ! -f "$file" ];then
  if [ -f "$path/$file" ];then
    file=""$path/$file""
  else
    echo "$file 文件不存在"
    exit 3
  fi
fi


# 判断目标目录是否存在
if [ ! -d "$dir" ];then
  echo "$dir 目录地址不正确"
  exit 4
fi

# 拼接将要链接的文件名
if [ "$aliasName" == null ];then
  filename=`basename $file`
else
  filename="$aliasName.${file##*.}"
fi

echo

# 输入框进行确认
echo "当前的文件-----$file"
echo "将要链接的文件名-----$filename"
if [ "$curDir" == true ];then
  echo "将要链接到的目录-----$dir"
else
  echo "将要链接到的目录-----$dir/*"
fi

read -r -p "确定吗? [Y/n] " input
case $input in
    [yY][eE][sS]|[yY])
  		echo "Yes"
  		;;

    [nN][oO]|[nN])
	  	echo "No"
      exit 9
      ;;

    *)
		  echo "Invalid input..."
	  	exit 9
	  	;;
esac

# 遍历执行链接
if [ "$curDir" == true ];then
  echo "强链接到 $dir 目录下"
  toGenerateFile="$dir/$filename"
  echo "$file ---链接--- $dir/$filename"
  ln $file $toGenerateFile
else
  echo "强链接到 $dir 的子目录下"
  for childDir in $dir/*
  do
    if [ -d "$childDir" ];then 
      toGenerateFile="$childDir/$filename"
      # 如果已经存在文件，则跳过
      if [ ! -f "$toGenerateFile" ];then
        echo "$file ---链接--- $toGenerateFile"
        ln $file $toGenerateFile
      fi
    fi
  done
fi
```

