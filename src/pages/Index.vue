<template >
<div>
  <q-carousel v-for="(item,index) in types" :key="index" class="component-top" style="max-width: 700px;margin:auto; height:300px; margin-bottom: 5px;" >
    <q-carousel-slide :img-src="item.imageSrc">
      <div class="q-display-1" style="color:white">Bring on the fruit</div>
      <q-btn class="fixed-bottom-left" rounded color="white" size="1vw" text-color="black" style="margin:10px" >
        <q-item @click.native="show(item)">
          <q-item-main :label="item.label" />
        </q-item>
      </q-btn>
      <!-- popup modal -->
          <q-modal v-model="getIsHideDetail" :content-css="{minWidth: '48vw', minHeight: '86vh'}">
            <details-home type="detailsHome" :data="data"></details-home>
          </q-modal>
       <!-- popup modal -->
    </q-carousel-slide>
  </q-carousel>
  <!-- <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src="assets/component-mid.jpg">
    <div class="q-subheading">Discover coffee</div>
        <div style="color:white" class="q-display-1"> </div>
      <q-btn class="fixed-bottom-left" rounded color="white" size="1vw" text-color="black" style="margin:10px">
        <q-item
          v-for="modal in types2"
          :key="modal.label2"
          @click.native="modal.show()"
        >
          <q-item-main :label="modal.label2" />
        </q-item>
      </q-btn>
          <q-modal v-model="basicModal2" :content-css="{minWidth: '48vw', minHeight: '86vh'}">
            <details-home type="detailsHome"></details-home>
          </q-modal>
    </q-carousel-slide>
  </q-carousel> -->
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src="assets/panel.jpg">
    </q-carousel-slide>
  </q-carousel>
  </div>
</template>
<style>
</style>
<script>
import {mapGetters, mapActions} from 'vuex'
import detailsHome from '../components/detailsHome.vue'
export default {
  name: 'PageIndex',
  components: {
    detailsHome,
  },
  data() {
    return {
      basicModal: false,
      data: null,
      // imageSrc: 'assets/component.jpg',
      types: [
        {
          label: 'Learn More',
          title: 'Bring on the fruit',
          imageSrc: 'assets/component.jpg',
        },
        {
          label: 'Discover coffe',
          title: 'Find a new favorite',
          imageSrc: 'assets/component-mid.jpg',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('detail', ['getIsHideDetail']),
  },
  methods: {
    ...mapActions('detail', ['hideDetail']),
    show(item) {
      this.basicModal = true
      this.data = item
      this.hideDetail(true)
    },
  },
}
</script>
