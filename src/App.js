import "./App.css";
import AppContextProvider from "./context/AppContext";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;
