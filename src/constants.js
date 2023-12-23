export const name = 'csgeek.';

export const experiences = [
    {
        'company': 'SwitchOn',
        'role': 'Software Development Engineer',
        'duration': 'Nov 2023 - Present',
        'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKWeYKoLW0mv_sIKhp-bfzbTfeQg4y_H9zg_QoTaf_VvpHkQ0lHS9KbHDKq7GHuKfwtE&usqp=CAU',
        'points': [
            'WIP ⚙️',
            'WIP 📈',
            'WIP 📚'
        ],
        'url': 'https://switchon.io/',
    },
    {
        'company': 'EdYoda',
        'role': 'Software Development Engineer - II',
        'duration': 'May 2023 - Nov 2023',
        'logo': 'https://www.edyoda.com/favicon.ico',
        'points': [
            'Building EdYoda App from scratch using React-Native 📱.',
            'Debugged critical issue related to celery configuration on production which caused email delivery failure 🐛.',
            'Pivoted the product with data-driven analysis and migrated back to Orders API which optimized Conversion Rates by 3% 📈.',
            'Building a CI / CD pipeline from scratch with Jenkins to automate deployment process ⚙️.',
        ],
        'url': 'https://www.edyoda.com/',
    },
    {
        'company': 'EdYoda',
        'role': 'Software Developer Intern',
        'duration': 'July 2022 - April 2023',
        'logo': 'https://www.edyoda.com/favicon.ico',
        'points': [
            'Led a project initiative and revamped the existing site to a subscription based model which added a new stream of revenue for the company. 🧑‍💻',
            'Revised search functionality to display top content first by configuring search indexes on AWS Elasticsearch. 📈',
            'Integrated Discourse Forum in our platform using Docker and implemented SSO. Configured application with AWS SES to send emails. 🐳',
        ],
        'url': 'https://www.edyoda.com/',
    },
    {
        'company': 'Coding Club, IIT Guwahati',
        'role': 'Student Mentor',
        'duration': 'Dec 2022 - Jan 2023',
        'logo': 'https://yt3.googleusercontent.com/3Mf2jqOywHpFYAaPAOK7yReuUWyUrVtu-SMvXk5ra1IamiD4EbVATHwaDoU2FIbKMHkrOsxx=s176-c-k-c0x00ffffff-no-rj',
        'points': [
            'Mentored 20+ students and helped them to get started with FOSS. ❤️',
            'Maintained open source projects on Github and mentored students to get a good grasp on technologies like Git, GitHub, MERN. 📚',
        ],
        'url': 'https://www.codepeak.tech/',
    },
    {
        'company': 'Hack Club VIIT',
        'role': 'Community Lead',
        'duration': 'Jun 2022 - Jan 2023',
        'logo': 'https://assets.hackclub.com/icon-rounded.svg',
        'points': [
            'Collaborated with 15+ Hackclub leads across the Asia-Pacific region and introduced suitable ideas to our community. 🌏',
            'Hosted a Workshop on Back-end development in college with 100+ attendees. 📚',
        ],
        'url': 'https://hackclub.com/',
    },
    {
        'company': 'Vignan\'s IIT ACM Student Chapter',
        'role': 'Web Developer',
        'duration': 'Oct 2021 - Nov 2022',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/600px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png?20180220110824',
        'points': [
            'Design and deliver the UI/UX for the official ACM-VIIT website. 🎨',
            'Collaborated with the team and organized Hackathons, and mentored 200+ students. 🤝',
            'Organized seminars for 300+ students and gave insights on Web3.0, Networking and Competitive Programming. 📢',
        ],
        'url': 'https://vignanvizag.acm.org/',
    }
]


export const projects = [
    {
        'name': "Ambulance Tracker",
        'description':
            "This web app assists hospitals by bridging the communication gap between Ambulance driver and hospital management especially during emergency cases.",
        'tags': [
            {
                'name': "react",
                'color': "text-blue-500",
            },
            {
                'name': "node",
                'color': "text-green-500",
            },
            {
                'name': "websockets",
                'color': "text-pink-500",
            },
        ],
        'image': 'https://opengraph.githubassets.com/ncds33asdhn12dkljipp9/csgeeek/Ambulance-tracker',
        'source_code_link': "https://github.com/csgeeek/Ambulance-tracker",
    },
    {
        'name': "Scan to Healthify",
        'description':
            "This project identifies harmful ingredients in food products by capturing UPC of the barcode with the help of EasyOCR module and then displays the results. ",
        'tags': [
            {
                'name': "react",
                'color': "text-blue-500",
            },
            {
                'name': "fast api",
                'color': "text-green-500",
            },
            {
                'name': "firebase",
                'color': "text-pink-500",
            },
        ],
        'image': 'https://opengraph.githubassets.com/ncds33asdhn12dkljipp9/csgeeek/scan-to-healthify/',
        'source_code_link': "https://github.com/csgeeek/scan-to-healthify/",
    },
    {
        'name': "Student Profile System",
        'description':
            "This project is built in Django and uses MySQL as the database. This webapp provides a central platform to monitor and track Colleges and their respective student profiles.",
        'tags': [
            {
                'name': "django",
                'color': "text-blue-500",
            },
            {
                'name': "mysql",
                'color': "text-green-500",
            },
            {
                'name': "bootstrap",
                'color': "text-pink-500",
            },
        ],
        'image': 'https://opengraph.githubassets.com/ncds33asdhn12dkljipp9/csgeeek/student-profile-system',
        'source_code_link': "https://github.com/csgeeek/student-profile-system",
    },
];

export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'web.png',
    },
    {
        title: "Software Engineer",
        icon: 'web.png',
    },
    {
        title: "Gamer Forever",
        icon: 'web.png',
    },
];

export const companyColors = {
    'EdYoda': 'text-blue-500',
    'Coding Club, IIT Guwahati': 'text-purple-500',
    'Hack Club VIIT': 'text-red-500',
    'Vignan\'s IIT ACM Student Chapter': 'text-blue-500',
};

export const EMAIL_JS_SERVICE_ID = 'service_wytsw9t';
export const EMAIL_JS_TEMPLATE_ID = 'template_wviporf';
export const EMAIL_JS_PUBLIC_KEY = 'V-btpJRF5B_F6e_Cy';