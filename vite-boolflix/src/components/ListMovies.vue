<script>

import Movies from './Movies.vue'
import {store} from '../store'

export default{
    name: "ListMovies",
    components: {
        Movies
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template>

<h3 class="p-3 text-white">Film e serie Tv</h3>

    <h4 class="p-3 text-white">
        Risutati:
    </h4>
    <div class="scroll d-flex">
        <movies 
        v-for="(film, index) in store.list" 
        :key="index" 
        :propsItem="film"/>
    </div>

    <!-- <h3 class="p-3 text-black">Serie Tv</h3>
    <div class="scroll d-flex mb-5">
        <movies v-for="(serie, index) in store.list" :key="index" :propsItem="serie"/>
    </div> -->

</template>

<style lang="scss" scoped>
.scroll{
        overflow-x: auto;
        scrollbar-width: thin;
        }
</style>