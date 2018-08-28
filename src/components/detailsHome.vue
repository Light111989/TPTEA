<template>
   <q-modal v-model="getIsHideDetail" :content-css="{minWidth: '48vw', minHeight: '86vh'}">
      <q-modal-layout>
        <div id="labels" class=" transbox">
          <q-btn @click="hide()" flat icon="close">
            <div style="margin-left: 10px; text-transform: initial;">{{title}}</div>
          </q-btn>
        </div>
         <img src="assets/header-pop.jpg" alt="ww" style="width: 683px; height:300px">
        <div style="padding: 50px">
          <div class="q-display-1 q-mb-md">Basic Modal</div>
          <p v-for="n in 15" :key="`a-${n}`">Scroll down to close</p>
          <q-btn to="/orders" class="order" rounded>
            <div>Order</div>
          </q-btn>
        </div>
      </q-modal-layout>
    </q-modal>
  <!-- popup modal -->
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['title'],
  computed: {
    ...mapGetters('detail', ['getIsHideDetail']),
  },
  methods: {
    ...mapActions('detail', ['hideDetail']),
    hide() {
      this.hideDetail(false)
    },
  },
}
</script>
<style>
.transbox {
  z-index: 999999;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  border-left: 1px solid #d9d2d2;
  border-right: 1px solid #d9d2d2;
  margin-bottom: -38px;
}
</style>
