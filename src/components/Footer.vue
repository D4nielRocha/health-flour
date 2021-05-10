<template>
  <footer>
      <div class="footer">
        <button class="btn btn-md btn-outline-light">Expand...</button>
        <div class="expand">
          <div class="links">
              <a href="">Link1</a>
              <a href="">Link2</a>
              <a href="">Link3</a>
          </div>
          <div class="contacts">
              <p>Contacts</p>
              <p>Contacts</p>
              <p>Contacts</p>
              <p>Contacts</p>
              <p>Contacts</p>
          </div>
          <div class="social-icons">
              <p>social media icons</p>
              <p>social media icons</p>
              <p>social media icons</p>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            expand: false
        }
    }
    // methods:{
    //     toggleFooter(){
    //         this.expand = !this.expand
    //     }
    // }
}
</script>

<style scoped>
.footer{
    /* border-top: 3px solid #242424; */
    position: absolute;
    /* bottom: 0; */
    /* top: 100vh; */
    width: 100%;
    background: #2e2828;
    min-height: 40vh;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
}

.footer button{
    border: none;
    outline: none;
}

.expand{
    display: flex;
    width: 80%;
    justify-content: space-around;
}

.links{
    display: flex;
    flex-direction: column;
}

.links a{
    text-decoration: none;
    outline: none;
    color: white;
    font-size: 1.5rem;
}
</style>