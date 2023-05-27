import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

export default (config, env) => {
    if (env.isProd) {
        config.devtool = false;
    }
    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [{
                from: '*',
                context: resolve(__dirname, 'src/assets')
            }],
        }),
    );
}