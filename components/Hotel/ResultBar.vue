<template>
  <div class="filter-wrap margin-bottom-20px mt-2">
   
    <!-- end filter-top -->
    <div class="row filter-bar d-flex align-items-center justify-content-between">
      <div class="col-8 filter-bar-filter d-flex flex-wrap align-items-center">
        <div class="filter-option">
          <h3 class="title font-size-16">{{ count}} {{ $t('search.results') }}</h3>
        </div>
        <div class="filter-option  p-2 rounded-md " v-show="visible">
          <div class="dropdown dropdown-contain">
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('star')" v-if="searchData.star">Hotelkategorie <b>{{ searchData.star}}</b> <i class="la la-close"></i></a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('reviewRate')" v-if="searchData.reviewRate">Min <b>{{ searchData.reviewRate}} %</b> <i class="la la-close"></i></a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('pansion')" v-if="searchData.pansion "> {{ getLabel('boardTypeList',searchData.pansion)}}  <i class="la la-close"></i></a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('room')" v-if="searchData.room "> {{ getLabel('roomTypeList',searchData.room)}}  <i class="la la-close"></i> </a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('city')" v-if="searchData.city ">  {{ getLabel('locationList',searchData.city)}}  <i class="la la-close"></i> </a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('directness')" v-if="searchData.directness ">DirektFlug <i class="la la-close"></i> </a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('transfer')" v-if="searchData.transfer ">mit Transfer <i class="la la-close"></i> </a>
            <a class="rounded btn bg-3 text-white border  rounded me-2"  @click="reset('keywordList')" v-if="searchData.keywordList && searchData.keywordList.length > 0 ">Keywords : {{ getKeywordLabel(searchData.keywordList)}} <i class="la la-close"></i> </a>

            <a class="rounded btn btn-light rounded me-2 border"  v-show="visible" @click="reset()" >Alle Filter Löschen  <i class="la la-close"></i> </a>
          </div>
        </div>
      </div>
      <div class="col-4 select-contain d-lg-block" style="width: auto;">
        <select class=" form-select" v-model="value" @change="set()">
          <option :value="item.code" v-for="(item,index) in sort" :key="index"> {{item.label}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import search from '/modules/search'

export default {
  components: {
    search 
  },
  props : ['count','filter_data'],
  data() {
    return {
      visible : false,
      searchData :{},
      sort : [
        {'code' : "" , 'label' : this.$t('common.beliebig')},
        {'code' : "TOP" , 'label' : this.$t('search.sort_top')},
        {'code' : "PRICE" , 'label' : this.$t('search.sort_price_asc')},
        {'code' : "PRICE_ZA" , 'label' :  this.$t('search.sort_price_desc')},
      ], 
      popular_filters : [
        {
          'code' : 'ado',
          'name' : 'Nur für Erwachsene',
        },
        {
          'code' : 'bea',
          'name' : 'Direkte Strandlage',
        },
        {
          'code' : 'ben',
          'name' : 'Sandstrand',
        },
        {
          'code' : 'pol',
          'name' : 'Pool',
        },
        {
          'code' : 'fwi',
          'name' : 'WLAN',
        }
      ],
      value :  ""
    }
  },
  methods : {
    set(){
      this.searchData.sort = this.value;
      location.href = '/search/hotels?f='+JSON.stringify(this.searchData)
    },
    reset(key){
      if(key){
         delete this.searchData[key];
      }else {
         delete this.searchData['star'];
         delete this.searchData['pansion'];
         delete this.searchData['room'];
         delete this.searchData['city'];
         delete this.searchData['directness'];
         delete this.searchData['transfer'];
         delete this.searchData['keywordList'];
      }
      this.$router.push({ path: this.$route.path, query: { f: JSON.stringify(this.searchData)} })
    },
    getLabel(key,value){
      
      let a = this.filter_data[key].filter((item)=> {
          return item.code == value
      })
      if(a.length > 0){
        return a[0].name;
      }
      return value;
    },

    getKeywordLabel(value){

      let find = this.popular_filters.filter((item)=> {
        return value.includes(item.code) 
      })

      if(find.length > 0){
        value = find.map((a)=> {
          return a.name
        })
      }

      return value.join(',');
    }
  },
  computed:{
    visible(){
        return this.searchData.pansion || this.searchData.star || this.searchData.room || this.searchData.city || this.searchData.reviewRate
    }
  },
  watch: {
    '$route.query'() {
        this.searchData = search.get();
    }
     
  },
  mounted(){
    this.searchData = search.get();
    this.value = this.searchData.sort  || this.value;
  }
}

</script>
