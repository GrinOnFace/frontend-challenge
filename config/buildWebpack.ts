import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildOptions } from './types/types';
import TerserPlugin from 'terser-webpack-plugin';

export function buildWebpack(options: buildOptions) : webpack.Configuration {
    const isDev = options.mode === "development";

    return {
		mode: options.mode ?? "development",
		entry: options.paths.entry,
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
			publicPath: '/frontend-challenge/',
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
			minimize: true,
			minimizer: [
				'...',
				new TerserPlugin({
					extractComments: false,
				}),
			],
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev ? buildDevServer(options) : undefined,
    }
} 