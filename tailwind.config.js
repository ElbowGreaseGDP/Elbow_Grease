module.exports = {
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                tech: ["var(--font-tech)"],
            },
            colors: {
                brand: {
                    primary: "#7f84db",
                    secondary: "#8b84d7",
                    warmgray: "#d7d2cb",
                },
            },
        },
    },
    plugins: [],
};
