# 插入当前日期（含农历星期） / Insert Cn Date

在光标处一键插入当天的日期，自带农历和星期，格式如下：

```markdown
## 2026年9月18日 农历八月初八 周五
```

适用于写日记、日志、周报、笔记时快速落一个日期标题。

## 使用方式

1. 打开命令面板（`Cmd+Shift+P` / `Ctrl+Shift+P`）
2. 输入 **插入当前日期含农历星期** 或 **insertCnDate**
3. 回车，日期插入到光标处；若有选中文本则替换选中内容

## 特性

- 纯本地农历计算（[lunar-typescript](https://github.com/6tail/lunar-typescript)），无需联网
- 自动处理农历闰月
- 不限定文件语言，任何文本编辑器中均可使用

## 发布

每次合并到 `main` 分支后会通过 GitHub Actions 自动发布到：

- [VS Code 扩展市场](https://marketplace.visualstudio.com/items?itemName=houengineer.sdw-he-vsce-cn-date-insert)
- [Open VSX（VS Code OSS 版扩展市场）](https://open-vsx.org/extension/houengineer/sdw-he-vsce-cn-date-insert)

发布前需要先更新 `package.json` 中的 `version`（市场不允许重复发布同一版本）。

## License

[MIT](./LICENSE)
