<template>
    <router-link :class="[disabled?'btn--disabled':'']" class="card-rounded btn btn--round elevation-1"
                 :to="{name:'part',params:{id:id}}">

        <div class="cardPart text-xs-center">
            <img class="mt-3" :src="'src/assets/images/icons/'+part.image" alt="">
            <!--<img class="mt-3" :src="require(`../../assets/images/icons/${part.image}`)" alt="">-->
            <v-spacer></v-spacer>
            <label> {{part.name}}</label>
            <ul class="mb-3 mt-3 pa-0">
                <li v-for="item in part.contents.length"></li>
                <!--class="completed"-->
            </ul>
        </div>
    </router-link>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            disabled() {
                return this.$store.state.level < this.id;
            }
        },
        props: [
            'part',
            'id'
        ]
    }
</script>

<style>
    .card-rounded {
        text-decoration: none;
        width: 260px !important;
        height: 320px !important;
    }

    .cardPart {
        height: 320px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .cardPart img {
        width: 200px !important;
    }

    .cardPart label {
        color: white;
        display: inline-block;
        font-size: 22px;
        line-height: 1em;
    }

    .cardPart ul li {
        margin: 0 5px;
        float: left;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: transparent;
        border: 2px solid white;
        list-style: none;
    }

    .cardPart ul li.completed {
        margin: 0 5px;
        float: left;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: white;
        list-style: none;
    }
</style>