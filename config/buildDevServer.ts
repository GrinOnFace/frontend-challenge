import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildOptions } from './types/types';

export function buildDevServer(options: buildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
