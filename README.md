# Introduction

vue3-infinite-scroll is a powerful and tiny infinite scroll library for vue3.

# Features

- Tiny, only 4kb after gzip
- Support vertical and horizontal mode
- Display millions of data 
- Set scroll index、offset or alignment to show specific data

try all examples on this [link](https://chouchouji.github.io/vue3-infinite-scroll/).

# Install

## [npm](https://www.npmjs.com/)

```
npm install @binbinji/vue3-infinite-scroll --save
```

## [yarn](https://yarnpkg.com/)

```
yarn add @binbinji/vue3-infinite-scroll
```

```js
import InfiniteScroll from '@binbinji/vue3-infinite-scroll'
```

# Props

| Property          | Type               | Required? | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :---------------- | :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width             | number / string | ✓         | The width of container. This property will determine the number of rendered items when direction is `'horizontal'`                                                                                                                                                                                                                                                                                                                  |
| height            | number / string | ✓         | The height of container. This property will determine the number of rendered items when direction is `'vertical'`.                                                                                                                                                                                                                                                                                                                       |
| data              | any[]              | ✓         | Data source for scrolling list.                                                                                                                                                                                                                                                                                                                                                 |
| itemSize          |  (index: number): number / number[] / number                 |          | Either a fixed height/width (depending on the direction), an array containing the heights of all the items in your list, or a function that returns the height of an item given its index: `(index: number): number`.                                                                                                                                                                                        |
| direction   | string             |           |Scrolling direction of the list which optional value is `horizontal` or `vertical`. The default value is `vertical`. |                                                                                                                                                                                                                                                                              
| estimatedSize   | number            |           | When the size of each piece of data rendered is not fixed, you can use this property to set an estimated size which default value is `50`.   |                                                                                                                                                                                                                                                                                                                        
| scrollToOffset      | number             |           | Can be used to control the scroll offset; Also useful for setting an initial scroll offset                                                                                                                                                                                                                                                                                                                                            |
| scrollToIndex     | number             |           | Item index to scroll to (by forcefully scrolling if necessary)                                                                                                                                                                                                                                                                                                                                                                        |
| scrollToAlignment | string             |           | Used in combination with `scrollToIndex`, this prop controls the alignment of the scrolled to item. One of: `'start'`, `'center'`, `'end'` or `'auto'`. Use `'start'` to always align items to the top of the container and `'end'` to align them bottom. Use `'center`' to align them in the middle of the container. `'auto'` scrolls the least amount possible to ensure that the specified `scrollToIndex` item is fully visible. |
| overscanCount     | number             |           | Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices.                                                                                                                                                                                                                                                                                    |

# Acknowledgments

This library is transplanted from [vue3-infinite-list](https://github.com/tnfe/vue3-infinite-list/). Thanks!

# License

MIT.