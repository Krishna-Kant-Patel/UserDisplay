import axios from 'axios';

export async function getUserData(setData){
    try {
        const res = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
        console.log(res.data);
        setData(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}
