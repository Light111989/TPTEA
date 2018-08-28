<template >
  <div>
    <div v-for="(data,home) in types" :key="home">
      <new-home :label="data.label" :title="data.title" :img="data.img" :sub="data.sub">
      </new-home>
      <details-home :title="data.title"></details-home>
    </div>
    <q-carousel style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src='assets/panel.jpg'/>
</q-carousel>
  </div>
</template>
<script>
import detailsHome from '../components/detailsHome.vue'
import newHome from '../components/newHome.vue'
export default {
  name: 'PageHome',
  components: {
    newHome,
    detailsHome,
  },
  data() {
    return {
      types: [
        {
          label: 'Learn More',
          title: 'Bring on the fruit',
          img: 'assets/component.jpg',
        },
        {
          sub: 'aaaaa',
          label: 'Discover Coffee',
          title: 'Find a new favorite',
          img: 'assets/component-mid.jpg',
        },
      ],
    }
  },
}
</script>
