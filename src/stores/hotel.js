import { defineStore } from 'pinia'
export const useHotelStore = defineStore('hotel', {
    
    state:() => {
      return {
        hotel:[
          {
            id: 1,
            title: 'Hotel Z 逢甲',
            img: 'https://www.easytravel.com.tw/ehotel/hotelimg/picture/b/10575_202007091746250637_403.jpg',
            address: '407台中市西屯區福星北一街61號',
            VendorContent: '現代化的飯店只要步行 1 分鐘即可到文修公園，步行 11 分鐘可到逢甲夜市，距離台中國家歌劇院 3 公里，步行 2 分鐘可到最近的公車站。',
            latitude: 24.1823,
            longitude: 120.6442
          },
          {
            id: 2,
            title: '臺中逢甲智選假日酒店',
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/276686619.webp?k=9b3cf107d02e6ad008b86b9df144596234c3e53101a4a5da5a9b6ac4df6ac616&o=',
            address: '407台中市西屯區福星北三街33巷28號',
            VendorContent: '這間色彩繽紛的平價飯店位於休閒餐廳林立的區域，步行 7 分鐘可到逢甲夜市，距離台中國際機場 12 公里。',
            latitude: 24.1815,
            longitude: 120.6416
          },
          {
            id: 3,
            title: '鵲絲旅店',
            img: 'https://i0.wp.com/yama.tw/wp-content/uploads/20190805232701_73.jpg?w=1000&quality=99&ssl=1',
            address: '407台中市西屯區福星路230號',
            VendorContent: '這間現代風飯店位於商店和餐廳林立的繁忙街區，充滿鄉村時尚氛圍，步行 9 分鐘可達熱鬧的逢甲夜市，距離新光三越百貨公司 3 公里，距離台中車站 8 公里。',
            latitude: 24.1828,
            longitude: 120.6423
          },
          {
            id: 4,
            title: '隱和旅INNK Hotel',
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/197195288.webp?k=4c04f26aca0b004f9bd5d915fde9ad7785e4b68070237d14113b47bbf064bf90&o=',
            address: '407台中市西屯區西屯路二段272-16號',
            VendorContent: '這家休閒旅館步行 1 分鐘、7 分鐘和 15 分鐘分別可到最近的公車站、熱鬧的逢甲夜市和寧靜的秋紅谷廣場。',
            latitude: 24.1821,
            longitude: 120.6408
          },
          {
            id: 5,
            title: 'KUN HOTEL',
            img: 'https://static.liontech.com.tw//hotelpics/TW/TWTCH102/TWTCH102_view.jpg',
            address: '407台中市西屯區福星北三街33巷56號',
            VendorContent: '這間精緻飯店坐落在幽靜的大學區街道上，步行 1 分鐘可達公車站，距離台中國家歌劇院 3 公里，距離國立自然科學博物館 4 公里。',
            latitude: 24.1819,
            longitude: 120.6407
          },
          {
            id: 6,
            title: '台中逢甲25行館',
            img: 'https://cf.bstatic.com/xdata/images/hotel/square600/461667736.webp?k=44cc78ca680bf6360ae88099643e626f986bf636a1e714a948c237f3ca65fefb&o=',
            address: '407台中市西屯區逢甲路301巷22弄1號',
            VendorContent: '這家簡樸平價的旅館步行 3 分鐘可到達最近的公車站、步行 15 分鐘可到達熱鬧的逢甲夜市，距離國立自然科學博物館則有 4 公里路程。',
            latitude: 24.1799,
            longitude: 120.6428
          },
          {
            id: 7,
            title: '圖樂文旅',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/159496533.jpg?k=c9e7af2929059940e7f4d3b0c4d9a3fd5bcf2b7ba9318149f7785812719b76dc&o=&hp=1',
            address: '407台中市西屯區文華路138巷1-1號',
            VendorContent: '位於逢甲商圈，步行即可到達逢甲夜市，鄰近多個購物和餐飲場所。',
            latitude: 24.1802,
            longitude: 120.6439
          },
          {
            id: 8,
            title: '豐邑逢甲商旅',
            img: 'https://travelerliv.com/wp-content/uploads/pixnet/1669615658-3211653433-g_l.jpg',
            address: '40747台中市西屯區西屯路二段275-2號',
            VendorContent: '這間高級的現代風商務飯店步行 7 分鐘可抵達熱鬧的逢甲夜市，距離國立台灣美術館 6 公里。',
            latitude: 24.1815,
            longitude: 120.6447
          },
          {
            id: 9,
            title: 'Micro Hotel 微行旅',
            img: 'https://yoke918.com/wp-content/uploads/2019/08/19082743-1.jpg',
            address: '407台中市西屯區福星路333號',
            VendorContent: '這間簡約的飯店位於商店和餐廳林立的熱鬧街道上，步行 5 分鐘可達逢甲夜市，距離臺中國家歌劇院 3 公里，距離臺中火車站 8 公里。',
            latitude: 24.1831,
            longitude: 120.6419
          },
          {
            id: 10,
            title: '台中逢甲星享道酒店',
            img: 'https://www.inskyhotel.com/wp-content/uploads/2021/03/index_fix.jpg',
            address: '407台中市西屯區福星北路18號',
            VendorContent: '酒店風格多元，步行至繁華的逢甲夜市僅需 7 分鐘，距離國立自然科學博物館約 5 公里。',
            latitude: 24.1835,
            longitude: 120.6406
          },
          {
            id: 11,
            title: '文華道會館',
            img: 'https://www.inone.com.tw/wp-content/uploads/2021/03/w-ct.jpg',
            address: '407台中市西屯區文華路138巷31號',
            VendorContent: '這間休閒飯店位於西屯區，周圍商店及餐廳林立，步行 8 分鐘即達逢甲夜市，距離高科技公司雲集的中部科學園區 5 公里。',
            latitude: 24.1803,
            longitude: 120.6440
          },
          {
            id: 12,
            title: '浮雲客棧Kloud hotel',
            img: 'https://bobowin.blog/wp-content/uploads/20210924075736_46.jpg',
            address: '台中市西屯區西安街277巷59號',
            VendorContent: '這間高級飯店坐落於住商混合區，步行 9 分鐘可達生氣蓬勃的逢甲夜市，距離台中國家歌劇院 4 公里，距離台中國際機場 13 公里。',
            latitude: 24.1832,
            longitude: 120.6409
          },
          {
            id: 13,
            title: 'Hotel Euphemia 由扉寓所',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/519740825.jpg?k=d0a75b73ba92a7465d863c045e93be208c7ce56d72d251c58cf900a063409e96&o=&hp=1',
            address: '407台中市西屯區慶和街155巷20號',
            VendorContent: '這家休閒旅館位於台中西屯區，距離台中國際機場 10 公里，周圍有許多餐飲及購物場所。',
            latitude: 24.1826,
            longitude: 120.6395
          },
          {
            id: 14,
            title: '逢甲歡樂星',
            img: 'https://lh3.googleusercontent.com/p/AF1QipMv1eP-SBqeTEWBDgKBowE2x2yyy7YfSfVojis=s1360-w1360-h1020',
            address: '407台中市西屯區文華路138巷27號',
            VendorContent: '這家簡樸的酒店距離熱鬧的逢甲夜市僅有步行 4 分鐘的路程，周邊有各類飲食及購物選擇，交通便利。',
            latitude: 24.1800,
            longitude: 120.6438
          },
          {
            id: 15,
            title: '來來商旅',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204762312.jpg?k=4bfb11ab6e3c3db86a207a2b4c2e3f77a6f0846a10f05d8cb999f64dbbe407e7&o=&hp=1',
            address: '407台中市西屯區福星北路17號',
            VendorContent: '這間位於逢甲商圈內的簡約飯店，步行 4 分鐘可到逢甲夜市，距離國立自然科學博物館 4 公里，交通便利，周邊有多種餐飲及購物選擇。',
            latitude: 24.1830,
            longitude: 120.6422
          },
          {
            id: 16,
            title: '台中沐旅',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/267284417.jpg?k=6b4fd57c3d8b92d5b8bc5c2733a45815e00b3bfa5a6666262e682073d44707c8&o=&hp=1',
            address: '407台中市西屯區西安街8號',
            VendorContent: '這家現代風格的飯店距離逢甲夜市步行僅 8 分鐘，距離台中國家歌劇院約 3 公里。飯店提供舒適的住宿環境及多元化的服務設施。',
            latitude: 24.1837,
            longitude: 120.6423
          },
          {
            id: 17,
            title: '台中Moxy 酒店',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/282606798.jpg?k=1d4e0cc2d9b6b64bc7e2cfbdc24f6508ef99691cf18761fa12446ab9aabbabe1&o=&hp=1',
            address: '407台中市西屯區西安街65號',
            VendorContent: '這家摩登且時尚的飯店步行 10 分鐘即可抵達逢甲夜市，距離台中國家歌劇院約 3.5 公里，適合喜歡現代風格的旅客。',
            latitude: 24.1839,
            longitude: 120.6418
          },
          {
            id: 18,
            title: '台中Zhong Ke 飯店',
            img: 'https://pix8.agoda.net/hotelImages/69185/-1/9ae9d1d99d232fb712973802258fc7be.png?ca=13&ce=1&s=800x',
            address: '407台中市西屯區福星北路18巷8號',
            VendorContent: '這間舒適的飯店位於台中西屯區，距離逢甲夜市約 7 分鐘車程，距離國立自然科學博物館約 4 公里，適合家庭及商務旅客。',
            latitude: 24.1842,
            longitude: 120.6426
          },
          {
            id: 19,
            title: '台中城中城酒店',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/269580738.jpg?k=b28c635132f5a5c63acb7c1333b2e54c8b8f0f3966c4898351ed1d4c7a9895e3&o=&hp=1',
            address: '407台中市西屯區福星北路15巷11號',
            VendorContent: '這家現代風格的飯店步行至逢甲夜市僅需 6 分鐘，距離台中國家歌劇院約 4 公里，適合享受夜生活的旅客。',
            latitude: 24.1829,
            longitude: 120.6431
          },
          {
            id: 20,
            title: '台中星晴旅店',
            img: 'https://lh3.googleusercontent.com/p/AF1QipOggnDXoqYs5EfgfaNcCehjllO6_N5IVpbwkfcq=s1360-w1360-h1020',
            address: '407台中市西屯區福星路333巷22號',
            VendorContent: '這間摩登的飯店距離逢甲夜市步行約 5 分鐘，距離台中國家歌劇院約 3.5 公里，飯店周圍有豐富的餐飲及購物選擇。',
            latitude: 24.1825,
            longitude: 120.6443
          },{
            id: 21,
            title: '台中亞緻大飯店',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Landis_Taichung_Lobby_2019.jpg/560px-The_Landis_Taichung_Lobby_2019.jpg',
            address: '407台中市西屯區台灣大道三段533號',
            VendorContent: '這間豪華飯店提供現代化的設施和舒適的住宿環境，距離逢甲夜市約 10 分鐘車程，適合商務和休閒旅客。',
            latitude: 24.1821,
            longitude: 120.6435
          },
          {
            id: 22,
            title: '台中W飯店',
            img: 'https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/327495462.jpg?k=99575850131801c8e6df48833b41d3c7a34a94c0620d15922362dd4ebafa83a2&o=&s=800x',
            address: '407台中市西屯區台灣大道二段688號',
            VendorContent: '這家時尚的五星級飯店距離逢甲夜市約 15 分鐘車程，擁有頂級設施和奢華的住宿環境，適合追求高品質體驗的旅客。',
            latitude: 24.1817,
            longitude: 120.6428
          },
          {
            id: 23,
            title: '台中長榮桂冠酒店',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/276147426.jpg?k=3283bff6b3fa4a4d5b7e2c56eeb920f0f7425d4d2ad5f308a99d40c377d47a6e&o=&hp=1',
            address: '407台中市西屯區中港路二段94號',
            VendorContent: '這間高級酒店提供豐富的設施和細緻的服務，距離逢甲夜市約 8 分鐘車程，是商務和家庭旅客的理想選擇。',
            latitude: 24.1823,
            longitude: 120.6412
          },
          {
            id: 24,
            title: '台中葉美大飯店',
            img: 'https://lh5.googleusercontent.com/p/AF1QipOEarMkZpnjhuxPgS_hiCIjopRaHPIbrWwbRORz=w243-h174-n-k-no-nu',
            address: '407台中市西屯區福星路310號',
            VendorContent: '這間現代化的飯店提供舒適的住宿環境和便捷的交通選擇，距離逢甲夜市步行約 12 分鐘，周圍有多種餐飲選擇。',
            latitude: 24.1826,
            longitude: 120.6438
          },
          {
            id: 25,
            title: '台中名人飯店',
            img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/249752556.jpg?k=ba1f24a5ff2f2cc43d9236e5d3486b3d173afbd4a04d6a4fbd6c2f773fbb0bdb&o=&hp=1',
            address: '407台中市西屯區文心路四段173號',
            VendorContent: '這間具有藝術氛圍的飯店距離逢甲夜市約 10 分鐘車程，適合喜歡文化和藝術的旅客。飯店內提供豐富的藝術品展示。',
            latitude: 24.1819,
            longitude: 120.6441
          }
        ]
        
      }
  }})