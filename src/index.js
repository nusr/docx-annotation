import docxAnnotation from "./docx-annotation.vue"
export default docxAnnotation
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("docx-annotation", docxAnnotation)
}
