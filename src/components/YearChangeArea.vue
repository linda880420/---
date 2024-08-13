<template>
  <section id="section-1" class="animated-section">
    <div class="content">
      <div class="year-display" id="year-display-1">1963</div>
      <div class="background absolute top-0" id="background-1"></div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AnimatedSection',
  setup() {
    onMounted(() => {
      const sectionId = 'section-1';
      const startYear = 1963;
      const highlightYear = 1992;
      const pauseYear = 1994;
      const endYear = 2024;

      ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: 'top top',
        end: 'bottom bottom',
        pin: `#${sectionId} .content`,
        pinSpacing: false,
        scrub: 4, 
        onUpdate: (self) => {
          const progress = self.progress;
          const yearDisplay = document.querySelector(`#${sectionId} .year-display`);
          const background = document.querySelector(`#${sectionId} .background`);

          let currentYear;

          if (progress <= 0.3) {
            const transitionProgress = progress / 0.3;
            currentYear = startYear + (highlightYear - startYear) * transitionProgress;
          } else if (progress <= 0.4) {
            currentYear = highlightYear;
          } else if (progress <= 0.5) {
            currentYear = 1993;
          } else if (progress <= 0.7) {
            currentYear = pauseYear;
          } else {
            const transitionProgress = (progress - 0.7) / 0.3;
            currentYear = pauseYear + (endYear - pauseYear) * transitionProgress;
          }

          // Update year display
          yearDisplay.innerHTML = Math.floor(currentYear);

          // Update text and background colors
          if (currentYear < highlightYear) {
            yearDisplay.style.color = 'white';
            background.style.backgroundColor = 'black';
          } else {
            yearDisplay.style.color = 'black';
            background.style.backgroundColor = 'white';
          }

          // Background and blur effect for time travel feel
          if (currentYear >= highlightYear && currentYear < endYear) {
            const opacity = progress < 0.7 ? 1 : Math.max(0.5, 1 - (progress - 0.7) / 0.3);
            // Apply a cubic function for smoother blur transition
            const blurAmount = progress < 0.3 ? 0 : 10 * Math.pow((progress - 0.3) / 0.4, 2); 
            background.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
            background.style.backgroundImage = "url('../src/assets/img/mcdonalds-m.png')";
            background.style.opacity = opacity;
            background.style.filter = `blur(${blurAmount}px)`;
          } else if (currentYear >= endYear) {
            background.style.backgroundColor = "transparent";
            background.style.opacity = 0;
            background.style.filter = "blur(0px)";
          } else {
            background.style.backgroundColor = "black";
            background.style.backgroundImage = "none";
            background.style.opacity = 1;
            background.style.filter = "blur(0px)";
          }

          // Additional time travel effects (e.g., slight scaling)
          const scale = 1 + 0.1 * (1 - Math.abs(0.5 - progress) * 2); // Scale slightly to emphasize the transition
          yearDisplay.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      });

      ScrollTrigger.create({
        trigger: `#${sectionId} .year-display`,
        start: `top center+=${window.innerHeight / 2}px`,
        end: `top center+=${window.innerHeight * 2}px`,
        onUpdate: (self) => {
          const yearDisplay = document.querySelector(`#${sectionId} .year-display`);
          if (self.progress > 0.5) {
            yearDisplay.classList.add('sticky');
          } else {
            yearDisplay.classList.remove('sticky');
          }
        }
        
      });
      
    });
  
  }

};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.year-display.sticky {
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}
.animated-section {
  height: 240vh;
  position: relative;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}

.year-display {
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: transform 0.2s ease;
}



.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Initial black background */
  background-image: none;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  transition: background-color 1s ease, background-image 1s ease, opacity 1s ease, filter 1s ease, transform 1s ease;
}
</style>
