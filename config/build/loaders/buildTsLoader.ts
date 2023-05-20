export function buildTsLoader() {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
}
