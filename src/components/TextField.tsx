type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField(props: InputProps) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}
