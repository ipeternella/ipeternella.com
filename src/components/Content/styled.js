import { Box } from "@material-ui/core"
import styled from "styled-components"

export const ContentWrapper = styled(Box).attrs({
  component: "section",
})`
  /* fonts */
  --font-body: ${props => props.theme.typography.secondary.fontFamily};
  --font-heading: ${props => props.theme.typography.primary.fontFamily};

  /* font sizes */
  --fontSize-root: 16px;
  --fontSize-1: 1rem;
  --fontSize-2: 1.2rem;
  --fontSize-3: 1.44rem;
  --fontSize-4: 1.728rem;
  --fontSize-5: 2.5rem;
  --fontSize-6: 3.5rem;

  /* font colors */
  --color-primary: ${props => props.theme.palette.primary.light};
  --color-text: ${props => props.theme.palette.text.primary};
  --color-text-light: ${props => props.theme.palette.text.primary};
  --color-heading: ${props => props.theme.palette.foxColors.hood};
  --color-accent: ${props => props.theme.palette.divider};

  /* font weights */
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;

  /* line heights */
  --lineHeight-none: 1;
  --lineHeight-tight: 1.1;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;

  /* widths */
  --maxWidth-none: "none";
  --maxWidth-xs: 20rem;
  --maxWidth-sm: 24rem;
  --maxWidth-md: 28rem;
  --maxWidth-lg: 32rem;
  --maxWidth-xl: 36rem;
  --maxWidth-2xl: 42rem;
  --maxWidth-3xl: 48rem;
  --maxWidth-4xl: 56rem;
  --maxWidth-full: "100%";
  --maxWidth-wrapper: var(--maxWidth-2xl);

  /* spacings */
  --spacing-px: "1px";
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;

  /* css */
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  line-height: var(--lineHeight-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-body);
  font-size: var(--fontSize-1);
  color: var(--color-text);
  footer {
    padding: var(--spacing-6) var(--spacing-0);
  }
  hr {
    background: var(--color-accent);
    height: 1px;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    margin-top: var(--spacing-10);
    margin-bottom: var(--spacing-6);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
  }
  h1 {
    margin-top: var(--spacing-12);
    font-weight: var(--fontWeight-black);
    font-size: var(--fontSize-5);
    color: var(--color-heading);
  }
  h2 {
    font-size: var(--fontSize-5);
  }
  h3 {
    font-size: var(--fontSize-4);
  }
  h4 {
    font-size: var(--fontSize-3);
  }
  h5 {
    font-size: var(--fontSize-2);
  }
  h6 {
    font-size: var(--fontSize-1);
  }
  h1 > a {
    color: inherit;
    text-decoration: none;
  }
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }
  a.anchor.before > svg {
    fill: var(--color-text);
  }
  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    padding: var(--spacing-0);
    font-size: var(--fontSize-2);
  }
  p:last-child {
    margin-bottom: ${props => props.theme.spacing(3)}px;
  }
  ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
    list-style-type: disc;
  }
  ul li,
  ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-2) / 2);
  }
  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }
  li *:last-child {
    margin-bottom: var(--spacing-0);
  }
  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }
  blockquote {
    color: var(--color-text-light);
    margin-right: var(--spacing-8);
    border-left: var(--spacing-1) solid ${props => props.theme.palette.primary.main};
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
    margin-left: var(--spacing-0);
  }
  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }
  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }
  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }
  table thead tr th {
    border-bottom: 1px solid var(--color-accent);
  }
  a {
    color: var(--color-primary);
  }
  a:hover,
  a:focus {
    text-decoration: none;
  }
  header h1 {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
    margin-bottom: 0;
    text-align: center;
  }
  header p {
    font-family: var(--font-heading);
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    font-size: 0.83255rem;
    line-height: 1.75rem;
  }
  .gatsby-highlight {
    margin-bottom: var(--spacing-8);
  }

  /* post images */
  img {
    display: block;
    margin: auto;
    max-width: 400px;
    max-height: 400px;
    width: 50%;
  }

  /* prismjs classes */
  .line-numbers {
    padding: 10px;
  }
  .line-numbers-rows {
    padding: 10px;
  }
`
