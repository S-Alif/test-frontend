import axios from 'axios';
import { errorToast, successToast } from './throw-msg';

const endpoint = "https://test-server-30md.onrender.com/fashion"

export const getSiteData = async () => {
  try {
    let result = await axios.get(endpoint + "/web-data")
    if(result.data['status'] == 1){
      return result.data['data']
    }
    else{
      errorToast("please check your connection")
      return 0
    }
  } catch (error) {
    errorToast("something went wrong")
  }
}

export const showProductByCategory = async (category, limit, page, views) => {
  try {
    let result = await axios.get(`${endpoint}/show-product-category/${category}/${limit}/${page}/${views}`)
    if (result.data['status'] == 1) {
      return result.data
    }
    else {
      errorToast("please check your connection")
      return 0
    }
  } catch (error) {
    errorToast("something went wrong")
  }
}

// get single product
export const showProductById = async (category, id) => {
  try {
    let result = await axios.get(`${endpoint}/show-product/${category}/${id}`)
    if (result.data['status'] == 1) {
      return result.data['data']
    }
    else {
      errorToast("product not found")
      return 0
    }
  } catch (error) {
    errorToast("something went wrong")
  }
}