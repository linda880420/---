<script>
import { ref,nextTick } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Autoplay} from 'swiper/modules';
export default {
  mounted() {
    this.NEFilter = this.NewsEvent
  },
  components: {
    Swiper,
    SwiperSlide,
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
  
  data() {
    return {
      mySwiper2: document.querySelector('.mySwiper2'),
      NewsButton: [
        '全部', '活動', '公告', '新聞', '美食', '文化'
      ],
      NewsEvent: [
        {
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },
        {
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },{
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },{
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },{
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },{
          title: '2024年逢甲夜市美食嘉年華即將登場',
          Category: '活動',
          color: '',
          date: '2024/07/25',
          img: 'https://lh3.googleusercontent.com/p/AF1QipMIOnzfyiv0_BIWDQUT8GIgeu76z0X6kcDWxzy6=s1360-w1360-h1020',
          content: '2024年逢甲夜市美食嘉年華即將登場！這次活動將匯集來自全台各地的特色美食攤位，包括知名的「官芝霖大腸包小腸」、「金牌巨無霸香酥臭豆腐」、「Cia Cia Fu 甘梅薯條」等。現場還安排了各種趣味遊戲和音樂表演，讓您在品嚐美食的同時也能享受歡樂的氣氛。快來參加這場美食盛宴吧！',
        },
        {
          title: '逢甲夜市營業時間調整公告',
          Category: '公告',
          color: '',
          date: '2024/07/20',
          img: 'https://lh3.googleusercontent.com/p/AF1QipPKLLMWcUsJqFcE1-86fcavLw9mvXvGbC-9RDgW=s1360-w1360-h1020',
          content: '因應夏季高溫，逢甲夜市營業時間將調整為下午5點至凌晨1點，請各位顧客注意新的營業時間安排。夜市內部的廁所設施也將增設冷氣設備，為顧客提供更舒適的環境。歡迎大家來逢甲夜市消暑納涼！',
        },
        {
          title: '逢甲夜市新開幕的環保攤位引關注',
          Category: '新聞',
          date: '2024/07/15',
          img: 'https://lh3.googleusercontent.com/p/AF1QipNMsGz8sAQN1939L0LsH0yi6CUgRjyDvW8oMN7M=s1360-w1360-h1020',
          color: '',
          content: '近期，逢甲夜市新增多個環保主題攤位，主打低碳飲食和減塑理念。攤位提供環保袋、可重複使用的餐具，以及用環保材料製作的各式美食。這一舉措受到了消費者的廣泛好評，大家紛紛表示願意支持這樣的環保行動。',
        },
        {
          title: '2024年逢甲夜市美食排行榜出爐',
          Category: '美食',
          color: '',
          date: '2024/07/15',
          img: 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/01/10/20230110-033047_U25889_M822774_1ca4.jpg?itok=2YubgORR',
          content: '2024年逢甲夜市美食排行榜出爐，榜單包括了多家人氣美食攤位，如「刁民酸菜魚」、「知戶酒食」、「黃記麻油雞」、「那個鍋」、「村口微光」等。這些美食不僅味道獨特，價格實惠，還具備高CP值，吸引了眾多遊客和當地居民前來品嚐。',
        },
        {
          title: '逢甲夜市文化藝術季即將開幕',
          Category: '文化',
          color: '',
          date: '2024/07/05',
          img: 'https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/445170302_428875183327372_2629602036111044297_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7xp9MLUEYoAQ7kNvgEnBaAx&_nc_ht=scontent.ftpe1-3.fna&gid=A5PImSAbcEvRLkABBO2UVnY&oh=00_AYA7jZkL0LE5KRkVoQFpMh5x_ZZjizAH0xrC4wT_8_r8ew&oe=66ABBF57',
          content: '2024年逢甲夜市文化藝術季即將開幕，活動將持續一個月。期間，將有多位知名藝術家和表演團體登台表演，包括舞蹈、戲劇、音樂等多種形式的藝術表演。還有藝術工作坊，讓參加者親自體驗藝術創作的樂趣。這次藝術季將為逢甲夜市增添濃厚的文化氛圍，期待您的參與。',
        },
      ],
      NEFilter: [],
      NEImg: '',
    }
  },


  methods: {
    bFilter(x) {
     
      console.log('有');
      this.NEFilter = []
      this.NewsEvent.forEach(items => {
        if (x == items.Category) {
          this.NEFilter.push(items);
          items.color = 'white'
          
        }
      })
      if (x == '全部') {
        this.NEFilter = this.NewsEvent
      }
      this.onSwiperInit
      this.resumeAutoplay
    },
    colorChecking() {
      this.buttonInfo.forEach((items) => items.color = '');
    },
    

  }

};
</script>
<template>
  <div class="px-[160px] mx-[24px] h-screen flex flex-col justify-center">
    <div class="btnArea flex flex-wrap justify-center my-[30px]">
      <button type="button"
        class="text-white  bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
        v-for="item in NewsButton" :key="item" v-on:click="bFilter(item)">
        {{ item }}
      </button>
    </div>

    <div class="swiperArea2 ">
      <swiper ref="swiperRef" :onSwiper="onSwiperInit" :watchSlidesProgress="true" :slidesPerView="4"
        :spaceBetween="24" :loop="true" :autoplay="{ delay: 0, disableOnInteraction: false }" :pauseOnMouseEnter="true"
        :speed="5000" :modules="[Autoplay]" @mouseover="pauseAutoplay" @mouseleave="resumeAutoplay" class="mySwiper2">
        <swiper-slide class="justify-start [&:nth-child(odd)]:translate-y-[5px]" v-for="items in NEFilter" :key="items"
          @mouseover="pauseAutoplay" @mouseleave="resumeAutoplay">
          <div class="h-full max-w-[300px] min-w-[300px] bg-white border border-gray-200 rounded-lg shadow flex flex-col ">

            <a class="h-1/2 block overflow-hidden" href="#">
              <div class="flag absolute text-wrap z-[100] flex flex-col text-[12px]">
                <p class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] font-semibold"> {{
                  items.tag }}</p>
              </div>
              <div class="w-full  h-full overflow-hidden rounded-t-lg">

                <img class="imgArea  hover:scale-[1.04]" :src="items.img" alt=" " />
              </div>
            </a>

            <div class="p-5 flex flex-col grow justify-between">
              <a class="w-full block" href="#">
                <h5 class="text-left  text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">{{ items.title }}
                </h5>
              </a>
              <p class="text-base font-normal text-gray-700 line-clamp-3 text-left">{{ items.VenderContent }}</p>
              <div class="flex justify-end ">
                <a href="" class="flex items-center learnMore ">
                  <p class="text-base text-gray-500 ">查看更多</p>
                  <ArrowRightIcon class="arrowIcon h-6 w-6 p-1 text-gray-500" aria-hidden="true"></ArrowRightIcon>
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>

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
  </div>

</template>


<style>
.swiperArea2 {
  position: relative;
  height: 50%;
  width: 100%;

}

.swiper-button-next,
.swiper-button-prev,
.swiper-button-active,
.swiper-button-disable,
.autoplay-progress {
  opacity: 0;
}

.swiper-pagination-bullet-active,
.swiper-pagination-bullet {
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

.swiper-wrapper {
  transition-timing-function: linear !important
}
</style>