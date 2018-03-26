import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'app/main-aot.ts',
    output: {
        dir: 'dist',
        file: 'build.js',
        format: 'iife',
        sourceMap: true,
    },
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs(),
        uglify(),
    ]
}