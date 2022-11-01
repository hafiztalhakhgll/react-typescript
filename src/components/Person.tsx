import { Name } from "../types/Person.types";

type personProps = {
  name: Name[];
};

export default function Person(props: personProps) {
  return (
    <ul>
      {props.name.map((el) => (
        <li>Name: {`${el.firstName} ${el.lastName}`}</li>
      ))}
    </ul>
  );
}
