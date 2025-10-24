// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        // This makes sure the public environment variables are correctly loaded
        // and accessible via import.meta.env.PUBLIC_CONVERTKIT_API_KEY
        envPrefix: 'PUBLIC_',
    }
});
