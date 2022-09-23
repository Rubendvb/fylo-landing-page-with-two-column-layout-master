export function ListaHeader(props) {
  return (
    <li className="ml-5 md:ml-16">
      <a href="#" className="font-raleway font-normal text-sm">
        {props.text}
      </a>
    </li>
  );
}
