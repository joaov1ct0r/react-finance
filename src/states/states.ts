import { useForm } from "react-hook-form";
import Finance from "../utils/Finance";

export default function States() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Finance>({
    defaultValues: {
      date: "",
      value: "" as unknown as number,
      description: "",
    },
  });

  return { register, handleSubmit, reset, errors };
}
