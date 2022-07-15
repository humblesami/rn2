import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://localhost:8069/api'
})

export default apiClient;