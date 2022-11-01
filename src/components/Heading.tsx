type HeadingProps = {
  children: string;
};

export default function Heading(props: HeadingProps) {
  return <h1>{props.children}</h1>;
}
