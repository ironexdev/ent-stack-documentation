import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: "https://ironexdev.github.io",
    base: "ent-stack-documentation",

    integrations: [tailwind({
       configFile: "./tailwind.config.js",
    }), starlight({
        title: "ENT Stack Documentation",
        social: {
            github: "https://github.com/withastro/starlight",
        },
        sidebar: [
            {
                label: "ENT Stack",
                items: [
                    {
                        slug: "ent-stack",
                        title: "Introduction",
                    },
                    {
                        slug: "ent-stack/setup",
                        title: "Setup",
                    },
                    {
                        slug: "ent-stack/documentation",
                        title: "Documentation",
                    }
                ]
            }
        ],
        customCss: [
            "./src/styles/index.css"
        ]
    })],
});