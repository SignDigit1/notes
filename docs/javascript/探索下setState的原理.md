# 探索下 setState 的原理

setState,实际执行 enqueueSetState
![image-20201016003241231](./assets/image-20201016003241231.png)

## enqueueSetState

![image-20201016003616179](./assets/image-20201016003616179.png)

要查看 enqueueSetState，首先得要找到 this.updater,我们可以看到，this.updater 是在 Component 的构造函数里赋值的。
