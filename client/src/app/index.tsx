import { StoreProvider } from "./providers";
import "./styles/index.scss";
import AppRouter from "./AppRouter/routes";
import { Header } from "features/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <StoreProvider>
          <Header/>
          <AppRouter/>
        </StoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
