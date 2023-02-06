import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export default function useAppDispatch() {
  const dispatch: AppDispatch = useDispatch();

  return dispatch;
}
