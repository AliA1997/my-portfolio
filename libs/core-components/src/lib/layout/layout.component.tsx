import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { Head } from '../head.component';
import { Breadcrumb } from './breadcrumb.component';
import { Footer } from './footer.component';
import { Header } from './header.component';

type LayoutProps = {
  title?: string;
  breadcrumb?: string;
  heading?: string;
  wrapperClass?: string;
  children: ReactNode;
};

const DynamicPopupButton = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupWidget),
  {
    ssr: false,
  }
);

export const Layout = ({
  title,
  breadcrumb,
  heading,
  wrapperClass,
  children,
}: LayoutProps) => {
  return (
    <>
      <Head {...{ title }} />
      <section
        className={classNames(wrapperClass ? wrapperClass : 'main-homepage')}
      >
        <Header />
        {breadcrumb && <Breadcrumb {...{ breadcrumb, heading }} />}
        {children}
      </section>
      <DynamicPopupButton
        url="https://calendly.com/ali-qamar-labs/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('__next') as HTMLElement}
        text="☕ Chat with Ali"
        color="#8E32E9"
      />
      <Footer />
    </>
  );
};
