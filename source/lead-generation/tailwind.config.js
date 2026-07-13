/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./small-business-ai.html",
        "./automation-for-local-business.html",
        "./ai-sacramento.html",
        "./lead-generation.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./SimpleTenLandingPage.jsx",
        "./SimpleTenModernizationPage.jsx",
        "./SimpleTenLocalAutomationPage.jsx",
        "./SimpleTenSacramentoAiPage.jsx",
        "./SimpleTenLeadGenerationPage.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#14b8a6',
                accent: '#f59e0b',
                bg: '#0f1115',
            },
        },
    },
    plugins: [],
}
