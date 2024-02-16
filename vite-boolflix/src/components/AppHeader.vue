<script>

import {store} from '../store'

export default{
    name: "AppHeader",
    data(){
        return{
            store
        }
    }
}
</script>

<template>

<header class="d-flex justify-content-between align-items-center p-3 bg-danger">
        <h1 class="text-black">Boolflix</h1>

        <div>
            <input type="text" placeholder="Cerca titolo" v-model="store.searchText">
            <button @click="$emit('getMovies')" class="btn btn-dark p-1">Cerca</button>
        </div>
    </header>

</template>

<style lang="scss" scoped>

</style>