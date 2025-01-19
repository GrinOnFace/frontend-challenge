export type buildMode = 'production' | 'development';

export interface buildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export interface buildOptions {
    port: number;
    paths: buildPaths;
    mode: buildMode;
}
