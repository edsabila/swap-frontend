import {createGlobalStyle} from 'styled-components';

const GlobalFonts = createGlobalStyle`
  
  @font-face {
    font-family: "Sansita-Regular";
    src: local("Sansita-Regular"),
      url(fonts/Sansita-Regular.otf) format("opentype");
  }
  
  @font-face {
    font-family: "Sansita-Medium";
    src: local("Sansita-Medium"),
      url(fonts/Sansita-Medium.otf) format("opentype");
  }
  
  @font-face {
    font-family: "Sansita-Bold";
    src: local("Sansita-Bold"), 
    url(fonts/Sansita-Bold.otf) format("opentype");
  }
`

export default GlobalFonts