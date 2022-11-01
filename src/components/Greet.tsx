type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  // To display 0 while not getting message count from parent component
  const { messageCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? ` Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome"}
      </h1>
    </div>
  );
}
