// // $(function() {
// //     $('.box').click(function() {
// //         $('.box').fadeOut(1000)
// //     });
// // });

// // $(function() {
// //     $('.box').click(function() {
// //         $('.box').slideDown()
// //         console.log(".");
// //     });
// // });

// // $(function() {
// //     $('.box').click(function() {
// //         $('.textView').animate({ height: '50px' }, '1000');
// //         console.log(".");
// //     });
// // });

// // $(function() {
// //     $('.box').click(function() {
// //         $('.box').animate({ height: '500px', left: '60%' }, '1000');
// //         console.log(".");
// //     });
// // });

// // $(function() {
// //     $('input[type = "button"]').hover(function() {
// //         $(this).addClass('over');

// //     }, function() {
// //         $(this).removeClass('over');
// //     });
// // }); 

// $(function() {
//     $('.button').click(function() {
//         var num = $('ul>li:last-child').text();
//         $(`<li>${Number(num)+1}</li>`).appendTo('ul');

//     });
// });
// $(function() {
//     $('.remove').click(function() {
//         $('ul>li:last-child').remove();
//     });
// });



$(function() {
    $('ul').slideUp(0)

    $(`div`).click(function() {
        $('ul').slideUp(1000)
        $(this).children('ul').slideDown(1000);

    });
});