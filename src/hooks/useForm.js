import { useForm as RHFUseForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/**
 * https://react-hook-form.com/api/useform/
 * @param {*} props
 * @returns form methods
 */
const useForm = (props) => {
  const { validationSchema, ...rest } = props;

  const form = RHFUseForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    ...rest,
  });

  return form;
};

export default useForm;
