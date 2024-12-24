<script setup>

</script>

<template>

<div class="footer w-full h-56 text-1xl px-12 bg-gray-900 text-white flex justify-between items-center rounded-b-2xl">

    <figure class="flex flex-row text-gray-400">
        <ul class="space-y-4">
            <li class="text-3xl text-white pb-2">Contacts</li>
            <li class="animated"><a href="">Instagram</a></li>
            <li class="animated"><a href="">Telegram</a></li>
            <li class="animated"><a href="">Facebook</a></li>
        </ul>
    </figure>
    <figure class="flex flex-row text-gray-400">
        <ul class="space-y-4">
            <li class="text-3xl text-white pb-2">To explore</li>
            <li class="animated"><a href="">Blog</a></li>
            <li class="animated"><a href="">Experiences</a></li>
            <li class="animated"><a href="">Accommodations</a></li>
        </ul>
    </figure>
    <figure class="flex flex-row text-gray-400">
        <ul class="space-y-4">
            <li class="text-3xl text-white pb-2">Help and services</li>
            <li class="animated"><a href="">FAQS</a></li>
            <li class="animated"><a href="">Legal Warning</a></li>
            <li class="animated"><a href="">How does it work</a></li>
        </ul>
    </figure>
    <figure class="flex flex-row text-gray-400">
        <ul class="space-y-4">
            <li class="text-3xl text-white pb-2">Hot links</li>
            <li class="animated"><a href="">Home</a></li>
            <li class="animated"><a href="">Shop</a></li>
            <li class="animated"><a href="">Blog</a></li>
        </ul>
    </figure>

</div>

</template>

<style scoped>
.animated {
  @apply transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300;
};

/* .liName{
    @apply text-3xl text-white p-x-2;
} */
</style>