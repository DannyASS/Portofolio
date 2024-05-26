import { LangConfig } from "../../../language/langConfig"

const ls  = LangConfig();
const Berita = [
    {
        name : ls.dashboard.Berita1.name,
        deskripsi : ls.dashboard.Berita1.desc,
    },
    {
        name : ls.dashboard.Berita2.name,
        deskripsi : ls.dashboard.Berita2.desc
    },
    {
        name : ls.dashboard.Berita3.name,
        deskripsi : ls.dashboard.Berita3.desc
    }
]


export {
    Berita
}