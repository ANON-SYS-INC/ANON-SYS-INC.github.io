var WeCloudDance = function () {
    "use strict";
    var e = $(window).width(),
        t = function () {
            $("#global_preloader").fadeOut(4000),
                setTimeout(function () {
                    $("#master").addClass("show")
                }, 400)
        },
        n = function () {
            var e = {
                init: function () {
                    var e = document.querySelectorAll(".main show");
                    if (0 === e.length)
                        return !1;
                    new Sortable.default(e, {
                        draggable: ".main show",
                        handle: ".footer",
                        mirror: {
                            appendTo: "body",
                            constrainDimensions: !0
                        }
                    }).on("drag:stop", () => {
                        setTimeout(function () {
                            var e;
                            e = 0,
                                jQuery(".footer").each(function () {
                                    e = jQuery(this).find(".container").length,
                                        jQuery(this).find(".container").html(e)
                                })
                        }, 200)
                    })
                }
            };
            jQuery(document).ready(function () {
                e.init()
            })
        },
        a = function () {
            var e = $(window).height() - 206;
            $(".chatbox .msg_card_body").css("height", e)
        };
    return {
        init: function () {
                var o;
                t(),
                    jQuery("#menu").length > 0 && $("#menu").metisMenu(),
                    jQuery(".metismenu > .mm-active ").each(function () {
                        !jQuery(this).children("ul").length > 0 && jQuery(this).addClass("active-no-child")
                    }),
                    $("#checkAll").on("change", function () {
                        $("td input:checkbox, .email-list .custom-checkbox input:checkbox").prop("checked", $(this).prop("checked"))
                    }),
                    $(".nav-control").on("click", function () {
                        $("#main-wrapper").toggleClass("menu-toggle"),
                            $(".hamburger").toggleClass("is-active")
                    }),
                    function () {
                        for (var e = window.location, t = $("ul#menu a").filter(function () {
                            return this.href == e
                        }).addClass("mm-active").parent().addClass("mm-active"); t.is("li");)
                            t = t.parent().addClass("mm-show").parent().addClass("mm-active")
                    }(),
                    $("ul#menu>li").on("click", function () {
                        "mini" === $("body").attr("data-sidebar-style") && (console.log($(this).find("ul")),
                            $(this).find("ul").stop())
                    }),
                    o = window.outerHeight, ((o = window.outerHeight) > 0 ? o : screen.height) && $(".content-body").css("min-height", o + 60 + "px"),
                    $('a[data-action="collapse"]').on("click", function (e) {
                        e.preventDefault(),
                            $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
                            $(this).closest(".card").children(".card-body").collapse("toggle")
                    }),
                    $('a[data-action="expand"]').on("click", function (e) {
                        e.preventDefault(),
                            $(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
                            $(this).closest(".card").toggleClass("card-fullscreen")
                    }),
                    $('[data-action="close"]').on("click", function () {
                        $(this).closest(".card").removeClass().slideUp("fast")
                    }),
                    $('[data-action="reload"]').on("click", function () {
                        var e = $(this);
                        e.parents(".card").addClass("card-load"),
                            e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
                            setTimeout(function () {
                                e.parents(".card").children(".card-loader").remove(),
                                    e.parents(".card").removeClass("card-load")
                            }, 2e3)
                    }),
                    function () {
                        const e = $(".header").innerHeight();
                        $(window).scroll(function () {
                            "horizontal" === $("body").attr("data-layout") && "static" === $("body").attr("data-header-position") && "fixed" === $("body").attr("data-sidebar-position") && ($(this.window).scrollTop() >= e ? $(".deznav").addClass("fixed") : $(".deznav").removeClass("fixed"))
                        })
                    }(),
                    jQuery(".dz-scroll").each(function () {
                        var e = jQuery(this).attr("id");
                        new PerfectScrollbar("#" + e, {
                            wheelSpeed: 2,
                            wheelPropagation: !0,
                            minScrollbarLength: 20
                        }).isRtl = !1
                    }),
                    e <= 991 && (jQuery(".menu-tabs .nav-link").on("click", function () {
                            jQuery(this).hasClass("open") ? (jQuery(this).removeClass("open"),
                                jQuery(".fixed-content-box").removeClass("active"),
                                jQuery(".hamburger").show()) : (jQuery(".menu-tabs .nav-link").removeClass("open"),
                                jQuery(this).addClass("open"),
                                jQuery(".fixed-content-box").addClass("active"),
                                jQuery(".hamburger").hide())
                        }),
                        jQuery(".close-fixed-content").on("click", function () {
                            jQuery(".fixed-content-box").removeClass("active"),
                                jQuery(".hamburger").removeClass("is-active"),
                                jQuery("#main-wrapper").removeClass("menu-toggle"),
                                jQuery(".hamburger").show()
                        })),
                    jQuery(".bell-link").on("click", function () {
                        jQuery(".chatbox").addClass("active")
                    }),
                    jQuery(".chatbox-close").on("click", function () {
                        jQuery(".chatbox").removeClass("active")
                    }),
                    jQuery(".deznav-scroll").length > 0 && (new PerfectScrollbar(".deznav-scroll").isRtl = !1),
                    $(".btn-number").on("click", function (e) {
                        e.preventDefault(),
                            fieldName = $(this).attr("data-field"),
                            type = $(this).attr("data-type");
                        var t = $("input[name='" + fieldName + "']"),
                            n = parseInt(t.val(), 10);
                        isNaN(n) ? t.val(0) : "minus" == type ? t.val(n - 1) : "plus" == type && t.val(n + 1)
                    }),
                    jQuery(".dz-chat-user-box .dz-chat-user").on("click", function () {
                        jQuery(".dz-chat-user-box").addClass("d-none"),
                            jQuery(".dz-chat-history-box").removeClass("d-none")
                    }),
                    jQuery(".dz-chat-history-back").on("click", function () {
                        jQuery(".dz-chat-user-box").removeClass("d-none"),
                            jQuery(".dz-chat-history-box").addClass("d-none")
                    }),
                    jQuery(".dz-fullscreen").on("click", function () {
                        jQuery(".dz-fullscreen").toggleClass("active")
                    }),
                    jQuery(".dz-fullscreen").on("click", function (e) {
                        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
                    }),
                    jQuery(".show-pass").on("click", function () {
                        jQuery(this).toggleClass("active"),
                            "password" == jQuery("#dz-password").attr("type") ? jQuery("#dz-password").attr("type", "text") : "text" == jQuery("#dz-password").attr("type") && jQuery("#dz-password").attr("type", "password")
                    }),
                    $(".heart").on("click", function () {
                        $(this).toggleClass("heart-blast")
                    }),
                    $(".dz-load-more").on("click", function (e) {
                        e.preventDefault(),
                            $(this).append(' <i class="fa fa-refresh"></i>');
                        var t = $(this).attr("rel"),
                            n = $(this).attr("id");
                        $.ajax({
                            method: "POST",
                            url: t,
                            dataType: "html",
                            success: function (e) {
                                $("#" + n + "Content").append(e),
                                    $(".dz-load-more i").remove()
                            }
                        })
                    }),
                    jQuery("#lightgallery").length > 0 && $("#lightgallery").lightGallery({
                        loop: !0,
                        thumbnail: !0,
                        exThumbImage: "data-exthumbimage"
                    }),
                    n(),
                    jQuery("#smartwizard").length > 0 && $(document).ready(function () {
                        $("#smartwizard").smartWizard()
                    }),
                    $(".custom-file-input").on("change", function () {
                        var e = $(this).val().split("\\").pop();
                        $(this).siblings(".custom-file-label").addClass("selected").html(e)
                    })
            },
            load: function () {
                t(),
                    jQuery(".default-select").length > 0 && jQuery(".default-select").selectpicker()
            },
            resize: function () {
                a()
            }
    }
}();
jQuery(document).ready(function () {
        $('[data-toggle="popover"]').popover(),
            WeCloudDance.init()
    }),
    jQuery(window).on("load", function () {
        "use strict";
        WeCloudDance.load()
    }),
    jQuery(window).on("resize", function () {
        "use strict";
        WeCloudDance.resize()
    });