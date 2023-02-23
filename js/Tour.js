AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "superman",
        url: "./assets/thumbnails/superman.jfif",
      },
      {
        id: "spiderman",
        title: "spiderman",
        url: "./assets/thumbnails/spiderman.jfif ",
      },

      {
        id: "cap",
        title: "cap",
        url: "./assets/thumbnails/cap.jfif",
      },
      {
        id: "outer",
        title: "outer",
        url: "./assets/thumbnails/outer.jfif",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnail= this.createThumbnail(item);
      borderEl.appendChild(thumbnail);
     
      // Title Text Element
      const titleEl = this.createTitleEL(position, item);
      borderEl.appendChild(titleEl);
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement('a-entity');
    entityEl.setAttribute('id', id);
    entityEl.setAttribute('visible', true);
    entityEl.setAttribute("geometry", {
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10,
    })
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {color:"#0077cc", opacity:1});
    return entityEl;
  },

  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", "true");
    entityEl.setAttribute("geometry", {primitive:"circle", radius:9})
    entityEl.setAttribute("material", {src:item.url})
    return entityEl;
  },
  createTitleEL: function(position, item){
    const entityEL = document.createElement("a-entity");
    entityEL.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title
    });
    const elPosition = position
    entityEL.setAttribute("position", elPosition);
    entityEL.setAttribute("visible", true);
    return entityEL;

  }
});
