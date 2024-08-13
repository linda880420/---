<script>
import { onMounted, ref, watch } from 'vue';
import Swiper from 'swiper/bundle';
import { useVendorStore } from '@/stores/vendor';
import { mapState } from 'pinia';
import vendorRed from "@/assets/img/vendorBorder/店家卡片-1.png";
import vendorGreen from "@/assets/img/vendorBorder/店家卡片-2.png";
import vendorBlue from "@/assets/img/vendorBorder/店家卡片.png"



export default {
  data() {
    return {
      isModalOpen: false,
      vendorRed:vendorRed,
      vendorGreen:vendorGreen,
      vendorBlue:vendorBlue,
      NewsButton: ['食物', '服飾', '飲料', '3C', '其他', '為你推薦'],
      InfoButton: ['全部', '食物', '服飾', '飲料', '3C', '其他', '為你推薦'],
      NewsEvent: this.vendors,
      pageInfoList: [],
      NEImg: '',
    }
  },

  computed: { ...mapState(useVendorStore, ['vendor', 'vendorStore']) },
  methods: {
    bFilter(x) {
      this.NEFilter = []
      this.NewsEvent.forEach(items => {
        if (items.tag.includes(x)) {
          this.NEFilter.push(items);
        }

      })
    },
    
    ModalFilter(x) {
      this.pageInfoList = []
      this.NewsEvent.forEach(items => {
        if (items.tag.includes(x)) {
          this.pageInfoList.push(items);
        }
        else if (x=='全部'){
          this.pageInfoList=this.NewsEvent;
        }
      })
    },
    ImgChange(){
      this.NewsEvent.forEach(items => {
        if (items.tag.includes('食物')){
          items.vendorImg=this.vendorRed;
          console.log(items.vendorImg);
        }
        else if (items.tag.includes('服飾')){
          items.vendorImg=this.vendorBlue;
        }
        else if (items.tag.includes('3C')){
          items.vendorImg=this.vendorGreen;
        }
        else if (items.tag.includes('其他')){
          items.vendorImg=this.vendorGreen;
        }
        else if (items.tag.includes('飲料')){
          items.vendorImg=this.vendorGreen;
        }
      })
    },
  },
  mounted() {
    this.NEFilter = this.vendors;
    this.pageInfoList=this.NewsEvent;
    this.ImgChange()
   
  },
  setup() {
    const swiperContainer = ref(null);
    const NEFilter = ref([]);
    const swiperInstance = ref(null);

    watch(NEFilter, (newFilter) => {
      if (newFilter && newFilter.length > 0) {
        // 如果 Swiper 已經存在，銷毀舊的實例
        if (swiperInstance.value) {
          swiperInstance.value.destroy(true, true);
        }

        // 創建新的 Swiper 實例
        setTimeout(() => {
          swiperInstance.value = new Swiper(swiperContainer.value, {
            observer: true,
            observeParents: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            loop: true,
            speed: 2000,
            notNextTick: true,
            centeredSlides: false,
            slidesPerView: 1,
           
            breakpoints: {
            740:{
              slidesPerView: 2,
            spaceBetween: 10,
            },
      
            1200:{
            slidesPerView: 3,
            spaceBetween:20,}}
          });
        }, 100);
      }
    });

    onMounted(() => {
      // 如果在組件掛載時 NEFilter 已經有數據，則觸發監聽器
      NEFilter.value = vendors.value || [];

      // 手動觸發監聽器進行初始化
      if (NEFilter.value.length > 0) {
        swiperInstance.value = new Swiper(swiperContainer.value, {
          observer: true,
          observeParents: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          },
          loop: true,
          speed: 1000,
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 100,

        });
      }
    });

    const vendorStore = useVendorStore();

    // Accessing the vendors data
    const vendors = vendorStore.vendor;


    return {
      vendors, NEFilter, swiperContainer,
    };

  },

}

