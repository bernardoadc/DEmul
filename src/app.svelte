<button id="orientation" on:click={toggleOrientation}>
  flip flop
</button>
<div id="app" class:mobile class:tablet class={orientation}>
</div>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');

  :global(body) {
    padding: 0px !important;
    font-family: 'Open Sans', sans-serif;
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
  }

  #app {
    overflow-y: hidden;
  }

  #orientation {
    position: absolute;
    top: 10vh;
    left: 10vw;
  }

/*** W3Schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_device_smartphone ***/
/* The device with borders */
.mobile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.mobile:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.mobile:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The device with borders */
.tablet {
  position: relative;
  margin: auto;
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

/* The horizontal line on the top of the device */
.tablet:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.tablet:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}
</style>

<script>
  //props
  let mobile = true
  let tablet = false
  let orientation = 'portrait'

  function toggleOrientation () {
    if (orientation == 'portrait')
      orientation = 'landscape'
    else
      orientation = 'portrait'
  }
</script>
