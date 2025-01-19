import { Configuration } from "mini-css-extract-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildOptions } from "./types/types";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins(options: buildOptions) : Configuration['plugins'] {

    const isProd = options.mode === "production";
    const isDev = options.mode === "development";

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html, publicPath: '/'}),
    ]

    if (isDev) {
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    return plugins
}