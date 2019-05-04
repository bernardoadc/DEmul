<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700');

  :global(body) {
    padding: 0px !important;
    font-family: 'Open Sans', sans-serif;
    background-color: #f1f1f1;
  }

  #app {
    overflow-y: hidden;
  }

/*** W3Schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_device_smartphone ***/
/* The device with borders */
.mobile {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
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

/* The screen (or content) of the device */
.mobile > * {
  width: 360px;
  height: 640px;
  background: white;
}

/* The device with borders */
.tablet {
  position: relative;
  width: 768px;
  height: 1024px;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
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

/* The screen (or content) of the device */
.tablet > * {
  width: 768px;
  height: 1024px;
  background: white;
  margin: -1px;
}
</style>

<script>
  //props
  let mobile = true
  let tablet = false
</script>
