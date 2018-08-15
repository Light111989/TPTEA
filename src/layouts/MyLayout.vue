<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-footer>
      <demo-tabs v-if="$q.theme === 'ios'" />
        <q-tabs class="shadow-2" align="justify" color="black">
        <q-route-tab icon="home" to="/home" exact slot="title" label="Home" />
         <q-route-tab icon="store" to="/store" exact slot="title" label="Store" />
        <q-route-tab icon="local_cafe" to="/order" exact slot="title" label="Order" />
        <q-route-tab icon="sentiment_very_satisfied" to="/users" exact slot="title" label="User" />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import {openURL} from 'quasar'

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    openURL,
  },
}
</script>

<style>
</style>
