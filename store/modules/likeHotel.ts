export default{
    state:{
        LikedHotels: [],
    },
    mutations:{
        SET_LIKED_HOTELS(state){
            const cookieLikedHotels = useCookie('martiLikedHotels-a1591467-3a81-4177-a52a-1ef1086a3c51');
            if(cookieLikedHotels != null && cookieLikedHotels != undefined){
                state.LikedHotels = cookieLikedHotels;
            }
        },
        // GET_LIKED_HOTELS(state){
        //     const cookieLikedHotels = useCookie('martiLikedHotels-bd83aaf8-89d1-4207-ae96-f6b5498d9c34');
        //     if(cookieLikedHotels != null && cookieLikedHotels != undefined){
        //         console.log(cookieLikedHotels);
        //         state.LikedHotels = cookieLikedHotels;
        //         return state.LikedHotels;
        //     }
        //     return [];
        // },
        DO_Like_HOTEL(state,likedHotelsObj){
            state.LikedHotels = likedHotelsObj;
            let cookieLikedHotels = useCookie('martiLikedHotels-a1591467-3a81-4177-a52a-1ef1086a3c51');
            if (typeof(cookieLikedHotels.value) == "undefined" && cookieLikedHotels.value == null ) {
                cookieLikedHotels.value =[];
            }
            state.LikedHotels = cookieLikedHotels.value;
            if(state.LikedHotels?.find((h) => h?.hotelId==likedHotelsObj.hotelId) != null){
                for( var i = 0; i < state.LikedHotels.length; i++){ 
                    if (state.LikedHotels[i].hotelId === likedHotelsObj.hotelId) { 
                        state.LikedHotels.splice(i, 1);                        
                        break;
                    }
                }
            }else{
                state.LikedHotels.push(likedHotelsObj);
            }
            cookieLikedHotels.value = state.LikedHotels;
        },
        // doLikeHotel(state,hotelObj){
        //     // const cookieLikedHotels = useCookie('martiLikedHotels-3bac290cc1d5482f8f21d');
            
        //     // state.LikedHotels = cookieLikedHotels.value;
        //     // console.log(state.LikedHotels);
            
        //     // if(state.LikedHotels === undefined || state.LikedHotels === null){
        //     //     console.log("empty");
        //     //     state.LikedHotels = [];
        //     // }
        //     // console.log(state.LikedHotels);
        //     // if(state.LikedHotels?.find((h) => h?.hotelId==hotelObj.giata.hotelId) != null){
        //     //     for( var i = 0; i < state.LikedHotels.length; i++){ 
        //     //         if (state.LikedHotels[i].hotelId === hotelObj.giata.hotelId) { 
        //     //             state.LikedHotels.splice(i, 1); 
        //     //         }
        //     //     }
        //     // }else{
        //     //     state.LikedHotels.push(hotelObj);
        //     //     console.log("pushed");
        //     // }
        //     // cookieLikedHotels.value = state.LikedHotels;
        //     // console.log(state.LikedHotels);
        // }
    },
    actions:{
        // doLikeHotel({ commit },hotelObj){
        //     commit('doLikeHotel',hotelObj);
            
        // }
        setLikedHotels({commit}){
            commit("SET_LIKED_HOTELS");
        },
        doLikeHotel({commit},hotelObj){
            commit("DO_Like_HOTEL", hotelObj);
        }
    },
    getters: {
        likedHotelsList: (state) => {
            return state.LikedHotels;
        },        
    }
}