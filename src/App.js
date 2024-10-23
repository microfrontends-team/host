import React from 'react';
// const MicroAApp = React.lazy(() => import("microA/App"));

const App = () => {
  return (
    <div>
      <h1>Hello from Host App.js</h1>
      {/* <React.Suspense fallback="Loading MicroA App...">
        <MicroAApp />
      </React.Suspense> */}
    </div>
  );
};

export default App;
