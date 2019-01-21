/*
 * @Author: Steve Xu 
 * @Date: 2019-01-21 11:17:53 
 * @Last Modified by:   Steve Xu 
 * @Last Modified time: 2019-01-21 11:17:53 
 */
import docxAnnotation from "./docx-annotation.vue"
export default docxAnnotation
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("docx-annotation", docxAnnotation)
}
