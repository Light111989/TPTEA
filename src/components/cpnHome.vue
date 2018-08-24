<template>
 <div>
<q-carousel style="max-width: 700px;margin:auto; height:300px; margin-bottom: 5px;" >
    <q-carousel-slide img-src='assets/component.jpg'>
      <div class="q-display-1" style="color:white">Bring on the fruit</div>
      <q-btn class="fixed-bottom-left" rounded color="white" size="1vw" text-color="black" style="margin:10px" >
        <q-item @click.native="hideDetail(true)">
          <q-item-main label="Learn More" />
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
  components: {
    detailsHome,
  },
  methods: {
    ...mapActions('detail', ['hideDetail']),
  },
}
</script>
