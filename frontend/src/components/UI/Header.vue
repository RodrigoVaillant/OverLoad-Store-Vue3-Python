<script setup>

</script>

<template>
    <div class=" m-0 p-0 border-b-2">
        <div class="bg-white w-full rounded-t-2xl">
            <ul class="flex justify-around items-center flex-row text-3xl p-5 ml-5 w-full h-35">
                <li class=""><a href="#" class="text-4xl font-semibold">Overload</a></li>
                <router-link to="/" class="ease-out duration-300 hover:text-zinc-500">Home</router-link>
                <router-link to="/buyer-service" class="ease-out duration-300 hover:text-zinc-500">BuyerService</router-link>
                <router-link to="/new" class="ease-out duration-300 hover:text-zinc-500">New</router-link>
                <router-link to="/login" tag="img"><img src="../../icons/accountHeader.svg" alt="" class="filter hover:out"></router-link>
            </ul>

        </div>
    </div>
</template>

<style scoped></style>