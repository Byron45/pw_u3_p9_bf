import axios from "axios";

const consumirAPI = async () => {

    const repuesta = await axios.get('https://yesno.wtf/api').then(r => r.data)
    console.log(repuesta);
    return repuesta;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}