const portfolio = [
    {
        id: 0,
        projectName: "Sarelle Tadelle - Star Company Macedonia",
        url: "https://www.starcompany.com.mk/",
        image: "projects/tadellesarelle.png",
        projectDetail: "Static website development for Tadelle and Sarelle Turkey partnerin North Macedonia.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "Javascript"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
