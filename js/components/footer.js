function insertFooter() {
    return `
			<div class="auto-container">
				<div class="widgets-section">
					<div class="row clearfix">
						<!--Footer Column-->
						<div class="footer-column col-lg-4 col-md-6 col-sm-12">
							<div class="footer-widget logo-widget">
								<div class="logo">
									<a href="/index.html"><img src="/images/logo.png" alt="" /></a>
								</div>
								<div class="text"></div>
								<ul class="list-style-two">
									<li><span class="icon fa fa-phone"></span>
										<a href="tel:+0208 106 1793">+0208 106 1793 (London)</a>
									</li>
									<li><span class="icon fa fa-phone"></span>
										<a href="tel:+1 865 253 2764">+1 865 253 2764 (US)</a>
									</li>
									<li><span class="icon fa fa-envelope"></span>
										<a href="mailto:mike@privateplacementpros.com">mike@privateplacementpros.com</a>
									</li>
									<li><span class="icon fa fa-home"></span>Michael J Miller LTD, 71-75 Covent
										Garden, London, WC 2H9JQ</li>
									<li><span class="icon fa fa-home"></span>Companies House Registration
										14297215</li>
								</ul>
							</div>
						</div>

						<!--Footer Column-->
						<div class="footer-column col-lg-4 col-md-6 col-sm-12 pt-3">
							<div class="footer-widget links-widget">
								<h4>Links</h4>
								<ul class="list-link">
									<li><a href="/index.html">Home</a></li>
									<li><a href="/pages/ppp.html">Private Placement Program</a></li>
									<li><a href="/pages/mtn.html">Medium Term Notes</a></li>
									<li><a href="/pages/strategy.html">The Strategy</a></li>
									<li><a href="/pages/process.html">The Process</a></li>
									<li><a href="/pages/mmf.html">Alternative Investments</a></li>
									<li><a href="/pages/lending.html">Business Lending</a></li>
									<li><a href="/pages/contact.html">Contact Us</a></li>
								</ul>
							</div>
						</div>


						<!--Column-->
						<!--Footer Column-->
						<div class="footer-column col-lg-4 col-md-6 col-sm-12 pt-3">
							<div class="footer-widget gallery-widget">
								<h4>Location</h4>
								<div id="map" class="widget-content" style="width:250px;height:200px;">
									<a href="https://www.google.com/maps/place/71+Covent+Garden,+London,+UK/@51.5124832,-0.1244668,17z/data=!3m1!4b1!4m5!3m4!1s0x487604cb785132a1:0xbfbcabab4b2c905d!8m2!3d51.5124832!4d-0.1222728"
										target="_blank">
										<img src="/images/resource/map250x200q50.jpg">
									</a>
								</div>
								<p>&copy;2022-23, all rights reserved,<br />Michael J Miller
									Ltd</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	`;
}


function setCurrentClass(classname) {
	const els = document.getElementsByClassName(classname);
	Array.from(els).forEach((el) => {
		el.classList.add('current');
	});
}


function setCurrentPage() {
	const url = new URL(window.location);
	console.log(url.pathname);
	switch (url.pathname) {
		case '/':
		case '/index.html':
			setCurrentClass('hom_menuitem');
			break;
		case '/pages/ppp.html':
			setCurrentClass('ppp_menuitem');
			break;
		case '/pages/mtn.html':
			setCurrentClass('mtn_menuitem');
			break;
		case '/pages/strategy.html':
			setCurrentClass('str_menuitem');
			break;
		case '/pages/process.html':
			setCurrentClass('pro_menuitem');
			break;
		case '/pages/mmf.html':
			setCurrentClass('alt_menuitem');
			break;
		case '/pages/contact.html':
			setCurrentClass('con_menuitem');
			break;
	}
}