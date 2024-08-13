<template>
  <div class="swiper-area">
    <div class=" container-top ">
      <div class="space01"></div>
    <div class="photo-container mt-[20px] lg:mt-0">
      <img :src="PicWord" class="PicWord01" alt="">
      <img :src="WrittenWord" class="WrittenWord01" alt="">
    </div>
      <div class="text-2xl md:text-5xl text-container ms-0 sm:ms-[27px] md:ms-0"
      style="font-family: 'Noto Serif TC','Noto Sans TC', Arial, sans-serif;">
      <span class="leading-loose font-bold absolute top-0 left-0">Welcome</span>
      <br> <span class="leading-loose  font-bold absolute bottom-0 right-0"> to Fengchia </span>
      </div>
    </div>
    <div class="swiper-container">
      <swiper ref="swiperRef" :onSwiper="onSwiperInit" :watchSlidesProgress="true" :slidesPerView="4"
      :loop="true" 
      :autoplay="{ delay: 0, disableOnInteraction: false }" 
      :pauseOnMouseEnter="true"
      :speed="2500" :modules="[Autoplay]" @mouseover="pauseAutoplay" @mouseleave="resumeAutoplay" class="mySwiper">
      <swiper-slide class="Slide-1"></swiper-slide>
      <swiper-slide class="Slide-2"></swiper-slide>
      <swiper-slide class="Slide-3"></swiper-slide>
      <swiper-slide class="Slide-4"></swiper-slide>
      <swiper-slide class="Slide-5"></swiper-slide>
      <swiper-slide class="Slide-6"></swiper-slide>
      <swiper-slide class="Slide-7"></swiper-slide>
      <swiper-slide class="Slide-8"></swiper-slide>
      <swiper-slide class="Slide-9"></swiper-slide>
    </swiper>
    <img :src="Dialoug" class="Dialoug01" alt="">
    
    
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { nextTick, ref } from 'vue';
import WrittenWord from '@/assets/img/photoalbum/手寫文字.png';
import PicWord from '@/assets/img/photoalbum/逢字.png';
import Dialoug from '@/assets/img/photoalbum/文字對話筐.png';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      WrittenWord,
      PicWord,
      Dialoug
    }
  },
  setup() {
    const swiperRef = ref(null);

    // 定义 onSwiperInit 方法
    const onSwiperInit = (swiper) => {
      console.log('Swiper initialized:', swiper);
      swiperRef.value = swiper;
      console.log('Autoplay:', swiper.autoplay);
      console.log('Slides:', swiper.slides);
      console.log('Active Index:', swiper.activeIndex);
    };

    // 确保 pauseAutoplay 和 resumeAutoplay 方法在 setup 中定义并返回
    const pauseAutoplay = async () => {
      await nextTick();  // 确保组件和 Swiper 完全加载
      console.log('swiperRef.value:', swiperRef.value);
      if (swiperRef.value) {
        console.log('Swiper instance found:', swiperRef.value);
        if (swiperRef.value.autoplay) {
          console.log('有hover到')

          swiperRef.value.autoplay.stop();
        } else {
          console.log('Autoplay method not found.');
        }
      } else {
        console.log('swiperRef.value is null');
      }
    };

    const resumeAutoplay = async () => {
      await nextTick();  // 确保组件和 Swiper 完全加载
      if (swiperRef.value) {
        console.log('Swiper instance found:', swiperRef.value);
        if (swiperRef.value.autoplay) {
          swiperRef.value.autoplay.start();
          console.log('Autoplay started.');
        } else {
          console.log('Autoplay method not found.');
        }
      } else {
        console.log('swiperRef.value is null');
      }
    };
    return { Autoplay, pauseAutoplay, resumeAutoplay, swiperRef, onSwiperInit };
  },
};
</script>
<style scoped>
.swiper-area {
  max-height: 1080px;
  min-height:500px;
  width: 100%;
  aspect-ratio:1920/1080;
  background-color:burlywood;
}
.container-top{
  width:100%;
  min-height:161px;
  max-height:296px;
  aspect-ratio: 1920/296;
  display:flex
}
.space01{
  width:11%;
  max-width:210px;
  min-width:128px;
  height:full;
}
.photo-container{
  position:relative;
  width:39%;
  max-width:739px;
  min-width:302px;
  height:fit-content
}
.text-container{
  position:relative;
  width:20%;
  max-width:373px;
  min-width:183px;
  max-height:192px;
  min-height:96px;
  aspect-ratio:373/192;
  height:fit-content;
  align-self:center;
  font-size:48px;

}
.swiper-container{
  aspect-ratio:1920/562;
  width: 100%; 
  position:relative;
  max-height:562px;
  min-height:222px
}


