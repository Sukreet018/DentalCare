import { BrowserRouter } from "react-router-dom";
import ObserverProvider from "./ObserverProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/DentalCare">
      <ObserverProvider>
        <AppRoutes />
      </ObserverProvider>
    </BrowserRouter>
  );
}

export default App;