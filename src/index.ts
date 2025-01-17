import * as fs from "fs";
import * as path from "path";
import { compile, Options as SassOptions } from "sass-embedded";
import type { PluginOption } from "vite";

export interface FileOptions {
    src: string;
    output: {
        path: string;
        filename: string;
    };
    sassOptions?: SassOptions<"sync">;
}

export interface Options {
    watch: string | string[];
    files: FileOptions[];
}

function compileSassToPublic(options: Options): PluginOption {
    return {
        name: "vite-plugin-compile-sass-to-public",
        configureServer(server) {
            server.watcher.unwatch(options.watch);
            server.watcher.add(options.watch).on("change", () => {
                server.restart();
            });
        },
        buildEnd() {
            for (const { src, output, sassOptions } of options.files) {
                const result = compile(src, sassOptions);
                const outputFile = path.join(output.path, output.filename);

                fs.mkdirSync(output.path, { recursive: true });
                fs.writeFileSync(outputFile, result.css);
            }
        },
    };
}

export default compileSassToPublic;
