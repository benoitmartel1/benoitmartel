console.log("PAPI");
$.each(projets, function(i) {
  var projet = $("<div>", {
    class: "projet " + this.type,
    id: this.id
  }).css("background-color", "#" + colors[i]);
  var text = $("<div>", {
    class: "text"
  });
  text.append(
    $("<div>", {
      class: "client",
      text: this.client
    })
  );
  text.append(
    $("<div>", {
      class: "description",
      text: this.description
    })
  );
  projet
    .append(
      $("<img>", {
        src: "assets/" + this.id + "_01.jpg"
      })
    )
    .append(text);
  $(".portfolio .container").append(projet);
});

var $grid = $(".portfolio .container").isotope({
  // main isotope options
  itemSelector: ".projet",
  // set layoutMode
  layoutMode: "fitRows",
  // options for cellsByRow layout mode
  cellsByRow: {
    columnWidth: 200,
    rowHeight: 150
  },
  // options for masonry layout mode
  masonry: {
    columnWidth: ".grid-sizer"
  }
});

//Filter Portfolio Projets
$(".filter a").click(function(e) {
  var selector = $(this).attr("data-filter");
  $grid.isotope({
    filter: selector
  });
  toggleSelected($(e.target).parent(), "selected");
  return false;
});

//Portfolio Projet open
$(".projet").click(function() {
  toggleSelected($(".page"), "visible");
  loadInfos($(this).attr("id"));
  return false;
});
