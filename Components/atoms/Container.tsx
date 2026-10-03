import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

const Container = ({ className = "", children, ...props }: ContainerProps) => {
  return (
    <div className={`container px-4 lg:px-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
