import GlassPane from '@/components/GlassPane';

import '@/styles/global.css';

type Props = {
  children: React.ReactNode;
};

const AuthRootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      {/* <head /> here will automatically use content in head.tsx */}
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default AuthRootLayout;
