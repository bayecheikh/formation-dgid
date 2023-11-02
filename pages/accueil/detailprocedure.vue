<template>
    <div>
      <slide></slide>
      <titre></titre>
      <detail-procedure></detail-procedure>
    </div>
  </template>
  
  <script>
  import Slide from '@/components/sections/accueil/Slide';
  import Titre from '@/components/sections/accueil/Titre';
  import DetailProcedure from '@/components/sections/accueil/DetailProcedure';
  export default {
    layout: 'layout',
    components: {
      Slide,
      Titre,
      DetailProcedure
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