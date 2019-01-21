<template>
  <div class="doc-container">
    <div class="doc-content">
      <div
        class="doc-content__html"
        @mouseup="mouseUpHandler"
        :id="containerId"
        v-html="wordContent"
      ></div>
      <div class="doc-content__note" v-show="!showComment">
        <textarea
          class="doc-content__textarea"
          autocomplete="off"
          v-model="formData.comment"
          placeholder="请输入批注"
          style="min-height: 54px; height: 54px;"
        ></textarea>
        <div class="doc-content__button">
          <div @click="submitComment" class="button">确定</div>
          <div @click="cancelComment" class="button">取消</div>
        </div>
        <div class="doc-content__anchor">
          <div></div>
        </div>
      </div>
    </div>
    <div class="doc-comment">
      <div class="doc-comment__head f16">
        <div>批注</div>
        <div>
          <div class="button danger" @click="clearComment">全部删除</div>
        </div>
      </div>
      <template v-if="!commentList.length">
        <div class="doc-comment__empty">暂无批注</div>
      </template>
      <template v-else>
        <ul class="reset-ul">
          <li
            v-for="(item,index) in commentList"
            :key="index"
            :class="{active: item.isActive}"
            :id="highlightClass + item.id"
            @click="highlightArticle(item)"
          >
            <div class="item-wrap">
              <div class="item-wrap__content">{{(index + 1) + ': ' +item.selectText}}</div>
              <div>
                <i class="danger" @click.stop="deleteComment(item)"></i>
              </div>
            </div>
            <div>
              <span>批注:</span>
              <span class="item-content">{{item.comment}}</span>
            </div>
          </li>
        </ul>
      </template>
    </div>
    <div class="comment-detail-info">
      <div>
        <span>批注:</span>
        <span class="tip">{{commentDetail}}</span>
      </div>
      <em class="triangle-bg"></em>
      <em class="triangle-border"></em>
    </div>
  </div>
</template>
<script>
import annotation from "./docx-annotation.js";
export default {
  name: "WordIndex",
  mixins: [annotation]
};
</script>
<style lang="scss" >
@import "./docx-annotation.scss";
</style>