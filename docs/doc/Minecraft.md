---
title: "Minecraft!"
---

# Miaocraft

## JE数据包

::: warning
此节基于**JAVA版**指令制作的数据包，网易、BE版（基岩版）无法使用！
:::

基于 原版指令 的数据包玩法系列，安装请参考 [如何安装数据包](./help/mcfun#如何安装数据包)

此处数据包版本命名空间互相独立，可一起添加。

无法生效请检查是否放入**对应存档**的`datapacks`而非'shaderpacks'。

其次确保命名空间是否重复，此页数据包所用的计分板等均有命名空间作为前缀不会重复！

---

### 当受到伤害系列

::: tip
显示的“游戏版本”为测试游戏版本，向上下兼容性未知。
:::

| 编号 | 玩法 | 文件夹名字 | 游戏版本 |
| :----: | :----:| :----: | :----: |
|1  | [受伤生物数量翻倍](#受伤生物数量翻倍) | sdshswfb | 1.21-1.21.9 |
|2  | [受到伤害就随机传送](#受到伤害就随机传送) | sdshsjcs | 1.21.8 |
|3  | [受到伤害就删物品](#受到伤害就删物品) | sdshswp | 1.21.8 |
|4  | [受到伤害才扩大边界](#受到伤害才扩大边界)| sdshbjkd | 1.21.8 |

---

#### 受伤生物数量翻倍

> EN：Biological doubling when damaged
>
> 命名空间：hd

没有找到更好的复制方法，暂时就先这样吧，如果有条件可以寻找其他代替或者使用优化插件。

已限制生成范围为玩家附近16个区块，超出区块未加载不生效！

数据包1.21+可用。由于复制方法差异，**仅原版生物，模组生物无效**。

适配进度 截止原版 1.21.9 铜傀儡

感谢游玩。

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/assets/bilibili.png',
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
      desc: '跳转Github地址',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshswfb',
      linkText: '跳转链接'
    }
  ]"
/>

<Links
  :items="[
    {
      icon: { icon: 'material-symbols:archive', color: '#1769AA' },
      name: '下载',
      desc: '获取github下载直链',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/releases/download/20250829/Biological-doubling-when-damaged_1.21-1.21.8_v0.2.zip'
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
      image: '/assets/bilibili.png',
      name: '实况',
      desc: '不知道怎么玩了，这好像不算实况（',
      link: 'https://www.bilibili.com/video/BV13ohdz6ELi/',
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
      desc: '跳转Github地址',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshsjcs',
      linkText: '跳转链接'
    }
  ]"
/>

<Links
  :items="[
    {
      icon: { icon: 'material-symbols:archive', color: '#1769AA' },
      name: '下载',
      desc: '获取github下载直链',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/releases/download/20250829/Randomly-teleport-when-damaged_1.21.8-v0.1.zip'
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
打开缓存伤害活动栏文本显示

`/scoreboard players set act hds_set 0`
关闭缓存伤害活动栏文本显示

`/scoreboard players set mode hds_set 1`
模式1：ALL

`/scoreboard players set mode hds_set 2`
模式2：随机

`/scoreboard players set mode hds_set 0`
模式0：关闭此玩法

支持多人，在某人受到伤害后结算随机删除快捷栏、背包、主副手、盔甲栏共计42处地方，如果无物品将会缓存次数。

**模式1：** 受伤后全体结算删除，每人随机不同，当有玩家无法结算后启用随机，直到所有玩家都无法结算后缓存。(每次增加玩家人数的结算次数)

**模式2：** 受伤后多人随机结算删除，每人随机不同，当目标玩家无法结算后再次随机，直到所有玩家都无法结算后缓存。

注意：**无法避免随机到自己！都给我小心点！**

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/assets/bilibili.png',
      name: '实况',
      desc: '不知道怎么玩了，这好像不算实况（',
      link: 'https://www.bilibili.com/video/BV13ohdz6ELi/',
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
      desc: '跳转Github地址',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshswp',
      linkText: '跳转链接'
    }
  ]"
/>

<Links
  :items="[
    {
      icon: { icon: 'material-symbols:archive', color: '#1769AA' },
      name: '下载',
      desc: '获取github下载直链',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/releases/download/20250829/Delete-items-when-damaged_1.21.8-v0.2.zip'
    }
  ]"
/>

---

#### 受到伤害才扩大边界

> EN：Expand boundaries when damaged
>
> 命名空间：hdk

受到伤害才会扩大边界

数据包仅1.21.8可用。

**加载自动初始化，重载不重置进度**。

如需 **重置进度** 或 **更换边界中心** 请使用以下指令重新触发初始化：

`/function hdk:ini`

