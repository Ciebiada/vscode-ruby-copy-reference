const vscode = require('vscode')
const clipboardy = require('clipboardy')
const {Range, Position} = vscode

function findPath(text) {
    const units = /(module|class)\s+(.+)/gm
    let matched = []
    let match
    while ((match = units.exec(text)) !== null) {
        matched.push(match[match.length - 1])
    }
    return matched
}

function getReference(document, selection) {
    const currentWordSelection = document.getWordRangeAtPosition(selection.active)
    const text = document.getText(new Range(new Position(0, 0), currentWordSelection.start))
    const path = findPath(text)
    return [...path, document.getText(currentWordSelection)].join('::')
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.copyReference', function () {
        const editor = vscode.window.activeTextEditor
        if (!editor) return
    
        const document = editor.document
        const selection = editor.selection

        clipboardy.writeSync(getReference(document, selection))
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

exports.deactivate = deactivate;
