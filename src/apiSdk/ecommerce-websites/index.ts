import axios from 'axios';
import queryString from 'query-string';
import { EcommerceWebsiteInterface, EcommerceWebsiteGetQueryInterface } from 'interfaces/ecommerce-website';
import { GetQueryInterface } from '../../interfaces';

export const getEcommerceWebsites = async (query?: EcommerceWebsiteGetQueryInterface) => {
  const response = await axios.get(`/api/ecommerce-websites${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEcommerceWebsite = async (ecommerceWebsite: EcommerceWebsiteInterface) => {
  const response = await axios.post('/api/ecommerce-websites', ecommerceWebsite);
  return response.data;
};

export const updateEcommerceWebsiteById = async (id: string, ecommerceWebsite: EcommerceWebsiteInterface) => {
  const response = await axios.put(`/api/ecommerce-websites/${id}`, ecommerceWebsite);
  return response.data;
};

export const getEcommerceWebsiteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ecommerce-websites/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEcommerceWebsiteById = async (id: string) => {
  const response = await axios.delete(`/api/ecommerce-websites/${id}`);
  return response.data;
};
