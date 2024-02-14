<script>

import{store} from '../store'
    export default{
        name: 'AppHeader',

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>

    <!-- TITLE -->
    <div class="head-boolfix d-flex justify-content-between">
        <h1 class="text-uppercase main-title p-4">
            boolflix
        </h1>


        <!-- SEARCH BAR -->
        <div class="mb-3 d-flex align-items-center p-4">
            <label class="form-label px-2 ">Cerca un film o una serie TV</label>
            <input 
            type="email" 
            class="form-control"
            name="search"
            id="exampleFormControlInput1"
            v-model="store.searchText" 
            placeholder="Scrivi qualcosa . . .">

            <svg xmlns="http://www.w3.org/2000/svg" style="width: 50px; padding-left: 10px;" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
    </div>
</template>

<style lang="scss">

.head-boolfix{
    background-color: rgb(149, 19, 19);
}

</style>