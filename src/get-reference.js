const { Range, Position } = require('vscode')

function findPath(text) {
  const units = /(module|class)\s+([^<\n ]+)/gm
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

exports.getReference = getReference
