# 探索下setState的原理

![image-20201016003241231](setState.assets/image-20201016003241231.png)

setState,实际执行enqueueSetState

## enqueueSetState

![image-20201016003616179](setState.assets/image-20201016003616179.png)

要查看enqueueSetState，首先得要找到this.updater,我们可以看到，this.updater是在Component的构造函数里赋值的。

