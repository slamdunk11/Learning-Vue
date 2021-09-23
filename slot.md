slot으로 하위 컴포넌트에 있던 것 수정 가능
(ex. default header => 경고! 로 수정됨)

```
// modal.vue(하위 컴포넌트)

<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
```

```
// todoInput.vue

<template>
 ...
     <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">
      경고!
      <i class="closeModaltn fas fa-times" @click="showModal = false"></i>
    </h3>
    <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    <h5 slot="footer">copy right</h5>
  </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {

  data: function(){
    return{
      newTodoItem: '',
      showModal: false
    }
  },

  
  components: {
    Modal: Modal
  }
};
```