.swiper {
  left: 0px;
  right: 0px;
  top: 0px
}

.mySwiper {
  width: 95%;
  margin: 0 auto;
  height: 100%;
}
.swiper-slide {
  background: #882525;
  line-height: 300px;
  text-align: center;
  /*aspect-ratio:442/562;*/
  height:100%;
  border-radius:10px;
  margin-right:24px
}

.Slide-1 {
  background-image: url('../assets/img/photoalbum/01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.Slide-2 {
  background-image: url('../assets/img/photoalbum/02.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-3 {
  background-image: url('../assets/img/photoalbum/03.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-4 {
  background-image: url('../assets/img/photoalbum/04.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-5 {
  background-image: url('../assets/img/photoalbum/05.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-6 {
  background-image: url('../assets/img/photoalbum/06.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-7 {
  background-image: url('../assets/img/photoalbum/07.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-8 {
  background-image: url('../assets/img/photoalbum/08.jpg');
  background-size: cover;
  background-repeat: no-repeat
}

.Slide-9 {
  background-image: url('../assets/img/photoalbum/09.jpg');
  background-size: cover;
  background-repeat: no-repeat
}
.Dialoug01{
  max-width:331px;
  width:18%;
  aspect-ratio: 331 / 136;
  min-width:113px;
  position:absolute;
  left:26%;
  top:100%
}
.PicWord01{
  aspect-ratio: 1 / 1;
  max-width:100px;
  min-width:36px;
  width:14%;
  position:absolute;
  top:33%;
  right:9%;
}
.WrittenWord01{
  max-width:739px;
  max-height:242px;
  min-height:103px;
  min-width:302px;
  aspect-ratio: 739 / 242;
  width:100%
}
@media(max-width:1440px){
 .text-container{
  font-size:32px;
}

}
@media(max-width:992px){
  .Dialoug01{
  width:14%;
  aspect-ratio: 113 / 44;
}
.WrittenWord01{
  aspect-ratio: 302 / 103;
}
.PicWord01{
  width:11%;
  right:5%
}
.swiper-slide {
  margin-right:16px
}
.text-container{
  font-size:28px;
}
}

@media(max-width:767px){
  .swiper-slide {
  margin-right:8px
}
.text-container{
  font-size:24px;
}
}

@media(max-width:767px){
.swiper-area {
  aspect-ratio:320/330;
  max-height:500px;
  min-height:0px
}
.container-top{
  min-height:161px;
  max-height:161px;
  aspect-ratio: 1920/296;
}


.swiper-container{
  aspect-ratio:310/95;
  max-height:222px;
  min-height:95px
}
.WrittenWord01{
  aspect-ratio: 164 / 56;
  min-height:56px;
  min-width:164px;
}
.photo-container{
  min-width:164px;
  max-width:302px;
}
.Dialoug01{
  width:23%;
  aspect-ratio: 72 / 29;
  max-width:113px;
  min-width:72px;
}
.space01{
  width:3%;
  min-width:10px;
  max-width:128px;
}
}
@media(max-width:576px){

.swiper-slide {
  margin-right:3px
}
.PicWord01{
  top:12.5%;
  right:3%;
}
.Dialoug01{
  left:19%;
}
.text-container{
  font-size:16px;
  max-width:183px;
  min-width:144px;
  max-height:96px;
  min-height:80px;
  align-self:start;

}
}
@media(max-width:350px){
.swiper-area {
  max-height:330px;
  min-height:0px
}
}


</style>
<style>
.mySwiper>.swiper-wrapper {
  transition-timing-function: linear;
  height: 100%
}
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Serif+TC:wght@200..900&display=swap');
</style>

