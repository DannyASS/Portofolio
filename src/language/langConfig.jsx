import Idn from './id.json'
import Eng from'./en.json'
import Jpn from './jpn.json'

const language = ["indonesia", "Inggris"];

const dataLangue = [
    {
        'id' : '1',
        'code' : 'id',
        'data' : Idn,
        'name' : 'Indonesia'
    },
    {
        'id' : '2',
        'code' : 'en',
        'data' : Eng,
        'name' : 'Inggris'
    },
    {
        'id' : '1',
        'code' : 'jpn',
        'data' : Jpn,
        'name' : 'Jepang'
    },

];

const LangConfig = () => {
    const bahasa = localStorage.getItem("locale");
    console.log(bahasa)
    return dataLangue.find((Item) => Item.code == (bahasa?? 'id')).data;
}


export {
    language,
    dataLangue,
    LangConfig
}