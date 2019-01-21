<p align="center">
  <a href="https://npmcharts.com/compare/docx-annotation"><img src="https://img.shields.io/npm/dm/docx-annotation.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/docx-annotation"><img src="https://img.shields.io/npm/v/docx-annotation.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/docx-annotation"><img src="https://img.shields.io/npm/l/docx-annotation.svg" alt="License"></a>
</p>

# docx-annotation

> It's a vue component that will convert docx to HTML an annotate HTML.

> docx 文件转换为 HTML,以及 HTML 的在线批注功能。

## Features

1. javaScript convert docx to HTML
2. annotate HTML online
3. restore annotations from request

### How to use ?

```bash
npm install --save docx-annotation
```

## dependencies

1. jQuery
2. mammoth
3. rangy

## online demo

[online demo](https://nusr.github.io/docx-annotation/demo/)

## custom rangy library

```js
Highlighter.prototype = {
  /**
   * restore selected text
   * @param {Object} item
   * @param {Object} applier
   * @param {String} containerElementId
   */
  addHighlight: function(item, applier, containerElementId) {
    var characterRange = new CharacterRange(+item.start, +item.end)
    var highlight = new Highlight(
      this.doc,
      characterRange,
      applier,
      this.converter,
      item.id,
      containerElementId
    )
    highlight.apply()
    this.highlights.push(highlight)
    return highlight
  }
}
```

## request file example

```html
<template>
  <docx-annotation @convert-start="convertStart" @convert-end="convertEnd" v-model="requestList" ref="annotationRequest" />
</template>
<script>
  export default {
    data(){
      return {
        requestList:[]
      }
    },
    mounted() {
      axios({ method: "get", url: filePath, responseType: "arraybuffer" }).then(
        ({ data }) => {
          this.$refs.annotationRequest.wordToHtml(data)
        }
      )
    },
    methods:{
       convertStart(){
          console.log('convert-start')
        },
        convertEnd(){
          console.log('convert-end')
        }
    }
  }
</script>
```

## advanced example

```html
<template>
  <docx-annotation
    @convert-start="convertStart" @convert-end="convertEnd" v-model="advancedList"
    :click-scroll="true"
    ref="annotationAdvanced"
  />
</template>
<script>
  export default {
    data(){
      return {
        advancedList:[]
      }
    },
    mounted() {
      axios({ method: "get", url: filePath, responseType: "arraybuffer" }).then(
        ({ data }) => {
          this.$refs.annotationRequest.wordToHtml(data)
        }
      )
    },
    methods:{
       convertStart(){
          console.log('convert-start')
        },
        convertEnd(){
          console.log('convert-end')
        }
    }
  }
</script>
```

## input file example

```html
<template>
  <docx-annotation @convert-start="convertStart" @convert-end="convertEnd" v-model="inputList" ref="annotationInput" />
</template>
<script>
  export default {
    data(){
      return {
        inputList:[]
      }
    },
    mounted() {
      let _this = this
      $("#input-file-container").bind("change", function(event) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onload = function(loadEvent) {
          let arrayBuffer = loadEvent.target.result
          _this.$refs.annotationInput.wordToHtml(arrayBuffer)
        }
        reader.readAsArrayBuffer(file)
      })
    },
    methods:{
       convertStart(){
          console.log('convert-start')
        },
        convertEnd(){
          console.log('convert-end')
        }
    }
  }
</script>
```

## Options

| Property    | Description            |  type   | default |
| ----------- | ---------------------- | :-----: | :-----: |
| value       | comment list           |  Array  |   []    |
| clickScroll | scroll to docx content | Boolean |  false  |

<br>

| Event         | Description                |
| ------------- | -------------------------- |
| convert-start | start convert docx to HTML |
| convert-end   | convert end                |

