<button id="device" on:click={toggleDevice}>
  <img src="/resources/icons/devices.png" alt="change device size">
  <span>{device}</span>
</button>
<button id="orientation" on:click={toggleOrientation}>
  <img src="/resources/icons/flip.png" alt="flip orientation">
  <!-- <span>{orientation}</span> -->
</button>
<div id="demul" class="{device} {orientation}">
  <iframe title="app" src={src}></iframe>  
</div>

<script>
  export let src

  //props
  let device = 'mobile'
  let orientation = 'portrait'

  function toggleDevice () {
    if (device == 'mobile')
      device = 'tablet'
    else
      device = 'mobile'
  }

  function toggleOrientation () {
    if (orientation == 'portrait')
      orientation = 'landscape'
    else
      orientation = 'portrait'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');

  :global(body) {
    padding: 0px !important;
    font-family: 'Open Sans', sans-serif;
    background-color: #c0c0c0;
    width: 100vw;
    height: 100vh;
  }

  #device, #orientation {
    position: absolute;
    top: 23px;
    right: 23px;
    border-radius: 10px;
    padding: 10px 10px 5px 10px;
    /* background-color: #f1f1f1; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #device {
    top: 23px;
    left: 23px;
  }

  #orientation {
    top: 23px;
    right: 23px;
  }

  #device > img, #orientation > img {
    width: 32px;
    height: 32px;
  }

  #device > span, #orientation > span {
    display: block;
    font-size: smaller;
    color: grey;
  }

/*** W3Schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_device_smartphone ***/
/* The device with borders */
.mobile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  border: 16px black solid;
  border-radius: 36px;
}

.mobile.portrait {
  width: 360px;
  height: 640px;
  border-top-width: 60px;
  border-bottom-width: 60px;
}

.mobile.landscape {
  /* transform: rotateZ(-90deg); */
  width: 640px;
  height: 360px;
  border-left-width: 60px;
  border-right-width: 60px;
}

/* The screen (or content) of the device */
.mobile.portrait > * {
  width: 360px;
  height: 640px;
  background: white;
}

/* The screen (or content) of the device */
.mobile.landscape > * {
  width: 640px;
  height: 360px;
  background: white;
}

/* The horizontal line on the top of the device */
#app:not(.tablet):before {
  content: '';
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #555;
  border-radius: 10px;
}

#app.portrait:before {
  width: 60px;
  height: 5px;
  top: -30px;
  left: 50%;
}

#app.landscape:before {
  width: 5px;
  height: 60px;
  left: -30px;
  top: 50%;
}

/* The circle on the bottom of the device */
#app:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

#app.portrait:after {
  left: 50%;
  bottom: -65px;
}

#app.landscape:after {
  right: -65px;
  top: 50%;
}

/* The device with borders */
.tablet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  border: 16px black solid;
  border-radius: 36px;
}

.tablet.portrait {
  width: 768px;
  height: 1024px;
  border-top-width: 60px;
  border-bottom-width: 60px;
}

.tablet.landscape {
  /* transform: rotateZ(-90deg); */
  width: 1024px;
  height: 768px;
  border-left-width: 60px;
  border-right-width: 60px;
}

/* The screen (or content) of the device */
.tablet.portrait > * {
  width: 768px;
  height: 1024px;
  background: white;
  margin: -1px;
}

/* The screen (or content) of the device */
.tablet.landscape > * {
  width: 1024px;
  height: 768px;
  background: white;
  margin: -1px;
}
</style>
