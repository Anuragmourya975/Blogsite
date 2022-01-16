var images = [
  {
    url: "./d1.jpg",
    thumb: "./d1.jpg",
  },
  {
    url: "./d2.jpg",
    thumb: "./d2.jpg",
  },
  {
    url: "./d3.jpg",
    thumb: "./d3.jpg",
  },
  {
    url: "./d4.jpg",
    thumb: "./d4.jpg",
  },
  {
    url: "./d5.jpg",
    thumb: "./d5.jpg",
  },
  {
    url: "./d6.jpg",
    thumb: "./d6.jpg",
  },
  {
    url: "./d7.jpg",
    thumb: "./d7.jpg",
  },
  {
    url: "./d8.jpg",
    thumb: "./d8.jpg",
  },
  {
    url: "./d1.jpg",
    thumb: "./d1.jpg",
  },
  {
    url: "./d2.jpg",
    thumb: "./d2.jpg",
  },
  {
    url: "./d3.jpg",
    thumb: "./d3.jpg",
  },
  {
    url: "./d4.jpg",
    thumb: "./d4.jpg",
  },
];

window.ProductGallery = {
  $el: null,
  images: null,
  activeImage: 0,
  isOpen: false,
  $imageEl: null,
  $thumbNavEl: null,
  init($el) {
    this.$el = $el;
    this.$imageEl = $el.querySelectorAll("ul")[0];
    this.$thumbNavEl = $el.querySelectorAll("ul")[1];
    this.images = images;
  },
  next: function () {
    this.activeImage =
      this.activeImage + 1 < this.images.length ? this.activeImage + 1 : 0;
  },
  prev: function () {
    this.activeImage =
      this.activeImage > 0 ? this.activeImage - 1 : this.images.length - 1;
  },
  mousewheelEvent: function (event) {
    if (event.deltaY > 0) {
      this.next();
      event.preventDefault();
    } else if (event.deltaY < 0) {
      this.prev();
      event.preventDefault();
    }
  },
  scroll: function () {
    this.scrollToImage();
    this.scrollToThumb();
  },
  scrollToThumb: function () {
    const $activeThumb = this.$thumbNavEl.querySelector(
      "ul li:nth-child(0n+" + (this.activeImage + 2) + ")"
    );
    this.$thumbNavEl.scrollLeft =
      $activeThumb.offsetLeft -
      $activeThumb.clientWidth -
      this.$thumbNavEl.clientWidth / 2 +
      $activeThumb.clientWidth / 2;
  },
  scrollToImage: function () {
    const $activeImage = this.$imageEl.querySelector(
      "ul li:nth-child(0n+" + (this.activeImage + 2) + ")"
    );
    this.$imageEl.scrollLeft =
      $activeImage.offsetLeft - this.$thumbNavEl.clientWidth / 2;
  },
  toggleImage: function () {
    this.isOpen ? this.close() : this.open();
    // wait for css rendering then scroll to active image
    let _this = this;
    setTimeout(function () {
      _this.scroll();
    }, 100);
  },
  open: function () {
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
    this.isOpen = true;
  },
  close: function () {
    document.body.style.overflowY = null;
    document.body.style.height = null;
    this.isOpen = false;
  },
};
