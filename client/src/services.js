import axios from "axios";
const crud = {};

crud.actividadesConsultar = async (data) => {
  console.log(data);
  const url = "/api/?type=" + data;
  const res = await axios.get(url)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

export default crud
