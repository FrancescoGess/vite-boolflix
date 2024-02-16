import { reactive } from 'vue'


export const store = reactive({

        searchText: '',
        apiKey: '7f8416bf0db8b52c5b3e2aea53aa1923',
        // endpointMovies: 'https://api.themoviedb.org/3/search/movie',
        // moviesArray: [],
        // endpointSeries: 'https://api.themoviedb.org/3/search/tv',
        // seriesArray: []

        endpointAll: 'https://api.themoviedb.org/3/search/multi',
        list: []
})