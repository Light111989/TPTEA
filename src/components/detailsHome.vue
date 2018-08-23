<template>
<div>
  <div id="labels" class="transbox">
    <q-btn flat icon="close" @click.native="hide()" >
      <div style="margin-left: 10px; text-transform: initial;">{{data.title}}</div>
    </q-btn>
  </div>
    <q-carousel-slide :img-src="data.imageSrc" alt="ww" style="max-width: 700px;margin:auto; height:300px;"/>
  <div style="padding: 50px">
    <div class="q-display-1 q-mb-md">Basic Modal</div>
    <p v-for="n in 15" :key="`a-${n}`">{{data.label}}</p>
    <q-btn to="/orders" class="Order" rounded>
      <div>Order</div>
    </q-btn>
  </div>
  <!-- popup modal -->
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: {
    data: [Object],
  },
  name: 'PageMember',
  methods: {
    ...mapActions('detail', ['hideDetail']),
    hide() {
      this.hideDetail(false)
    },
  },
  computed: {
    ...mapGetters('detail', ['getIsHideDetail']),
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
  filter: alpha(opacity=60); /* For IE8 and earlier */
  margin-bottom: -38px;
}
</style>
