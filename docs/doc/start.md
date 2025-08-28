---
outline: deep
title: "从这里开始"
---

# 喵！从这里开始

<!-- <update /> -->

## 我的世界JE数据包

::: warning
此节基于**JAVA版**指令制作的数据包，网易、BE版（基岩版）无法使用！
:::

基于 原版指令 的数据包玩法系列，安装请参考 [如何安装数据包](./help/mcfun#如何安装数据包)

此处数据包版本命名空间互相独立，可一起添加。

无法生效请检查是否放入**对应存档**的`datapacks`而非'shaderpacks'。

其次确保命名空间是否重复，此页数据包所用的计分板等均有命名空间作为前缀不会重复！

### 当受到伤害系列

::: tip
显示的“游戏版本”为测试游戏版本，向上下兼容性未知。
:::

| 编号 | 玩法 | 文件夹名字 | 游戏版本 |
| :----: | :----:| :----: | :----: |
|1  | [受伤生物数量翻倍](#受伤生物数量翻倍) | sdshswfb | 1.21 |
|2  | [受到伤害就随机传送](#受到伤害就删物品) | sdshsjcs | 1.21.8 |
|3  | [受到伤害就删物品](#受到伤害就随机传送) | sdshswp | 1.21.8 |

---

#### 受伤生物数量翻倍

> EN：Biological doubling when damaged
>
> 命名空间：hd

没有找到更好的复制方法，暂时就先这样吧，如果有条件可以寻找其他代替或者使用优化插件。

数据包仅1.21可用。由于复制方法差异，**仅原版生物，模组生物无效**。

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/img/01.gif',
      name: '实况',
      desc: '卡死了卡死了卡死了，回头就给服务器装几个优化模组..',
      link: 'https://www.bilibili.com/video/BV1F8v1eCEmZ/',
      linkText: '立即查看'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        crop: true
      },
      name: 'GitHub',
      desc: '跳转Github获取下载地址！',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshswfb',
      linkText: '跳转链接'
    }
  ]"
/>

---

#### 受到伤害就随机传送

> EN：Randomly teleport when damaged
>
> 命名空间：hdc

受到伤害就随机传送

数据包仅1.21.8可用。

保留了特性：**在地狱128层附近受伤可能被随机到基岩层上方。**

小心！在末地受伤后可能会被传送到几千格外的末地外岛！

有写位置判断分层，支持多人，三界原版多维度。

即为 在矿洞内随机大概率还是在矿洞，在地面随机大概率还是在地面。

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/img/01.gif',
      name: '实况',
      desc: '暂无录制',
      link: '404',
      linkText: '立即查看'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        crop: true
      },
      name: 'GitHub',
      desc: '跳转Github获取下载地址！',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshsjcs',
      linkText: '跳转链接'
    }
  ]"
/>

---

#### 受到伤害就删物品

> EN：Delete items when damaged
>
> 命名空间：hds

受到伤害就删物品

数据包仅1.21.8可用。

可用指令：

`/scoreboard players set act hds_set 1`
打开缓存伤害活动栏

`/scoreboard players set act hds_set 0`
关闭缓存伤害活动栏

`/scoreboard players set mode hds_set 1`
模式1：ALL

`/scoreboard players set mode hds_set 2`
模式2：随机

`/scoreboard players set mode hds_set 0`
模式0：关闭此玩法

支持多人，在某人受到伤害后结算随机删除快捷栏、背包、主副手、盔甲栏共计42处地方，如果无物品将会缓存次数。

**模式1：** 受伤后全体结算删除，每人随机不同，当所有玩家都无法结算后缓存。

**模式2：** 受伤后多人随机结算删除，每人随机不同，当目标玩家无法结算所有玩家都无法结算后缓存。

注意：**无法避免随机到自己！都给我小心点！**

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/img/01.gif',
      name: '实况',
      desc: '暂无录制',
      link: '404',
      linkText: '立即查看'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        crop: true
      },
      name: 'GitHub',
      desc: '跳转Github获取下载地址！',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshswp',
      linkText: '跳转链接'
    }
  ]"
/>

<!-- <NolebaseGitChangelog /> -->
