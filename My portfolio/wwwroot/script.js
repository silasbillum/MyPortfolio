document.getElementById('openMailButton').addEventListener('click', function () {
    var sender_name = document.getElementById('sender_name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    window.location.href = 'mailto:stilhofsvej46@gmail.com?subject=' + sender_name + ' || ' + subject + '&body=' + message;
});
function scrollToSection() {
    var targetSection = document.getElementById('contact');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
// 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

//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



$(document).ready(function () {
    let request = new XMLHttpRequest();
    let githubToken = "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";
    request.open("GET", "https://api.github.com/user/repos");
    request.setRequestHeader("Authorization", "Bearer " + githubToken);

    request.send();
    request.onload = () => {
        if (request.status == 200) {
            let result = JSON.parse(request.response);
            let publicRepos = result.filter(repo => !repo.private);
            console.log(publicRepos);
            publicRepos.forEach(repo => {
                let image = "";
                console.log(repo.language);
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
                    case "HTML":
                        image = "HTML";
                        break;
                    case "C++":
                        image = "C++";
                        break;
                   
                    case null:
                        console.log("NOLANGO");
                        image = "NOLANGO";
                        break;
                    default:
                        break;
                }
                document.getElementById("worktable").innerHTML +=
                    `
                <div class="work-item"">
                    <div class="container">
                    <div style="height:150px;">
                        <div >
                            <img src="Images/${image}.png" style="max-width:90px;" alt="Main coding language">
                        </div>
                    </div>
                        <div style="inline-size: 110px;overflow-wrap: break-word;">
                            <p>${repo.name}</p>
                        </div>
                        <div style="width:110px;display:flex;justify-content:center;">
                            <form action="${repo.html_url}" target="_blank">
                                <button class="button-design" type="submit" style=" height:28px;width:80px !important;font-size:12px;">Repo</button>
                            </form>
                        </div>
                    </div>
                </div>
                `;
            });

            $(".owl-carousel").owlCarousel({
                center: false,
                items: 20,
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
    }

    $(window).scroll(function () {

        // sticky navbar on scroll script
        if (this.scrollY > 150) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script
    $('.scroll-up-btn').click(function () {

        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");

    });

    $('.navbar .menu li a').click(function () {

        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");

    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1, 'swing', function () {
                window.location.hash = target;
            });
        });
    });


    // Open mailer with data
   

    // typing text animation script
    var typed = new Typed(".typing", {

        strings: ["Developer", "Data technician", "It enthusiast"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true

    });

    var typed = new Typed(".typing-2", {

        strings: ["Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
});