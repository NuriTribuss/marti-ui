

const config = useRuntimeConfig()

const auth = {
    username       : 'spa-marti', 
    password    : '123456Ab_', //'Spa2022_',
    token       : '',
}


export default defineEventHandler(async (event) => {

    if(auth.token == ''){
        await login();
     }

     
    let data = {};
    const cookies = parseCookies(event)

    
    let language = cookies.language || 'tr';
    let currency = cookies.currency|| 'TRY';

    const headers = {
        "X-Request-Language" : language.toString(),
        "X-Request-Currency" : currency.toString(),
        "Authorization" : "Bearer "+auth.token
    };
    

    const requestParams = {
        headers : headers,
        method : event.req.method
    };

    if(event.req.method == 'POST'){
        requestParams['body'] =  await readBody(event)
    }
    if (event.req.url.indexOf('.') > -1) {
        event.res.end();
        return;
    }

    data = await $fetch(`${config.BASE_URL}${event.req.url}`,requestParams);
    return data
})


const login = async () => {

    $fetch(`${config.BASE_URL}/api/auth/login`,{
        method : 'POST',
        body : auth
    }).then((r)=> {
      
        if(r.status){
            auth.token = r.data.token;
        }
    })

}