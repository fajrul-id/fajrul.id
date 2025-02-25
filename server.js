const http = require('http');
const cluster = require('cluster');
const os = require('os');

require('dotenv/config');
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
function server() {
    const app = express();
    const httpServer = http.createServer(app);
    app.use(express.static('public'));
    const nextjs = next({dev});
    const handle = nextjs.getRequestHandler();
    nextjs.prepare().then(() => {
        app.all('*', (req, res) => {
            return handle(req, res);
        });
        httpServer.listen(port, () => {
            console.log(
                `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`,
            );
        });
    });
}

if (dev) {
    server();
} else {
    const cCPUs = os.cpus().length;
    if (process.versions.node.split('.')[0] >= '16' ? cluster.isPrimary : cluster.isMaster) {
        for (let i = 0; i < (Math.floor(cCPUs * 0.75) || 1); i++) {
            cluster.fork();
        }
        cluster.on('online', function (worker) {
            console.log('worker ' + worker.process.pid + ' is online.');
        });
        cluster.on('exit', function (worker) {
            cluster.fork();
            console.log('worker ' + worker.process.pid + ' died.');
        });
    } else {
        server();
    }
}
