import type { GetStaticProps, NextPage } from "next";
import { Cards } from "src/components/Cards";
import { clientMyCatCard } from "src/pages/api/card";
import type { MyCatProps } from "src/type/types";

const Blog: NextPage<MyCatProps> = (props) => {
  const boys = props.contents.filter((props: MyCatProps) => {
    return props.sex === false;
  });

  return (
    <div className="flex flex-col justify-between" id="home">
      <div className="py-10 sm:mx-auto">
        <ul className="my-4 flex flex-col justify-center md:my-16">
          <Cards items={boys} />
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<MyCatProps> = async () => {
  const maincoonData = await clientMyCatCard.getList<MyCatProps>({
    endpoint: "mycat",
    queries: { limit: 999 },
  });
  return {
    props: maincoonData,
  };
};

export default Blog;
