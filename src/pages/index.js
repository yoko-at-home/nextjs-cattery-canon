import { TopPage } from "../components/TopPage";
const Home = () => {
  return (
    <div className='block md:grid md:grid-cols-6 gap-0'>
      <div className='hidden md:grid-col'>サイドバー</div>
      <div className='w-screen md:grid-cols-3'>
        <TopPage />
      </div>
      <div className='md:grid-cols-1'>carousel</div>
    </div>
  );
};

export default Home;
