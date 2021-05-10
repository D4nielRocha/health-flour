<template>
  <div id="nav">
    <div class="brand">
      <img src="https://img.icons8.com/ios-filled/50/000000/bread-and-rye--v2.png"/>    
      <router-link to="/" ><h1>BRAND</h1></router-link>
    </div>
    <div class="routers">
      <router-link to="/" @click="showPost">Landing</router-link>
      <router-link to="/home" @click="showPost">Home</router-link>
      <router-link to="/contact" @click="showPost">Contact</router-link>
    </div>
  </div>
    <router-view name="mainView" />
  <router-view name="postView" class="postview" />
  <Posts v-show="!routerActive"  @listenForRouter="updateRouter" />
  <Footer v-show="!routerActive" />
</template>

<script>
  import Footer from './components/Footer.vue'
  import Posts from './components/Posts.vue'

export default {
  components: {
    Footer, Posts
  },
  data(){
    return{
      routerActive: false
    }
    },
    methods:{
      updateRouter(){
        this.routerActive = true
        console.log(`routerActive changed to:`, this.routerActive)
      },
      showPost(){
        this.routerActive = false
        console.log(`routerActive changed to:`, this.routerActive)
      }
    }
  }

</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;

}

.postview{
  min-height: 80vh;
  /* background: black; */
  width: 70vw;
  /* position: absolute; */
  /* top: 100vh; */
  /* left: 30vw; */
  text-align: center;
  margin-top: 10rem;
  
}

#nav {
  display: flex;
  width: 70vw;
  position: absolute;
  left: 30vw;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  z-index: 1;
}

.brand{
  display: flex;
  /* background: lightcoral; */
}

.brand img{
  width: 50px;
  height: 50px;
  margin-left: 1rem;
}

#nav h1{
  margin-left: 5rem;
  font-size: 3rem;
  color: #242424;
}

.routers{
  position: absolute;
  right: 10%;
  width: 25%;
  display: flex;
  justify-content: space-around;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #31864e;
}



</style>
