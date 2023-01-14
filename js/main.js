! function () {
    const e = document.querySelector(".burger"),
        t = document.querySelectorAll(".links"),
        s = document.querySelector("body");

    function o(t, o) {
        t ? (e.classList.add("active"), o.classList.add("active"), s.classList.add("no-scroll")) : (e.classList.remove("active"), o.classList.remove("active"), s.classList.remove("no-scroll"))
    }

    function c(e) {
        const t = document.querySelector(".popup");
        e ? (t.classList.add("active"), s.classList.add("no-scroll")) : (t.classList.remove("active"), s.classList.remove("no-scroll"))
    }
    document.addEventListener("DOMContentLoaded", (function () {
        const e = document.querySelector("#form"),
            t = document.querySelector(".loader"),
            o = document.querySelector("#form2");
        async function c(o) {
            if (o.preventDefault(), "form2" === this.id) {
                if (console.log("это form2"), 0 !== function (e) {
                        let t = 0,
                            s = document.querySelectorAll("._req-2");
                        for (let e = 0; e < s.length; e++) {
                            const o = s[e];
                            a(o), o.classList.contains("_email") ? i(o.value) && (l(o), t++) : o.classList.contains("_num") ? parseInt(o.value) || (l(o), t++) : "" === o.value && (l(o), t++)
                        }
                        return t
                    }()) return !1; {
                    t.classList.add("active"), s.classList.add("no-scroll");
                    let o = await fetch("sendmail2.php", {
                        method: "POST"
                    });
                    o.ok ? (await o.json(), e.reset(), t.classList.remove("active"), s.classList.remove("no-scroll")) : (alert("ошибка!"), t.classList.remove("active"), s.classList.remove("no-scroll"))
                }
            } else {
                if (0 !== function (e) {
                        let t = 0,
                            s = document.querySelectorAll("._req");
                        for (let e = 0; e < s.length; e++) {
                            const o = s[e];
                            n(o), o.classList.contains("_email") ? i(o.value) && (r(o), t++) : o.classList.contains("_num") ? parseInt(o.value) || (r(o), t++) : "" === o.value && (r(o), t++)
                        }
                        return t
                    }()) return !1; {
                    t.classList.add("active");
                    let s = await fetch("sendmail.php", {
                        method: "POST"
                    });
                    s.ok ? (await s.json(), e.reset(), t.classList.remove("active")) : (alert("ошибка!"), t.classList.remove("active"))
                }
            }
        }

        function r(e) {
            const t = e.closest(".popup__field-wrapper");
            t.parentElement.classList.add("_error"), t.classList.add("_error")
        }

        function n(e) {
            const t = e.closest(".popup__field-wrapper");
            t.parentElement.classList.remove("_error"), t.classList.remove("_error")
        }

        function l(e) {
            const t = e.closest(".contacts__field-wrapper");
            t.parentElement.classList.add("_error"), t.classList.add("_error")
        }

        function a(e) {
            const t = e.closest(".contacts__field-wrapper");
            t.parentElement.classList.remove("_error"), t.classList.remove("_error")
        }

        function i(e) {
            return !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(e)
        }
        e.addEventListener("submit", c), o.addEventListener("submit", c)
    })), document.addEventListener("click", (function ({
        target: e
    }) {
        const t = document.querySelector(".header__menu");
        e.closest(".burger") ? t.classList.contains("active") ? o(!1, t) : o(!0, t) : e.closest(".header__menu") ? e.closest(".links") && o(!1, t) : o(!1, t), e.closest(".to-popup") ? (o(!1, t), c(!0)) : e.classList.contains("popup") || e.closest(".popup__close") ? c(!1) : e.closest(".popup__body") && c(!0)
    })), t.forEach((e => {
        e.addEventListener("click", (() => {
            const t = e.getAttribute("data-link");
            document.querySelector(`#${t}`).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }))
    })), document.querySelector(".header__button-down").addEventListener("click", (function () {
        const e = document.querySelector(".header__button-down").getAttribute("data-link");
        document.querySelector(`#${e}`).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }))

    const sr = ScrollReveal({
        distance: '40px',
        duration: 2000,
        delay: 400
    })
    sr.reveal('.header__title')
    sr.reveal('.header__button-down', {
        delay: 200,
        origin: 'top'
    })
    sr.reveal('.header__info', {
        delay: 200,
        origin: 'left'
    })
    sr.reveal('.about-col-1', {
        delay: 200,
        duration: 1000,
        origin: 'top'
    })
    sr.reveal('.about-col-2', {
        delay: 200,
        duration: 1200,
        origin: 'top'
    })
    sr.reveal('.about-col-3', {
        delay: 200,
        duration: 1400,
        origin: 'top'
    })
    sr.reveal('.about-col-4', {
        delay: 200,
        duration: 1600,
        origin: 'top'
    })
    sr.reveal('.about__services-title', {
        delay: 200,
        duration: 1500,
        origin: 'left'
    })
    sr.reveal('.about__services-col', {
        delay: 200,
        duration: 1500,
        origin: 'right'
    })
    sr.reveal('.about__info-col-1', {
        delay: 200,
        duration: 1500,
        origin: 'left'
    })
    sr.reveal('.about__info-col-2', {
        delay: 200,
        duration: 1500,
        origin: 'right'
    })


    sr.reveal('.services__col--1', {
        delay: 200,
        duration: 1500,
        origin: 'left'
    })
    sr.reveal('.contacts__title', {
        delay: 200,
        duration: 1500,
        origin: 'bottom'
    })
    sr.reveal('.contacts__col-1', {
        delay: 200,
        duration: 1200,
        origin: 'left'
    })
    sr.reveal('.contacts__col-2', {
        delay: 200,
        duration: 1200,
        origin: 'right'
    })

}();