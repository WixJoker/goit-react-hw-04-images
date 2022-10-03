import axios from "axios";

const KEY = "25349801-93e8f8673522f488449b0dac2"

   export const fetchImg = async (page, search) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}
    &key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};