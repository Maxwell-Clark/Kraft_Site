<template>
  <div>
    <div id="banner">
      <div id="text">
        <h1 id="title">Coaching For Lasting Change</h1>
        <p id="title_description">
          Let me help you see the Forest for the Trees and grow yourself along the way.
        </p>
        <b-btn class="button" pill>Get Started</b-btn>
      </div>
    </div>

    <div class="custom-shape-divider-bottom-1652472688">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="intro_group">
      <div class="top-intro">
        <img id="profile-pic" src="@/assets/Ken_in_Circle_Picture/Ken_in_Circle_Picture.png" alt="Profile Picture">
        <div id="intro_text">
          <h2>
            Ken Kraft
          </h2>
          <p>this text is about Ken, this text is about ken /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum. Aliquam faucibus purus in massa tempor nec feugiat nisl. Adipiscing elit pellentesque habitant morbi tristique senectus. Elit eget gravida cum sociis natoque penatibus et magnis dis. In nibh mauris cursus mattis molestie a iaculis at erat. Elementum pulvinar etiam non quam. Amet massa vitae tortor condimentum lacinia. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Eros donec ac odio tempor orci dapibus ultrices in. Suspendisse in est ante in nibh mauris. Sed faucibus turpis in eu mi.</p>
          <b-btn class="button" pill >Learn More</b-btn>
        </div>
      </div>
      <div class="bottom-intro">
        <h2>
          Explore The Possibilities
        </h2>
        <p>With multiple Options, you can find the right solution for you and your team</p>
      </div>
    </div>
<!--    card list component goes here-->
    <div id="card-list">
      <card-component
          v-for="card in cards" :key="card.title + card.text" @click="DoTheScroll(card.scroll)" :card="card"></card-component>
    </div>
    <div class="next-step">
      <h2>
        Take The Next Step
      </h2>
      <p>Schedule a free consultation and discover what you need to go from good to great</p>
      <b-btn class="button" pill >Get Started</b-btn>
    </div>
    <div>
      <solution-component id="sc1" title="Executive Leadership & Team Development" text="" image="../assets/pexels-pixabay-416405.jpg" description="Take your team to the next level of personal and Professional Development">
        <template v-slot:description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec eget ex euismod, porttitor nunc eu,
            maximus nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec eget ex euismod, porttitor nunc eu,
            maximus nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec eget ex euismod, porttitor nunc eu,
            maximus nunc.
          </p>
        </template>
      </solution-component>
      <solution-component id="sc2" title="Learning Transformation" text="This is where we are putting the text, this will be informative to the customer" image="" description="Discover ways to make your learning organization world class">
        <template v-slot:description>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In tellus integer feugiat scelerisque varius.</p>
        </template>
      </solution-component>
      <solution-component id="sc3" title="Integrated Talent Management & Succession Planning" text="" image="" description="Learn how to build a successful organization from the inside out">
        <template v-slot:description>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In tellus integer feugiat scelerisque varius.</p>
        </template>      </solution-component>
      <solution-component id="sc4" title="Consulting, Advising, and Coaching" text="" image="" description="Dive into One on One coaching and consulting using 360 assessments to give you accurate and reliable data ">
        <template v-slot:description>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. In tellus integer feugiat scelerisque varius.</p>
        </template>      </solution-component>
    </div>
    <contact-page id="contact"/>
  </div>
</template>

<script>
import cardComponent from "@/components/CardComponent";
import solutionComponent from "@/components/SolutionComponent";
import contactPage  from "@/components/ContactPage";

