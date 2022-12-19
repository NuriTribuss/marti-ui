// search.js
import dayjs from 'dayjs'

export default {
    default : {
        "sf": "2", 
        "date": { 
            "start": dayjs().add(5, 'day').format('YYYY-MM-DD'),
            "end": dayjs().add(30, 'day').format('YYYY-MM-DD')
        }, 
        "departure": {
            "code": "", 
            "name": "Beliebig" 
        }, 
        "destination": { 
            "type": "",
            "code": "" 
        }, 
        "adults": "2", 
        "children" : [],
        "keywordList" : [],
        "duration": "7",
    },
    
    set(obj){
        
    },
    get(){
        let url = new URLSearchParams(window.location.search);
        let obj = url.get('f');
        if(obj == null){
            return this.default
        }

        return JSON.parse(obj);
        
    }
}
