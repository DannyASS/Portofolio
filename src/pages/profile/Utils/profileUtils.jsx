import { Email, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material"

const DataSkills = [
    {
        name : '.Net',
        src : "/image/Net_logo.png",
        desc : "kerangka perangkat lunak komputer terkelola yang gratis dan bersumber terbuka untuk sistem operasi Windows, Linux, dan macOS."
    },
    {
        name : 'React Js',
        src : "/image/React_log.png",
        desc : "libray JavaScript yang digunakan untuk membangun user interface yang interaktif berbasis component'"
    },
    {
        name : 'Cosmos DB',
        src : "/image/Cosmos_logo.png",
        desc : "layanan database multi-model yang didistribusikan secara global yang ditawarkan oleh Microsoft."
    },
    {
        name : 'SQL Server',
        src : "/image/Sql_server_logo.png",
        desc : "sebuah sistem manajemen basis data relasional produk Microsoft."
    },
    {
        name : 'Angular Js',
        src : "/image/Angular_logo.png",
        desc : "kerangka kerja web berbasis JavaScript sumber terbuka dan gratis untuk mengembangkan aplikasi satu halaman."
    }
]

const DataSekolah = [
    {
        name : 'SD YPPSB 3',
        jurusan : '-'
    },
    {
        name : 'SMP YPPSB',
        jurusan : '-'
    },
    {
        name : 'SMA Negeri 2 Sangatta Utara',
        jurusan : 'IPA'
    },
    {
        name : 'Institut Teknologi Kalimantan',
        jurusan : 'Teknik Elektro'
    },

]

const DataPenghargaan = [
    {
        name : 'Juara 2 Kontes Robot Cerdas',
        tingkat : 'Provinsi'
    },
    {
        name : 'Peserta Kontes Robot Sumo',
        tingkat : 'Nasional'
    },
    {
        name : 'Peserta Kontes Kapal Cepat Tak Berawak Nasional',
        tingkat : 'Nasional'
    }
]

const DataOrganisasi = [
    {
        name : 'Persekutuan Mahasiswa Kristen',
        tingkat : 'Mahasiswa'
    },
    {
        name : 'Osis SMA Negeri 2',
        tingkat : 'SMA'
    }
]

const DataMedSos = [
    {
        name : 'Instagram',
        icon : <Instagram />,
        akun : '@dannyanthoniyo',
        link : 'https://www.instagram.com/dannyanthoniyo/'
    },
    {
        name : 'LinkedIn',
        icon : <LinkedIn />,
        akun : 'dannyas21',
        link : 'https://www.linkedin.com/in/dannyas21/'
    },
    {
        name : 'WhatsApp',
        icon : <WhatsApp />,
        akun : '+6282254085005',
        link : 'https://wa.me/6282254085005'
    },
    {
        name : 'Email',
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