<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Bars3Icon from './icons/Bars3Icon.vue'
import XMarkIcon from './icons/XMarkIcon.vue'
import logo from '@/assets/img/logo.png'
import Headroom from 'headroom.js';
import 'animate.css';

export default {
  components: {
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel,
    Bars3Icon, 
    XMarkIcon,
  },
  data() {
    return {
      navigation: [
        { name: '關於逢甲', href: '#', current: true },
        { name: '最新趣事', href: '#', current: false },
        { name: '店家攤販', href: '#', current: false },
        { name: '飯店民宿', href: '#', current: false },
        { name: '交通資訊', href: '#', current: false },
        { name: '語言選擇', href: '#', current: false }
      ],
      headerElement: null,
      headroom: null,
      logo,
      screenWidth: window.innerWidth
    };
  },
  mounted() {
    // 使用 DOM 选择器选中 header 元素
    this.headerElement = document.querySelector('.header');

    // 初始化 Headroom
    this.headroom = new Headroom(this.headerElement, {
      offset: {
        up: 0,
        down: 0
      },
      scroller: window,
      classes: {
        initial: 'animate__animated',     // 初始的类名
        pinned: 'animate__flipInX',       // 固定时添加的类名
        unpinned: 'headroom--unpinned',    // 解除固定时添加的类名
        top: 'headroom--top',    // 滚动到顶部时添加的类名
        notTop: 'headroom--not-top', // 滚动不在顶部时添加的类名
        bottom: 'headroom--bottom',  // 滚动到底部时添加的类名
        notBottom: 'headroom--not-bottom' // 滚动不在底部时添加的类名
      }
    });
    this.headroom.init();
    
  },
  methods: {
    navbarContent() {
      this.screenWidth = window.innerWidth;
      const newItem = { name: '新店登記', href: '#', current: false };

      if (this.screenWidth <= 576 && !this.navigation.some(item => item.name === '新店登記')) {
        this.navigation.push(newItem);
      }else if(this.screenWidth > 576 && this.navigation.some(item => item.name === '新店登記')) {
        this.navigation.pop();
      }
    },
  },
  created() {
    // 添加窗口大小变化的事件监听
    window.addEventListener('resize', this.navbarContent);
  },
  beforeUnmount() {
    // 移除窗口大小变化的事件监听
    window.removeEventListener('resize', this.navbarContent);
  }
}
</script>
<template>
    <Disclosure as="nav" class="w-full max-w-[1536px] z-[100] md:h-[100px] sm:h-[60px] h-[40px] header animate__animated rounded-b-lg headroom--not-top headroom--not-bottom animate__flipInX" v-slot="{ open }">
    <div class="w-full h-full">
      <div class="relative flex h-full items-center justify-between">
        <!-- 漢堡條區塊 -->
        <div class="absolute inset-y-0 right-0 flex items-center justify-center bg-white md:hidden aspect-square max-w-[40px] sm:max-w-[60px] rounded-bl-[30px]">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-start justify-center rounded-md p-2 text-black ">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 h-full w-full items-center justify-between">
          <div class="flex flex-shrink-0 items-start ">
              <img  src="/src/assets/img/logo.png" class="aspect-square max-w-[40px] sm:max-w-[60px] md:max-w-[100px]" alt="Your Company">
          </div>
          <!-- navbar內容區塊 -->
          <div class="bg-white hidden h-full md:flex navbuttonW  items-center rounded-b-[30px]">
            <div class="flex w-full justify-evenly rounded-b-[10px]">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="{
                'block p-0 leading-6 text-base': true,
                'text-red-500': item.current,
                'text-black': !item.current
                }" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                <!-- 語言選擇區塊 -->
              <div class="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
               <a id="locale-picker-link" aria-label="內容語言選取器。目前設定為 中文(台灣)" class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world " href="https://www.microsoft.com/zh-tw/locale" data-m="{&quot;cN&quot;:&quot;locale_picker(TW)_nav&quot;,&quot;id&quot;:&quot;n7c1c1m1r1a2&quot;,&quot;sN&quot;:7,&quot;aN&quot;:&quot;c1c1m1r1a2&quot;}">中文(台灣)</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden absolute z-50 w-[139px] right-0 bg-white">
      <div class="p-5 ">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" 
        :class="{
                'block p-0 leading-6 text-base text-center': true,
                'text-red-500 ': item.current,
                'text-black pt-10': !item.current
                }"
         :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<style>
.header {
  position: fixed; /* 确保头部固定定位 */
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out; /* 添加平滑过渡 */
}
.headroom--unpinned {
  /* 隐藏未固定的状态 */
  display: none;
}
.navbuttonW{
  width:1152px;
}
@media (max-width:1300px) {
.navbuttonW{
  max-width:900px;
}
}

</style>
