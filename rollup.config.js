import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/app.js',
        format: 'esm',
    },
    plugins: [terser()],
};
