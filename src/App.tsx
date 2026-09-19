import { HashRouter } from "react-router-dom";
import ObserverProvider from "./ObserverProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <ObserverProvider>
        <AppRoutes />
      </ObserverProvider>
    </HashRouter>
  );
}

export default App;