import { cn } from '@/lib/utils';

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = (props: LoadingSpinnerProps) => {
  return (
    <div className={cn('flex justify-center items-center', props.className)}>
      <span className='loader'></span>
    </div>
  );
};

export default LoadingSpinner;
