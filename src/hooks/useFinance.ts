import { useSelector } from "react-redux";
import Finance from "../utils/Finance";
import { ReduxState } from "../store";

export default function useFinance() {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  return finances;
}
