# table-fit-columns-width

[![Greenkeeper badge](https://badges.greenkeeper.io/codinggirl/table-fit-columns-width.svg)](https://greenkeeper.io/)

A helper libarary to fit a table's column width according to another table.

## How to use

Install via npm:

```shell
npm install --save table-fit-columns-width
```

Use it in font-end works.

```html
<table id="table-1">
</table>

<table id="table-2">
</table>
```

```js
const fitColumnsWidth = require('table-fit-columns-width')

fitColumnsWidth('#table-1', '#table-2')
```

It's done.

Now, the table `#table-2`'s columns width applied to `#table-1`'s columns.

Note:

> We use common modules at this moment, it maybe needs the `browserify` modules to work.

## The limitation

- Only works in tables without `colspan`.

## How does it work

The method `fitColumnsWidth` takes two parameters, `toSelector` and `withSelector`.

It calculate the table `withSelector`'s columns width, and apply to `toSelector`'s table.

More details please see the code.

## Contribute

Feel free to help improve this project.

## License

[The MIT License](LICENSE).
