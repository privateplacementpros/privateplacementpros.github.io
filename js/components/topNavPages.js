function insertTopNavPages() {
    return `
        <!-- Main Menu -->
        <nav class="main-menu navbar-expand-md">
            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                    <li class="hom_menuitem"><a href="/index.html">HOME</a></li>
                    <li class="ppp_menuitem"><a href="/pages/ppp.html">PPP</a></li>
                    <li class="mtn_menuitem"><a href="/pages/mtn.html">MTN</a></li>
                    <li class="str_menuitem"><a href="/pages/strategy.html">The Strategy</a></li>
                    <li class="pro_menuitem"><a href="/pages/process.html">The Process</a></li>
                    <li class="con_menuitem"><a href="/pages/contact.html">Contact Us</a></li>
                </ul>
            </div>

        </nav>
    `;
}