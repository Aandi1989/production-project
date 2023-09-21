import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './buildPlugin';
import { buildloaders } from './buildLoaders';
import { buildresolvers } from './buildResolvers';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {paths, mode, isDev} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildloaders(options),
          },
          resolve: buildresolvers(),
          devtool: isDev ? 'inline-source-map' : undefined,
          devServer: isDev ? buildDevServer(options) : undefined,
      }
}