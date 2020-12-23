# 探寻下Webpack的打包的模块化机制

## 环境

4.44.1

```json
"webpack": "^4.44.1",
"webpack-cli": "^3.3.12"
```

## 准备工作

首先，分别准备3个js

a.js

```javascript
const asyncText = 'asyncText';

export default asyncText;
```

b.js

```javascript
const b = 'b';
console.log(b);

export default b;
```

index.js（入口文件）

```javascript
import b from './b.js'; // 导入文件b

import('./a.js').then(a => { // 异步导入文件a
  console.log(a, b); // 输出结果 asyncText b
});
```

同时，需要关闭webpack中的代码压缩，要不然看的及其难受。在webpack.config.js中修改如下配置

```javascript
 optimization: {
    minimize: false,
  },
```

## 分析

首先，让我们打开打包出来的入口文件，bundle.js

