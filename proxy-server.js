const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://api.tenor.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Ta bort /api från sökvägen
    },
}));

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});