<template>
  <div>
    <slide></slide>
    <titre></titre>
    <procedure></procedure>
  </div>
</template>

<script>
import Slide from '@/components/sections/accueil/Slide';
import Titre from '@/components/sections/accueil/Titre';
import Procedure from '@/components/sections/accueil/Procedure';
export default {
  layout: 'layout',
  components: {
    Slide,
    Titre,
    Procedure
  },
  data: () => ({
    
  }),
  methods: {
  }
};
</script>
<style scoped>
.height-38 {
  height: 38px !important;
}
.custom-h2 {
  padding: 18px;
  background-color: #995104;
  color: #fff;
  opacity: 0.8;
}
.width-800{
  max-width: 800px !important;
}
</style>