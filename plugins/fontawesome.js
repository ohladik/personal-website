import Vue from "vue";
// the component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// the library
import { library, dom, config } from "@fortawesome/fontawesome-svg-core";
// add more icon categories as you want them, even works with pro packs
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faTimes,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

// asociate it to the library, if you need to add more you can separate them by a comma
library.add(faGithub, faLinkedin, faArrowLeft, faTimes, faExternalLinkAlt);

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch();

// Fixes initial icon load size (the icon fills almost whole screen)
// config.autoAddCss = true;

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
