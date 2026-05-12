import { createInertiaApp } from '@inertiajs/react'

createInertiaApp({
    pages: {
        path: './pages',
        extension: '.tsx',
        // lazy: true,
        transform: (name, page) => name.replace('/', '-'),
    },
})
