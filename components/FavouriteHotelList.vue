<template>
    <div class="container" v-show="loader">
        <!-- <LoaderLanding v-if="likedHotels?.length > 0"/> -->
        <span v-if="!likedHotels || likedHotels?.length == 0">{{ $t('hotels.liked_empty') }}</span>
    </div>
    <client-only>
        <ul>    
            <li v-for="(item, index) in likedHotels" :key="index">
                <HotelFavouriteHotelCard :hotel="item" @removeFav="removeFav"/>
            </li>
        </ul>
    </client-only>  
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
        likedHotels: [],
        loader: true,
        //likedHotelsObj: []
    }
  },
  methods:{
    removeFav(hotel){        
      this.doLikeHotel(hotel);
      this.likedHotels = this.favHotels;
        // for( var i = 0; i < this.likedHotels.length; i++){ 
        //   if (this.likedHotels[i].hotelId === id) { 
        //     this.likedHotels.splice(i, 1); 
        //     break;
        //   }
        // }
        //for( var i = 0; i < this.likedHotelsObj.length; i++){ 
          //if (this.likedHotelsObj[i].giata.hotelId === id) { 
            //this.likedHotelsObj.splice(i, 1); 
          //}
        //}
    },
    ...mapActions({
      doLikeHotel: 'doLikeHotel',
    }),
    // getResult() {
    //         let query  = search.get();
    //         let vue = this;
    //         vue.loader = true;
            
    //         query['giataIdList']= vue.likedHotels;
    //         query['destination'] = [];
    //         query['departure']= {"code": "VIE", "name": "Wien" };
    //         $fetch("/api/engine/hotel/get", { method: 'POST', body: query }).then(function (result) {
    //             vue.loader = false;
    //             if (!result.status) {
    //                 vue.error = true;

    //                 return false;
    //             }
    //             vue.likedHotelsObj = result.data.response.hotelList;

    //         })
    //         query['giataIdList']= [];
    //         query['departure']= {"code": "", "name": "Beliebig" };
    //     },
  },
  computed: {
    favHotels: {
      get() {
        return this.$store.getters["likedHotelsList"];
      }
    },
  },
  mounted(){    
    //this.likedHotels = useCookie('martiLikedHotels-73d538338f654eabbf488b88aa9c8150',{watch: true});
    //this.getResult();
    this.$store.dispatch("setLikedHotels");
    this.likedHotels = this.favHotels;
  },
  watch:{
    favHotels (newValue, oldValue) {
      this.likedHotels = this.favHotels;
    }
  },
};
</script>