/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        "mfb/templates": { url: "/", static: true },
        src: { url: "/src" },
        static: { url: "/static", static: true },
    },
    plugins: [
        /* snowpack plugins: */
        "@snowpack/plugin-vue",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-sass",
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
        open: "none",
        port: 8083,
    },
    buildOptions: {
        /* ... */
    },
};
