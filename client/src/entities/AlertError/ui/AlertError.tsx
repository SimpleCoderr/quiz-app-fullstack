import { useEffect } from "react";
import { cleanErrorAC, useAppDispatch, useTypedSelector } from "shared/model";
import { MyAlert } from "shared/ui";
import s from "./AlertError.module.scss";

export const AlertError = () => {
  const { error } = useTypedSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(cleanErrorAC()); // если alert не закроют, то он автоматически скроется через 3 секунды
      }, 3000);
    }
  }, [error]);

  const handleClose = () => {
    dispatch(cleanErrorAC());
  };
  return (
    <>
      {error && (
        <MyAlert
          message="Error"
          description={error}
          type="error"
          showIcon
          onClose={handleClose}
          closable
        />
      )}
    </>
  );
};
