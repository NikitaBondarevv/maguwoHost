$('.menu-button').on('click', () => $('.toggle-navigation').animationToggle());

$(window).on('resize', () => $('.toggle-navigation').css({ display: 'none' }));