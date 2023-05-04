import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    // Если пишем на нативном js - нужно подключить babel-loader для jsx
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader,
    ]
}