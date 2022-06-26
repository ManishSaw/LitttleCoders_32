const createNav = () => {
  let nav = document.querySelector('.navbar');

    nav.innerHTML ='
    <div class="nav">
      <img src="img/logo.png" class="brand-logo" alt="">
      <div class="nav-items">
        <div class="search">
          <input type="text" class="search-box" placeholder="Search items, product">
          <button class="search-btn">search</button>
        </div>
        <a href="#"></a> <img src="img/user.png" alt=""></a>
        <a href="#"></a><img src="img/cart.png" alt=""></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item"><a href="#" class="link">home</a></li>
      <li class="link-item"><a href="#" class="link">Wood</a></li>
      <li class="link-item"><a href="#" class="link">Textile</a></li>
      <li class="link-item"><a href="#" class="link">Clay</a></li>
      <li class="link-item"><a href="#" class="link">Canvas</a></li>
      <li class="link-item"><a href="#" class="link">Metal</a></li>
      <li class="link-item"><a href="#" class="link">Stone</a></li>
      <li class="link-item"><a href="#" class="link">Glass</a></li>
      <li class="link-item"><a href="#" class="link">Handloom Saree</a></li>
    </ul>
    ';
}
createNav();
