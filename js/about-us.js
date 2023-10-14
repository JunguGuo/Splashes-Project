$(document).ready(function () {
  $("#navbar-placeholder").load("navbar.html");
  $("#footer-placeholder").load("footer.html");

  // Load tutor gallery
  $.getJSON("tutors.json", function (data) {
    $.each(data, function (key, val) {
      let tutorDiv = `
                <div class="col-3 mb-4">
                    <div class="tutor-card" style="position: relative;">
                        <img src="${val.imageUrl}" alt="${val.name}" class="img-fluid">
                        <div class="tutor-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(117, 202, 242, 0.5); color: white; display: flex; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s;">
                            <div>
                                <h5>${val.name}</h5>
                                <p>${val.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`;

      $("#gallery").append(tutorDiv);
    });

    // Show overlay on hover
    $(".tutor-card").hover(
      function () {
        $(this).find(".tutor-overlay").css("opacity", "1");
      },
      function () {
        $(this).find(".tutor-overlay").css("opacity", "0");
      }
    );
  });
});
