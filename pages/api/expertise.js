const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am an expert Full Stack Developer specializing in modern application development using C#, .NET Core (including Minimal APIs and MVC), and React.js with foundational JavaScript My data expertise covers relational databases like MSSQL (mastering TSQL, Entity Framework, and high-performance Dapper) alongside PostgreSQL and MongoDB, and includes performance optimization with Redis for cache My architectural mastery spans Modular Monolith, Microservices (using gRPC for high-performance communication), Clean Architecture, and N-Tier, leveraging CQRS with MediatR, the Repository Design Pattern, and Event-Driven Design via RabbitMQ/MassTransit I ensure security with ASP.NET Core Identity and handle deployment of cloud-native solutions using Docker and a range of Azure Services.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Web Development',
        desc: 'I am a skilled Frontend Developer specializing in creating highly responsive static websites using HTML5, JavaScript, and CSS3, with expertise in modern frameworks like React.js and utility/component libraries such as Tailwind CSS and Bootstrap.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
