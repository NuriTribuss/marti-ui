<template>
  <div class="dropdown dropdown-contain gty-container">
    <a
      class="dropdown-toggle dropdown-btn"
      href="#"
      role="button"
      data-toggle="dropdown"
      data-bs-toggle="dropdown"
    
      aria-expanded="false"
      id="duration-dropdown"
    >
      <span class=" font-size-16">{{ modelValue }} {{ $t("common.days") }}</span>
    </a>
    <div
      class="dropdown-menu dropdown-menu-wrap py-4 px-3"
      style="width: 360px"
    >
      <div class="row">
        <div class="col-4" v-for="(option, index) in options" :key="index">
          <a
            :class="{ 'theme-btn-orange': duration == option.value }"
            @click="select(option.value)"
            class="btn font-size-14 w-100 mb-2 rounded border border-success"
          >
            {{ option.label }}
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center mt-2">{{ duration }} {{ $t('common.days')}}</div>
          <input type="range" min="1" max="28" v-model="duration" class="form-range" >
        </div>
      </div>
      <div class="modal-footer justify-content-center d-flex d-lg-none">
          <button class="btn theme-btn-orange px-4" @click="closeDropdown()">{{ $t('search.filter.accept')}}</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  data() {
    return {
      duration: 7,
      options: [
        { label: "7 Tage", value: 7 },
        { label: "14 Tage", value: 14 },
        { label: "1-4 Tage", value: 1 },
        { label: "5-8 Tage", value: 5 },
        { label: "9-12 Tage", value: 9 },
        { label: "Beliebig", value: 0 },
      ],
    };
  },
  watch : {
    duration(){
      this.$emit('update:modelValue', this.duration);
    }
  },
  methods: {
    select(duration) {
      this.duration = duration;
      this.$emit('update:modelValue', this.duration);
    },
    closeDropdown(){
      let dropdown = new bootstrap.Dropdown('#duration-dropdown');
      dropdown.hide();
    }
  },
  mounted(){
    this.duration  = this.modelValue;
  }
};
</script>
