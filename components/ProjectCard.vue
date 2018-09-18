<template>
  <nuxt-link 
    :to="`/projects/${project.id}`" 
    class="container" 
    @click="projectSelected(project)"
    :style="`transform: rotateX(${rotationX}) rotateY(${rotationY})`"
  >
    <div class="title">{{project.title}}</div>
    <div 
      :class="`project-image${project.mobile ? ' mobile' : ''}`" 
      :style="{ backgroundImage: `url(${require(`~/assets/images/projects/${project.image}`)})` }">
    </div>
  </nuxt-link>
</template>

<script>
import tilt from "vanilla-tilt";
let gyronorm;
if (process.browser) {
  gyronorm = require("~/libs/gyronorm.complete.min.js").GyroNorm;
}
// vanilla-tilt library is used to animate card on mousemove event (on desktop)
// gyronorm library is used to get rotation data to animate the card (on mobile)
export default {
  props: {
    project: Object,
  },
  data: function() {
    return {
      rotationX: '0deg',
      rotationY: '0deg',
      scale: 1,
    }
  },
  mounted: function() {
    const that = this;
    const gn = new gyronorm();

    let initialBeta, initialGamma, currentBeta, currentGama = 0;
    let gnInitialized = false;
    const maxRotation = 10;

    gn.init().then(function(){
      gn.start(function(data){
        if (!gnInitialized) {
          initialBeta = data.do.beta;
          initialGamma = data.do.gamma;
          gnInitialized = true;
        }
        const currentBetaDiff = initialBeta - data.do.beta;
        const currentGammaDiff = initialGamma - data.do.gamma;
        const betaCardRotation = Math.sign(currentBetaDiff) * (Math.abs(currentBetaDiff) > maxRotation ? maxRotation : Math.abs(currentBetaDiff));
        // reverse motion and card rotation in gamma
        const gammaCardRotation = Math.sign(-currentGammaDiff) * (Math.abs(currentGammaDiff) > maxRotation ? maxRotation : Math.abs(currentGammaDiff));

        // TODO: this should be passed as a callback to RequestAnimationFrame to improve performance?
        that.rotationX = `${betaCardRotation}deg`;
        that.rotationY = `${gammaCardRotation}deg`;
      });
    }).catch(function(e){
      console.error(e);
    });
    // Check if the DeviceOrientation or DeviceMotion is not supported by the browser or device.
    // In that case use tilt to animate cards on mouse hover.
    // Desktop chrome supports device orientation so the check has to be made differently.
      tilt.init(this.$el, {
        max: 20,
        perspective: 2000,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
  },
  beforeDestroy: function() {
    this.$el.vanillaTilt.destroy();
  },
  methods: {
    projectSelected: function(project) {
      this.$store.commit('projectSelected', project);
    },
  }
}
</script>


<style scoped>
.container {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 200ms;
  transform-style: preserve-3d;
}

.container:hover {
  box-shadow: 0 45px 100px rgba(14, 21, 47, 0.1),
    0 16px 40px rgba(14, 21, 47, 0.1);
}

/* 1, 5, 9,... */
.container:nth-child(1),
.container:nth-child(4n + 5) {
  background: linear-gradient(180deg, #12c2e9 0%, #c471ed 50.83%, #f64f59 100%);
}

/* 2, 6, 10,... */
.container:nth-child(4n + 2) {
  background: linear-gradient(180deg, #1446a0, #db3069 100%);
}

/* 3, 7, 11,... */
.container:nth-child(3),
.container:nth-child(4n + 7) {
  background: linear-gradient(180deg, #6e44ff, #f06543 100%);
}

/* 4, 8, 12,... */
.container:nth-child(4n) {
  background: linear-gradient(180deg, #074cf5 0%, #07f59d 100%);
}

.container:before {
  content: "";
  width: 370px;
  height: 285px;
  position: absolute;
  left: -10px;
  right: 9.98%;
  top: 18.75%;
  bottom: 9.8%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 1px;
  transform: translateZ(20px);
}

.project-image {
  width: 370px;
  height: 285px;
  position: absolute;
  left: -10px;
  right: 9.98%;
  top: 18.75%;
  bottom: 9.8%;
  border-radius: 1px;
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: center;
  /* Z must be higher than container, otherwise it blends with the background in Edge */
  transform: translateZ(21px);
}

.project-image.mobile {
  background-size: 120px;
}

.title {
  padding: 32px;
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #ffffff;
  transform: translateZ(20px);
}

@media (max-width: 600px) {
  .container {
    width: 80vw;
    height: 80vw;
    max-width: 300px;
    max-height: 300px;
  }

  .container:before {
    width: 75vw;
    height: 58vw;
    max-width: 270px;
    max-height: 210px;
    left: -10px;
    right: 9.98%;
    top: 18.75%;
    bottom: 9.8%;
  }

  .project-image {
    width: 75vw;
    height: 58vw;
    max-width: 270px;
    max-height: 210px;
    left: -10px;
    right: 9.98%;
    top: 18.75%;
    bottom: 9.8%;
    background-size: 200px;
  }

  .project-image.mobile {
    background-size: 80px;
  }

  .title {
    padding: 18px;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>

