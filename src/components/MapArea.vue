<script>
export default {
    data() {
        return {
            buttonInfo: [
                {
                    name: '公車',
                    color: 'white',
                    content: '1.搭乘台中客運135號或仁友客運22及125號→到逢甲大學站下車即可抵達逢甲夜市。2.從臺中火車站下車後→轉搭臺中客運35號→到逢甲大學站下車即可抵達逢甲夜市。3.從朝馬站→轉搭統聯客運79號→到逢甲大學站下車即可抵達逢甲夜市。',
                    list: [
                        {
                            infoName: '福星停車場(直線距離75公尺)',
                            link:"https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116476.6018286391!2d120.56360563252983!3d24.175456761797808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.175380999999998!2d120.646018!5e0!3m2!1szh-TW!2stw!4v1722914008589!5m2!1szh-TW!2stw"
                        },
                        {
                            infoName:'下湳仔(西屯路)(直線距離196公尺)',
                            link: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d123547.02870418002!2d120.56578815037263!3d24.17367271002298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.176403!2d120.64361339999999!5e0!3m2!1szh-TW!2stw!4v1722914143423!5m2!1szh-TW!2stw'
                        },
                        {
                            infoName:'頂湳仔(西屯路)(直線距離198公尺)',
                            link: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116477.79252558298!2d120.56206973248652!3d24.174151962694566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.17416!2d120.64448499999999!5e0!3m2!1szh-TW!2stw!4v1722914240916!5m2!1szh-TW!2stw'
                        },
                    ]
                },
                {
                    name: '停車',
                    color: '',
                    content: '我是停車資訊',
                    list: [
                        {
                            infoName: '西屯區-BOT-福星立體P(直線距離63公尺)',
                            link: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116476.32705086276!2d120.56369803253982!3d24.175757861590878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.175629999999998!2d120.646!5e0!3m2!1szh-TW!2stw!4v1722914741264!5m2!1szh-TW!2stw'
                        },
                        {
                            infoName: '西屯區-民營-逢甲文華P(直線距離117公尺)',
                            link: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116476.14179534893!2d120.56174333254656!3d24.175960861451358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.17606!2d120.6443!5e0!3m2!1szh-TW!2stw!4v1722914819466!5m2!1szh-TW!2stw'
                        },
                        {
                            infoName:'西屯區-民營-逢甲上石P(直線距離185公尺)',
                            link: "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116477.08904708298!2d120.5612608325121!3d24.174922862164745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.17494!2d120.6438!5e0!3m2!1szh-TW!2stw!4v1722914886836!5m2!1szh-TW!2stw"
                        },
                    ]
                },
                {
                    name: 'Ubike',
                    color: '',
                    content: '我是Ubike資訊',
                    list:[
                        {
                            infoName: 'YouBike2.0_文華路86巷文華路口(直線距離198公尺)',
                            link: "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116475.6620406534!2d120.56480313256398!3d24.17648656109008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.176475999999997!2d120.647166!5e0!3m2!1szh-TW!2stw!4v1722915065036!5m2!1szh-TW!2stw"
                        },
                        {
                            infoName:'YouBike2.0_上石公園(直線距離326公尺)',
                            link: "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116479.14613081473!2d120.56244033243729!3d24.172668563714137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.172839999999997!2d120.64492999999999!5e0!3m2!1szh-TW!2stw!4v1722915159515!5m2!1szh-TW!2stw"
                        },
                        {
                            infoName:'YouBike2.0_逢甲福星路口(直線距離341公尺)',
                            link: 'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116473.5749890667!2d120.56237643263985!3d24.178773359518576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.17876!2d120.64487!5e0!3m2!1szh-TW!2stw!4v1722915205237!5m2!1szh-TW!2stw'
                        },
                    ]

                },
            ],
            info: '',
            listInfo:'',
            linkInfo:'',
        }
    },
    mounted()
    {this.listInfo=this.buttonInfo[0].list
    this.linkInfo='https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d116476.6018286391!2d120.56360563252983!3d24.175456761797808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d24.175380999999998!2d120.646018!5e0!3m2!1szh-TW!2stw!4v1722914008589!5m2!1szh-TW!2stw'
    },
    methods: {
        traffic(x, item) {
            this.listInfo =[]
                this.colorChecking()
            console.log(x, item);
            if (x == item.name) {
                this.info = item.content
                item.color = 'white'
                this.listInfo=item.list
                console.log(this.listInfo);
                this.linkInfo=item.list[0].link
                console.log(item.list[0].link);
                
                // this.linkInfo=x[0].list.link
            }
            console.log(this.info);
        },
        colorChecking() {
            this.buttonInfo.forEach((items) => items.color = '');
        },
        changeLink(x){
            this.linkInfo=x.link
            console.log(this.linkInfo);
            
        }
    }
}
</script>
<template>
    <div class="w-full  my-5 h-screen relative">
        <iframe
            :src=linkInfo
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" class="filter  sepia-[0.2]"></iframe>

        <div class="w-[80%] min-[576px]:w-[50%] md:w-[40%] lg:w-[30%] h-[60%] absolute bg-white top-[50%] min-[576px]:left-[40px] min-[576px]:-translate-x-[0%] left-[50%] -translate-x-[50%] -translate-y-[50%]  py-[20px] px-[10px] overflow-y-scroll rounded-[20px] shadow-sm">
            <div class="relative right-0">
                <ul class="relative flex flex-wrap p-1 list-none rounded-b-lg bg-white " data-tabs="tabs"
                    role="list">
                    <li v-for="item in buttonInfo" :key="item" class="z-30 flex-auto text-center "
                        v-on:click="traffic(item.name, item)">
                        <a :class=item.color
                            class="mapA z-30 flex items-center justify-center w-full px-0 py-1 mb-0 duration-500 ease-in-out border-0 cursor-pointer text-slate-700 bg-inherit"
                            data-tab-target="" active role="tab" aria-selected="true">
                            <span class="ml-1">{{ item.name }}</span>
                        </a>
                    </li>
                </ul>

                <ul class="">
                    
                    <li v-for="items in listInfo" :key="items" @click="changeLink(items)" class="border-2 w-4/5 my-[30px] p-[10px] rounded-xl text-[#437578] hover:cursor-pointer mx-auto "  >
                        {{items.infoName}}
                    </li>
                </ul>


            </div>
        </div>

    </div>
</template>
<style>
a.mapA {
    height: 29.5px;
    width: 100%;
}
a.mapA:hover {
    background-color: rgba(248, 248, 248, 0.261);
}
a.mapA.white {
   border-bottom: 3px solid #437587;
}

 .place-card,.place-card-large {
    display: none!important
}
</style>