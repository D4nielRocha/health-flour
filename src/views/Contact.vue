<template>
  <div class="contact">
      <div class="contact-form">
        <form>

          <label for="firstName">First Name</label>
          <input type="text" required v-model="firstName" placeholder="First Name">

          <label for="lastName">Last Name</label>
          <input type="text" required v-model="lastName" placeholder="Last Name">
        
          <label for="firstName">Email</label>
          <input type="email" required v-model="email" placeholder="email">

          <label for="message">Message</label>
          <textarea type="text" rows="4"  required v-model="message" placeholder="message" />

          <button class="btn btn-md btn-outline-light" @click.prevent="submitForm">Send your message</button>
      </form>
    </div>
  </div>

</template>
<script>
  export default {
    data(){
      return{
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    },
    methods:{
      submitForm(e){
        console.log(e);
        let newProduct = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            message: this.message
        }
        console.log(newProduct);
      }
    }
  }
</script>

<style scoped>
  .contact{
    min-height: 100vh;
    width: 70vw;
    transform: translateX(43%);
    padding: 5rem;

  }

  .contact-form{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
  form{
    background: #b18d6df8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 70vh;
    height: auto;
    width: 30vw;
    /* margin-top: 5rem; */
    /* background: rgb(243, 237, 227); */
    box-shadow: 5px 15px 25px #b18d6df8;
    border-radius: 25px 5px;
    padding: 1rem;
  }

  label{
    font-size: 1.1rem;
    color: rgb(102, 30, 30);
    margin-top: 1.5rem;
    }

  ::placeholder{
    color: rgba(102, 30, 30, 0.5);  }

  form input, textarea{
    margin-top: -1.5rem;
    width: 80%;
    border: none;
    outline: none;
    background: transparent;
    height: 10%;
    border-bottom: 2px solid antiquewhite;
    color: white;
  }

  textarea{
    height: 30%;
  }
</style>