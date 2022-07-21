import Button from '../reusable/main-button';
import { features } from './features';
import IndexBadge from '../reusable/index-badge';
const FeaturesSection = () => {
  return (
    <>
      <div className='grid grid-rows-2 lg:grid-cols-2 gap-x-10  center mt-24'>
        <div className='flex flex-col   space-y-16 responsive-card'>
          <h2 className=' text-5xl font-bold max-w-md '>
            What's different about Manage?
          </h2>
          <p className=' font-semibold text-darkGrayishBlue max-w-sm '>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className='flex flex-col   space-y-14'>
          {features.map((feature) => (
            <div className='flex '>
              <div className='hidden lg:flex'>
                <IndexBadge text={feature.index} />
              </div>
              <div className='flex flex-col'>
                <div className='flex'>
                  <div className='flex lg:hidden'>
                    <IndexBadge text={feature.index} />
                  </div>

                  <h2 className='text-lg font-bold '>{feature.title}</h2>
                </div>
                <p className='text-darkGrayishBlue font-semibold mt-4 flex'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
