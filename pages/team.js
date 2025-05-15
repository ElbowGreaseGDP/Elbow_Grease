// pages/team.js
import ScrollSection from "../components/ScrollSection";
import TeamMemberCard from "../components/TeamMemberCard";

// Photo filenames are now just the image name, since on the team page
// they live in docs/team/<filename>
const members = [
    {
        name: "Jude Abou-chakra",
        role: "Team Member",
        photo: "jude.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/jude-abou-chakra",
            github: "https://github.com/jude-abou-chakra",
            email: "jude.abou-chakra@example.com",
        },
    },
    {
        name: "Gaby Boakye-Ansah",
        role: "Team Member",
        photo: "gaby.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/gaby-boakye-ansah",
            github: "https://github.com/gaby-boakye-ansah",
            email: "gaby.boa@example.com",
        },
    },
    {
        name: "Sam Clark",
        role: "Team Member",
        photo: "sam.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/sam-clark",
            github: "https://github.com/sam-clark",
            email: "sam.clark@example.com",
        },
    },
    {
        name: "Millie Cooper",
        role: "Team Member",
        photo: "millie.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/millie-cooper",
            github: "https://github.com/millie-cooper",
            email: "millie.cooper@example.com",
        },
    },
    {
        name: "Rebecca Robertson",
        role: "Team Member",
        photo: "rebecca.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/rebecca-robertson",
            github: "https://github.com/rebecca-robertson",
            email: "rebecca.robertson@example.com",
        },
    },
    {
        name: "Daniel Rokadia",
        role: "Team Member",
        photo: "daniel.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/daniel-rokadia",
            github: "https://github.com/daniel-rokadia",
            email: "daniel.rokadia@example.com",
        },
    },
];

export default function Team() {
    return (
        <main className="pt-20 px-4">
            <h2 className="text-4xl font-bold text-center text-brand-primary mb-10 font-tech">
                Meet the Team
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {members.map((m) => (
                    <ScrollSection key={m.name}>
                        <TeamMemberCard {...m} />
                    </ScrollSection>
                ))}
            </div>
        </main>
    );
}
