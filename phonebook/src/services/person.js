import axios from "axios";
const baseUrl = "http://localhost:3001/person";

const getAll = () =>{
    axios.get(baseUrl).then(response => {return response.data})
}

const create = (newObject)=>{
    axios.post(baseUrl, newObject).then(response => {return response.data})
}

const update = (id, newObject)=>{
    axios.get(`${baseUrl}/ ${id}`, newObject).then(response => {return response.data})
}

const remove = (id, newObject)=>{
    axios.delete(`${baseUrl}/ ${id}`, newObject).then(response => {return response.data})
}


export default {getAll,create,update, remove}