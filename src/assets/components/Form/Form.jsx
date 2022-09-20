export function Form(props) {
  return (
    <form>
      <label className="flex flex-col max-w-full">
        <input
          type="email"
          className="border-solid border-[1px] border-[#070439] rounded-md p-4 mb-4 placeholder:text-gray-300 pl-8 font-opensans"
          placeholder="Enter your email..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold font-raleway p-4 rounded-md"
        >
          {props.textButton}
        </button>
      </label>
    </form>
  );
}
