import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildTsLoader } from './loaders/buildTsLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    return [
        buildSvgLoader(),
        buildFileLoader(),
        buildBabelLoader(),
        buildTsLoader(),
        buildCssLoader(options.isDev),
    ];
}
