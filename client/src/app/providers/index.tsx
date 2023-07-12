import { Provider } from "react-redux";
import { store } from "app/models";

type ProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
