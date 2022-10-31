type personProps = {
  name: { firstName: string; lastName: string }[];
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
