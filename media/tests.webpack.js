var context = require.context('./scripts', true, /_test\.js$/);
context.keys().forEach(context);
