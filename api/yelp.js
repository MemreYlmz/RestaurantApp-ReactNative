import axios from "axios";

export default axios.create({

    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer mEflHMw6r8EYfbOGsmQ8l5vP_opgD1MoL2TMMZSYnRdny8YftEhLiOFyCGp-56wemoLKbpfvZh08AelycnvbUszp6ObvX1XEtnkMrdFMMKecwyUMobQtEKQaYQA7ZXYx",
    }
})   