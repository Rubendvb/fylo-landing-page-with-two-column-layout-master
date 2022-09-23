export function Form(props) {
  return (
    <form>
      <label className="flex flex-col">
        <input
          type="email"
          className={`border-solid border-[1px] p-2 drop-shadow-md placeholder:text-gray-300 font-opensans ${
            props.textButtonNumber === 1
              ? "border-[#070439] pl-8 text-sm rounded mb-4"
              : "border-none text-[10px] rounded-sm mb-2"
          } `}
          placeholder={`${
            props.textButtonNumber === 1
              ? "Enter your email..."
              : "email@example.com"
          }`}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold font-raleway drop-shadow-md ${
            props.textButtonNumber === 1
              ? "rounded text-sm p-[10px]"
              : "rounded-sm text-xs p-2"
          } `}
        >
          {props.textButton}
        </button>
      </label>
    </form>
  );
}
