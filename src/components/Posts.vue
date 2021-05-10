<template>
   <section class="posts">
          <div class="row">
              <h2>Fresh-out of the oven</h2>
              <div class="col-4 card cornBread">
                  <router-link to="/cornbread" @click="listenRouter"><h3>Corn Bread</h3></router-link>
                  <img src="https://img.icons8.com/wired/64/000000/bread-and-rolling-pin.png"/>
                    <div class="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div class="stars-outter">
                        <div class="stars-inner"></div>
                     </div>
                  <span class="number-rating"></span>
              </div>
              <div class="col-4 card lowCarb">
                  <router-link to="/lowcarb" @click="listenRouter"><h3>Low Carb Bread</h3></router-link>
                  <img src="https://img.icons8.com/wired/64/000000/bread-and-rolling-pin.png"/>
                   <div class="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="stars-outter">
                      <div class="stars-inner"></div>
                    </div>
                  <span class="number-rating"></span>
              </div>
              <div class="col-4 card functional">
                  <router-link to="functional" @click="listenRouter"><h3>Functional Bread</h3></router-link>
                  <img src="https://img.icons8.com/wired/64/000000/bread-and-rolling-pin.png"/>
                  <div class="card-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, officiis?</p>
                    </div>
                    <div class="stars-outter">
                        <div class="stars-inner"></div>
                    </div>
                  <span class="number-rating"></span>
              </div>
          </div>
  </section>
</template>

<script>
export default {
    data(){
        return {
            ratings: {
                cornBread: 4.7,
                lowCarb: 3.9,
                functional: 2.7,
            },
            starPercentage: 0,
            startPercentageRounded: 0,
            starsTotal: 5,
        }
    },
    mounted(){
        console.log('Component mounted!')
        this.getRatings()
    },
    methods:{
        getRatings(){
            for(let rating in this.ratings){
                //get percentage
                this.starPercentage = this.ratings[rating] / this.starsTotal * 100;
               //Round to nearest 10
                this.startPercentageRounded = `${(Math.round(this.starPercentage / 10) * 10)}%`;

                //Set width of starts inner to percentage
                document.querySelector(`.${rating} .stars-inner`).style.width = this.startPercentageRounded;
                document.querySelector(`.${rating} .number-rating`).innerText = this.ratings[rating]
            }
        },
        listenRouter(){
            this.$emit('listenForRouter')
        }
      
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

.postview{
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
}

.posts{
    min-height: 100vh;
    background: linear-gradient(180deg, #eceff0, #b18d6d79);
}

a{
    text-decoration: none;
    color: white;
    transition: 0.3s ease-out;
}

a:hover{
    color: white;
    transform: scale(1.1);
    transition: 0.3s ease-in;
}

.row{
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.row h2{
    font-size: 5rem;
    font-family: 'Gochi Hand', cursive;;
}


.card{
    border-radius: 25px 10px;
    /* border: 1px solid black; */
    box-shadow: 0 0 10px #242424;
    background: transparent;
    height: 50%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateY(-10%);
    color: white;
    /* position: relative; */
}

.card-text{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    transform: translateY(25%);
}

.card img{
    filter: invert(1);
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5%;
    left: 5%;
}

.card p{
    height: auto;
    width: 80%;
    font-size: 1rem;
    line-height: 2rem;
}

.cornBread{
    background-image: url('../assets/bread1.jpeg');
    background-position: left;
    background-attachment: fixed;
    background-size: auto;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: color;
}

.lowCarb{
    background-image: url('../assets/bread2.jpeg');
    background-position: center;
    background-attachment: fixed;
    background-size: auto;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: color;
}

.functional{
    background-image: url('../assets/bread3.jpeg');
    background-position: right;
    background-attachment: fixed;
    background-size: auto;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: color;
}

.stars-outter{
    position: relative;
    display: inline-block;
    transform: translateY(150%);
}

.number-rating{
    /* transform: translateY(-150%); */
}

.stars-outter::before{
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    /* color: #d8b412; */
}

.stars-inner{
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
}

.stars-inner::before{
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #d8b412;
}
</style>