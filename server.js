const path = require('path'),
  express = require('express'),
  app = express();

module.exports = {
  app: () => {
    const indexPath = path.join(__dirname, './dist/index.html');
    const publicPath = express.static(path.join(__dirname, './dist'));

    app.use('/dist', publicPath);
    app.get('/', (_, res) => { res.sendFile(indexPath); });
    app.all('*', (req, res) => { res.sendFile(indexPath); });

    return app;
  }
};
