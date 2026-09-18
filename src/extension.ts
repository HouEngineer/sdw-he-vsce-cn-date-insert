import * as vscode from "vscode";
import { Solar } from "lunar-typescript";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "cn-date-insert.insertCnDate",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("没有打开的可编辑文件");
        return;
      }
      const text = formatCnDate(new Date());
      editor.edit((editBuilder) => {
        // 有选中文本时替换选中内容，否则插入到光标处
        editBuilder.replace(editor.selection, text);
      });
    }
  );

  context.subscriptions.push(disposable);
}

/**
 * 格式化当前日期，例如：## 2026年9月18日 农历八月初八 周五
 */
export function formatCnDate(date: Date): string {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  // 农历闰月时 getMonthInChinese() 自带"闰"前缀（如"闰冬"）
  return `## ${solar.getYear()}年${solar.getMonth()}月${solar.getDay()}日 农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} 周${solar.getWeekInChinese()}`;
}

export function deactivate() {}
