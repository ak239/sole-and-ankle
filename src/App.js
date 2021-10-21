import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';
import CategoryList from './components/CategoryList';
import ShoeGrid from './components/ShoeGrid';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}
html, body {
  height: 100%;
}

/* COLORS */
html {
  --gray-100: hsl(180deg 4% 95%);
  --gray-300: hsl(190deg 6% 80%);
  --gray-500: hsl(195deg 4% 60%);
  --gray-700: hsl(207deg 5% 40%);
  --gray-900: hsl(225deg 4% 20%);
  --primary: hsl(340deg 65% 46%);
  --secondary: hsl(240deg 60% 63%);
}

/* FONTS */

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

html {
  font-family: 'Raleway', sans-serif;
}

/* DEBUG */
body * {
  /* border: 1px dotted deeppink; */
}
`;

function App() {
  return (<>
    <Header/>
    <Main>
      <ShoeGrid/>
      <Sidebar>
        <Breadcrumbs/>
        <CategoryList/>
      </Sidebar>
    </Main>
    <GlobalStyles/>
  </>);
}

export default App;
