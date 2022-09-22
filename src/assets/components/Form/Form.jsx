export function Form(props) {
  return (
    <form>
      <label className="flex flex-col max-w-full">
        <input
          type="email"
          className={`border-solid border-[1px] p-2 mb-4 drop-shadow-md placeholder:text-gray-300 font-opensans ${
            props.textButtonNumber === 1
              ? "border-[#070439] pl-8 text-sm rounded"
              : "border-none text-[10px] rounded-sm"
          } `}
          placeholder={`${
            props.textButtonNumber === 1
              ? "Enter your email..."
              : "email@example.com"
          }`}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold font-raleway p-2 drop-shadow-md ${
            props.textButtonNumber === 1
              ? "rounded text-sm"
              : "rounded-sm text-xs"
          } `}
        >
          {props.textButton}
        </button>
      </label>
    </form>
  );
}
