# docx-annotation

> It's a vue component that will convert docx to html an annotate html.

## Features

1. javaScript convert docx to html
2. annotate html online
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

[online demo](https://nusr.github.io/frontEnd/docx-annotation/)

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

````html
<template>
  <docx-annotation session-key="annotationRequest" ref="annotationRequest" />
</template>
<script>
  export default {
    mounted() {
      axios({ method: "get", url: filePath, responseType: "arraybuffer" }).then(
        ({ data }) => {
          console.dir(data)
          this.$refs.annotationRequest.wordToHtml(data)
        }
      )
    }
  }
</script>
```
````

## advanced example

```html
<template>
  <docx-annotation
    session-key="annotationAdvanced"
    :click-scroll="true"
    ref="annotationAdvanced"
  />
</template>
<script>
  export default {
    mounted() {
      axios({ method: "get", url: filePath, responseType: "arraybuffer" }).then(
        ({ data }) => {
          console.dir(data)
          this.$refs.annotationAdvanced.wordToHtml(data)
        }
      )
    }
  }
</script>
```

## input file example

```html
<template>
  <docx-annotation session-key="annotationInput" ref="annotationRequest" />
</template>
<script>
  export default {
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
    }
  }
</script>
```

### Options

| Property    | Description            |  type   |    default    |
| ----------- | ---------------------- | :-----: | :-----------: |
| sessionKey  | sessionStorage key     | String  | 'storage-key' |
| clickScroll | scroll to docx content | Boolean |     false     |
