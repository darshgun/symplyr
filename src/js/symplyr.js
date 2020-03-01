import "../styles/symplyr.scss";

class Symplyr {
  constructor(target, options) {
    this.element = document.querySelector(target);

    this.symplyrClasses = {
      wrapper: "symplyr",
      controlWrapper: "symplyr__controls",
      controlItem: "symplyr__control",
      playButton: "symplyr__control--play",
      seekBar: "symplyr__control--progress symplyr__control--seek",
      volumeBar: "symplyr__control--progress symplyr__control--volume",
      timestamp: "symplyr__control--timestamp"
    };

    this.controls = {
      container: null,
      playButton: null,
      pauseBUtton: null,
      seekBar: null,
      volumeBar: null,
      timestamp: null
    };

    this.options = options;
    this.ready = false;
    this.playing = false;
  }

  symplyrfy() {
    let mediaElement = this.element,
      parentElement = mediaElement.parentNode,
      symplyrWrapper = document.createElement("div"),
      symplyrWrapperClass = this.symplyrClasses.wrapper;

    symplyrWrapper.setAttribute("class", symplyrWrapperClass);
    parentElement.replaceChild(symplyrWrapper, mediaElement);
    symplyrWrapper.appendChild(mediaElement);
  }
}

export default Symplyr;
