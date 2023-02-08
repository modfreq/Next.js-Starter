import Layout from "@/layouts/Layout";

type layoutTypes = {
  title: string;
  desc: string;
};

export default function Home(props: layoutTypes) {
  return (
    <Layout title={props.title} desc={props.desc}>
      <h1>Hello World!</h1>
    </Layout>
  );
}
