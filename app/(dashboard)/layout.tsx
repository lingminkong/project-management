import GlassPane from '@/components/GlassPane';

import '@/styles/global.css';

type Props = {
  children: React.ReactNode;
};

const DashboardRootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>
        <GlassPane>{children}</GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
