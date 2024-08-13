<script>
import ModalComponent01 from './ModalComponent01.vue';
import Small01 from "@/assets/img/News/人物01 1.png"
import Small02 from "@/assets/img/News/人物02 1.png"
import Small03 from "@/assets/img/News/人物03 1.png"
import bg01 from "@/assets/img/News/最新消息_逢甲新鮮事.jpg"
import bg02 from "@/assets/img/News/最新消息_必玩活動.jpg"
import bg03 from "@/assets/img/News/最新消息_商圈公告.jpg"


export default {
  components:{
    ModalComponent01
  },
  data() {
    return {
      NewsEvent: [
        {
          title: '新攤位火熱登場',
          Category: '活動',
          color: 'event',
          date: '2024/07/25',
          img:'./src/assets/img/News/news/新攤位火熱登場.jpg',
          content: '逢甲夜市的魅力在於它不斷創新和引進全新的美食攤位。今年夏天，夜市迎來了數家新攤位，包括創意燒烤、手工甜點和異國料理，讓您不必出國也能品嚐到世界各地的美食。特別推薦的是一家新開的泰式料理攤位，他們的冬蔭功湯和泰式奶茶已經迅速成為夜市中的明星。每一口都讓人驚喜連連，絕對值得一試！'
        },
        {
          title: '街頭藝人盛宴',
          Category: '公告',
          color: 'announcement',
          date: '2024/07/20',
          img:'./src/assets/img/News/news/街頭藝人盛宴.jpg',
          content: '逢甲夜市不僅是美食天堂，還是一個匯聚了眾多街頭藝人的舞台。近期，有更多才華橫溢的街頭藝人加入了夜市的行列，包括歌手、魔術師、舞者和畫家。他們用熱情和創意為夜市增添了無限魅力。每個週末的晚上，您可以在夜市的各個角落欣賞到這些藝人的精彩表演，為您的夜市之旅增添更多樂趣和驚喜。'
        },
        {
          title: '全新夜市導覽地圖',
          Category: '新聞',
          date: '2024/07/15',
          img:'./src/assets/img/News/news/全新夜市導覽地圖.jpg',
          color: 'news',
          content: '為了方便遊客探索逢甲夜市的每一個角落，夜市管理方推出了全新的導覽地圖。這份地圖詳細標示了各個攤位的位置、特色美食以及衛生間和休息區的分布。無論您是初次來訪的遊客，還是常來光顧的老顧客，這份導覽地圖都將是您的最佳夥伴。只需輕鬆掃描地圖上的二維碼，便能即時獲取最新的攤位資訊和優惠活動。',
        },
        {
          title: '夜市環保新措施',
          Category: '美食',
          color: 'food',
          date: '2024/07/15',
          img:'./src/assets/img/News/news/夜市環保新措施.jpg',
          content: '逢甲夜市不僅注重美食和娛樂，也在積極推動環保措施。近期，夜市推行了一系列環保新措施，包括鼓勵攤販使用環保餐具、設置分類垃圾桶以及推廣減少使用塑膠袋。夜市管理方表示，這些措施旨在減少夜市的環境影響，並呼籲遊客一同參與，讓我們的地球更加美好。參與這些環保行動，您將有機會獲得夜市專屬的紀念品，讓您的夜市之旅更加難忘。',
        },
      ],
      NewsEvent01: [
        {
          title: '美食大挑戰',
          Category: '活動',
          color: 'event',
          date: '2024/07/25',
          img:'./src/assets/img/News/activities/美食大挑戰.jpg',
          content: '逢甲夜市即將舉辦一場令人垂涎欲滴的美食大挑戰！活動中，參賽者將有機會品嚐到夜市中最具特色的幾道美食，包括超辣雞翅、巨無霸漢堡和超長棉花糖等。這些美食不僅考驗參賽者的胃口，還能讓他們感受到夜市的獨特魅力。活動結束後，勝出的參賽者將獲得豐富的獎品，並有機會在夜市的官方網站上亮相，成為夜市的新一代美食達人！',
        },
        {
          title: '中秋節燈籠展',
          Category: '公告',
          color: 'announcement',
          date: '2024/07/20',
          img:'./src/assets/img/News/activities/中秋節燈籠展.jpg',
          content: '中秋節即將來臨，逢甲夜市將舉辦一場盛大的燈籠展。這次展覽將展示數百個精美的手工燈籠，每個燈籠都融入了獨特的創意和設計，讓人仿佛置身於一個光影交錯的夢幻世界。遊客可以在夜市內漫步欣賞這些美麗的燈籠，並參加DIY燈籠製作活動，親手製作屬於自己的中秋節燈籠，為節日增添更多樂趣。',
        },
        {
          title: '美食攤位評選大賽',
          Category: '新聞',
          date: '2024/07/15',
          img:'./src/assets/img/News/activities/美食攤位評選大賽.jpg',
          color: 'news',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '街頭表演嘉年華',
          Category: '美食',
          color: 'food',
          date: '2024/07/15',
          img:'./src/assets/img/News/activities/街頭表演嘉年華.jpg',
          content: '逢甲夜市將舉辦一場美食攤位評選大賽，邀請廣大遊客參與評選，選出夜市中最受歡迎的美食攤位。活動期間，遊客可以品嚐各個攤位的特色美食，並為自己喜愛的攤位投票。最終獲勝的攤位將獲得夜市頒發的美食之王獎牌，以及豐厚的獎金和宣傳機會。這次活動不僅能讓您品嚐到各種美食，還能參與到夜市的熱鬧氛圍中，為心儀的攤位加油打氣！',
        },
      ],
      NewsEvent02: [
        {
          title: '營業時間調整',
          Category: '活動',
          color: 'event',
          date: '2024/07/25',
          img:'./src/assets/img/News/announcement/營業時間調整.jpg',
          content: '為了更好地服務廣大遊客，逢甲夜市宣布從本月起調整營業時間。新的營業時間為每天晚上5點至凌晨1點，讓更多遊客能夠在下班後或夜晚來訪時享受到夜市的美食和熱鬧氛圍。這次調整旨在提供更靈活的時間選擇，滿足不同遊客的需求。歡迎大家前來逛夜市，享受一個充滿美食和娛樂的夜晚！',
        },
        {
          title: '夜市安全措施',
          Category: '公告',
          color: 'announcement',
          date: '2024/07/20',
          img:'./src/assets/img/News/announcement/夜市安全措施.jpg',
          content: '逢甲夜市始終把遊客的安全放在首位。近期，夜市管理方加強了安全措施，包括增加巡邏人員、設置更多的監控攝像頭以及優化疏散通道等。此外，夜市內還設立了多處急救站，為遊客提供及時的醫療援助。遊客如有任何安全問題或緊急情況，均可隨時向夜市的工作人員尋求幫助。我們希望通過這些措施，讓每一位遊客都能安心愉快地享受夜市的樂趣。',
        },
        {
          title:'環保攤位獎勵計劃',
          Category: '新聞',
          date: '2024/07/15',
          img:'./src/assets/img/News/announcement/環保攤位獎勵計劃.jpg',
          color: 'news',
          content: '為了推廣環保理念，逢甲夜市推出了環保攤位獎勵計劃。凡是參與計劃的攤位，只要在營業過程中採用環保餐具、減少塑膠袋使用以及積極參與垃圾分類，即可獲得夜市管理方提供的獎勵，包括宣傳機會、租金優惠以及環保之星獎牌。我們希望通過這個計劃，號召更多攤位和遊客一起參與環保行動，讓逢甲夜市成為一個更加綠色、健康的消費場所。',
        },
        {
          title: '志願者招募',
          Category: '美食',
          color: 'food',
          date: '2024/07/15',
          img:'./src/assets/img/News/announcement/志願者招募.jpg',
          content: '逢甲夜市即日起開始招募志願者，歡迎有熱情、有責任心的朋友加入我們的團隊。志願者將協助夜市的日常管理和活動組織，包括維持秩序、提供遊客資訊、協助環保活動以及支援街頭藝人表演等。參與志願者計劃，您不僅能夠更深入地了解逢甲夜市，還能結交更多志同道合的朋友。我們將為每一位志願者提供專業培訓和豐厚的福利，讓您在服務他人的同時，也能夠收穫滿滿的成就感和快樂。',
        },
      ],
      NEFilter:[],
      NEImg:'',
      NETitle:'',
      NEContent:'',
      Small01,
      Small02,
      Small03,
      bg01,
      bg02,
      bg03
    }
  },
  mounted(){
    this.NEFilter=this.NewsEvent,
    this.NEImg=this.NEFilter[0].img,
    this.NETitle=this.NEFilter[0].title
    this.NEContent=this.NEFilter[0].content
  },
  methods:{
   toggleModal01() {
    this.NEFilter=this.NewsEvent;
    const modal = document.getElementById('default-modal');
    modal.classList.toggle('hidden');
},
 toggleModal02() {
 this.NEFilter=[]
 this.NEFilter=this.NewsEvent01;
    const modal = document.getElementById('default-modal');
    modal.classList.toggle('hidden');
},
 toggleModal03() {
 this.NEFilter=[]
 this.NEFilter=this.NewsEvent02;
    const modal = document.getElementById('default-modal');
    modal.classList.toggle('hidden');
}
  }
}
</script>
<template>
  <!-- Modal toggle -->
    <div id="news-area">
      <h2 class="text-5xl leading-loose font-bold text-center mb-[24px] lg:mb-[30px] " style="font-family: 'Noto Serif TC','Noto Sans TC', Arial, sans-serif;">最新趣事</h2>
      <div class="flex flex-wrap  justify-between news-container">
        <div data-modal-target="default-modal" data-modal-toggle="default-modal"  @click="toggleModal01()" class="group rounded-full bg-black relative overflow-hidden mb-8" >
          <img :src="bg01" class="custom-animate-change01" alt="">
          <div class="overlay"></div>
           <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-5xl	text-white text-nowrap intitle">逢甲新鮮事</div>
           <img :src="Small01" class="custom-animate-change absolute Small0101  -translate-x-2/4 left-2/4 top-full" alt="">
         </div>
         <div data-modal-target="default-modal" data-modal-toggle="default-modal" @click="toggleModal02()" class="group rounded-full bg-black relative overflow-hidden mb-8">
          <img :src="bg02" class="custom-animate-change01" alt="">
          <div class="overlay"></div>
           <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-5xl	text-white text-nowrap intitle">必玩活動</div>
           <img :src="Small02" class="custom-animate-change absolute Small0201  -translate-x-2/4 left-2/4 top-full" alt="">
         </div>
         <div data-modal-target="default-modal" data-modal-toggle="default-modal"  @click="toggleModal03()" class="group rounded-full bg-black relative overflow-hidden mb-8">
          <img :src="bg03" class="custom-animate-change01" alt="">
          <div class="overlay"></div>
           <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-5xl	text-white text-nowrap intitle">商圈公告</div>
           <img :src="Small03" class="custom-animate-change absolute Small0301 -translate-x-2/4 left-2/4 top-full" alt="">
         </div>

      </div>
       
 
