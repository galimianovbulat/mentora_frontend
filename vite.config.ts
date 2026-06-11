import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
            pages: path.resolve(__dirname, './src/pages'),
            components: path.resolve(__dirname, './src/components'),
            assets: path.resolve(__dirname, './src/assets'),
            entities: path.resolve(__dirname, './src/entities'),
            helpers: path.resolve(__dirname, './src/helpers'),
            config: path.resolve(__dirname, './src/config'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [path.resolve(__dirname, './src')],
            },
        },
    },
});
