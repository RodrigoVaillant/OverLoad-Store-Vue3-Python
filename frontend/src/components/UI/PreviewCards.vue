<script setup>
import Footer from '@/components/UI/Footer.vue';

</script>

<template>

    <div class="bg-white w-full flex flex-col rounded-b-2xl">
        <div class="flex justify-center">
            <p class="text-center my-12 text-2xl w-2/3">Місце, де стиль зустрічається з індивідуальністю. У нашому
                магазині ми зібрали культові бренди, які стали символами сучасної моди. <b>Overload</b> – це більше, ніж
                одяг, це спосіб життя, який підкреслює твою унікальність.
                Від <b>Stone Island</b> до <b>C.P Company</b> – обирай те, що резонує з твоїм характером. Створюй
                образи, які надихають, разом з <b>OverLoad</b></p>
        </div>
        <!-- Choice brand block -->
        <div class="w-full h-2/3 flex justify-around mb-24">
            <!-- Block banner -->
            <figure
                class="bg-white w-1/3 h-3/3 m-10 flex justify-center items-center flex-col border-black border-2 rounded-xl">
                <!-- Photo -->
                <div class="border-black w-2/3 h-2/3 flex justify-center">
                    <img src="../../icons/stoneisland.svg" alt="" class="max-w-full h-auto">
                </div>
                <h1 class="text-2xl text-center">Stone Island</h1>
                <figcaption class="text-2xl text-center"><b>Stone Island</b> — це італійський бренд, який поєднує
                    інноваційні технології, якісні матеріали та неповторний стиль. </figcaption>
                <router-link to="/store/StoneIsland"
                    class="text-2xl rounded-xl bg-black text-white w-48 h-24 m-4 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 flex items-center justify-center">
                    Get Style
                </router-link>

            </figure>

            <figure
                class="bg-white w-1/3 h-3/3 m-10 flex justify-center items-center flex-col border-black border-2 rounded-xl">
                <!-- Photo -->
                <div class=" w-2/3 h-2/3 flex justify-center">
                    <img src="../../icons/C.P._Company_logo.svg" alt="" class="max-w-full h-auto">
                </div>
                <h1 class="text-2xl text-center">C.P Company</h1>
                <figcaption class="text-2xl text-center"><b>C.P Company</b> — це італійський бренд, який відомий своїм
                    поєднанням функціональності та стилю. </figcaption>
                <router-link to="/store/CpCompany"
                    class="text-2xl rounded-xl bg-black text-white w-48 h-24 m-4 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 flex items-center justify-center">
                    Get Style
                </router-link>
            </figure>
        </div>
        <Footer />
    </div>




</template>

<style scoped>

</style>