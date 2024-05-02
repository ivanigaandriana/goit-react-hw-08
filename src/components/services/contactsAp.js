import axios from 'axios';
const contactsApi = axios.create({
    baseURL: 'https://662f708843b6a7dce30f7ef8.mockapi.io',
    headers: {},
    params: {},
});
export const apiRequest = async () => {
    const { data } = await contactsApi.get('/contacts');
    return data;
};
export const addContact = async (contact) => {
    const { data } = await contactsApi.post('/contacts', contact);
    return data;
}
export const deleteContact = async (contactId) => {
    const { data } = await contactsApi.delete(`/contacts/${contactId}`);
    return data;
};