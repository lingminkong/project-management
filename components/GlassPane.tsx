import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GlassPane = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'glass rounded-2xl border-solid border-2 border-gray-200'
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
