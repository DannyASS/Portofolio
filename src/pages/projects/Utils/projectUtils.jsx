import { LangConfig } from "../../../language/langConfig"

const ls = LangConfig().Project

const projectData = [
    {
        name : "Learning Development System",
        desc : ls.prev1.desc1,
        gambar : '/image/LDSIcon.png',
        at : 'PT Astra Honda Motor',
        lama : 'November 2022 - Juni 2024',
        posisi : [ls.prev1.posisi1, ls.prev1.posisi2],
        frameworks : [
            {
                name : ".Net",
                icon : "/image/Net_logo.png"
            },
            {
                name : "Jquery",
                icon : "/image/JqueryIcon.png"
            },
            {
                name : "Oracle",
                icon : "/image/OracleIcon.png"
            }
        ]
    },
    {
        name : "Pembimbing Angkatan",
        desc : ls.prev2.desc1,
        gambar : '/image/PAIcon.png',
        at : 'Universitas Bina Nusantara',
        lama : 'Mei 2023 - Agustus 2023',
        posisi : [ls.prev2.posisi1],
        frameworks : [
            {
                name : ".Net",
                icon : "/image/Net_logo.png"
            },
            {
                name : "React Typescript",
                icon : "/image/React_log.png"
            },
            {
                name : "Cosmos DB",
                icon : "/image/Cosmos_logo.png"
            },
            {
                name : "Azure Function",
                icon : "/image/AzureFunctionIcon.png"
            },
            {
                name : "SQL Server",
                icon : "/image/Sql_server_logo.png"
            }
        ]
    },
    {
        name : "Ya-Hala (AYO SRC)",
        desc : ls.prev3.desc1,
        gambar : '/image/AYOIcon.png',
        at : 'PT HM Sampoerna Tbk',
        lama : 'September 2023 - January 2024',
        posisi : [ls.prev3.posisi1],
        frameworks : [
            {
                name : "PHP",
                icon : "/image/PhpIcon.png"
            },
            {
                name : "Angular",
                icon : "/image/Angular_logo.png"
            },
            {
                name : "React Js",
                icon : "/image/React_log.png"
            },
            {
                name : "Mysql",
                icon : "/image/MysqlIcon.png"
            }
        ]
    }
]

const personalProject = [
    {
        name : "My Project Web CV",
        desc : ls.pers1.desc1,
        gambar : '/image/LDSIcon.png',
        at : '-',
        posisi : [ls.pers1.posisi1],
        frameworks : [
            {
                name : "React Js",
                icon : "/image/React_log.png"
            },
        ]   
    }
]

const dataMainProject = [
    {
        name : ls.label7,
        gambar : '/image/LDSIcon.png',
        data : projectData
    },
    {
        name : ls.label8,
        gambar : '/image/PAIcon.png',
        data : personalProject
    }
]


export {
    projectData,
    dataMainProject
}