import {Selector} from 'testcafe'

fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example`

test(`Test Case 1`, async t => {
    await t.typeText('#developer-name', 'John')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('John')

})