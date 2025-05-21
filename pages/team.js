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
        },
    },
    {
        name: "Gaby Boakye-Ansah",
        role: "Team Member",
        photo: "gaby.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/gaby-boakye-ansah",
        },
    },
    {
        name: "Sam Clark",
        role: "Team Member",
        photo: "sam.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/sgdclark01",
        },
    },
    {
        name: "Millie Cooper",
        role: "Team Member",
        photo: "millie.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/milliecooper1901",
        },
    },
    {
        name: "Rebecca Robertson",
        role: "Team Member",
        photo: "rebecca.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/r-l-robertson",
        },
    },
    {
        name: "Daniel Rokadia",
        role: "Team Member",
        photo: "Dan.JPG",
        socials: {
            linkedin: "https://linkedin.com/in/daniel-rokadia",
            github: "https://github.com/danrokadia",
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
