import Head from 'next/head'
import colors from '../../core/theme/colors'

const Global: import('react').FC = ({ children }) => (
  <>
    {children}
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet" />
    </Head>
    <style jsx global>{`
      html {
        line-height: 1.7;
        -webkit-text-size-adjust: 100%;
        height: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
      }
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        color: rgba(0, 0, 0, 0.7);
        line-height: 1.7;
        font-family: "Work Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        min-width: 320px;
        direction: ltr;
        font-feature-settings: 'kern';
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
      }
      html,
      body {
        background-color: ${colors.white};
        color: #111;
      }
      ::selection {
        background-color: ${colors.primary};
        color: ${colors.white};
      }
      [role='grid']:focus {
        outline: none;
      }
      svg {
        text-rendering: optimizeLegibility;
      }
      h1,
      h2,
      h3 {
        margin: 0;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
      }
      a {
        color: ${colors.primary};
        text-decoration: none;
        transition: color 0.2s ease;
      }
      a:hover {
        text-decoration: underline;
      }
      * {
        text-align: left;
      }
    `}</style>
  </>
)

export default Global
