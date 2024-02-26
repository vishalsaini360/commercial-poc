
import NoInternetConnection from "@/Components/Layouts/NoInternetConnection";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import '../styles/slider.css'

import Layout from "../Components/Layouts";

NProgress.configure({
  showSpinner: false,
  parent: "#container",
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Layout>
        {page}
      </Layout>
    ));
  return (
    <div id="container">
      <NoInternetConnection>
      {getLayout(<Component {...pageProps} />)}
      </NoInternetConnection>
    </div>
  )

}
