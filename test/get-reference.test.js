/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');
const path = require('path')

const vscode = require('vscode')
const { Position, Range } = vscode
const { getReference } = require('../src/get-reference')

suite("Get reference", function () {
    test("Finds the right path for class", function (done) {
        vscode.workspace.openTextDocument(path.join(__dirname, 'sample.rb')).then((document) => {
            const selection = { active: new Position(2, 10) }
            assert.equal(getReference(document, selection), 'Foo::Bar::Bebop')
            done()
        }, (error) => {
            assert.fail(error)
            done()
        })
    })

    test("Finds the right path for constant", function (done) {
        vscode.workspace.openTextDocument(path.join(__dirname, 'sample.rb')).then((document) => {
            const selection = { active: new Position(3, 6) }
            assert.equal(getReference(document, selection), 'Foo::Bar::Bebop::SPIKE')
            done()
        }, (error) => {
            assert.fail(error)
            done()
        })
    })
});
