import { Seo } from "@/layouts/Seo";

type layoutTypes = {
  children: React.ReactNode;
  title: string;
  desc: string;
};

const Layout = (props: layoutTypes) => {
  return (
    <>
      <Seo title={props.title} desc={props.desc} />
      {props.children}
    </>
  );
};

export default Layout;
