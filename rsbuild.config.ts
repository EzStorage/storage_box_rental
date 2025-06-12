import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginReactRouter } from "rsbuild-plugin-react-router";

export default defineConfig({
    plugins: [pluginReact(), pluginReactRouter()],
    html: {
        template: "./public/index.html",
    },
    output: {
        distPath: {
            root: "dist",
        },
        sourceMap: {
            css: false,
            js: "source-map",
        },
    },
});
