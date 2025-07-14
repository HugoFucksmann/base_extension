import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
    vscode.window.showInformationMessage('¡Hola desde tu extensión de ejemplo!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
