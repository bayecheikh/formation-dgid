<template>
  <div>
    <!-- <header-one></header-one> -->
    <slider-one></slider-one>
    <section-one></section-one>
    <footer-one></footer-one>
  </div>
</template>

<script>
  import HeaderOne from '@/components/portailweb/headers/HeaderOne'
  import SliderOne from '@/components/portailweb/sliders/SliderOne'
  import SectionOne from '@/components/portailweb/sections/SectionOne'
  import FooterOne from '@/components/portailweb/footers/FooterOne'

  export default {
    layout:'portailweb',
    components: {
      HeaderOne,
      SliderOne,
      SectionOne,
      FooterOne,
    },
    data: () => ({
    }),
    methods: {}
  };
</script>