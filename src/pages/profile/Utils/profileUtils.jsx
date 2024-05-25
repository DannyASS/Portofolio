import { Email, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material"

const DataSkills = [
    {
        name : '.Net',
        src : "/image/Net_logo.png",
        desc : "Project : Learning Development System Astra Honda motor, Pembimbing Angkatan Binus"
    },
    {
        name : 'React Js',
        src : "/image/React_log.png",
        desc : "Project : Pembimbing Angkatan Binus, Brian AYO SRC "
    },
    {
        name : 'Cosmos DB',
        src : "/image/Cosmos_logo.png",
        desc : "Project : Pembimbing Angkatan"
    },
    {
        name : 'SQL Server',
        src : "/image/Sql_server_logo.png",
        desc : "Project : Pembimbing Angkatan"
    },
    {
        name : 'Angular Js',
        src : "/image/Angular_logo.png",
        desc : "Project : Ya-Hala Ayo SRC Jordan"
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
        tingkat : 'Provinsi',
        desc: 'Perlombaan Line Follower yang diadakan oleh Politeknik Negeri Samarinda'
    },
    {
        name : 'Peserta Kontes Robot Sumo',
        tingkat : 'Nasional',
        desc: 'Perlombaan Robot Sumo yang diadakan oleh UGM'
    },
    {
        name : 'Peserta Kontes Kapal Cepat Tak Berawak Nasional',
        tingkat : 'Nasional',
        desc: 'Perlombaan Kapal Cepat Tak Berawak Nasional yang diadakan tiap tahun oleh Balai Pengembangan Talenta Indonesia-Pusat Prestasi Nasional-Kementerian Pendidikan dan Kebudayaan Indonesia cabang autonomous surface vehicle yang di adakan UMM '
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