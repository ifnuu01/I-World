
function About() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-main-light">About I World</h1>
            <p className="mb-4">
                I World is a web application that provides information about countries around the world.
                You can search for countries, filter them by region, and view detailed information about each country.
            </p>
            <p>
                This project is built using React, TypeScript, and Tailwind CSS. It utilizes various APIs to fetch country data.
            </p>

            <h1 className="text-3xl font-bold mb-4 mt-4 text-main-light">Tools and Technologies Use</h1>
            <ul className="list-disc pl-6">
                <li>
                    <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        Rest Countries API
                    </a>
                </li>
                <li>
                    <a href="https://iconify.design/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        Iconify Icons
                    </a>
                </li>
                <li>
                    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        Vite
                    </a>
                </li>
                <li>
                    <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        React Router
                    </a>
                </li>
                <li>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        Tailwind CSS
                    </a>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        TypeScript
                    </a>
                </li>
                <li>
                    <a href="https://tanstack.com/" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                        TanStack Query
                    </a>
                </li>
            </ul>

            <h1 className="text-3xl font-bold mb-4 mt-4 text-main-light">GitHub Repository</h1>
            <p className="mb-4">
                You can find the source code for this project on GitHub :
                <a href="https://github.com/ifnuu01/I-World" target="_blank" rel="noopener noreferrer" className="text-main-light hover:underline">
                    GitHub Repository
                </a>
            </p>
        </div>
    )
}

export default About