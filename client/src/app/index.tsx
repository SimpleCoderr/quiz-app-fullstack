import Testing from "pages/Testing";
import { StoreProvider } from "./providers";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <StoreProvider>
        <Testing />
      </StoreProvider>
    </div>
  );
}

export default App;
