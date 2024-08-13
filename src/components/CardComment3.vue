<script>
import { useHotelStore } from '@/stores/hotel';
import { mapState } from 'pinia';
export default {
  data() {
    return {
      Hotels2: [],
      numbers: [],
      sortedHotels: [],
      findHotelCheck: 'false',
      btnInfo: '我要尋找附近飯店',
      closeFunc: 'block',
      hotels: this.AllHotel
    }
  },
  mounted() {
    console.log(this.AllHotel);
    this.deny()
    // this.findNearbyHotels(),
    // this.deg2rad(this.deg),
    // this.getDistance(this.lat1, this.lon1, this.lat2, this.lon2)

  },
  computed: { ...mapState(useHotelStore, ['hotel', 'hotelStore']) },
  methods: {
    findNearbyHotels() {
      if (navigator.geolocation) {
        return new Promise(() => {
          let option = {
            enableAcuracy: false, // 提高精確度
            maximumAge: 0, // 設定上一次位置資訊的有效期限(毫秒)
            timeout: 10000 // 逾時計時器(毫秒)
          };
          navigator.geolocation.getCurrentPosition(this.showNearbyHotels, this.deny, option);
        })
      } else {
        this.deny
      }

    },
    deny() {
      this.Hotels2 = [];
      const numbers = this.getRandomNumbersInRange(this.AllHotel.length, 8);
      numbers.forEach(num => {
        this.Hotels2.push(this.hotels[num]);
      });
      console.log(this.Hotels2);
    },

    showNearbyHotels(position) {
      this.Hotels2 = [];
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      const Hotels3 = this.hotels
        .map((hotel) => {
          const distance = this.getDistance(
            userLatitude,
            userLongitude,
            hotel.latitude,
            hotel.longitude
          );
          return { ...hotel, distance };
        })
        .sort((a, b) => a.distance - b.distance);
      this.Hotels2 = Hotels3.slice(0, 8)
      console.log(Hotels3);
    },
    getRandomNumbersInRange(range, count) {
      const numbers = [];
      while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * range);
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      return numbers.sort((a, b) => a - b);
    },
    getDistance(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the earth in km
      const dLat = this.deg2rad(lat2 - lat1);
      const dLon = this.deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
  },
  setup() {
    const hotelStore = useHotelStore();

    // Accessing the hotels data
    const AllHotel = hotelStore.hotel;
    return { AllHotel }
  }
}
</script>
<template>
  <div
    class="cardArea px-[60px] sm:px-[80px] md:px-[100px] 2xl:px-[320px]  flex flex-col justify-center relative">

    <div class="flex flex-col justify-center ">
      <div class=" ">
        <div class="relative">
          <p
            class="text-center md:text-5xl leading-loose font-bold font-['Noto_Serif_TC'] text-[21px] min-[576px]:text-[24px] my-[30px]">
            推薦住宿</p>

          <button
            class=" absolute scale-[90%] z-[100] info bottom-[10px] right-[20px]  bg-[#6a919e] text-[white] hover:bg-[#8fc4d6] duration-75"
            @click='findNearbyHotels'>看看我＠＠</button>
        </div>
        <div
          class="min-[576px]:grid-cols-2 grid grid-cols-1 lg:grid-cols-4 gap-[16px] lg:gap-[24px]  justify-center relative my-[30px]">
          <div
            class=" bg-white border border-gray-200 rounded-lg shadow w-[60%] mx-auto min-[576px]:w-[100%] aspect-[302/412] flex flex-col justify-between p-2 "
            v-for="(items) in Hotels2" :key="items">

            <a class="h-1/2 overflow-hidden" href="#">
              <img class="rounded-t-lg h-full w-full" :src="items.img" alt="" />
            </a>
            <div class="flex flex-col grow justify-between">
              <a href="#">
                <h5
                  class="text-left  text-base md:text-2xl font-bold tracking-tight text-gray-00 line-clamp-1 fontTitle">
                  {{ items.title
                  }}</h5>
              </a>
              <p
                class="text-[12px] md:text-base font-normal text-gray-500 line-clamp-2 text-left  md:mb-[30px] fontContent ">
                {{ items.VendorContent }}</p>
              <p
                class="text-[12px] md:text-base font-normal text-gray-500 line-clamp-1 text-left  md:mb-[30px] fontContent ">
                地址：{{ items.address }}</p>
              <div class="flex justify-start ">
                <a href="#" class="flex items-center learnMore  ">
                  <button class="
                  text-[12px] md:text-base px-3 md:px-5  py-2.5  
                      bg-[#437587] rounded-lg focus:outline-[#437587] hover:bg-[#437587]/80 
                      focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 hover:cursor-pointer
                      fontContent
                      text-white p-0">查看更多</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>



    <button
      class="
      text-base px-3 md:px-5 py-2.5 fontContent
      my-[30px]  p-[10px] relative text-white text-[16px] font-bold fontContent bg-[#437587] rounded-lg focus:outline-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 hover:cursor-pointer fontContent w-fit mx-auto"
      data-modal-target="default-modal3" data-modal-toggle="default-modal3" id="openBtn2">查看全部</button>

  </div>

  <div id="default-modal3" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1000] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
    <div class="relative  w-full h-full overflow-y-scroll  bg-white -z-10">
      <!-- Modal content -->
      <div class="relative rounded-lg shadow  w-full  px-[320px] ">

        <div class="flex items-center justify-between  border-b rounded-t ">

          <!-- Modal header -->
          <h2 class="text-center md:text-5xl leading-loose font-bold font-['Noto_Serif_TC'] text-[24px] fontMT my-[30px] ">推薦住宿
          </h2>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal3">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class=" grid grid-cols-3 gap-[24px] justify-center py-4">
          <div
            class=" bg-white border border-gray-200 rounded-lg shadow w-fill aspect-[302/412] flex flex-col justify-between p-2 "
            v-for="(items) in AllHotel" :key="items">

            <a class="h-1/2 overflow-hidden" href="#">
              <img class="rounded-t-lg h-full w-full" :src="items.img" alt="" />
            </a>
            <div class="flex flex-col grow p-3 justify-between">
              <a href="#">
                <h5 class="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 fontTitle"> {{
                  items.title
                  }}</h5>
              </a>
              <p class="line-clamp-2 text-gray-600  text-base fontContent">{{ items.VendorContent }}</p>
              <p class="mb-3 font-normal text-gray-600  line-clamp-1 text-base fontContent">地址：{{ items.address }}</p>
              <div class="flex justify-start ">
                <a href="#" class="flex items-center learnMore ">
                  <button class="text-base px-5 py-2.5 
                      bg-[#437587] rounded-lg focus:outline-[#437587] hover:bg-[#437587]/80 
                      focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 hover:cursor-pointer
                      fontContent
                      text-white">查看更多</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-center">
          <button data-modal-hide="default-modal3" type="button"
            class="py-2.5 px-5 ms-3 text-base font-medium bg-[#437587] text-gray-100 rounded-lg focus:outline-[#437587] hover:bg-[#437587]/80 focus:ring-4 focus:outline-none focus:bg-[#6EC2E0] focus:ring-[#6EC2E0]/50 ">關閉</button>
        </div>
      </div>
      <!-- Modal footer -->

    </div>

  </div>
</template>
<style>
.info {
  animation: rotate 1s linear infinite;
}
.info:hover{
  animation:none
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  20% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(0);
  }

  80% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0);
  }
}

.info:hover::before {
  position: absolute;
  z-index: 100;
  bottom: -10px;
  right: 0;
  transform: translatey(100%);
  width: fit-content;
  height: fit-content;
  text-align: left;
  right: 0;
  color: black;
  content: '點我將會出現以下可能\A 1.未設定定位功能:\A點我將向您取得位址權限，\A並讓您得到離您最近的旅店喔(・ω・)ノ \A 2.已設定定位功能:\A(1)不允許定位：\A隨機給予8間旅店\A(2)允許定位：\A讓您得到離您最近的旅店';
  white-space: pre;
  background-color: white;
  padding: 8px 16px;
  border: 6px double #437587;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.05em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.info {
  border-radius: 58% 42% 35% 65% / 55% 66% 34% 45%;
  padding: 20px 10px;
}
</style>