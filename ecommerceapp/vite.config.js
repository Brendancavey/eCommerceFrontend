import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    server: {
        proxy: {
            '^/pingauth': {
                target: 'https://localhost:7072/',
                secure: false
            },
            '^/register': {
                target: 'https://localhost:7072/',
                secure: false
            },
            '^/login': {
                target: 'https://localhost:7072/',
                secure: false
            },
            '^/logout': {
                target: 'https://localhost:7072/',
                secure: false
            }
        }
    }
})