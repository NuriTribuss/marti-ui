<template>
    <div class="container" v-show="loader">
        <LoaderLanding/>
    </div>
    <client-only>
        <ul>    
            <li v-for="(item, index) in likedHotelsObj" :key="index">
                <HotelFavouriteHotelCard :hotel="item" @removeFav="removeFav"/>
            </li>
        </ul>
    </client-only>  
</template>
<script>
export default {
  data() {
    return {
        likedHotels: [],
        loader: true,
        likedHotelsObj: []
    }
  },
  methods:{
    removeFav(id){        
        for( var i = 0; i < this.likedHotels.length; i++){ 
          if (this.likedHotels[i] === id) { 
            this.likedHotels.splice(i, 1); 
          }
        }
        for( var i = 0; i < this.likedHotelsObj.length; i++){ 
          if (this.likedHotelsObj[i].giata.hotelId === id) { 
            this.likedHotelsObj.splice(i, 1); 
          }
        }
    },
    getResult() {
            let query  = search.get();
            let vue = this;
            vue.loader = true;
            
            query['giataIdList']= vue.likedHotels;
            query['destination'] = [];
            query['departure']= {"code": "VIE", "name": "Wien" };
            $fetch("/api/engine/hotel/get", { method: 'POST', body: query }).then(function (result) {
                vue.loader = false;
                if (!result.status) {
                    vue.error = true;

                    return false;
                }
                vue.likedHotelsObj = result.data.response.hotelList;

            })
            query['giataIdList']= [];
            query['departure']= {"code": "", "name": "Beliebig" };
        },
  },
  mounted(){    
    this.likedHotels = useCookie('martiLikedHotels-cf4a3ede05fce4138ec89688f04754f6',{watch: true});
    this.getResult();
  }
};
</script>