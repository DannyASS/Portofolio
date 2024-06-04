const projectData = [
    {
        name : "Learning Development System",
        desc : "By using .Net freamwork (native) technology create a system that is responsible for empowering employee growth and developing their knowledge, skills, and abilities to drive better business performance at PT Astra Honda Motor.",
        gambar : '/image/LDSIcon.png',
        at : 'PT Astra Honda Motor',
        posisi : ['Fullstack', 'Support'],
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
        desc : "Web development that can help academic supervisors in monitoring and helping students who have obstacles that cause student grades and achievements to be hampered at Bina Nusantara University.",
        gambar : '/image/PAIcon.png',
        at : 'Universitas Bina Nusantara',
        posisi : ['Fullstack'],
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
        desc : "Create and add Arabic language features to the system. AYO by SRC is a digital ecosystem that connects wholesale partners, grocery stores, and customers as a digital solution for an easier and more convenient shopping experience.",
        gambar : '/image/AYOIcon.png',
        at : 'PT HM Sampoerna Tbk',
        posisi : ['Fullstack'],
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
        name : "My Cv",
        desc : "Web static untuk cv dan implementasi skill",
        gambar : '/image/LDSIcon.png',
        at : '-',
        posisi : ['Frontend'],
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
        name : 'Prefesional Project',
        gambar : '/image/LDSIcon.png',
        data : projectData
    },
    {
        name : 'Personal Project',
        gambar : '/image/PAIcon.png',
        data : personalProject
    }
]


export {
    projectData,
    dataMainProject
}