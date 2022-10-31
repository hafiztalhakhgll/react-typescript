type statusProps = {
  status: string;
};

export default function Status(props: statusProps) {
  let message;
  if (props.status === "loading") message = "Loading...";
  else if (props.status === "success") message = "Data fetched successfully!";
  else if (props.status === "error") message = "Error in fetching data";

  return <div>Status = {message}</div>;
}
