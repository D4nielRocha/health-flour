<template>
  <div class="container">
    <div class="row">
      <div class="content col-12">
        <img src="../assets/bread1.png" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam excepturi iure maiores doloremque mollitia corporis voluptatem ipsa facilis tempora dolore rem, beatae rerum veritatis aperiam aspernatur obcaecati voluptas pariatur sequi.</p>
      </div>
      <div class="content col-12">
        <img src="../assets/bread2.png" alt="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto adipisci tempora laboriosam rerum reprehenderit, aperiam hic magni a incidunt natus tempore dignissimos, porro laborum cumque velit voluptatem earum itaque. Fugit numquam eaque aut architecto quo officia, ad quaerat est exercitationem explicabo? Tempora temporibus repellendus officia repellat quidem voluptatibus delectus!</p>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import image1 from '../assets/bread1.png'
import image2 from '../assets/bread2.png'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: { Footer },
  data(){
    return {
      image1: image1,
      image2: image2
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 100vh;
  height: auto !important;
  width: 70vw;
  /* position: absolute; */
  transform: translateX(20%);
  /* background: lightcoral; */
}

.row{
  /* background: lightcoral; */
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 5rem;
}

.row p{ 
  width: 50%;
  /* transform: translateY(-100%); */
}

.row img{
  height: 400px;
  width: 400px;
  transform: translateY(-25%);
}



</style>
