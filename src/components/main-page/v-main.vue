<template>
    <div class="v-main">
        <h1>Online-store</h1>
        <p>
            <router-link :to="{name: 'catalog'}">
                to catalog
            </router-link>
        </p>
    </div>
</template>

<script>

    export default {
        name: "v-main",
        data() {
            return {
                sliderItems: [
                    {
                      id: 1,
                      name: 'img1',
                      src: 'https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg'
                    },
                    {
                        id: 2,
                        name: 'img2',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7nmCjNW8UKNpy75eep7QA8gcqXvaXTrJbmcg9NKY9J3eLLUaJ'
                    },
                    {
                        id: 3,
                        name: 'img3',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFauESQ64wDPfIxQKsoVvGu3bDkHCziaPH3RIjNy-oAQSh2M_N'
                    },
                    {
                        id: 4,
                        name: 'img4',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDcZAEVqq8-ZY9RTgHwBc_HVlZLSAnXVD7cKRJDanlEG0tXhG8'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-main {

    }
</style>