<template>
  <BreadCrumb v-if="record" :title="record.translate[0].name" :steps="['Page',record.translate[0].name]" />
  <section class="about-area padding-bottom-90px my-5 overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card form-box my-3">
            <div class="card-body py-5"  v-if="record"   v-html="record.translate[0].content">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionHelpBlock />
</template>

<script>

export default {
  props :['id','locale'],
  data() {
    return {
      record : null
    }
  },
  methods : {
    getPage(){
       let vue = this;
       $fetch("/api/content/page/"+this.id).then(function(result){
         
          if(!result.status) {
            return false;
          }
          vue.record = result.data;
      })
    }
  },
  
  mounted(){
    this.getPage();
  }
}
</script>

