

const login=async()=>{
let email_user=email.value;
let password_user=password.value;
const data={
    username:email_user,
    password:password_user,
}
// convert data to json
const json_data=JSON.stringify(data);
console.log(json_data);

const init = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
   body:json_data
}

const api='https://dummyjson.com/auth/login'
const res=await fetch(api,init);
console.log(res);
// check--response
console.log(res.status)
}


