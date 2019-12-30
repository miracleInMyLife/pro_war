<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
		<!-- <GoodDetails></GoodDetails> -->
		<FooterGuider></FooterGuider>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider.vue'
// import GoodDetails from './components/GoodDetail/GoodDetail'

export default {
  name: 'app',
	
  components:{
    FooterGuider,
    // GoodDetails
	}
}
</script>

<style>

</style>
