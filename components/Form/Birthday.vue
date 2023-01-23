<template>
     <div class="row m-0">
        
        <div class="col-4 col-md-4 p-0 pe-1 position-relative">
            <select @change="updateDate()" v-model="selectedDay" ref="dayPicker"  :class="inputClass"   class="form-select form-control ps-3" :value="splitDate.day">
                <option value="">{{dayText}}</option>
                <option v-for="(day,index) in days" :key="index">{{day}}</option>
            </select>
        </div>
        <div class="col-4 col-md-4 p-0 pe-1 position-relative">
            <select @change="updateDate()" v-model="selectedMonth" ref="monthPicker" :class="inputClass"  class="form-select form-control ps-3"  :value="splitDate.month" >
                <option value="">{{monthText}}</option>
                <option v-for="(month,index) in months" :key="index">{{month}}</option>
            </select>
        </div>
        <div class="col-4 col-md-4 p-0 position-relative">
            <select @change="updateDate()" v-model="selectedYear" ref="yearPicker" :class="inputClass" class="form-select form-control ps-3"  :value="splitDate.year">
                <option value="">{{yearText}}</option>
                <option v-for="(year,index) in years" :key="index">{{year}}</option>
            </select>
        </div>
    </div>
</template>


<script> 

export default ({

    props: ['value','children','item_id','max'],
    data: function () {
        return {
            days : [],

            dayText : this.$t('user.profile.birthday.day'),
            years :[],
            yearText : this.$t('user.profile.birthday.year'),
            months: [],
            monthText : this.$t('user.profile.birthday.month'),
            seperator : '-',
            selectText : '',
            inputClass : 'form-control form-marti',
            selectedDay:null,
            selectedMonth:null,
            selectedYear:null,
        }
    },
    methods : {
         range : function(start, end) {
             var count = end  - start;
             return Array.apply(0, Array(count))
               .map((element, index) => (index + start) < 10 ? ('0'+ (index+start)) : (index+start));
         }, 
         
         updateDate : function() {
             
            // const dayValue      = this.$refs.dayPicker.value;
            // const monthValue    = this.$refs.monthPicker.value;
            // const yearValue     = this.$refs.yearPicker.value;
            const dayValue      = this.selectedDay;
            const monthValue    = this.selectedMonth;
            const yearValue     = this.selectedYear;
            var maxYaers = Math.max.apply(Math,this.years);
            
            if(yearValue==maxYaers)
            {
                var currentMonth = new Date().getMonth() + 1; //getMonth return 0-11
                
                this.months = this.range(1,currentMonth+1);
                var currentDay = new Date().getDate();
                    console.log(currentDay);
                    console.log(currentMonth);
                    console.log(monthValue);
                 if(parseInt(monthValue) === parseInt(currentMonth))
                 {
                     
                     this.days = this.range(1,parseInt(currentDay)+1);
                 }
                 else
                 {
                     this.days = this.range(1,32);
                 }
                 
            }
             else
             {
                 this.months = this.range(1,13);
                 this.days = this.range(1,32);
             }
    
            
            if(dayValue != '' && yearValue != '' && monthValue != ''){
                this.$emit('input', `${yearValue}${this.seperator}${monthValue}${this.seperator}${dayValue}`);
                //$("#"+this.item_id+'_message').hide();
            }
           
         }
    },
     
    computed: {
        splitDate() {
            const splitValueString = this.value.split(this.seperator);
          
            return {
                day :   splitValueString[2] || "",
                month:  splitValueString[1] || "",
                year:   splitValueString[0] || ""
            }
        },
    },

    /*mounted : function(){
        
         var maxYear    = new Date().getFullYear(); 
         
         var year = this.children ? maxYear - 17 : 1940; //????????
         
         if(typeof this.max !== 'undefined' && this.max > 0 ){
             maxYear = maxYear - this.max +1;
             year    = maxYear - 1 ;
         }
         
         this.days      = this.range(1,32);
         this.years     = this.range(year,maxYear);
         this.months    = this.range(1,13);
     },*/
     mounted : function(){
        var maxYear = new Date().getFullYear(); 

        var year = this.children ? maxYear - 17 : 1940; 

        if(typeof this.max !== 'undefined' && this.max > 0 ){
            maxYear = maxYear - this.max;
            //year    = tmpMaxYear - 1 ;
        }
        
        this.days      = this.range(1,32);
        this.years     = this.range(year,maxYear+1);
        this.months    = this.range(1,13);
    },
     
 
})
</script>