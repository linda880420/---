<script setup>
// import { ArrowRightIcon } from '@heroicons/vue/24/solid'
// import leftCard from '@/assets/img/card-left.jpg'
</script>
<script>
</script>
<template>
        <!-- [&:nth-child(4n+1)] -->
        <div  href="#"
        class="rangerCard p-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg  shadow md:flex-row  [&:nth-child(4n+1)]:col-span-3 gap-2">
        <slot>
        </slot>
        </div>
</template>
<style>

</style>