# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

<!-- 或者是 small-->
<Badge type="info small" text="default" />
<Badge type="tip small" text="^1.9.0" />
<Badge type="warning small" text="beta" />
<Badge type="danger small" text="caution" />
<Badge type="info small">custom element</Badge>
