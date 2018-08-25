<template>
 <div>
<q-carousel style="max-width: 700px;margin:auto; height:300px; margin-bottom: 5px;" >
    <q-carousel-slide :img-src='img'>
      <div class="subtitle" style="color:white">{{sub}}</div>
      <div class="q-display-1" style="color:white">{{title}}</div>
      <q-btn class="fixed-bottom-left" rounded color="white" size="1vw" text-color="black" style="margin:10px" >
        <q-item @click.native="hideDetail(true)">
          <q-item-main :label="label" />
        </q-item>
      </q-btn>
    </q-carousel-slide>
</q-carousel>
<details-home></details-home>
  </div>
</template>
<script>
import detailsHome from '../components/detailsHome.vue'
import {mapActions} from 'vuex'
export default {
  name: 'PageHome',
  props: ['img', 'title', 'label', 'sub'],
  components: {
    detailsHome,
  },
  methods: {
    ...mapActions('detail', ['hideDetail']),
  },
}
</script>
