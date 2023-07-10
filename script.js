// fetch('https://dummyjson.com/test', {
//   method: 'GET', /* or POST/PUT/PATCH/DELETE */
// })
// .then(res => res.json())
// .then(data => console.log(data));
/*
{
  status: 'ok',
  method: 'GET', // or POST/PUT/PATCH/DELETE
}
*/
// test--connection
const response_connection = async () => {
  const api = 'https://dummyjson.com/test';
  const res = await fetch(api);
  console.log(res.status);
  if (res.status == 200) {
    console.log("good connection")
  }
  else {
    console.log("bad connection")
  }
}
response_connection();
let user = [];

const response = async () => {
  const api = 'https://dummyjson.com/users'
  const res = await fetch(api);
  user = await res.json();
  const new_user = user.users
  console.log(user);
  let user_list = new_user.forEach(({ id, firstName, email, lastName, phone
    , age

  }) => {
    
    
    table_row.innerHTML+=   
    `

    <tr class="table_row">
                    
   
    <td>          ${firstName} ${lastName}    </td>
    <td>          ${email}    </td>
    <td>          ${age}     </td>
    <td>          ${phone}     </td>
    </tr>
    `
  })

}
response();

