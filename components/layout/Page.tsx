import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Global from './Global'
import Layout from './Layout'

type Props = {
  title: string
  description: string
  sliderBackground: string | string[]
  bigTitle?: string
  bigDescription?: string
}

const Page: import('react').FC<Props> = ({ children, title, description, sliderBackground, ...props }) => (
  <Global>
    <Head>
      <title>{title || 'Bosphorus Supply Solutions'}</title>
      <link rel="stylesheet" href="https://unpkg.com/react-toastify@5.4.1/dist/ReactToastify.min.css" />
      <script>{`
        !function() {
          var t = window.driftt = window.drift = window.driftt || [];
          if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
              };
            }, t.methods.forEach(function(e) {
              t[e] = t.factory(e);
            }), t.load = function(t) {
              var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
              o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(o, i);
            };
          }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('tb4hgckecy6i');
      `}</script>
      {description && <meta
        name="description"
        content={description} />}
    </Head>
    <ToastContainer />
    <Layout sliderPhotos={Array.isArray(sliderBackground) ? sliderBackground : [sliderBackground]} {...props}>
      {children}
    </Layout>
  </Global>
)

export default Page
