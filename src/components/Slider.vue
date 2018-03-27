<template>
    <v-layout column align-center class="pb-4 mb-4">
        <!--<v-flex xs12 sm8 offset-sm2 class="mt-5">-->
        <!---->

        <!--&lt;!&ndash;<div>&ndash;&gt;-->
        <!--&lt;!&ndash;&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</v-flex>-->
        <v-carousel transition="v-slide-x-reverse-transition">
            <v-carousel-item v-for="(item,i) in items" :src="'src/assets/images/'+item.src" alt=""
                             :key="i"></v-carousel-item>
        </v-carousel>
        <div style="width:100%;">

            <Parallax></Parallax>
        </div>


        <v-btn class="ma-4" large warning @click.native="onClickStart">
            {{$root.$data.start}}
        </v-btn>

    </v-layout>
</template>

<script>
    import Parallax from './Parallax.vue';

    export default {
        data() {
            return {
                items: [
                    {
                        src: '1.png'
                    },
                    {
                        src: '2.png'
                    },
                    {
                        src: '3.png'
                    },
                    {
                        src: '4.png'
                    },
                    {
                        src: '5.png'
                    }
                ]
            }
        },
        methods: {
            onClickStart() {
                this.$router.push('/main');
            }
        },
        components: {
            Parallax
        }
    }
</script>

<style>

</style>