import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GlassPane = ({ children, className }: Props) => {
  return <div className={clsx(className, 'glass round-2xl')}>{children}</div>;
};

export default GlassPane;
