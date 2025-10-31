const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Internation Vision University',
                degree: 'BSC, IT ENGINEER',
                detail: "Bachelor's Degree in Computer Science Engineering.",
                year: '2015-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Senior Software Engineer',
                role: 'Senior Software Engineer',
                url: 'https://www.halkinsurance.com.mk/',
                desc: 'Designed, developed, and maintained enterprise-level web applications using .NET Core, ASP.NET MVC, and RESTful APIs, improving system performance and reliability.',
                desc1:'Led backend development for several critical insurance business modules, ensuring high scalability and maintainability using clean code and SOLID principles.',
                desc2:'Optimized SQL Server queries and Entity Framework usage to enhance application performance and data consistency.',
                desc3:'Participated in architecture discussions, code reviews, and mentoring junior developers to ensure high-quality code and team growth.',
                year: '04/2019 - 05/2024',
                location: 'Skopje, North Macedonia'
            },
             {
                id: 1,
                title: 'IT Engineer',
                role: 'IT Engineer',
                url: 'https://infosoftsystems.mk/',
                year: '09/2025 - Current',
                location: 'Skopje, North Macedonia'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
