import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: "./public/index.html",
    },
    output: {
        distPath: {
            root: "build",
        },
        sourceMap: {
            css: false,
            js: "source-map",
        },
    },
});
