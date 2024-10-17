new ModuleFederationPlugin({
    name: 'host',
    remotes: {
      microA: 'microA@http://localhost:3001/remoteEntry.js',
      microB: 'microB@http://localhost:3002/remoteEntry.js',
    },
  });
  