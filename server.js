const path = require('path'),
  express = require('express'),
  app = express();

module.exports = {
  app: () => {
    const indexPath = path.join(__dirname, './build/index.html');
    const publicPath = express.static(path.join(__dirname, './build'));

    app.use('/build', publicPath);
    app.get('/', (_, res) => { res.sendFile(indexPath); });
    app.all('*', (req, res) => { res.sendFile(indexPath); });

    return app;
  }
};
