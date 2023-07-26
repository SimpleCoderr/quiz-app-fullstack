import { AlertError } from "entities/AlertError";
import { Header } from "widgets/Header";
import AppAuthRouter from "./AppAuthRouter/routes";
import { useTypedSelector } from "shared/model";
import { Spinner } from "entities/Spinner";
import "./styles/index.scss";

function App() {
  const { isLoading } = useTypedSelector((state) => state.app);
  return (
    <div className="app">
      <Header />
      <AppAuthRouter />
      <AlertError />
      {isLoading && <Spinner />}
    </div>
  );
}

export default App;
