<template >
  <div>
    <cpn-home type="cpnHome"></cpn-home>
    <ndcpn-home type="ndcpnHome"></ndcpn-home>
    <q-carousel style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src='assets/panel.jpg'/>
</q-carousel>
  </div>
</template>
<script>
import cpnHome from '../components/cpnHome.vue'
import ndcpnHome from '../components/ndcpnHome.vue'
export default {
  name: 'PageIndex',
  components: {
    cpnHome,
    ndcpnHome,
  },
}
</script>
