export class Vacuum {
  productName: string;
  price: number;
  imghero: string;
  imgsmall: string;
  discriptionlandpageh2: string;
  discriptionlandpagespan: string;
  ppinfoheroheader: string;
  h1nfopage1: string;
  discriptioninfopage1: string;
  h1infopage2: string;
  discriptioninfopage2: string;
  readmorebtn: string;
  addtocartbtn: string;
  id: number;
  category: string;

  constructor(
    name: string,
    price: number,
    imghero: string,
    imgsmall: string,
    discriptionlandpageh2: string,
    discriptionlandpagespan: string,
    ppinfoheroheader: string,
    h1nfopage1: string,
    discriptioninfopage1: string,
    h1infopage2: string,
    discriptioninfopage2: string,
    readmorebtn: string,
    addtocartbtn: string,
    id: number,
    category: string
  ) {
    this.productName = name;
    this.price = price;
    this.imghero = imghero;
    this.imgsmall = imgsmall;
    this.discriptionlandpageh2 = discriptionlandpageh2;
    this.discriptionlandpagespan = discriptionlandpagespan;
    this.ppinfoheroheader = ppinfoheroheader;
    this.h1nfopage1 = h1nfopage1;
    this.discriptioninfopage1 = discriptioninfopage1;
    this.h1infopage2 = h1infopage2;
    this.discriptioninfopage2 = discriptioninfopage2;
    this.readmorebtn = readmorebtn;
    this.addtocartbtn = addtocartbtn;
    this.id = id;
    this.category = category;
  }
}

export class Img {
  logo: string;
  wirelessimg: string;
  powerfullimg: string;
  robotimg: string;
  imgContainerFooter: string;

  constructor(
    logo: string,
    wirelessimg: string,
    powerfullimg: string,
    robotimg: string,
    imgContainerFooter: string
  ) {
    this.logo = logo;
    this.wirelessimg = wirelessimg;
    this.powerfullimg = powerfullimg;
    this.robotimg = robotimg;
    this.imgContainerFooter = imgContainerFooter;
  }
}

// <header class="header">
// <div>SUCKIT</div> SKAPA EN DIV VIA JS SOM APPENDAS TILL HEADER. SEN SKAPA EN IMG TAG DÄR LOGGAN KAN LIGGA
// <!-- <img src="/src/assets/suckitlogo.png" alt="Logo Suck'it" class="logo"/> -->
// <div class="basketcnt">
//   <div class="counter-container" id="cCnt">
// 	<!-- <span id="counter">1</span> -->
//   </div>
// 	<button id="btnCart" type="button" class="btnCartFa">
// 	  <i class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>
// 	</button>
// </div>
// 	<input class="menu-btn" type="checkbox" id="menu-btn" />
// 	<label class="menu-icon" for="menu-btn">
// 	  <span class="nav-icon"></span>
// 	</label>
// 	<ul class="menu">
// 	  <li><a href="#navet" class="hem">Hem</a></li>
// 	  <li><a href="#products">Produkter</a></li>
// 	  <li><a href="#footer" class="kontakt">Kontakt</a></li>
// 	</ul>

//   </header>
// 	<div id="myModal" class="modal">
// 		<div class="modcnt">
// 		  <div class="modal-content">
// 			<span class="close">&times;</span>
// 			  <div id="displayCartModal" class="theFrame">
// 				<h2 class="headingcart">Varukorg</h2>

// 			  </div>
// 			  <div class="totalSpans">
// 				<span>Total summa: </span>
// 				<span id="totalSpan"></span>
// 			  </div>
// 			  <div class="btnsDiv">
// 				<button id="btnHandla" class="btHandla">Fortsätt Handla</button>
// 				<button id="btnKassa" class="btKassa"><a id="checkoutTag" href="./checkout.html"> Till Kassa</button></a>
// 			  </div>
// 			</div>
// 		  </div>

// 	</div>

// </section>

// <section class="hero">
// <div></div>
// <div class="welcomeBox">
//   <div class="welcomeBoxText">
// 	<h2>SUCK IT!</h2>
// 	<p>Köp din dammsugare idag!</p>
// 	<p>
// 	  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
// 	  placeat pariatur fugit fugiat ea, deleniti ad iusto dolore rem
// 	  vitae.
// 	</p>
// 	<a href="#products">Börja shoppa!</a>
//   </div>
// </div>
// <a href="#sectionProduct">
//   <!-- <i class="fa fa-arrow-down"></i> -->
// </a>
// </section>

// <section id="products">
// <div id="productmaincontainer">
// <div id="productcontentcontainer">
//   <h2 id="categoryheader">Vilken dammsugare är du ute efter?</h2>

