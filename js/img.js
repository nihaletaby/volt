var data = {
  "images": [
  {
  "bannerImg1": "img/menu/1.jpg"
  },
  {"bannerImg1" : "img/menu/2.png"
  },
  {"bannerImg1" : "img/menu/3.png"
  },
  {"bannerImg1" : "img/menu/4.png"
  },
  {"bannerImg1" : "img/menu/5.png"
  },
  {"bannerImg1" : "img/menu/6.png"
  },
  {"bannerImg1" : "img/menu/7.png"
  },
  {"bannerImg1" : "img/menu/8.png"
  },
  {"bannerImg1" : "img/menu/9.png"
  }
]
};
data.images.forEach( function(obj) {
  var img = new Image();
  img.src = obj.bannerImg1;
  img.setAttribute("class", "banner-img");
  img.setAttribute("alt", "effy");
  document.getElementById("img-container").appendChild(img);
});