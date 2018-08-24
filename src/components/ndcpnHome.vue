<template>
 <div>
<q-carousel style="max-width: 700px;margin:auto; height:300px; margin-bottom: 5px;" >
    <q-carousel-slide img-src='assets/component-mid.jpg'>
    <div class="inner-top">Discover coffee</div>
      <div class="q-display-1" style="color:white">Find a new favorite</div>
      <q-btn class="fixed-bottom-left" rounded color="white" size="1vw" text-color="black" style="margin:10px" >
        <q-item @click.native="show(item)">
          <q-item-main label="Discover coffee" />
        </q-item>
      </q-btn>
    </q-carousel-slide>
</q-carousel>
  </div>
</template>
