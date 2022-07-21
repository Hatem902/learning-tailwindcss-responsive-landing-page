import Link from 'next/link';

const mainButton = ({ responsive }: any) => {
  return (
    <Link href='#'>
      <span
        className={`${
          responsive ? 'hidden lg:block' : ''
        }  text-white bg-brightRed rounded-full px-6 py-3 cursor-pointer hover:bg-brightRedLight max-w-fit`}
      >
        Get Started
      </span>
    </Link>
  );
};

export default mainButton;
