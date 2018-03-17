const vscode = require('vscode')
const clipboardy = require('clipboardy')

const { getReference } = require('./get-reference')

function activate(context) {
    const disposable = vscode.commands.registerCommand('ruby.copyReference', function () {
        const editor = vscode.window.activeTextEditor
        if (!editor) return

        const document = editor.document
        const selection = editor.selection

        clipboardy.writeSync(getReference(document, selection))
    });

    context.subscriptions.push(disposable)
}

exports.activate = activate

function deactivate() { }

exports.deactivate = deactivate
