<template>
<section class="breadcrumb-top-bar ">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-list breadcrumb-top-list">
                    <ul class="list-items bg-transparent radius-none p-0 font-size-13" style="list-style:none">
                        <li class="pe-1" >{{ $t('common.search.result')}} ></li>
                        <li class="px-1" v-for="(item,index) in step" :key="index">{{ item  || '' }} <span v-if="index+1 != step.length">></span></li>
                    </ul>
                </div><!-- end breadcrumb-list -->
            </div><!-- end col-lg-12 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section>
</template>
<script>

export default ({
    props : ['step']
})
</script>
