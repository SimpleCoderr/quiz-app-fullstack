import { StoreProvider } from "./providers";
import "./styles/index.scss";
import AppRouter from "./AppRouter/routes";
import { Header } from "features/Header";
import { BrowserRouter } from "react-router-dom";
import { AlertError } from "entities/AlertError";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <StoreProvider>
          <Header/>
          <AppRouter/>
          <AlertError/>
        </StoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
