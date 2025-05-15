// components/TeamMemberCard.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function TeamMemberCard({ name, role, photo, socials }) {
    return (
        <div
            tabIndex={0}
            className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center
                 cursor-pointer hover:shadow-2xl focus-within:shadow-2xl transition-shadow duration-300"
        >
            <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-brand-primary mb-1 font-tech">
                {name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{role}</p>

            <div
                className="flex space-x-4 mt-auto
                   opacity-0 scale-75
                   group-hover:opacity-100 group-focus-within:opacity-100
                   group-hover:scale-100   group-focus-within:scale-100
                   transition-all duration-300"
            >
                {socials.linkedin && (
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-brand-primary text-2xl transition-colors duration-200
                       hover:text-pink-500 focus:text-pink-500 active:text-pink-500"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {socials.github && (
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-brand-primary text-2xl transition-colors duration-200
                       hover:text-pink-500 focus:text-pink-500 active:text-pink-500"
                    >
                        <FaGithub />
                    </a>
                )}
                {socials.email && (
                    <a
                        href={`mailto:${socials.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-brand-primary text-2xl transition-colors duration-200
                       hover:text-pink-500 focus:text-pink-500 active:text-pink-500"
                    >
                        <FaEnvelope />
                    </a>
                )}
            </div>
        </div>
    );
}
