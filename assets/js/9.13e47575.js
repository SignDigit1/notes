(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{374:function(t,e,r){t.exports=r.p+"assets/img/image-20210305162547907.5c606039.png"},388:function(t,e,r){"use strict";r.r(e);var a=r(44),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"探索下react的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#探索下react的渲染过程"}},[t._v("#")]),t._v(" 探索下react的渲染过程")]),t._v(" "),a("h2",{attrs:{id:"序言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[t._v("#")]),t._v(" 序言")]),t._v(" "),a("p",[t._v("一直以来，对于react渲染过程的了解都是知其然不知其所以然，虽然在网上看了不少资料，但是总是看过就忘。这次就借着梳理的机会，一步步的走下react的渲染过程。")]),t._v(" "),a("p",[t._v('我所使用的版本为"react": "16.8.6", "react-dom": "16.8.6"。')]),t._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("我目前看的教程，里面将react的渲染过程分为了三个阶段：legacyRenderSubtreeIntoContainer开始，直到scheduleUpdateOnFiber为初始化阶段，scheduleUpdateOnFiber到commitRoot为render阶段，commitRoot以后为commit阶段。个人觉得还是很有道理，所以我也就按照这个思路来进行梳理。")]),t._v(" "),a("h3",{attrs:{id:"初始化阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化阶段"}},[t._v("#")]),t._v(" 初始化阶段")]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/image-20210315163938998.png",alt:"image-20210315163938998"}})]),t._v(" "),a("p",[t._v("通过查看调用栈，我们进入到了一个非常熟悉的函数，render函数")]),t._v(" "),a("h4",{attrs:{id:"render函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render函数"}},[t._v("#")]),t._v(" render函数")]),t._v(" "),a("p",[a("img",{attrs:{src:r(374),alt:"image-20210305162547907"}})]),t._v(" "),a("p",[t._v("render位于react-dom包内，在render函数里，去除一些对于组件和dom的判断，实际仅仅是调用了一个函数")])])}),[],!1,null,null,null);e.default=s.exports}}]);