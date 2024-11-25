document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-e5076881' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-99ed1115' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-1fecf6a9' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-393c25ce' );
});
var ssLinksParent = document.querySelector( '.uagb-block-7ae6c2ab' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
 });