import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Global from './Global'
import Layout from './Layout'
import { useEffect } from 'react'

type Props = {
  title: string
  description: string
  sliderBackground: string | string[]
  bigTitle?: string
  bigDescription?: string
}

const Page: import('react').FC<Props> = ({ children, title, description, sliderBackground, ...props }) => {
  useEffect(() => {
    // @ts-ignore
    window.$zoho=window.$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"76efd3dab7a28603ad57f77cd8edd1bf1cb269542b11d3569316a84b900cffcf1f6a8adfd5806f58733fdc415aa237a7", values:{},ready:function(){}};
    // @ts-ignore
    var d=document;
    d.write("<div id='zsiqwidget'></div>");
    // @ts-ignore
    window.s=d.createElement("script");window.s.type="text/javascript";window.s.id="zsiqscript";window.s.defer=true;
    // @ts-ignore
    window.s.src="https://salesiq.zoho.com/widget";
    // @ts-ignore
    window.t=d.getElementsByTagName("script")[0];
    // @ts-ignore
    window.t.parentNode.insertBefore(window.s,window.t);
  }, [])

  return (
    <Global>
      <Head>
        <title>{title || 'Bosphorus Supply Solutions'}</title>
        <link rel="stylesheet" href="https://unpkg.com/react-toastify@5.4.1/dist/ReactToastify.min.css" />
        {/* <script dangerouslySetInnerHTML={{ __html: `
          var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || 
          {widgetcode:"76efd3dab7a28603ad57f77cd8edd1bf1cb269542b11d3569316a84b900cffcf1f6a8adfd5806f58733fdc415aa237a7", values:{},ready:function(){}};
          var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
          s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
        `}} /> */}
  
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
}

export default Page
