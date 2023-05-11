<template>
    <div class="form-group">
        <button type="button" @click="isModal=!isModal" :data-bs-target="'#' + name + '-model'" class="text-start form-control d-block d-lg-none font-size-16"   :placeholder=objplaceholder>{{ selectedval || objplaceholder }}</button>
        <input type="text" autocomplete="off"  autofocus class="form-control d-none d-lg-block font-size-16" id="source_input" :value="selectedValue" :placeholder=objplaceholder data-bs-toggle="dropdown" />
        <Teleport to="body">
            <div class="offcanvas offcanvas-end" id="{{name}}-modal">
                <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">{{ objplaceholder }}</h5>
                <a
                    class="btn"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    ><i class="la la-close"></i
                ></a>
                </div>
                <div class="offcanvas-body">
                    <div  v-for="(item, index) in itemlist" :key="index" >
                    <div  v-if="item.length > 0 ">
                        <button class="btn my-2 mx-1 px-3 font-size-14 border " :class="{'theme-btn-orange' : selectedValue == item}" @click="select(item)">{{item}}</button>
                    </div>
                    </div>
                    <div class="offcanvas-footer ">
                        <a
                        class="btn btn-light"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >{{ $t('user.cancel')}}</a>
                    <a
                        class="btn theme-btn theme-btn-orange line-height-28 "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        @click="setValue()"
                    >OK</a>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script> 
export default ({

    props: ['selectedval','itemlist','name','objplaceholder'],
    data: function () {
        return {
            selectedValue:null,
        }
    },
    methods: {
        select(val){
            this.selectedValue = val;
        },
        setValue(){
            this.$emit('input-val',this.selectedValue)
        }
    },
    mounted : function(){
        if(this.selectedval != null){
            this.selectedValue = this.selectedval;
        }
    }
})
</script>
