import { Button } from "antd";
type Thtmltype = "button" | "submit" | "reset";
const ButtonBlue = ({
  children,
  className = "",
  htmlType,
  loading = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  htmlType?: Thtmltype;
  loading?: boolean;
}) => {
  return (
    <Button
      className={
        "py-7 px-9 border-none rounded-[24px] text-base text-white bg-[#2189FF] hover:!bg-[#DB4444] hover:!text-white hover:opacity-60 " +
        className
      }
      htmlType={htmlType}
      loading={loading}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ButtonBlue;
