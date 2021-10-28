import "antd/dist/antd.css";
import React, { Suspense } from "react";

const UserComponent = React.lazy(() => import("./module"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserComponent />
    </Suspense>
  );
}

export default App;
