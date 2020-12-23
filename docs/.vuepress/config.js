/*
 * @Author: jun.fu<fujunchn@qq.com>
 * @LastEditors: jun.fu<fujunchn@qq.com>
 * @Description: file content
 * @Date: 2020-12-22 16:09:18
 * @LastEditTime: 2020-12-23 12:21:06
 * @FilePath: /notes/docs/.vuepress/config.js
 */
module.exports = {
  title: '学习笔记',
  description: '仅仅是菜鸡的自我总结',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'JavaScript',
        link: '/javascript/探索下es6的class以及继承的原理',
      },
      { text: '服务器', link: '/linux/' },
      { text: 'Github', link: 'https://github.com/SignDigit1/notes' },
    ],
    sidebar: {
      '/javascript/': [
        '探索下es6的class以及继承的原理',
        '探寻下Webpack的打包的模块化机制',
        { title: "探索下setState的原理", path: "探索下setState的原理" }
      ],
      '/linux/': ['', 'Docker','搭建代理服务器'],
    },
    lastUpdated: 'Last Updated', // string | boolean
    sidebarDepth: 3,
  },
  dest:'dist',
  base:'/notes/'
};
