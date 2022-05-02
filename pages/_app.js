import '../styles/scss/style.scss';
import { SessionProvider } from 'next-auth/react';
import ProjectLayout from '../layout/ProjectLayout';
import Layout from '../layout/Layout';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

function MyApp({ Component, pageProps }) {
  let NestedLayout = Component.length;
  if (NestedLayout == 0) {
    NestedLayout = Layout;
  } else {
    NestedLayout = ProjectLayout;
  }
  // console.dir(Component.length);

  return (
    <SessionProvider>
      <NestedLayout>
        <Component {...pageProps} />
      </NestedLayout>
    </SessionProvider>
  );
}
export default MyApp;

// export default function MyApp({ Component, pageProps }) {
//   const NestedLayout = Component.Layout || ProjectLayout;
//   return (
//     <SessionProvider>
//       <NestedLayout>
//         <Component {...pageProps} />
//       </NestedLayout>
//     </SessionProvider>
// getLayout(<Component {...pageProps} />),
// (
//   <SessionProvider>
//     <DefaultLayout>
//       <Component {...pageProps} />
//     </DefaultLayout>
//   </SessionProvider>
// )
//   );
// }
