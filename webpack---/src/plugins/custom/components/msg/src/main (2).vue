<!--
 * @Author: your name
 * @Date: 2020-03-09 11:21:37
 * @LastEditTime: 2020-03-14 16:38:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \32duiduipeng\src\plugins\custom\components\msg\src\main.vue
 -->
<template>
  <div class="msg">
    <transition
      type="transition"
      mode="out-in"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="show"
        class="msg-content"
      >
        {{ title }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      show: false,
      resolve: "",
      reject: "",
      promise: "" // 保存promise对象
    };
  },
  methods: {
    // 弹出messageBox,并创建promise对象
    showMsgBox: function(title) {
      this.title = title;
      this.show = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    destroy: function() {
      this.resolve();
      this.$destroy();
      document.body.removeChild(this.$el);
    },
    afterEnter: function() {
      setTimeout(() => {
        this.show = false;
      }, 1200);
      // ...
    },
    afterLeave: function() {
      this.destroy();
      // ...
    }
  }
};
</script>

<style scoped>
.msg {
  max-width: 480px;
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
}
.msg .msg-content {
    position: relative;
    padding: 12px 25px;
    text-align: center;
    line-height: 24px;
    word-break: break-all;
    overflow: hidden;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
.v-enter, .v-leave-to /* .v-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s;
  animation: bounce-in 0.5s;
}
.v-leave-active {
  transition: opacity 0.3s;
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>