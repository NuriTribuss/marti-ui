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
      id="departure-dropdown"
>   <span
      class="la la-plane-departure form-icon text-color-12 "
    ></span>
      <span class=" font-size-16 ms-3" v-if="selectedNames.length == 0">{{ $t('common.beliebig') }}</span>
      <span class=" font-size-14 ms-3" v-if="selectedNames.length > 0 ">{{ selectedNames.join(',') }}</span>
    </a>
    <div
      class="dropdown-menu dropdown-menu-wrap pt-4 px-3 dropdown-small "
      
    >
      <div class="row overflow-auto" style="height:310px;">
        <div class="col-12" v-for="(land, index) in airports" :key="index" >
          <div v-if="land.items.length > 0">
            <button class="btn-light btn w-100 text-start font-weight-bold">{{land.name}}</button>
            <div class=" btn  font-size-14 w-100 rounded  text-start" v-for="(option, subindex) in land.items" :key="subindex"  
                :class="{ 'theme-btn-orange text-white': selected.indexOf(option.code)  > -1 }"
                @click="select(option)"
            >
              <label :for="option.id">{{ option.name }}</label>
            </div>
           
          </div>
        </div>
      </div>
     <div class="modal-footer justify-content-center">
          <button class="btn theme-btn-orange px-4" @click="closeDropdown">{{ $t('search.filter_accept')}}</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['airports','value'],
  data(){
      return {
          query : '',
          selected : [],
          selectedNames : [],
      }
  },
  methods: {
    select(airport){
      let index = this.selected.indexOf(airport.code);
      if(index > -1){
        this.selected.splice(index,1);
        this.selectedNames.splice(index,1)
      }else{
        this.selected.push(airport.code);
        this.selectedNames.push(airport.name)
      }

      this.setDeparture();
    },
    setDeparture(){
        this.$emit('setDeparture',this.selected,this.selectedNames)
    },
    closeDropdown(){
      let dropdown = new bootstrap.Dropdown('#departure-dropdown');
      dropdown.hide();
    }
  },
  mounted(){
      if(this.value.code != ''){
        this.selected = this.value.code.split(',');
        this.selectedNames = this.value.name.split(',');
      }
  }
};
</script>
