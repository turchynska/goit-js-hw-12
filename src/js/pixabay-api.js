import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';


 
export async function getImages(value, page){
    const res = await axios.get('/api/',{
        params:{
            key: "44767579-3ee2796193c18f7fdbcfe2f8d",
            q: value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page
          }
        });
      
        return res.data;
      }
