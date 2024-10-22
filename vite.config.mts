/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["./src/vitest.setup.ts"],
        testTimeout: 300000,
        browser: {
            provider: 'playwright', // or 'webdriverio'
            enabled: false,
            name: 'chromium', // browser name is required
            providerOptions: {
                launch: {
                    devtools: true,
                },
                context: {
                    geolocation: {
                        latitude: 45,
                        longitude: -30,
                    },
                    reducedMotion: 'reduce',
                },
            },
        },
    },
    // plugins: [vue()],
});