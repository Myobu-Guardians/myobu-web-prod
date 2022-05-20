<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>Warning!</h3>
            <button class="close-button" @click="close">x</button>
          </div>
          <div class="modal-body">
            <p class="lead">
              Myōbu team is currently performing a token swap. Buying V1 Myōbu tokens is not recommended due to the
              possibility of significant investment loss. Team Myōbu is not responsible for the losses caused by buying
              the V1 token during the token swap.
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    }
  },
  mounted() {

  }

}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #4f1f85;
  width: 640px;
  margin: 0px auto;
  /*padding: 20px 30px;*/
  /*background-color: #fff;*/
  border-radius: 10px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);*/
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  background-color: #441875;
  border-bottom: 1px solid #886da7 !important;
}

.modal-header h3 {
  margin-top: 0;
  margin-bottom: 0;
  color: #fff;
  text-shadow: none;
}

.modal-body {
  margin: 20px 0;
  text-shadow: none;
}


.modal-footer {
  margin-top: 0;
  margin-bottom: 0;
  color: #2c0d4f;
}


.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-button {
  float: right;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-weight: 600;
  color: #fff;
}

</style>