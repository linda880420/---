<template>
<div class="swiperArea">
    <swiper
 
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: false,
      }"
      :navigation="false"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper  justify-start bg-[url('/src/assets/imgHeader/point.png')] leading-[40px] bg-cover"
    >
      <swiper-slide class="justify-start px-3 line-clamp-1"  v-for="items in news" :key="items">最新消息：{{ items.content }}</swiper-slide>
      
      <template #container-end>
        <div class="autoplay-progress opacity-0">
          <svg viewBox="0 0 48 48" ref="progressCircle" class="opacity-0">
            <circle cx="24" cy="24" r="20" class="opacity-0"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
</div>
  </template>
  
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  

    components: {
        Swiper,
        SwiperSlide,
    },
  
    setup(){
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty('--progress', 1 - progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
            news: [
                {
                    id: 1,
                    content: '最新消息，ＯＯ開跑囉！'
                },
                {
                    id: 2,
                    content: '公告，ＯＯ路將於Ｘ/X日進行修善！'
                }]
        };
    },
   
}
</script>
<style>
.swiperArea {
    position: relative;
    height:40px;
    max-width:800px;
    margin: auto;
  
}
.swiper-button-next,
.swiper-button-prev,
.swiper-button-active,
.swiper-button-disable,
.autoplay-progress
{
    opacity: 0;
}
.swiper-pagination-bullet-active,.swiper-pagination-bullet{
    opacity: 0;
}
.swiper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: left;
    align-items: center;
}



.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}
</style>