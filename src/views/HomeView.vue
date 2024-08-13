<script>
// import tryComponent from './Try.vue'
import headerComponent from '../components/headerComponent.vue'
import VenderComponent from '../components/vendorComponentVer2.vue'
import CardComment3 from '../components/CardComment3.vue'
import MapArea from '../components/MapArea.vue'
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterArea.vue'

import FengChiaNewsAreaComponent from '../components/FengChiaNewsArea.vue'
import AboutFengChiaComponent from '../components/AboutFengChia.vue'
import PhotosAlbumComponent from '../components/PhotosAlbumArea.vue'
import YearChangeComponent from '../components/YearChangeArea.vue'
import Animate01Component from '../components/Animate01Area.vue'
import Animate02Component from '../components/Animate02Area.vue'
import VenderSlogenComponent from '../components/VenderSlogenArea.vue'
import HotelSlogenComponent from '../components/HotelSlogenArea.vue'
import WalkingComponent from '../components/WalkingArea.vue'
import TrafficSlogenComponent from '../components/TrafficSlogenArea.vue'
// import { ArrowRightIcon } from '@heroicons/vue/24/solid'
//gsap
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger);
export default {

  data() {
    return {
      scrollY: 0,
      lastScrollTop: 0,
      showDisclosure: true,
      rangerTitle: '排行主題',
      F_Event: [
        {
          id: 1,
          title: '逢甲夜市美食嘉年華',
          img: 'https://images.unsplash.com/photo-1542666836-5ecec389a3f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0JTIwbWFya2V0fGVufDB8fDB8fHww',
          cardContent: '歡迎來到逢甲夜市美食嘉年華！在這裡，您可以品嚐到來自全台各地的特色小吃和創意料理，還有多款甜品和飲料等著您來品嚐。不僅如此，我們還安排了現場音樂表演和趣味遊戲，讓您在享受美食的同時也能盡情放鬆和娛樂。快來加入我們，一起感受逢甲夜市的熱情與活力吧！'
        },
        {
          id: 2,
          title: '逢甲文化藝術季',
          img: 'https://images.unsplash.com/photo-1583917092303-dd00e56b3049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG5pZ2h0JTIwbWFya2V0fGVufDB8fDB8fHww',
          cardContent: '逢甲文化藝術季即將開幕！我們邀請了多位知名藝術家和表演團體，共同呈現一場視覺與聽覺的饗宴。活動期間，您可以欣賞到精彩的舞蹈、戲劇和音樂表演，還有豐富的藝術展覽等著您來探索。此外，我們還設有多個工作坊，讓您親自體驗各種藝術創作的樂趣。趕快來參加，與我們一起度過一個充滿藝術氣息的美好時光吧！'
        },
        {
          id: 3,
          title: '逢甲新年倒數派對',
          img: 'https://images.unsplash.com/photo-1557537386-0a9779b9e82e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG5pZ2h0JTIwbWFya2V0fGVufDB8fDB8fHww',
          cardContent: '準備好迎接新的一年了嗎？逢甲新年倒數派對即將火熱登場！現場將有精彩的表演節目，包括人氣歌手的演唱、舞蹈表演以及特別嘉賓的驚喜現身。倒數時刻，我們將一同迎接新年的到來，並燃放絢麗的煙火，讓這個夜晚成為您難忘的回憶。快來加入我們，一起倒數迎新年，分享這份歡樂與喜悅吧！'
        },
        {
          id: 4,
          title: '逢甲音樂節',
          img: 'https://images.unsplash.com/photo-1501581260446-efdad1bd7ce2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D',
          cardContent: '音樂迷們，逢甲音樂節來了！這是一個屬於音樂愛好者的狂歡派對，現場將有來自不同音樂風格的樂隊和歌手登台獻唱，為您帶來一場視聽盛宴。無論您喜歡搖滾、流行、民謠還是電子音樂，都能在這裡找到屬於您的音樂天地。現場還設有美食區和手作市集，讓您在欣賞音樂的同時也能享受美味和購物的樂趣。快來參加，和我們一起共度這個難忘的音樂之夜吧！'
        }

      ]
    }
  },
  components: {
    headerComponent,
    VenderComponent,
    CardComment3,
    MapArea,
    NavBarComponent,
    FooterComponent,
    FengChiaNewsAreaComponent,
    AboutFengChiaComponent,
    PhotosAlbumComponent,
    YearChangeComponent,
    Animate01Component,
    Animate02Component,
    VenderSlogenComponent,
    HotelSlogenComponent,
    WalkingComponent,
    TrafficSlogenComponent,
    // tryComponent,
  },

  setup() {
    const component1Ref = ref(null);
    const screenRef = ref(null);
    const aboutFCRef = ref(null);
    const component2Ref = ref(null);
    const easeInQuart = CustomEase.create("easeInQuart", "M0,0 C0.5,0 0.75,0.05 1,1");
    const component3Ref = ref(null);
    const component4Ref = ref(null);
    onMounted(() => {
      const screenEl = component1Ref.value.$refs.screen;
      const tvWgirlEl = component1Ref.value.$refs.tvWgirl;
      const gifEl = component1Ref.value.$refs.gif;
      const component2El = component2Ref.value.$el;
      const component3El = component2Ref.value.$refs.component3Ref;
      const component1El = component1Ref.value.$el;
      const aboutFCEl = component2Ref.value.$refs.aboutFC;
      gsap.set(component2El, { autoAlpha: 0, scale: 1 }); // 初始化 component2
      gsap.set(component3El, { autoAlpha: 0 });
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: "vertical",
        smoothTouch: false
      })
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.wrapper',  // 直接使用 component1Ref 的值作为 trigger
          start: "top top",
          end: "bottom center",
          scrub: 2,
          pinSpacing: false,
          pin: '.wrapper',
          markers: true,
        },
      })

      tl.to(component1El, {
        scale: 2,
        duration: 5,
      })
        .to(tvWgirlEl, {
          scale: 2,
          bottom: 0,
          y: -200,
          duration: 5,
        })
      tl.to(screenEl, {
        scale: 4,
        duration: 6,
        zIndex: 50,

      })

      tl.to(component1El, {
        autoAlpha: 0,
        duration:6,

      })
      
        .to(component2El, {
          autoAlpha: 1,
          scale: 1,
          duration: 6,
          ease: easeInQuart,
        }, "-=3")
    });
    return {
      component1Ref,
      screenRef,
      component2Ref,

      aboutFCRef,
    };
  }
};
</script>




<template>
  <NavBarComponent />
  <main>
    <div class="wrapper">
      <headerComponent ref="component1Ref" class="section1" />
    </div>
    <AboutFengChiaComponent class="section2" ref="component2Ref" />

    <YearChangeComponent ref="component3Ref" />
    <FengChiaNewsAreaComponent />
    <Animate01Component />
    <VenderSlogenComponent />
    <VenderComponent id="vendor" />
    <Animate02Component />
    <PhotosAlbumComponent />
    <HotelSlogenComponent />

    <CardComment3 />
    <!-- <tryComponent/> -->
    <WalkingComponent />
    <TrafficSlogenComponent />
    <MapArea />

  </main>
  <FooterComponent />
</template>
<style>
.wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>