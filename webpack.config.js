const avatarsWebpackSprites = require('@dicebear/avatars-webpack-config');

let config = avatarsWebpackSprites('female');

module.exports = [config.node, config.web.dev, config.web.prod];
