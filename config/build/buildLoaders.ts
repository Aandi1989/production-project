import webpack from 'webpack';

export function buildloaders (): webpack.RuleSetRule[]{

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
        typescriptLoader,
      ]
}