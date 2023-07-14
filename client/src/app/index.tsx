import { BrowserRouter } from "react-router-dom";
import { AlertError } from "entities/AlertError";
import { Header } from "widgets/Header";
import AppAuthRouter from "./AppAuthRouter/routes";
import { StoreProvider } from "./providers";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <StoreProvider>
          <Header/>
          <AppAuthRouter/>
          <AlertError/>
        </StoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
