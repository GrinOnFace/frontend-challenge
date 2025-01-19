import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/buildWebpack';
import { buildMode, buildPaths } from './config/types/types';

interface EnvVar {
	mode?: buildMode,
	port?: number,
}

export default (env: EnvVar) => {
	const paths: buildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths: paths
	});

	return config
};