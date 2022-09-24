import { useForm } from "react-hook-form";

export function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailInput: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        className={`relative flex flex-col lg:flex-row lg:grid grid-cols-[3fr_2fr] lg:max-w-[480px] lg:gap-4 ${
          props.textButtonNumber === 2 ? "lg:grid-cols-1" : ""
        }`}
      >
        <input
          type="email"
          {...register("emailInput", {
            required: "Please check your email",
            validate: (value) => value.length > 4,
          })}
          className={`border-solid border-[1px] p-2 drop-shadow-md placeholder:text-gray-300 font-opensans lg:max-w-[26rem] focus:outline-none invalid:border-pink-500 peer  ${
            props.textButtonNumber === 1
              ? "border-[#070439] pl-8 text-sm rounded mb-4 lg:mb-0"
              : "text-[10px] rounded-sm mb-2 lg:mb-0"
          } `}
          placeholder={`${
            props.textButtonNumber === 1
              ? "Enter your email..."
              : "email@example.com"
          }`}
        />
        {errors.emailInput && (
          <span
            className={`${
              props.textButtonNumber === 2 ? "block" : "md:absolute mb-2"
            } top-12 text-xs text-pink-500 peer-invalid:visible`}
          >
            Please check your email
          </span>
        )}

        <input
          type="submit"
          value={props.textButton}
          className={`bg-blue-500 text-white font-bold font-raleway drop-shadow-md cursor-pointer hover:opacity-80 ${
            props.textButtonNumber === 1
              ? "rounded text-sm p-[10px]"
              : "rounded-sm text-xs p-2 lg:w-1/3"
          } `}
        />
      </label>
    </form>
  );
}
