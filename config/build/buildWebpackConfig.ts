import { Configuration } from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options)
    }
}