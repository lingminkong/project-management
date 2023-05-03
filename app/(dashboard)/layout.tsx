import GlassPane from '@/components/GlassPane';

import '@/styles/global.css';

type Props = {
  children: React.ReactNode;
};

const DashboardRootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      {/* <head /> here will automatically use content in head.tsx */}
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
