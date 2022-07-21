import Button from '../reusable/main-button';

const HeroSection = () => {
  return (
    <>
      <div className='grid grid-rows-2 lg:grid-cols-2 gap-x-10  center mt-24'>
        <div className='flex flex-col   space-y-16 responsive-card'>
          <h2 className=' text-5xl font-bold max-w-md '>
            Bring everyone together to build better products.
          </h2>
          <p className=' font-semibold text-darkGrayishBlue max-w-sm '>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button responsive={false} />
        </div>
        <div className='flex justify-center'>
          <img src='img/illustration-intro.svg' alt='' />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