</script>
<template>

  <div class='swiper-Area flex flex-col w-screen justify-between relative'>
    <div>
      <h2 class="text-center md:text-5xl leading-loose font-bold font-['Noto_Serif_TC'] text-[21px] min-[576px]:text-[24px]">推薦攤販</h2>
      <div class="btnArea flex flex-wrap gap-[20px] md:gap-x-[24px] justify-center my-[30px]">

        <button type="button"
          class="text-white  bg-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50  rounded-[100px] md:text-base text-sm  px-3 md:px-5 py-4 font-medium text-center inline-flex items-center    font-['Noto_Sans_TC']"
          v-for="item in NewsButton" :key="item" v-on:click="bFilter(item)">
          #{{ item }}
        </button>
      </div>
    </div>
    <div class="h-[48.240471%]">

      <div class='swiper-top '>
        <div ref="swiperContainer" class="swiper mySwiper1  " id="mySwiper1" >
          <div class="swiper-wrapper  py-[5.5469%] -my-[5.5469%] ">

            <div class="swiper-slide h-full max-h-[458px]  pt-[1%] pb-[2%] -mb[2%]" v-for="(items, index) in NEFilter" :key="index">
              <img :src='items.vendorImg' class="absolute top-0 left-[50%] z-50 h-full w-fit  aspect-[514/579] -translate-x-2/4" alt="">
              <div class="h-full aspect-[300/522]  md:aspect-[310/522] xl:aspect-[321/522] bg-white border border-gray-200 rounded-lg shadow flex flex-col ">

                <a class="h-[50%] block overflow-hidden" href="#">
                  <div class="flag absolute text-wrap z-[100] flex flex-col ">

                  </div>
                  <div class="w-full  h-full overflow-hidden rounded-t-lg">

                    <img class="imgArea  hover:scale-[1.04] w-full object-contain" :src="items.img" alt=" " />
                  </div>
                </a>

                <div class="p-5 flex flex-col grow justify-between ">
                  <a class="w-full block" href="#">
                    <h5 class="text-left  text-base md:text-2xl font-bold tracking-tight text-gray-900 line-clamp-1 fontTitle">{{ items.title
                      }}
                    </h5>
                  </a>
                  <p class="text-[12px] md:text-base font-normal text-gray-500 line-clamp-2 text-left  md:mb-[30px] fontContent ">{{ items.VenderContent
                    }}</p>
                  <div class="flex justify-start ">
                    <a href="#" class="flex items-center learnMore hover:cursor-pointer z-50">
                      <button class="text-[12px] md:text-base px-3 md:px-5  py-2.5 mb-[30px] md:mb-3 rounded-lg bg-[#eabf42] hover:cursor-pointer fontContent">查看更多</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div class="swiper-pagination swiper-pagination-1"></div>
      <div class="swiper-button-next swiper-button-next-1"></div>
      <div class="swiper-button-prev swiper-button-prev-1"></div>

    </div>
    <div id="default-modal2"  tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0  justify-center items-center w-full md:inset-0  max-h-full z-[100000] default-modal2">
      <div class="relative  w-full h-full overflow-y-scroll  bg-white -z-10">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow  w-full  px-[60px] ">
          <!-- Modal header -->
          <h2 class="text-center text-5xl leading-loose font-bold font-['Noto_Serif_TC']">推薦攤販</h2>
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            
            <div class="flex justify-center w-full">
              <button type="button"
                class="text-white  bg-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 font-medium rounded-[100px] text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                v-for="item in InfoButton" :key="item" v-on:click="ModalFilter(item)">
                #{{ item }}
              </button>
            </div>
            <a href='#'>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
             >
            
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </a>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 grid grid-cols-3 gap-[100px] justify-center">
            <div class="  aspect-[514/592]   relative" v-for="(items, index) in pageInfoList" :key="index">
              <img :src='items.vendorImg' class="z-[0]
               w-full aspect-[514/592] absolute top-0 left-1/2 -translate-x-[50%] " alt="">
              <div class="w-[62%] mt-[3%] mx-auto aspect-[322/521] bg-white border border-gray-200 rounded-lg shadow flex flex-col  -z-[1] ">

                <a class="h-[50%] block overflow-hidden" href="#">
                  <div class="flag absolute text-wrap z-[100] flex flex-col text-[12px]">

                  </div>
                  <div class="w-full  h-full overflow-hidden rounded-t-lg">

                    <img class="imgArea  hover:scale-[1.04] w-full h-full" :src="items.img" alt=" " />
                  </div>
                </a>

                <div class="p-5 flex flex-col grow justify-between">
                  <a class="w-full block" href="#">
                    <h5 class="text-left  text-2xl font-bold tracking-tight text-gray-900 line-clamp-1 fontTitle">{{ items.title
                      }}
                    </h5>
                  </a>
                  <p class="text-base font-normal text-gray-500 line-clamp-2 text-left mb-[30px] fontContent">{{ items.VenderContent
                    }}</p>
                  <div class="flex justify-start ">
                    <a href="#" class="p-0 flex items-center learnMore  z-[1000]">
                      <button class="text-base px-3 md:px-5 py-2.5 rounded-lg bg-[#eabf42] hover:cursor-pointer fontContent">查看更多</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-center">
            <a href="/" >
            <button  type="button"
              class="py-2.5 px-5 ms-3 text-base font-medium bg-[#437587] text-gray-100 rounded-lg focus:outline-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 ">關閉</button></a>
          </div>
          </div>
          <!-- Modal footer -->
          
        </div>
      </div>
    
    <!-- <button type="button"
          class="text-white  bg-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 font-medium rounded-[100px] text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
          v-for="item in InfoButton" :key="item" v-on:click="bFilter(item)">
          #{{ item }}
        </button> -->

<a href="/try">
    <button class="bottom w-full p-[10px] relative text-white text-[16px] font-bold  fontContent" 
       id="openBtn">查看全部</button></a>
  </div>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC:wght@200..900&family=Shippori+Antique&display=swap');
.block {
  display: block;
}

.none {
  display: none;
}

.swiper-Area {
  padding: 0 60px;
  width: 100vw;
  height: 100vh;
}
@media (max-width:400px) {
  .swiper-Area {
  padding: 0 40px;}
}

.swiper-top {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  transition-timing-function: linear;
  justify-content: center;
 transition:2s cubic-bezier(0.68, -0.55, 0.265, 1.55) ;
}

.swiper-slide img {
 
  height: 100%;
  object-fit: cover;
}

.swiper-pagination.swiper-pagination-1 {
  bottom: -2rem;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.5);
}

.bottom::after {
  content: '';
  position: absolute;
  width: 100vw;
  top: 0;
  left: -60px;
  height: 100%;
  background-color: #E42514;
  z-index: -100;
}
.fontTitle{
  font-family:'Noto Serif TC';
}
@media (max-width:576px) {
  .fontTitle {
  font-size: 16px;}
  .fontContent{
    font-size: 12px
  }
  .fontMT{
    font-size:21px
  }
}
#default-modal2{
  overscroll-behavior: contain!important;
}

</style>