<!-- <template>
    <br />
    <br />
    <br />
    {{ searchObj }}
    <br />
    <br />
    <br />
    <br />
    {{ searchUrl }}
</template>
<script>
import search from '/utils/search'
export default ({
    components:{
        search,
    },
    data(){
        return{
            searchObj: null,
            searchUrl: null
        }
    },
    methods:{
        
    },
    mounted(){
        this.searchObj = search.getSearchObj(); 
        console.log(this.searchObj);
        this.searchUrl = search.jsonToUrl(this.searchObj);
        console.log(this.searchUrl);
    }

})
</script> -->


<script>
import search from '/utils/search';

export default {
    components: {
        search,
    },
    data() {
        return {
            searchObj: null,
            searchUrl: null,
        };
    },
    methods: {

    },
    mounted() {
        this.searchObj = search.getSearchObj();
        console.log(this.searchObj);
        this.searchUrl = search.jsonToUrl(this.searchObj);
        console.log(this.searchUrl);
    },
};
</script>