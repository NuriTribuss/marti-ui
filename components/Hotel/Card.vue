<template>
  <div class="card-item card-item-list">
    <div class="card-img">
      <a  href="javascript:;" @click="go(hotel.giata.hotelId,hotel.name_sef)" class="d-block">
       <img v-if="hotel.mediaData" v-bind:src="image" alt="hotel-img" />
      </a>
      <span class="badge d-none">Bestseller</span>
      <div
        class="add-to-wishlist icon-element"
        data-toggle="tooltip"
        data-placement="top"
        title="Bookmark"
      >
        <i class="la la-heart-o"></i>
      </div>
    </div>
    <div class="card-body p-3 p-lg-4">
      <h3 class="card-title">
        <a href="javascript:;"  @click="go(hotel.giata.hotelId,hotel.name_sef)">{{hotel.name}}</a>
      </h3>
      <p class="card-meta">{{ hotel.location.name }}, ({{ hotel.location.region.name}})</p>
      <div class="card-rating pt-1">
        <span class="ratings d-flex align-items-center">
          <i class="la la-star" v-for="i in parseInt(hotel.category) || 0" :key="i"></i>
        </span>
      </div>
      <div
        class="card-facility d-lg-flex align-items-center justify-content-between"
      >
        <div>
          <p class="font-weight-bold  my-1">Beliebteste Merkmale</p>
          <span class="d-lg-block d-inline-block" v-for="(fact,index) in hotel.keywordList" :key="index"
            >
            <span v-if="index < 4"><i class="la la-check text-success mx-2"></i> {{ $t.facility[fact]}}</span
          ></span>
         
        </div>

        <div class="text-center d-none d-lg-block" v-if="hotel.rating">
          <p class="font-weight-bold text-center my-1">Gästebewertung</p>
          <div class="">
            <h5><i class="la la-smile text-warning"></i>{{ hotel.rating.overall }}<span>/100</span></h5>
            <p>Exzellent</p>
            <span>{{ hotel.rating.recommendation }} Bewertungen</span>
          </div>
        </div>

        <div class="mt-3 mt-lg-0">
          <div class="px-4 py-1 bg-rgb-3">
            <p v-if="hotel.offerList" class="font-weight-bold my-2">{{ offer ?  offer.travelDate.duration : ''}} {{$t['common.days']}} , All İnclusive</p>
            <button
              @click="go(hotel.giata.hotelId,hotel.name_sef)"
              class="rounded theme-btn theme-btn-blue text-white my-2 w-100 font-weight-bold"
            >
              <small>ab</small> € {{ $n(hotel.bestPricePerPerson.value) }}
              <i class="la la-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end card-item -->
</template>
<script>

export default {
  
  props: ['hotel'],
  data() {
    return {}
  },
  methods : {
    go(id,sef){
      this.$emit('searchHotel',id,sef)
    }
  },
  computed: {
    offer(){
      return this.hotel.offerList ? this.hotel.offerList[0] : null;
    },
    image(){
      return this.hotel.mediaData.pictureUrl.replace('150','400');
    }
  }
}
</script>