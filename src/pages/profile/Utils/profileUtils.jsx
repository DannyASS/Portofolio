import { Email, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material"
import { LangConfig } from "../../../language/langConfig"

const ls = LangConfig().profile

const DataSkills = [
    {
        name : '.Net',
        src : "/image/Net_logo.png",
        desc : ls.dataSkills.desc1
    },
    {
        name : 'React Js',
        src : "/image/React_log.png",
        desc : ls.dataSkills.desc2
    },
    {
        name : 'Cosmos DB',
        src : "/image/Cosmos_logo.png",
        desc : ls.dataSkills.desc3
    },
    {
        name : 'SQL Server',
        src : "/image/Sql_server_logo.png",
        desc : ls.dataSkills.desc4
    },
    {
        name : 'Angular Js',
        src : "/image/Angular_logo.png",
        desc : ls.dataSkills.desc5
    }
]

const DataSekolah = [
    {
        name : ls.dataSekolah.name1,
        jurusan : '-'
    },
    {
        name : ls.dataSekolah.name2,
        jurusan : '-'
    },
    {
        name : ls.dataSekolah.name3,
        jurusan : 'IPA'
    },
    {
        name : ls.dataSekolah.name4,
        jurusan : ls.dataSekolah.desc1
    },

]

const DataPenghargaan = [
    {
        name : ls.dataPenghargaan.name1,
        tingkat : ls.dataPenghargaan.tingkat2,
        desc: ls.dataPenghargaan.desc1
    },
    {
        name : ls.dataPenghargaan.name2,
        tingkat : ls.dataPenghargaan.tingkat1,
        desc: ls.dataPenghargaan.desc2
    },
    {
        name : ls.dataPenghargaan.name3,
        tingkat : ls.dataPenghargaan.tingkat1,
        desc: ls.dataPenghargaan.desc3
    }
]

const DataOrganisasi = [
    {
        name : ls.dataOrganisasi.name1,
        tingkat : ls.dataOrganisasi.tingkat1
    },
    {
        name : ls.dataOrganisasi.name2,
        tingkat : ls.dataOrganisasi.tingkat12
    }
]

const DataMedSos = [
    {
        name : ls.medSos.name1,
        icon : <Instagram />,
        akun : '@dannyanthoniyo',
        link : 'https://www.instagram.com/dannyanthoniyo/'
    },
    {
        name : ls.medSos.name2,
        icon : <LinkedIn />,
        akun : 'dannyas21',
        link : 'https://www.linkedin.com/in/dannyas21/'
    },
    // {
    //     name : ls.medSos.name3,
    //     icon : <WhatsApp />,
    //     akun : '+6282254085005',
    //     link : 'https://wa.me/6282254085005'
    // },
    {
        name : ls.medSos.name4,
        icon : <Email />,
        akun : 'Dannyanthoniyo@gmail.com',
        link : ''
    }
]

export {
    DataSkills,
    DataSekolah,
    DataPenghargaan,
    DataOrganisasi,
    DataMedSos
}