<template>
  <div class="dropdown dropdown-contain gty-container d-lg-block d-none">
    <a
      class="dropdown-toggle dropdown-btn"
      href="#"
      role="button"
      data-toggle="dropdown"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      id="datepicker-dropdown"
> 

     <span class="ps-3 font-size-16">{{ $date(dateRange.start).format('DD.MM') }} - {{ $date(dateRange.end).format('DD.MM') }}</span>
    </a>
    <div
      class="dropdown-menu dropdown-menu-wrap dropdown-large"
      
    >
       <DatePicker v-model="dateRange" v-if="dateRange.start" is-range  :columns="2" :step="1"  color="orange" :firstDayOfWeek="2"  locale="de" class="px-5 border-0"></DatePicker>
       <div class="modal-footer justify-content-center">
          <button class="btn theme-btn-orange px-4" @click="setDate">{{ $t['search.filter.accept']}}</button>
       </div>
      <div class="modal fade" id="duration-error-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
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
  </div>
</template>

<script>


import { DatePicker }  from 'v-calendar';
import 'v-calendar/dist/style.css';
import search from '/modules/search';



export default {
  props: ['value'],
  components : { DatePicker },
  data(){
      return {
        modal : null,
        data : null,
        diff : null,
        dateRange : {
          start: null,
          end: null,
        },
      }
  },
  methods: {
    setDate(){

        let { duration } = search.get();

        let start = new Date(this.dateRange.start).getTime();
        let end  = new Date(this.dateRange.end).getTime();


        let diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
        diff = diff +1;

        if(Number.isInteger(diff) && diff < parseInt(duration)) {
          this.diff = diff;
          this.modal.show();
          return false;
        }
       
        this.$emit('setDate',this.dateRange)
        this.closeDropdown();
    },

    setDuration(){
      this.$emit('setDuration',this.diff)
      this.modal.hide();
    },  
   
    closeDropdown(){
      let dropdown = new bootstrap.Dropdown('#datepicker-dropdown');
      dropdown.hide();
    }
  },
  mounted(){

    if(this.value != ''){
      this.dateRange = this.value;
    }
    this.modal = new bootstrap.Modal('#duration-error-modal', {
          keyboard: false,
          backdrop : false,
    })
     
  }
};
</script>
