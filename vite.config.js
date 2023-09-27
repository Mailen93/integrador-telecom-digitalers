import { resolve } from 'node:path'
// console.log(resolve('pages'))

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                carrito: resolve('./pages/checkout.html'),
                contacto: resolve('./pages/contacto.html'),
                // favoritos: resolve('./pages/favoritos.hml'),
                nosotros: resolve('./pages/nosotros.html'),
                productos: resolve('./pages/productos.html'),

                index: resolve('index.html')
            }
        }
    }
}