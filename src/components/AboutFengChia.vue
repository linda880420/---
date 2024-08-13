<script>
import AboutComponent01 from "./AboutComponent01.vue"
import AboutComponent02 from "./AboutComponent02.vue"
import slogan01 from "@/assets/img/AboutFC/slogen01.png"
import slogan02 from "@/assets/img/AboutFC/slogen02.png"
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    AboutComponent01,
    AboutComponent02
  },

  data() {
    return {
      slogan01,
      slogan02
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>
<template>
  <section class="About-container bg-orange-500 ">
    <div class="flex w-full h-full ">
      <div class="part shrink-1 h-full overflow-hidden bg-orange-700">
        <!-- <div class="w-3/12 h-full overflow-hidden"> -->
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
        <AboutComponent01 />
      </div>
      <div class="flex-grow h-full bg-[#F5F5F5] relative basis-[1000px]">
        <div class="middle-top">
          <div class="h-screen w-full"></div>


        </div>
        <div class="middle-bottom">
          <div class="w-[67%] lg:w-fit mx-auto text-container">
            <div class="img-container mx-auto relative">
              <p class="fontTitle  w-fit p-3 border-2 rounded-3xl border-slate-950 absolute  right-[20px]md:text-5xl leading-loose  font-['Noto_Serif_TC'] text-[24px] fontMT top-0 left-0"
                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0"
                data-aos-anchor-placement="top-center"> 讀一段歷史，填滿你的味蕾。</p>
              <p class="fontTitle  w-fit p-3 border-2 rounded-3xl border-slate-950 absolute bottom-0 right-[20px]md:text-5xl leading-loose  font-['Noto_Serif_TC'] text-[24px] fontMT right-0 "
                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0"
                data-aos-anchor-placement="top-center">年輕嗨玩，吃喝一站。 </p>
            </div>
            <h2 class="About-title leading-loose font-bold text-center " data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-anchor-placement="top-center"
              style="font-family: 'Noto Serif TC','Noto Sans TC', Arial, sans-serif;">關於逢甲</h2>
            <p class="About-text w-19% lg:w-full
            lg:mt-[48px] mt-[33px] leading-loose " data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
              data-aos-offset="0" data-aos-anchor-placement="top-center">
              逢甲文華夜市位於逢甲大學側門，從文華路一直延伸到福星路，消費族群以二、三十歲的年輕人為主。因其有著位於學區和接近市區的地緣關係，逐漸成為臺中市夜市集團的龍頭。</p>
            <p class="About-text w-19% lg:w-full leading-loose mt-[24px]" data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-anchor-placement="top-center">
              現今逢甲文華夜市嶄新面貌更吸引了不少消費族群，商圈更有逐漸擴大的現象，並成為民眾心目中票選「臺中市十大觀光景點」之一。</p>
            <p class="About-text01 leading-loose  w-80% lg:w-full  mt-[24px]" data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-anchor-placement="top-center">
              現今逢甲文華夜市嶄新面貌更吸引了不少消費族群，商圈更有逐漸擴大的現象，並成為民眾心目中票選「臺中市十大觀光景點」之一。</p>
          </div>
        </div>
      </div>
      <div class="part h-full shrink-1 relative overflow-hidden bg-yellow-500">
        <div class="absolute w-full bottom-0">

          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
          <AboutComponent02 />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.About-container {
  height: calc(100vh + 200vh);
  max-height: 3000px;
  min-height: 718px;

  width: 100vw;
  max-width: 100vw;
  aspect-ratio: 1920/3000;
}


.part {
  flex-basis: 298px;
  min-width: 151px;
  /* aspect-ratio: 298/1326; */
}

.About-title {
  font-size: 48px;
  margin-top: 10%
}

.About-text {
  max-width: 536px;
  min-width: 316px;
  font-size: 16px
}

.About-text01 {
  max-width: 628px;
  min-width: 370px;
  font-size: 16px
}

.sloganPic01,
.sloganPic02 {
  position: absolute;
  max-width: 100%;
  /* 确保图片不会超出其容器的宽度 */
  height: auto;
  /* 保持比例 */
  z-index: 100;
}

.img-container {
  max-width: 1122px;
  max-height: 250px;
  min-width: 200px;
  min-height: 100px;
  width: 100%;
  aspect-ratio: 1122/800;
  white-space: nowrap;
}

.middle-top {
  width: 100%;
  aspect-ratio: 1324/500;
  max-height: 500px;
  min-height: 200px;
  position: absolute;
  top: 0;
  left: 0
}

.middle-bottom {
  width: 100%;
  aspect-ratio: 1324/3000;
  max-height: 3000px;
  min-height: 518px;
  position: absolute;
  bottom: 200px
}

.sloganPic01 {
  max-width: 516px;
  min-width: 258px;
  min-height: 52px;
  max-height: 84px;
  width: 46%;
  top: 0px;
  left: 0px;
  aspect-ratio: 43/7
}

.sloganPic02 {
  min-width: 210px;
  max-width: 420px;
  max-height: 84px;
  min-height: 52px;
  width: 38%;
  bottom: 0px;
  right: 0px;
  aspect-ratio: 5/1
}

.text-container {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

@media(max-width:992px) {
  .About-title {
    font-size: 24px;
    margin-top: 38px
  }

  .About-text {
    font-size: 14px
  }

  .About-text01 {
    font-size: 14px
  }

}




@media(max-width:767px) {
  .sloganPic01 {
    width: 40%;
    ;
    aspect-ratio: 258/52
  }

  .sloganPic02 {
    aspect-ratio: 210/52
  }

  /* .img-container {
    aspect-ratio: 417/119;
  } */

  /* .About-container{
  height:718px
} */
}

@media(max-width:767px) {
  .part {
    max-width: 151px;
    min-width: 115px;
    /* aspect-ratio: 298/1326; */
  }

  .sloganPic01 {
    /* aspect-ratio:186/24; */
    max-width: 258px;
    min-width: 186px;
    min-height: 24px;
    max-height: 52px;
  }

  .sloganPic02 {
    /* aspect-ratio:150/24; */
    min-width: 150px;
    max-width: 210px;
    max-height: 52px;
    min-height: 24px;
  }

  /* .img-container {
    min-height: 88px;
    min-width: 187px;
    max-width: 417px;
    max-height: 119px;
  } */

  .text-container {
    width: 80%;


  }

  .About-text01 {
    min-width: 316px;
  }
}

@media(max-width:575px) {
  .About-container {
    max-height: 8000px;
    aspect-ratio: 1920/8000;
    aspect-ratio: 320/918;
  }

  .part {
    display: none
  }

  .sloganPic01 {
    aspect-ratio: 186/24;
    left: 50%;
    transform: translateX(-50%)
  }

  .sloganPic02 {
    aspect-ratio: 150/24;
    left: 50%;
    transform: translateX(-50%)
  }

  .img-container {

    width: 80%;
    margin-bottom: 1cqh;
  }

  .About-title {
    font-size: 21px
  }

  .About-text {
    width: 80%;
    min-width: 0px;
    margin-left: auto;
    margin-right: auto
  }

  .About-text01 {
    width: 80%;
    min-width: 0px;
    margin-left: auto;
    margin-right: auto
  }

  .middle-bottom {
    aspect-ratio: 320/1000;
    max-height: 1000px;
    position: absolute;
    bottom: 600px;

  }

  .text-container {
    height: fit-content
  }

}

@media (max-width:576px) {

  .fontMT {
    padding: 10px 5px;
    font-size: 21px
  }
}
</style>
