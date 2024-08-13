<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
</script>
<script>
export default {
  data() {
    return {
      NewsButton: [
        '全部', '活動', '公告', '新聞', '美食', '文化'
      ],
      NewsEvent: [
        {
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: 'event',
          date: '2024/07/25',
          img:'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: 'announcement',
          date: '2024/07/20',
          img:'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img:'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: 'news',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: 'food',
          date: '2024/07/15',
          img:'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: 'culture',
          date: '2024/07/05',
          img:'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },
      ],
      NEFilter:[],
      NEImg:'',
    }
  },
  mounted(){
    this.NEFilter=this.NewsEvent,
    this.NEImg=this.NEFilter[0].img
  },
  methods:{
    bFilter(x){
      console.log('有');
      this.NEFilter=[]
      this.NewsEvent.forEach(items => {
        if(x==items.Category){
          this.NEFilter.push(items);
          this.NEImg=this.NEFilter[0].img
        }
      })
      if(x=='全部'){
        this.NEFilter=this.NewsEvent
      }
  },
  imgFilter(y){
      this.NEImg=y.img
  }
}
}
</script>
<template>
  <!-- ver1 -->

  <section class="text-gray-600 body-font mx-[12.5rem]">
    <h1 class="title-font leading-[1.5] text-3xl font-medium text-gray-900 text-[36px] my-4">最新消息
    </h1>
    <div class="btnArea flex flex-wrap gap-x-1">
        <button type="button"
              class="text-white  bg-[#FC9F4D] hover:bg-[##FC9F4D]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2" v-for="item in NewsButton" :key="item" v-on:click="bFilter(item)">
              {{item}}
            </button>
        </div>
    <div class="w-full flex border-gray-60 md:flex-row items-start justify-between">
      
      <div class=" md: pr-6 w-3/5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container pe-5 ps-0  mx-auto">
            

            <div class=" divide-y-2 divide-gray-100 " v-for="(item,index) in NEFilter" :key=item @mouseenter="imgFilter(item)">
            <div v-if="index <= 2">
                <div class="py-4 flex flex-wrap md:flex-nowrap" :class="index == 0 || index == 1 ? 'border-bottom' : ''">
                  <div class="md:w-fit md:me-6 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span
                      class="font-semibold title-font text-gray-700 py-2 px-1 rounded-md flex items-center justify-center text-sm"
                      :class="item.color">{{ item.Category }}</span>
                    <span class="text-base text-gray-500 ">{{ item.date }}</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-black title-font mb-2 line-clamp-1 text-[24px] leading-normal">{{ item.title }}
                    </h2>
                    <p class="line-clamp-2 text-base text-gray-700">{{ item.content }}</p>
                    <a class="flex justify-end learnMore" href="">
                      <p class="text-gray-500 text-base">查看更多</p>
                      <ArrowRightIcon class="arrowIcon h-6 w-6 p-1 text-gray-500" aria-hidden="true"></ArrowRightIcon>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div class="max-w-[55%]">
        <img class="h-[500px] aspect-[5/6] object-cover object-center rounded" alt="hero" :src="NEImg">
      </div>
    </div>
  </section>

</template>
<style>
.border-bottom {
  border-bottom: 1px solid #a8a8a8;
}

.learnMore:hover .arrowIcon {
  transform: translateX(3px);
}

.news {
  background-color: rgb(255, 249, 240);
}

.culture {
  background-color: rgb(255, 196, 88);
}

.announcement {
  background-color: rgb(255, 231, 185);
}

.event {
  background-color: rgb(255, 195, 85);
}
.food{
  background-color: rgb(255, 178, 34);
}
</style>