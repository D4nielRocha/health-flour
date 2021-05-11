<template>
    <section class="cornbread">
    <h1>This will be the LowCarb Bread page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptas aspernatur. Dolore earum accusantium eligendi, asperiores nostrum explicabo voluptatibus molestias?</p>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
    </ul>
    <img src="https://svgsilh.com/svg/2022578.svg" alt="">
  </section>
 
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Posts from '../components/Posts.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Posts, Footer
    }
}
</script>

<style scoped>

    .cornbread{
        min-height: 100vh;
        width: 50%;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .cornbread img{
        width: 300px;
        height: 300px;
        /* z-index: 2000; */
        position: absolute;
        left: 37.5%;
        top: 5%;
    }

    .posts{
        min-height: 100vh;
        /* position: absolute; */
        /* top: 100vh; */
        width: 100%;
    }

    .footer{
        position: absolute;
        bottom: 0;
    }

</style>