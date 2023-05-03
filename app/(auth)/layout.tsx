import GlassPane from '@/components/GlassPane';

import '@/styles/global.css';

type Props = {
  children: React.ReactNode;
};

const AuthRootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>
        <GlassPane>{children}</GlassPane>
      </body>
    </html>
  );
};

export default AuthRootLayout;
