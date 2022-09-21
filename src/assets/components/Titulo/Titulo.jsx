export function Titulo(props) {
  return (
    <h1
      className={`font-bold text-center font-opensans ${
        props.titleNumber === 1
          ? "mt-12 mb-8 text-[#070439] text-2xl"
          : "text-base mb-8 font-raleway"
      }`}
    >
      {props.title}
    </h1>
  );
}
