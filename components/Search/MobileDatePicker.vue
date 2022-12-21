<template>
  <div class="offcanvas offcanvas-end" id="datepicker-modal">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Reisedatum</h5>
      <a
        type="button"
        class="btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        ><i class="la la-close"></i
      ></a>
    </div>
    <div class="offcanvas-body mobile-datepicker">
        <DatePicker v-model="range" is-range  :rows="2" :step="1"  color="orange"  class="px-5 border-0"></DatePicker>
       
        <div class="offcanvas-footer ">
             <a
            class="btn btn-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        >{{ $t['user.cancel']}}</a>
        <a @click="setDate"
            class="btn theme-btn theme-btn-orange line-height-28 "
        >{{ $t['search.take']}}</a>
        </div>

       
    </div>
    <div class="modal fade" id="mobile-duration-error-modal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body text-center">
                {{ $t['search.duration.range_error']}}
              </div>
              <div class="modal-footer border-0 justify-content-center">
                <button type="button" class="btn btn-secondary" @click="setDuration">{{ $t['search.duration.set'].replace('{number}',diff)}}</button>
                <button type="button" class="btn theme-btn-orange" data-bs-dismiss="modal">{{ $t['search.date.reset']}}</button>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>


<script>

import { DatePicker }  from 'v-calendar';
import 'v-calendar/dist/style.css';
import search from '/modules/search';

export default {
  props: ['date'],
  components : {
      DatePicker,
  },
  data(){
      return {
          modal : null,
          data : null,
          diff : null,
          query : '',
          range : { start : '' , end : ''},
      }
  },
  methods: {

    setDate(){

      let { duration } = search.get();

      let start = new Date(this.range.start).getTime();
      let end  = new Date(this.range.end).getTime();


      let diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
      diff = diff +1;
      if(Number.isInteger(diff) && diff < parseInt(duration)) {
        this.diff = diff;
        this.modal.show();
        return false;
      }

      let myOffCanvas = document.getElementById('datepicker-modal');
      let myCanvas =  bootstrap.Offcanvas.getInstance(myOffCanvas)
      myCanvas.hide();

      this.$emit('setDate',this.range);
    },
    
    setDuration(){
      this.$emit('setDuration',this.diff)
      this.modal.hide();
    },  
  },
  mounted(){

    this.range = this.date;
    this.modal = new bootstrap.Modal('#mobile-duration-error-modal', {
        keyboard: false,
        backdrop:false
    })
  },
 
};
</script>
