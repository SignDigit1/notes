#!/usr/bin/env sh
###
 # @Author: jun.fu<fujunchn@qq.com>
 # @LastEditors: jun.fu<fujunchn@qq.com>
 # @Description: file content
 # @Date: 2020-12-23 12:17:51
 # @LastEditTime: 2020-12-23 14:31:51
 # @FilePath: /notes/deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:signdigit1/notes.git master:gh-pages

cd -