export default {
  name: "MainPage",
  props: {
      "scrollTo":{
          type: String,
          default: "",
      },
  },
  data() {
    return {
      cards: [
        {
          title: "Executive Leadership & Team Development",
          text: "Take your team to the next level of personal and Professional Development",
          imgSrc: "https://www.tutorialkart.com/sample_image_small.jpg",
          imgAlt: "Card 1",
          scroll: 'sc1'
        },
        {
          title: "Learning Transformation",
          text: "Discover ways to make your learning organization world class",
          imgSrc: "@/assets/card-2.png",
          imgAlt: "Card 2",
          scroll: 'sc2'
        },
        {
          title: "Integrated Talent Management & Succession Planning",
          text: "Learn how to build a successful organization from the inside out",
          imgSrc: "@/assets/card-3.png",
          imgAlt: "Card 3",
          scroll: 'sc3'
        },
        {
          title: "Consulting, Advising, and Coaching",
          text: "Dive into One on One coaching and consulting using 360 assessments to give you accureate and reliable data",
          imgSrc: "@/assets/card-4.png",
          imgAlt: "Card 4",
          scroll: 'sc4'
        }
      ],
      whereToScroll: "",
    }
  },
  components: {
    cardComponent,
    solutionComponent,
    contactPage
  },
  watch: {
    "scrollTo": function(newVal) {
      this.whereToScroll = newVal;
      this.DoTheScroll(this.whereToScroll);
    }
  },
  methods: {
    DoTheScroll(scroll){
      if(scroll !== ""){
        switch (scroll) {
          case "Home":
            this.$nextTick(() => {
              this.$scrollTo("#banner", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "WhatWeDo":
            this.$nextTick(() => {
              this.$scrollTo("#card-list", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "Contact":
            this.$nextTick(() => {
              this.$scrollTo("#contact", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "sc1":
            this.$nextTick(() => {
              this.$scrollTo("#sc1", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "sc2":
            this.$nextTick(() => {
              this.$scrollTo("#sc2", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "sc3":
            this.$nextTick(() => {
              this.$scrollTo("#sc3", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          case "sc4":
            this.$nextTick(() => {
              this.$scrollTo("#sc4", {
                offset: -100,
                duration: 500,
                easing: "easeInOutCubic"
              });
            });
            break;
          default:
            break;
        }
        this.$emit("scrollComplete");
      }
    }
  }
}
</script>

<style scoped>
.button{
  background-color: #656D4A;
  color: white;
  border: none;
}
.button:hover{
  background-color: #936639;
  color: white;
  border: none;
}
#banner {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  height: 94.8vh;
  width: 100%;
  background-color: #DAD7CD;
  background-image: url("@/assets/pexels-taylor-hunt-2902440.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-height: 80%;
}
#banner:before {
  vertical-align: bottom;
}
#text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  height: 50%;
  margin: 8px;
  color: white;
  text-shadow: black 0.5em 0.5em 0.9em;
}
.intro_group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em 1em 0em 1em;
  width: 100%;
  height: 50%;
  color: black;
}
#card-list{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  color: black;
}
#intro_text {
  max-width: 40em;
}
#title {
  font-size: 7em;
  font-weight: bold;
  text-shadow: black 0.01em 0.01em 0.4em !important;
  color: #fefae0;
}
#title_description {
  font-size: 1.5em;
  font-weight: bolder;
  font-family: 'Calistoga', Avenir, Arial, sans-serif;
  color: #fefae0;
}

/*@media only screen and (hover: none), ( pointer: coarse) {*/
/*  .custom-shape-divider-bottom-1652472688 {*/
/*    display: none;*/
/*  }*/
/*}*/
@media only screen and (max-width: 600px), (max-height: 1100px) {
  .custom-shape-divider-bottom-1652472688 {
    bottom: -10px;
  }
}

@media only screen and (max-width: 2300px) {
  .custom-shape-divider-bottom-1652472688 {
    bottom: -20px;
  }
}

@media only screen and (max-width: 2300px) {
  .custom-shape-divider-bottom-1652472688 {
    bottom: -20px;
  }
}


@media screen and (max-width: 900px) {
  #text {
    font-size: xx-small !important;
  }
}

@media screen and (max-width: 1150px) {
  .top-intro {
    flex-direction: column !important;
  }
  .custom-shape-divider-bottom-1652472688 {
    display: none;
  }
  #intro_text {
    margin-top: 10px !important;
    font-size: medium !important;
  }
  #profile-pic {
    margin: 0em !important;
  }
}

.custom-shape-divider-bottom-1652472688 {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  /*padding: 0em 10em 10em 10em;*/
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1652472688 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  /*height: 87px;*/
  height: 10em;
}

.custom-shape-divider-bottom-1652472688 .shape-fill {
  fill: #FFFFFF;
}
#profile-pic {
  width: 25%;
  height: 25%;
  margin-right: 10em;
  min-height: 20em;
  min-width: 20em;
}

.top-intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
}
.bottom-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin-top: 5em;
}
.next-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin: 5em;
}
</style>