export function Paragrafo(props) {
  return (
    <p
      className={`text-sm font-opensans font-normal ${
        props.paragrafoNumber !== 1
          ? "mb-4 text-left text-[#070439]/60"
          : "mb-9 px-4 text-center text-[#070439]"
      }`}
    >
      {props.paragrafo}
    </p>
  );
}
