$(document).ready(function () {
    // Fetch GitHub repos
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users/OliverOlesen/repos");
    request.send();

    request.onload = () => {
        if (request.status === 200) {
            let result = JSON.parse(request.response);
            console.log(result);

            result.forEach(repo => {
                let image = "";
                switch (repo.language) {
                    case "PHP":
                        image = "PHP";
                        break;
                    case "C#":
                        image = "CSHARP";
                        break;
                    case "CSS":
                        image = "CSS";
                        break;
                    case null:
                        console.log("NOLANGO");
                        image = "NOLANGO";
                        break;
                    default:
                        break;
                }

                // Use += to append HTML content
                $("#worktable").append(`
                    <div class="work-item">
                        <!-- Your existing HTML here -->
                    </div>
                `);
            });

            // Initialize Owl Carousel
            $(".owl-carousel").owlCarousel({
                center: false,
                items: 2,
                loop: true,
                margin: 0,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
                stagePadding: -45,
                responsive: {
                    600: {
                        items: 4
                    }
                }
            });

        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    });

// Rest of your code remains unchanged

// Open mailer with data
$("#Mailer").on("submit", function () {
    var sender_name = $('#sender_name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    window.location.href = "mailto:OliverOlesen@outlook.com?subject=" + sender_name + " || " + subject + "&body=" + message;
});

// Typing text animation script
var typed = new Typed(".typing", {
    strings: ["Developer", "Data technician", "It enthusiast"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});