//   <!-- Kategoriknappar -->
//   <div id="choosecategorybtn">
// 	<a href="#wireless"><button id="btncategoryone"
// 	  >Sladdlös
// 	  <!-- <img
// 		src="/src/assets/vacuum-cleaner-no-wire.png"
// 		alt="Sladdlös dammsugare ikon"
// 		width="50"
// 		height="50"
// 	  /> --> HÄMTA ID btncategoryone, SKAPA SEN EN IMG TAG SOM APPENDAS TILL btncategoryone DÄR BILDEN src/assets/vacuum-cleaner-no-wire.png KAN LIGGA
// 	</button></a>
// 	<a href="#powerfull"><button id="btncategorytwo"
// 	  >Kraftfull
// 	  <!-- <img
// 		src="/src/assets/vacuum-power.png"
// 		alt="Kraftfull dammsugare ikon"
// 		width="50"
// 		height="50"
// 	  /> --> HÄMTA ID btncategorytwo, SKAPA SEN EN IMG TAG SOM APPENDAS TILL btncategorytwo DÄR BILDEN /src/assets/vacuum-power.png KAN LIGGA
// 	</button></a>
// 	<a href="#robot"><button id="btncategorythree"
// 	  >Robot
// 	  <!-- <img
// 		src="/src/assets/vacuum-cleaner-robot.png"
// 		alt="Robotdammsugare ikon"
// 		width="50"
// 		height="50"
// 	/></button></a> --> HÄMTA ID btncategorythree, SKAPA SEN EN IMG TAG SOM APPENDAS TILL btncategorythree DÄR BILDEN /src/assets/vacuum-cleaner-robot.png KAN LIGGA
//   </div>
//   <h1 id="wireless">Sladdlösa dammsugare</h1>

//   <div class="productflexwrap">

//   <!-- Kategori sladdlös -->
// 	<div id="wirelesscontainer"></div>
//   </div>
//   <h1 id="powerfull">Kraftfulla dammsugare</h1>
// <div class="productflexwrap">

//   <!-- Kategori kraftfull -->
//   <div id="powerfullcontainer"></div>
// </div>
//   <h1 id="robot">Robotdammsugare</h1>
// <div class="productflexwrap">

//   <!-- Kategori robot -->
//   <div id="robotcontainer"></div>
// </div>

// </div>
// </div>

// </section>
// </section>

// <section id="footer">

// <footer>

// <div class="footerInfo">

//   <div class="about">
// 	<p>Vilka är vi?</p>
// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, odit.</p>
// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, odit.</p>
//   </div>

//   <div class="contact">
// 	<p>Hur når ni oss?</p>
// 	<p> Renvägen 10</p>
// 	<p>wesuck@gmail.com</p>
// 	<p>070 888 45 11</p>
//   </div>

//   <div class="services">
// 	<p>Våra dammsugare:</p>
// 	<!-- <p><a href="#wireless"><img
// 	  src="/src/assets/vacuum-cleaner-no-wire.png"
// 	  alt="Sladdlös dammsugare ikon"
// 	  width="30"
// 	  height="30"
// 	/>Sladdlösa</a> </p> --> SKAPA EN IMG TAG DÄR /src/assets/vacuum-cleaner-no-wire.png KAN LIGGA. GE A TAGEN EN ID SOM DU KAN HÄMTA, DÄR SKA IMG TAGEN APPENDAS
// 	<!-- <p><a href="#powerfull"><img
// 	  src="/src/assets/vacuum-power.png"
// 	  alt="Sladdlös dammsugare ikon"
// 	  width="30"
// 	  height="30"
// 	/>Kraftfulla</a></p> --> SKAPA EN IMG TAG DÄR /src/assets/vacuum-power.png KAN LIGGA. GE A TAGEN EN ID SOM DU KAN HÄMTA, DÄR SKA IMG TAGEN APPENDAS
// 	<!-- <p><a href="#robot"><img
// 	  src="/src/assets/vacuum-cleaner-robot.png"
// 	  alt="Sladdlös dammsugare ikon"
// 	  width="30"
// 	  height="30"
// 	/>Robot</a></p> --> SKAPA EN IMG TAG DÄR /src/assets/vacuum-cleaner-robot.png KAN LIGGA. GE A TAGEN EN ID SOM DU KAN HÄMTA, DÄR SKA IMG TAGEN APPENDAS
//   </div>

// </div>

// <div class="socialmedia">
//   <a href="#" class="fa fa-facebook"></a>
//   <a href="#" class="fa fa-twitter"></a>
//   <a href="#" class="fa fa-instagram"></a>
// </div>

// <div class="imgContainerFooter">
//   <!-- <img src="assets/theonefooter.jpg" alt="Bild av tecknad dammsugare"> --> HÄMTA CLASS imgContainerFooter. SKAPA EN IMG TAG SOM KAN APPENDAS TILL imgContainerFooter
// </div>

// </footer>
// </section>
// </body>
// </html>
