import {Testing} from "pages/Testing";
import { StoreProvider } from "./providers";
import "./styles/index.scss";
import AppRouter from "./AppRouter/routes";

function App() {
  return (
    <div className="app">
      <StoreProvider>
        <AppRouter/>
      </StoreProvider>
    </div>
  );
}

export default App;
