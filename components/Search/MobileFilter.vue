<template>
<div>
  <a  data-bs-toggle="modal" data-bs-target="#filter-modal" class="text-start btn border font-size-14 font-weight-bold line-height-20  d-lg-none justify-content-between w-100 d-flex " >
    <span v-if="data">{{ data.destination.name }}<br><small>
      {{ $date(data.date.start).format('DD.MM.YYYY') }} / {{ $date(data.date.end).format('DD.MM.YYYY') }}
      </small></span>
    <i class="la la-filter font-size-24 py-2"></i>
  </a>
  <div class="modal" tabindex="-1" id="filter-modal" data-bs-backdrop="static">
  <div class="modal-dialog  modal-fullscreen ">
    <div class="modal-content">
      <div class="modal-header offcanvas-header">
        <h5 class="modal-title">Reiseziel auswahlen</h5>
        <button type="button" class="btn-close btn-close-white " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <SearchEngine :no_header="true"></SearchEngine>
        <HotelFilter v-bind:filter_data="filter_data"  class="d- d-lg-none" />
      </div>
     
    </div>
  </div>
</div>


</div>
</template>

<script>
import search from '/modules/search';

export default {
  props: ["source","filter_data"],
  components : {
    search
  },
  data(){
      return {
          query : '',
          data : null
      }
  },
  mounted(){
    this.data = search.get();
  },
  methods: {
    select(type, obj) {
        this.$emit("select", type, obj);       
    },
    setQuery(){
        this.$emit('load',this.query)
    }
  },
};
</script>
