<template>
  <div class="card-item card-item-list d-block">
    <div class="card-img">
      <a  href="javascript:;" @click="go(hotel.giata.hotelId,hotel.name_sef)" class="d-block">
       <img  v-bind:src="image" alt="hotel-img" />
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
      <h3 class="card-title font-size-18">
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
        <div class="mt-3 mt-lg-0 w-100">
          <div class="px-4 py-1 bg-rgb-3 ">
            <p v-if="hotel.offerList" class="font-weight-bold my-2">
              <span v-if="offer">{{ offer.travelDate.duration }} {{$t('common.days')}}, </span> 
              <span v-if="offer">{{ offer.boardType.name }}, </span>
              <span v-if="offer">{{ localize_date(offer.travelDate.fromDate) }}</span>
            </p>
            <button
              @click="go(hotel.giata.hotelId,hotel.name_sef)"
              class="rounded theme-btn theme-btn-blue text-white my-2 w-100 font-weight-bold"
            >
              <template v-if="hotel.bestPricePerPerson">
                <small>ab</small> € {{ $n(hotel.bestPricePerPerson.value) }}
              </template>
              <template v-else>
                <small>{{$t('search.to_offer')}}</small>
              </template>
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
import dayjs from 'dayjs'
import { LocalData } from 'dayjs/locale/de'
dayjs.locale('de');
dayjs().locale('de').format();
export default {
  components : {dayjs},
  props: ['hotel'],
  data() {
    return {}
  },
  methods : {
    go(id,sef){
      this.$emit('searchHotel',id,sef)
    },
    localize_date(dt)
    {
      return dayjs(dt).format('ddd DD. MMM')
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