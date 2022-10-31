type personProps = {
  name: { firstName: string; lastName: string };
};

export default function Person(props: personProps) {
  return <div>Name: {`${props.name.firstName} ${props.name.lastName}`}</div>;
}
