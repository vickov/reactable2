//const APIURL = 'https://jsonplaceholder.typicode.com/';
const APIURL = 'http://localhost:5000/';
const axios = require('axios');
 export const fetchData = async () => {
    return async () => axios(
      APIURL + `posts`,
    );
    //let res = JSON.parse(result.data);
  }; 
const getToDos = async () => {
    let res = await axios.get(`${APIURL}`);
    let data = res.data;
    return data;
}
//export const fetchData = () => (`APIURLposts`);
export const addContact = (data) => axios.post(`${APIURL}/contacts`, data);
export const editContact = (data) => axios.put(`${APIURL}/contacts/${data.id}`, data);
export const deleteContact = (id) => axios.delete(`${APIURL}/contacts/${id}`);

export const loadPosts = async () =>
  await fetch(APIURL+ "posts")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export const loadUsers = async () =>
    await fetch(APIURL + "users")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  

export const updateUsers  = async(id, column, value)  =>
    { 

     var obj = {};
     obj[column] = value;

     const settings = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(obj)
    };
   
    
      await fetch(APIURL + "users/" + id , settings)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.body)

        }

export const insertUser  = async(data)  =>
    { 
     var obj = {
      "firstname": data.firstName,
      "lastname": data.lastName,
      "picture": "http://placehold.it/32x32",
      "eyeColor": "brown",
      "age": 29,
      "company": "CRUSTATIA",
      "email": "leona.fowler@crustatia.io",
      "phone": "+1 (935) 574-2524",
      "address": "996 Berry Street, Soham, Tennessee, 2244",
      "about": "About",
      "registered": "2014-06-17T09:29:51.887Z",
      "additionalProp1": "{}"
  }


     const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(obj)
    };
   
    
      await fetch(APIURL + "users/" , settings)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.body)

        }

     

export default getToDos;