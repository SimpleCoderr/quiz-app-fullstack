import { AlertError } from "entities/AlertError";
import { Header } from "widgets/Header";
import AppAuthRouter from "./AppAuthRouter/routes";
import { useTypedSelector } from "shared/model";
import { Spin } from "antd";
import "./styles/index.scss";
import { Spinner } from "entities/Spinner";

function App() {

  const {isLoading} = useTypedSelector(state => state.app)
  return (
    <div className="app">
          <Header/>
          <AppAuthRouter/>
          <AlertError/>
          {isLoading && <Spinner/>}
    </div>
  );
}

export default App;
