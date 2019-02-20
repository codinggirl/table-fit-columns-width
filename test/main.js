const jsdom = require('jsdom')
const { JSDOM } = jsdom
const filColumnsWidthHelper = require('../src/fit-columns-width')

test('given 0 params should throw', () => {
    expect(() => {
        filColumnsWidthHelper()
    }).toThrow()
})

test('given 1 params should throw', () => {
    expect(() => {
        filColumnsWidthHelper('#e1')
    }).toThrow()
})

test('empty table should OK', () => {
    let dom = new JSDOM(`<table id="src"></table><table id="dst"></table>`)
    
    global.window = dom.window
    global.document = dom.window.document

    expect(() => {
        filColumnsWidthHelper('#dst', '#src')
    }).not.toThrow()
})

// This test should be rewrite,
// as it window.getComputedStyle works may not correctly.
test('columns width should be changed', () => {
    let dom = new JSDOM(`
        <!-- src -->
        <table id="src" style="width: 800px; height: 700px;">
            <tr>
                <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <td>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                <td>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </tr>
        </table>
        
        <!-- dst -->
        <table id="dst" style="width: 800px; height: 400px">
            <tr>
                <td>Lorem Ipsum 1
                <td>Lorem Ipsum 2
                <td>Lorem Ipsum 3
        </table>
        `)
    
    global.window = dom.window
    global.document = dom.window.document

    filColumnsWidthHelper('#dst', '#src')

    // column 1
    let c1s = dom.window.document.querySelector('#src tr:first-child td:nth-child(1)')
    let c1t = dom.window.document.querySelector('#dst tr:first-child td:nth-child(1)')
    // column 2
    let c2s = dom.window.document.querySelector('#src tr:first-child td:nth-child(2)')
    let c2t = dom.window.document.querySelector('#dst tr:first-child td:nth-child(2)')
    // column 3
    let c3s = dom.window.document.querySelector('#src tr:first-child td:nth-child(3)')
    let c3t = dom.window.document.querySelector('#dst tr:first-child td:nth-child(3)')

    // column 1
    expect(dom.window.getComputedStyle(c1s).width).toEqual(dom.window.getComputedStyle(c1t).width)
    
    console.log(dom.window.getComputedStyle(c1s).width)
    console.log(dom.window.getComputedStyle(c1t).width)

    // column 2
    expect(dom.window.getComputedStyle(c2s).width).toEqual(dom.window.getComputedStyle(c2t).width)

    // column 3
    expect(dom.window.getComputedStyle(c3s).width).toEqual(dom.window.getComputedStyle(c3t).width)
})