<!-- Main modal -->
       <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-start items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
         <div class="relative py-4 w-modal max-h-full  ">
         <button type="button" data-modal-hide="default-modal">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.1666 27.8885L52.1116 24.8335L39.9999 36.9452L27.8883 24.8335L24.8333 27.8885L36.9449 40.0002L24.8333 52.1118L27.8883 55.1668L39.9999 43.0552L52.1116 55.1668L55.1666 52.1118L43.0549 40.0002L55.1666 27.8885Z" fill="black"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
                <!-- Modal content -->
         <ModalComponent01 :NEFilter="NEFilter" :NEImg="NEImg"  :NEContent="NEContent" :NETitle="NETitle"/>
         </div>
       </div>
    </div>
</template>
<style scoped>
#news-area{
  aspect-ratio:1920/783;
  max-height:783px;
  min-height:391px;
  width:100%;
  /* background-color: #F5F5F5; */
  background-color: #eb6363;
  padding-top:149px
}
.w-modal{
  max-width:1390px;
}

@keyframes change {
  0% {
    transform: translate(-50%,0);
  }
  100% {
    transform: translate(-50%,-100%);
    
  }
}
@keyframes large {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
    
  }
}
/* .change{
  animation: change 2s linear infinite;
} */

.custom-animate-change {
  /* Initial state (no animation) */
  transition: transform 1s ease-in-out;
}
.group:hover .custom-animate-change {
  animation: change 1s ease-in-out forwards;
}
.custom-animate-change01 {
  /* Initial state (no animation) */
  transition: transform 1s ease-in-out;
}
.group:hover .custom-animate-change01 {
  animation: large 1s ease-in-out forwards;
}
.group{
  aspect-ratio:1/1;
  width:26%;
  max-width:358px;
  min-width:197px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色遮罩 */
  opacity: 1; /* 初始隐藏 */
  transition: opacity 0.3s ease;
}
.Small0101{
  max-width:172px;
  max-height:111px;
  min-width:95px;
  min-height:62px;
  width:48%;
  aspect-ratio:172/111
}
.Small0201{
  max-width:145px;
  max-height:108px;
  min-width:81px;
  min-height:60px;
  width:41%;
  aspect-ratio:145/108
}
.Small0301{
  max-width:162px;
  max-height:110px;
  min-width:77px;
  min-height:53px;
  width:46%;
  aspect-ratio:162/110
}
.news-container{
  width:90%;
  margin:0 auto;
  max-width:1414px;
  justify-content:space-between

}
@media(max-width:1300px){
  #news-area{
    padding-top:55px
  }
  .intitle{
    font-size:40px
  }

  
}
@media(max-width:767px){
  #news-area{
  padding-top:48px
  }
  
  #news-area>h2{
    font-size: 24px;
  }
  .intitle{
    font-size:32px
  }
  .Small0301{
  width:38%;
}
}
@media(max-width:767px){
  #news-area{
  height:fit-content;
  aspect-ratio:auto;
  }
  .news-container{
    justify-content:space-evenly
  }


}

@media(max-width:576px){
  #news-area{
    padding-top:48px;
    min-height:841px;
  }
  .group{
    margin:0 auto 32px
  }
 
}



/* Hover时显示遮罩 */
/* .group:hover .overlay {
  opacity: 1;
} */
</style>