建议使用极限模式游玩。

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: '/assets/bilibili.png',
      name: '灵感来源',
      desc: '对的对的，对着视频做的（',
      link: 'https://www.bilibili.com/video/BV1MoxXzLEXd',
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
      desc: '跳转Github地址',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/tree/main/sdshbjkd',
      linkText: '跳转链接'
    }
  ]"
/>

<Links
  :items="[
    {
      icon: { icon: 'material-symbols:archive', color: '#1769AA' },
      name: '下载',
      desc: '获取github下载直链',
      link: 'https://github.com/friends-xiaohuli/XX-when-damaged/releases/download/20251010/Expand-boundaries-when-damaged_1.21.8-v0.2.zip'
    }
  ]"
/>

---

### 只要听话就不会死

开源协议：[GNU Affero General Public License v3.0(GNU AGPL-3)](https://www.gnu.org/licenses/agpl-3.0.txt)（仅适用于此小节）

::: tip
最新版的数据包请使用1.21.4游玩 测试正常
:::

活下去已经够难了！？怎么还有这些离谱事件啊！！！

#### 玩法

在普通生存中，完成对应任务，任务随机间隔时间触发，事件点扣除至0（或其他选择条件）死亡，仅剩1人时游戏结束

<div class="img-flex-container">
  <figure>
    <img src="https://s2.loli.net/2023/02/05/kNYKaoeymbsAG8O.png" alt="玩法演示" />
    <figcaption>玩法演示</figcaption>
  </figure>
  <figure>
    <img src="https://s2.loli.net/2024/05/08/xa9fhrWGnVBRNUQ.png" alt="事件演示" />
    <figcaption>事件演示</figcaption>
  </figure>
</div>

#### 详情

**设置书**：`/trigger book` *可以无权限获取，但在游戏进行中无法获取*

::: details 展开查看图片

<div style="display:flex; justify-content:center; gap:20px;">
  <img src="https://s2.loli.net/2024/05/08/HksqiFBMvJyNQVP.png" alt="图1" style="width:300px;" />
</div>

![Snipaste_2023-11-08_14-57-34.png](https://s2.loli.net/2023/11/08/gqRc6yduEeLvHkS.png)

![PixPin_2024-05-08_17-36-20.png](https://s2.loli.net/2024/05/08/Di6qdPETs4uL87S.png)

![Snipaste_2024-03-02_01-06-26.png](https://s2.loli.net/2024/03/02/S3u1RHlWXZaDTYP.png)
:::

::: warning 注意  
如遇书本排版错位等问题，请在 **语言设置** 中打开 **「强制使用 Unicode 字体」**  
:::

##### 模式

| 玩法 | 描述 |
| :----: | :----:|
| 默认模式 | 所有玩家都可以完成任务，没有完成人数上限，没有第一名奖励。 |
| 独占模式 | 每个任务都有且仅有一个人能完成，完成后将跳过直接进入冷却。 |

##### 使用须知

| 使用须知 | 描述 |
| :----: | :---- |
| 1-地图可重复利用 | 每局开始后，数据包将会重置系统，并且随机传送（出生点保护），随机地形开始 |
| 2-多人模式 | 此数据包需要多人游玩，理论无人数上限，建议 3~8 人<br/>*此数据包含单人判定，强制结束* |
| 3-数据包自定义设置 | 除重载数据包外，其余模式设定均可延续至下一轮<br/>***非必要时请勿重载数据包！*** |

##### 已知特性

| 已知特性 | 描述 |
| :----: | :---- |
| 1-拾取事件部分操作无效 | 由于进度条件限制，拾取事件需要由任意实体丢弃，挖掘掉落无效！ |
| 2-服务端加载内存过大 | 由于加载地图数据量过大，可能导致服务端崩溃。请尝试使用优化插件或者换成客户端开服 |
| 3-其他玩家部分聊天框控件失效 | 在对局域网端口开放的时候需要开启作弊，否则控件将无法有效执行！ |
| 4-第三方端设置失效 | 部分第三方服务端运行此数据包时会导致如“死亡不掉落”等设置无法在除主世界外的维度生效，因此不建议使用服务端游玩此数据包 |

##### 更多详情与反馈联系

> 从 **0.27** 版本开始，反馈事件错误可直接反馈位于事件结束后的编号进行提交。

- [GitHub Issues](https://github.com/friends-xiaohuli/sctz_ywsj/issues)
- [MC百科](https://www.mcmod.cn/class/9254.html)
- [MCBBS](https://www.mcbbs.net/thread-1449276-1-1.html) （已挂，仅此纪念）
- [苦力怕论坛](https://klpbbs.com/thread-136943-1-1.html)

##### 实况视频

| 主播 | 视频 | 日期 | 备注 |
| :----: | :---- | :----: | :---- |
| @南镇st | [【任 务 大 作 战】](https://www.bilibili.com/video/BV1SC41137ZZ) | 24.04.17 | bilibili 源，dy、ks 均有 |
| @佳楠很难 | [【指定任务挑战】](https://www.bilibili.com/video/BV1Ut421j7pw)<br>[【指定任务挑战下半段】](https://www.bilibili.com/video/BV1gp421Q7Es) | 24.04.21<br>24.04.22 | bilibili 源，dy、ks 均有 |
| @谬木立羽 | [【我的世界，但“不听话就会死”？】](https://www.bilibili.com/video/BV1rbsse4EVF) | 24.08.27 | - |
| @我的世界小黑犬解说 | [【当我们要不断「完成任务」！才能活下去！】](https://www.bilibili.com/video/BV1fAQoYZEej) | 25.03.19 | bilibili 源，dy、ks 均有 |
| @大炒面制造者 Cen | [【当你无法「驯服一匹马」就会被淘汰出局？？！】](https://www.bilibili.com/video/BV1YuZUY5ECv) | 25.04.04 | - |
| @呦梦则吖 | [【只要听话就不会死】](https://www.bilibili.com/video/BV1XpTizZE6x) | 25.06.10 | - |
| @诸天任我游 | [【我的世界  不听话就会死   遗憾落败】](https://www.bilibili.com/video/BV1aXRzYGEo5) | 25.04.06 | - |

##### tag标签

指定任务挑战、任务大作战、要做挑战、反向不要做挑战、生存挑战之意外事件、多人挑战、生存挑战

##### 特别鸣谢

@白狗虚虚、@希克 和他的小伙伴、@Frazeli、@Rain、@枫荷 和他的小伙伴、@倩雪、@灵渊瑞兽、@陌上青花、@九九喵、@饭仙一桶、@苦瓜、@SeasonsC、@MO、@是椰灰噎、@zy华、@夕狡、@KIIFAN、@Qing_1_wa、@femweishi、@Maoochen、@忆迢、@梧桐  

以及其他参与测试、指导、修改建议的小伙伴们！（排名不分先后）

## 模组汉化

### FTB Essentials

最后一个版本：1.20.1-2001.2.3-CHS

::: tip
仅修正汉化了tpa back home 等有关常用指令
:::

关于 1.20.1 2001.2.3还是用的硬编码改的返回文本，特地fork了一个1.20.1的库 这是1.20.1最后一个可用的版本

<Links
  :grid="2"
  :items="[
    // 普通图片
    {
      image: 'https://www.mcmod.cn/static/public/images/favicon.ico',
      name: '[FTBE]FTB Essentials',
      desc: '为服务器添加了许多基本的实用程序命令。',
      link: 'https://www.mcmod.cn/class/3202.html',
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
      desc: '跳转Github地址',
      link: 'https://github.com/friends-xiaohuli/FTB-Essentials-CHS/tree/2001.2.3',
      linkText: '跳转链接'
    }
  ]"
/>
<Links
  :items="[
    {
      icon: { icon: 'material-symbols:archive', color: '#1769AA' },
      name: '下载',
      desc: '获取github下载直链',
      link: 'https://github.com/friends-xiaohuli/FTB-Essentials-CHS/releases/download/1.20.1-2001.2.3-CHS.1/ftb-essentials-forge-2001.2.3+zh.1.jar'
    }
  ]"
/>

汉化的forge版本，目前看来forge的1.20.1的整合包都挺多，这个tpa模组挺好用的

只构建了forge版本，有需要可以自行拉取库构建fabric版本以及noeforge版本

如果您想要编辑此模组的配置文件，请编辑`defaultconfigs/ftbessentials-server.snbt`

有源代码 硬编码直接汉化

#### 构建版本差异化说明

1.将tpa home back 的原生硬编码文本修改为中文

2.将tpa home 等无效对象增加返回值

3.将tpa 改为不能对自己使用

4.汉化了所有的配置文件

``` text
#warp部分未汉化

/back-传送到先前的位置。可多次使用

/spawn-传送至出生点

/rtp-将您传送到世界上的随机位置，并尝试找到一个非海洋的，安全的着陆点

/home [名称]-传送到家中

/sethome <名称>-设置家

/delhome <名称>-删除家

/listhomes [玩家]-列出玩家的所有的家

/warp <名称>-传送到地标

/setwarp <名称>-设置地标

/delwarp <名称>-删除地标

/listwarps-列出所有地标

/tpa <player>-请求传送到xxx玩家

/tpahere <player>-请求玩家传送到你这儿

/tpaccept <id>-接受请求（将在屏幕上显示一个按钮）

/tpadeny <id>-拒绝请求（将在屏幕上显示一个按钮）
```
