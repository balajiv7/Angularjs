PetiteVue.createApp({
    open: false,
    tabs: ['Features', 'Pricing', 'Contact'],
    socials: ['./images/icon-facebook.svg', './images/icon-twitter.svg'],
    simple: {
      close: true,
      src: './images/illustration-features-tab-1.svg',
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    speedy: {
      close: false,
      src: './images/illustration-features-tab-2.svg',
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    easy: {
      close: false,
      src: './images/illustration-features-tab-3.svg',
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
    SIMPLE() {
      this.simple.close = true
      this.speedy.close = false
      this.easy.close = false
    },
    SPEEDY() {
      this.simple.close = false
      this.speedy.close = true
      this.easy.close = false
    },
    EASY() {
      this.simple.close = false
      this.speedy.close = false
      this.easy.close = true
    },
    browsers: [
      {
        src: './images/logo-chrome.svg',
        alt: 'Chrome',
        title: 'Add to Chrome',
        sub: 'Minimum version 62'
      },
      {
        src: './images/logo-firefox.svg',
        alt: 'Firefox',
        title: 'Add to Firefox',
        sub: 'Minimum version 55'
      },
      {
        src: './images/logo-opera.svg',
        alt: 'Opera',
        title: 'Add to opera',
        sub: 'Minimum version 17'
      },
    ],
    QandA: {
      q1: {
        arrow: false,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
      },
      q2: {
        arrow: false,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
      },
      q3: {
        arrow: false,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
      },
      q4: {
        arrow: false,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
      },
    },
    form: {
      email: "",
      emailError: "",
    },
    validation() {
      if (this.form.email.length > 0) {
        this.form.emailError = "";
        this.form.email = ''
        return true;
      } else {
        this.form.emailError = "Email is required";
        return false;
      }
    },
  }).mount()
  
  // Add active class to the current button (highlight it)
  var header = document.getElementById("features");
  var btns = header.getElementsByClassName("features-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }