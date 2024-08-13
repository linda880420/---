<script>
export default {
  data() {
    return {
      localNEImg: this.NEImg,
      localNETitle: this.NETitle,
      localNEContent: this.NEContent,
    }
  },
  props: {
    NEFilter: {
      type: Array,
      required: true,
    },
    NEImg: {
      type: String,
      required: true,
    },
    NETitle: {
      type: String,
      required: true,
    },
    NEContent: {
      type: String,
      required: true,
    },
  },
  methods:{
    imgFilter(index){
      console.log("有hover到")
      console.log(index)
      console.log(this.localNEImg)
      this.localNEImg=this.NEFilter[index].img
      this.localNETitle=this.NEFilter[index].title
      this.localNEContent=this.NEFilter[index].content
  }
  }
}
</script>
<template> 
  <div class="w-full h-[700px] bg-white" >
     <!-- modal body -->     
      <div class="flex w-full h-[700px] border-gray-60 md:flex-row items-start justify-between px-8 overflow-y-auto">
         <!--項目總攬-->
         <div class=" md: pr-6 w-[700px] flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <section class="text-gray-600 body-font overflow-hidden">
             <div class="container pt-8">
                <!-- row items -->
                <div v-for="(item,index) in NEFilter" :key=item @mouseenter="imgFilter(index)">
                <div class="mb-6 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-fit md:me-6 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <!-- <span
                      class="font-semibold title-font text-gray-700 py-2 px-1 rounded-md flex items-center justify-center text-sm"
                      :class="item.color">{{ item.Category }}</span>
                    <span class="text-base text-gray-500 ">{{ item.date }}</span> -->
                    <img class="h-[152px] w-60 rounded-[10px]" alt="hero" :src="item.img">
                    <!-- <img class="h-[152px] aspect-[5/6] object-cover object-center rounded" alt="hero" :src="item.img"> -->
                  </div>
                  <!-- left-card -->
                  <div class="pt-11 ">
                    <h2 class="text-2xl font-medium text-black title-font mb-2 line-clamp-1 text-[24px] leading-normal">{{ item.title }}
                    </h2>
                    <p class="line-clamp-2 text-base text-gray-700">{{ item.content }}</p>
                  </div>
                </div>
            </div>
          </div>
        </section>
         </div>
         <!-- 單一項目詳細介紹 -->
         <div class="w-[508px] h-full pt-12">
              <div class="w-full bg-white  dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg h-[354px] w-full"  v-if="localNEImg==''" :src="NEImg" alt="" />
        <img class="rounded-t-lg h-[354px] w-full"  v-else :src="localNEImg" alt="" />
                 <div class="pt-5">
            <h5 class="mb-2 text-[24px] font-bold tracking-tight text-gray-900 dark:text-white" v-if="localNETitle==''">
              {{ NETitle }}</h5>
              <h5 class="mb-2 text-[24px] font-bold tracking-tight text-gray-900 dark:text-white" v-else>
              {{ localNETitle }}</h5>
            <p v-if="localNEContent==''" class="mb-3 text-base text-gray-700 dark:text-gray-400">
               {{ NEContent }}
            </p>
             <p v-else class="mb-3 text-base text-gray-700 dark:text-gray-400">
               {{ localNEContent }}
            </p>
                 </div>
              </div>
          <!-- <div class="img-container">
            <img  class="h-[450px] object-cover object-center rounded" alt="hero" v-if="localNEImg==''" :src="NEImg">
            <img v-else class="h-[450px] aspect-[5/6] object-cover object-center rounded" alt="hero" :src="localNEImg">
          </div> -->
         </div>
      </div>
  </div>
</template>
<style scoped>
.img-container{
   aspect-ratio: 3 / 4
}

</style>
