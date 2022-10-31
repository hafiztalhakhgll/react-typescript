type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h1>Welcome {props.name}! You have 10 unread messages</h1>
    </div>
  );
}
