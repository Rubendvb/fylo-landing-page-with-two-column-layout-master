export function Form(props) {
  return (
    <form>
      <label className="flex flex-col max-w-full">
        <input
          type="email"
          className="border-solid border-[1px] border-[#070439] rounded p-2 mb-4 drop-shadow-md placeholder:text-gray-300 pl-8 font-opensans text-sm"
          placeholder="Enter your email..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold font-raleway p-2 rounded text-sm drop-shadow-md drop-shadow-md"
        >
          {props.textButton}
        </button>
      </label>
    </form>
  );
}
