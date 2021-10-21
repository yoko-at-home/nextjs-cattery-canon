import Link from "next/link";

export const CustomLink = (props) => {
  const isInternalLink = props.href && props.href.startsWith("/");
  const isAnchorLink = props.href && props.href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={props.href}>
        <a {...props.rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={props.href} {...props.rest} />;
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={props.href}
      {...props.rest}
    />
  );
};
