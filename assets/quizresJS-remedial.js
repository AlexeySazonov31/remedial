let resultArrQuestions = JSON.parse(localStorage.getItem("resultArrQuestion"));

const arrRecomedation = [
  {
    name: "retinol",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1999"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream" style="max-width: 680px;" data-image-id="31975381336108"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream for Face" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_180x.png?v=1666188636 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_360x.png?v=1666188636 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_540x.png?v=1666188636 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_720x.png?v=1666188636 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_900x.png?v=1666188636 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1080x.png?v=1666188636 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1296x.png?v=1666188636 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1512x.png?v=1666188636 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1728x.png?v=1666188636 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1944x.png?v=1666188636 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2160x.png?v=1666188636 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2376x.png?v=1666188636 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2592x.png?v=1666188636 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2808x.png?v=1666188636 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_3024x.png?v=1666188636 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_180x.png?v=1666188636 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_360x.png?v=1666188636 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_540x.png?v=1666188636 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_720x.png?v=1666188636 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_900x.png?v=1666188636 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1080x.png?v=1666188636 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1296x.png?v=1666188636 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1512x.png?v=1666188636 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1728x.png?v=1666188636 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_1944x.png?v=1666188636 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2160x.png?v=1666188636 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2376x.png?v=1666188636 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2592x.png?v=1666188636 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_2808x.png?v=1666188636 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_f4c26627-6e53-4baa-9c1d-c15750a58eb5_3024x.png?v=1666188636 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream for Face" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_180x.png?v=1666191021 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_360x.png?v=1666191021 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_540x.png?v=1666191021 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_720x.png?v=1666191021 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_900x.png?v=1666191021 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1080x.png?v=1666191021 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1296x.png?v=1666191021 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1512x.png?v=1666191021 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1728x.png?v=1666191021 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1944x.png?v=1666191021 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2160x.png?v=1666191021 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2376x.png?v=1666191021 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2592x.png?v=1666191021 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2808x.png?v=1666191021 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_3024x.png?v=1666191021 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_180x.png?v=1666191021 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_360x.png?v=1666191021 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_540x.png?v=1666191021 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_720x.png?v=1666191021 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_900x.png?v=1666191021 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1080x.png?v=1666191021 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1296x.png?v=1666191021 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1512x.png?v=1666191021 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1728x.png?v=1666191021 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_1944x.png?v=1666191021 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2160x.png?v=1666191021 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2376x.png?v=1666191021 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2592x.png?v=1666191021 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_2808x.png?v=1666191021 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_3024x.png?v=1666191021 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40268034179116"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-60% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream" title="Retinol Cream for Face" class="product-card__name h4">Retinol Cream for Face</a><a href="/products/retinol-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6837442150444" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="273" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text"> 273 reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$19.99</span> <s class="product-card__regular-price"><span class="money">$49.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Anti-Aging Moisturizing Retinol Cream for Face</h4><h5 class="productRightText2">Deeply moisturizes & restores</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225" alt="clSmQz">Collagen</div></div>',
  },
  {
    name: "eye cream",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1699"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/eye-cream" style="max-width: 680px;" data-image-id="31649178615852"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Eye Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_180x.png?v=1664197358 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_360x.png?v=1664197358 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_540x.png?v=1664197358 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_720x.png?v=1664197358 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_900x.png?v=1664197358 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1080x.png?v=1664197358 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1296x.png?v=1664197358 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1512x.png?v=1664197358 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1728x.png?v=1664197358 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1944x.png?v=1664197358 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2160x.png?v=1664197358 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2376x.png?v=1664197358 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2592x.png?v=1664197358 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2808x.png?v=1664197358 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_3024x.png?v=1664197358 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_180x.png?v=1664197358 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_360x.png?v=1664197358 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_540x.png?v=1664197358 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_720x.png?v=1664197358 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_900x.png?v=1664197358 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1080x.png?v=1664197358 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1296x.png?v=1664197358 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1512x.png?v=1664197358 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1728x.png?v=1664197358 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_1944x.png?v=1664197358 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2160x.png?v=1664197358 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2376x.png?v=1664197358 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2592x.png?v=1664197358 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_2808x.png?v=1664197358 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_36b6098a-1801-4265-97bc-65390f542090_3024x.png?v=1664197358 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Eye Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_180x.png?v=1666190926 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_360x.png?v=1666190926 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_540x.png?v=1666190926 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_720x.png?v=1666190926 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_900x.png?v=1666190926 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1080x.png?v=1666190926 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1296x.png?v=1666190926 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1512x.png?v=1666190926 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1728x.png?v=1666190926 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1944x.png?v=1666190926 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2160x.png?v=1666190926 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2376x.png?v=1666190926 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2592x.png?v=1666190926 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2808x.png?v=1666190926 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_3024x.png?v=1666190926 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_180x.png?v=1666190926 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_360x.png?v=1666190926 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_540x.png?v=1666190926 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_720x.png?v=1666190926 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_900x.png?v=1666190926 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1080x.png?v=1666190926 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1296x.png?v=1666190926 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1512x.png?v=1666190926 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1728x.png?v=1666190926 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_1944x.png?v=1666190926 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2160x.png?v=1666190926 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2376x.png?v=1666190926 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2592x.png?v=1666190926 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_2808x.png?v=1666190926 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_de8930f3-78b7-4007-82b2-e7977a358396_3024x.png?v=1666190926 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="eye-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40290122858540"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-66% </div></div><div class="product-card__info"> <a href="/collections/all/products/eye-cream" title="Eye Cream" class="product-card__name h4">Eye Cream</a><a href="/products/eye-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-id="6842897465388" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="207" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text">207 reviews</span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$16.99</span> <s class="product-card__regular-price"><span class="money">$49.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Eye Cream</h4><h5 class="productRightText2">Removes puffinesses and dark circles</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225" alt="clSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz9.png?v=1673251001" alt="cfSmQz">Caffeine</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz1.png?v=1672838215" alt="ncSmQz">Niacinamide</div></div>',
  },
  {
    name: "dark spot",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1999"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/dark-spot-corrector" style="max-width: 680px;" data-image-id="31608648794156"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Dark Spot Corrector" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_180x.png?v=1663942376 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_360x.png?v=1663942376 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_540x.png?v=1663942376 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_720x.png?v=1663942376 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_900x.png?v=1663942376 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1080x.png?v=1663942376 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1296x.png?v=1663942376 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1512x.png?v=1663942376 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1728x.png?v=1663942376 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1944x.png?v=1663942376 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2160x.png?v=1663942376 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2376x.png?v=1663942376 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2592x.png?v=1663942376 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2808x.png?v=1663942376 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_3024x.png?v=1663942376 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_180x.png?v=1663942376 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_360x.png?v=1663942376 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_540x.png?v=1663942376 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_720x.png?v=1663942376 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_900x.png?v=1663942376 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1080x.png?v=1663942376 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1296x.png?v=1663942376 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1512x.png?v=1663942376 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1728x.png?v=1663942376 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_1944x.png?v=1663942376 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2160x.png?v=1663942376 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2376x.png?v=1663942376 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2592x.png?v=1663942376 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_2808x.png?v=1663942376 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_d54a0df2-16eb-4fce-8c53-4836cbe53abd_3024x.png?v=1663942376 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Dark Spot Corrector" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_180x.png?v=1666190739 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_360x.png?v=1666190739 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_540x.png?v=1666190739 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_720x.png?v=1666190739 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_900x.png?v=1666190739 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1080x.png?v=1666190739 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1296x.png?v=1666190739 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1512x.png?v=1666190739 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1728x.png?v=1666190739 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1944x.png?v=1666190739 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2160x.png?v=1666190739 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2376x.png?v=1666190739 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2592x.png?v=1666190739 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2808x.png?v=1666190739 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_3024x.png?v=1666190739 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_180x.png?v=1666190739 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_360x.png?v=1666190739 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_540x.png?v=1666190739 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_720x.png?v=1666190739 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_900x.png?v=1666190739 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1080x.png?v=1666190739 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1296x.png?v=1666190739 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1512x.png?v=1666190739 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1728x.png?v=1666190739 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_1944x.png?v=1666190739 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2160x.png?v=1666190739 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2376x.png?v=1666190739 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2592x.png?v=1666190739 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_2808x.png?v=1666190739 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_28aff8b3-8d70-4f39-a788-0431d70ec7e0_3024x.png?v=1666190739 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="dark-spot-corrector" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40290062106668"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-33% </div></div><div class="product-card__info"> <a href="/collections/all/products/dark-spot-corrector" title="Dark Spot Corrector" class="product-card__name h4">Dark Spot Corrector</a><a href="/products/dark-spot-corrector#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-id="6842890027052" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="82" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text">82 reviews</span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$19.99</span> <s class="product-card__regular-price"><span class="money">$29.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Dark Spot Corrector for Body & Face</h4><h5 class="productRightText2">Evenes dark spots & deeply nourishes</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz10.png?v=1673251001" alt="clSmQz">Ascorbic acid</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz8.png?v=1673251001" alt="cfSmQz">Hyaluronic acid</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz5.png?v=1673251001" alt="ncSmQz">Shea and jojoba oils</div></div>',
  },
  {
    name: "neck firming",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1699"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/neck-firming-cream" style="max-width: 680px;" data-image-id="31649324564524"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Anti-Aging Neck Firming Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_180x.png?v=1664197879 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_360x.png?v=1664197879 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_540x.png?v=1664197879 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_720x.png?v=1664197879 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_900x.png?v=1664197879 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1080x.png?v=1664197879 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1296x.png?v=1664197879 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1512x.png?v=1664197879 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1728x.png?v=1664197879 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1944x.png?v=1664197879 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2160x.png?v=1664197879 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2376x.png?v=1664197879 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2592x.png?v=1664197879 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2808x.png?v=1664197879 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_3024x.png?v=1664197879 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_180x.png?v=1664197879 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_360x.png?v=1664197879 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_540x.png?v=1664197879 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_720x.png?v=1664197879 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_900x.png?v=1664197879 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1080x.png?v=1664197879 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1296x.png?v=1664197879 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1512x.png?v=1664197879 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1728x.png?v=1664197879 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_1944x.png?v=1664197879 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2160x.png?v=1664197879 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2376x.png?v=1664197879 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2592x.png?v=1664197879 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_2808x.png?v=1664197879 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_ef3aa19a-d268-4dd9-b4a9-5e79a3797051_3024x.png?v=1664197879 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Anti-Aging Neck Firming Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_180x.png?v=1666190670 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_360x.png?v=1666190670 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_540x.png?v=1666190670 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_720x.png?v=1666190670 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_900x.png?v=1666190670 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1080x.png?v=1666190670 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1296x.png?v=1666190670 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1512x.png?v=1666190670 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1728x.png?v=1666190670 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1944x.png?v=1666190670 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2160x.png?v=1666190670 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2376x.png?v=1666190670 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2592x.png?v=1666190670 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2808x.png?v=1666190670 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_3024x.png?v=1666190670 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_180x.png?v=1666190670 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_360x.png?v=1666190670 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_540x.png?v=1666190670 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_720x.png?v=1666190670 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_900x.png?v=1666190670 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1080x.png?v=1666190670 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1296x.png?v=1666190670 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1512x.png?v=1666190670 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1728x.png?v=1666190670 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_1944x.png?v=1666190670 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2160x.png?v=1666190670 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2376x.png?v=1666190670 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2592x.png?v=1666190670 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_2808x.png?v=1666190670 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_e3cb6e59-ed71-46b9-81a8-ec0b48d0a927_3024x.png?v=1666190670 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="neck-firming-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40325309464620"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-15% </div></div><div class="product-card__info"> <a href="/collections/all/products/neck-firming-cream" title="Anti-Aging Neck Firming Cream" class="product-card__name h4">Anti-Aging Neck Firming Cream</a><a href="/products/neck-firming-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-id="6851227123756" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="4.85" data-number-of-reviews="13" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="4.85" tabindex="0" aria-label="4.85 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text">13 reviews</span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$16.99</span> <s class="product-card__regular-price"><span class="money">$19.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Anti-Aging Neck Firming Cream</h4><h5 class="productRightText2">Lifts & brings back neck skin elasticity</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz6.png?v=1673251001" alt="clSmQz">Aloe Vera</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz12.png?v=1673251001" alt="cfSmQz">Chamomile extract</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="ncSmQz">Vitamin E and phospholipids</div></div>',
  },
  {
    name: "collagen",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"> <div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1699"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/collagen-cream" style="max-width: 680px;" data-image-id="31608846483500"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Collagen Cream for Face" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_180x.png?v=1663944251 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_360x.png?v=1663944251 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_540x.png?v=1663944251 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_720x.png?v=1663944251 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_900x.png?v=1663944251 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1080x.png?v=1663944251 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1296x.png?v=1663944251 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1512x.png?v=1663944251 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1728x.png?v=1663944251 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1944x.png?v=1663944251 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2160x.png?v=1663944251 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2376x.png?v=1663944251 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2592x.png?v=1663944251 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2808x.png?v=1663944251 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_3024x.png?v=1663944251 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_180x.png?v=1663944251 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_360x.png?v=1663944251 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_540x.png?v=1663944251 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_720x.png?v=1663944251 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_900x.png?v=1663944251 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1080x.png?v=1663944251 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1296x.png?v=1663944251 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1512x.png?v=1663944251 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1728x.png?v=1663944251 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_1944x.png?v=1663944251 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2160x.png?v=1663944251 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2376x.png?v=1663944251 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2592x.png?v=1663944251 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_2808x.png?v=1663944251 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_a2c73cde-a633-4d0c-ad7d-d0811ba61c67_3024x.png?v=1663944251 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Collagen Cream for Face" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_180x.png?v=1666190726 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_360x.png?v=1666190726 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_540x.png?v=1666190726 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_720x.png?v=1666190726 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_900x.png?v=1666190726 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1080x.png?v=1666190726 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1296x.png?v=1666190726 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1512x.png?v=1666190726 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1728x.png?v=1666190726 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1944x.png?v=1666190726 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2160x.png?v=1666190726 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2376x.png?v=1666190726 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2592x.png?v=1666190726 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2808x.png?v=1666190726 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_3024x.png?v=1666190726 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_180x.png?v=1666190726 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_360x.png?v=1666190726 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_540x.png?v=1666190726 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_720x.png?v=1666190726 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_900x.png?v=1666190726 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1080x.png?v=1666190726 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1296x.png?v=1666190726 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1512x.png?v=1666190726 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1728x.png?v=1666190726 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_1944x.png?v=1666190726 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2160x.png?v=1666190726 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2376x.png?v=1666190726 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2592x.png?v=1666190726 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_2808x.png?v=1666190726 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_ab3146a7-26df-4d4f-bce0-663cd8539cf8_3024x.png?v=1666190726 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="collagen-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40243548094508"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"> <path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path> </svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-15% </div></div><div class="product-card__info"> <a href="/collections/all/products/collagen-cream" title="Collagen Cream for Face" class="product-card__name h4">Collagen Cream for Face</a> <a href="/products/collagen-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-id="6831024144428" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="117" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text">117 reviews</span> </div></div></a> <div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$16.99</span> <s class="product-card__regular-price"><span class="money">$19.99</span></s> <span class="visually-hidden">Sale price</span> </div><ul class="product-card__swatch list-unstyled"></ul> </div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Collagen Cream for Face</h4><h5 class="productRightText2">Restores a radiant youthful glow to your skin</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225" alt="clSmQz">Collagen</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="cfSmQz">Vitamin E</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz8.png?v=1673251001" alt="ncSmQz">Hyaluronic acid</div></div>',
  },
  {
    name: "glycolic acid pads",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1699"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/glycolic-acid-pads" style="max-width: 680px;" data-image-id="31649525563436"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Glycolic Acid Pads" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_180x.png?v=1664198951 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_360x.png?v=1664198951 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_540x.png?v=1664198951 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_720x.png?v=1664198951 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_900x.png?v=1664198951 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1080x.png?v=1664198951 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1296x.png?v=1664198951 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1512x.png?v=1664198951 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1728x.png?v=1664198951 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1944x.png?v=1664198951 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2160x.png?v=1664198951 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2376x.png?v=1664198951 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2592x.png?v=1664198951 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2808x.png?v=1664198951 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_3024x.png?v=1664198951 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_180x.png?v=1664198951 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_360x.png?v=1664198951 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_540x.png?v=1664198951 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_720x.png?v=1664198951 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_900x.png?v=1664198951 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1080x.png?v=1664198951 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1296x.png?v=1664198951 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1512x.png?v=1664198951 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1728x.png?v=1664198951 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1944x.png?v=1664198951 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2160x.png?v=1664198951 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2376x.png?v=1664198951 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2592x.png?v=1664198951 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2808x.png?v=1664198951 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_3024x.png?v=1664198951 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Glycolic Acid Pads" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_180x.png?v=1666190965 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_360x.png?v=1666190965 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_540x.png?v=1666190965 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_720x.png?v=1666190965 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_900x.png?v=1666190965 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1080x.png?v=1666190965 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1296x.png?v=1666190965 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1512x.png?v=1666190965 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1728x.png?v=1666190965 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1944x.png?v=1666190965 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2160x.png?v=1666190965 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2376x.png?v=1666190965 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2592x.png?v=1666190965 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2808x.png?v=1666190965 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_3024x.png?v=1666190965 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_180x.png?v=1666190965 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_360x.png?v=1666190965 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_540x.png?v=1666190965 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_720x.png?v=1666190965 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_900x.png?v=1666190965 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1080x.png?v=1666190965 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1296x.png?v=1666190965 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1512x.png?v=1666190965 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1728x.png?v=1666190965 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_1944x.png?v=1666190965 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2160x.png?v=1666190965 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2376x.png?v=1666190965 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2592x.png?v=1666190965 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_2808x.png?v=1666190965 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_e43b1564-03e3-4a37-a883-4967f507fe54_3024x.png?v=1666190965 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="glycolic-acid-pads" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40325306187820"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-15% </div></div><div class="product-card__info"> <a href="/collections/all/products/glycolic-acid-pads" title="Glycolic Acid Pads" class="product-card__name h4">Glycolic Acid Pads</a><a href="/products/glycolic-acid-pads#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup" data-id="6851225681964" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="102" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text">102 reviews</span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$16.99</span> <s class="product-card__regular-price"><span class="money">$19.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Glycolic Acid Pads</h4><h5 class="productRightText2">Gently exfoliates & restore radiance</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/acidpads.png?v=1674215688">Glicolic acid</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz6.png?v=1673251001" alt="cfSmQz">Green tea extract</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="ncSmQz">Vitamin E</div></div>',
  },
  {
    name: "scar removal",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="1699"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/scar-removal-cream" style="max-width: 680px;" data-image-id="31649023131692"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Scar Removal Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_180x.png?v=1664196153 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_360x.png?v=1664196153 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_540x.png?v=1664196153 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_720x.png?v=1664196153 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_900x.png?v=1664196153 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1080x.png?v=1664196153 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1296x.png?v=1664196153 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1512x.png?v=1664196153 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1728x.png?v=1664196153 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1944x.png?v=1664196153 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2160x.png?v=1664196153 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2376x.png?v=1664196153 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2592x.png?v=1664196153 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2808x.png?v=1664196153 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_3024x.png?v=1664196153 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_180x.png?v=1664196153 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_360x.png?v=1664196153 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_540x.png?v=1664196153 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_720x.png?v=1664196153 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_900x.png?v=1664196153 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1080x.png?v=1664196153 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1296x.png?v=1664196153 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1512x.png?v=1664196153 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1728x.png?v=1664196153 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_1944x.png?v=1664196153 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2160x.png?v=1664196153 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2376x.png?v=1664196153 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2592x.png?v=1664196153 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_2808x.png?v=1664196153 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_c4582a50-8c08-47ab-9e87-1c1a776a562e_3024x.png?v=1664196153 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Scar Removal Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_180x.png?v=1666191070 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_360x.png?v=1666191070 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_540x.png?v=1666191070 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_720x.png?v=1666191070 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_900x.png?v=1666191070 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1080x.png?v=1666191070 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1296x.png?v=1666191070 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1512x.png?v=1666191070 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1728x.png?v=1666191070 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1944x.png?v=1666191070 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2160x.png?v=1666191070 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2376x.png?v=1666191070 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2592x.png?v=1666191070 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2808x.png?v=1666191070 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_3024x.png?v=1666191070 3024w" sizes="352px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_180x.png?v=1666191070 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_360x.png?v=1666191070 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_540x.png?v=1666191070 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_720x.png?v=1666191070 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_900x.png?v=1666191070 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1080x.png?v=1666191070 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1296x.png?v=1666191070 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1512x.png?v=1666191070 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1728x.png?v=1666191070 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_1944x.png?v=1666191070 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2160x.png?v=1666191070 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2376x.png?v=1666191070 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2592x.png?v=1666191070 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_2808x.png?v=1666191070 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/6_8230698d-8c93-4b80-a826-34756ad48d5a_3024x.png?v=1666191070 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="scar-removal-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40325311234092"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-15% </div></div><div class="product-card__info"> <a href="/collections/all/products/scar-removal-cream" title="Scar Removal Cream" class="product-card__name h4">Scar Removal Cream</a><a href="/products/scar-removal-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6851228008492" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="5.00" data-number-of-reviews="13" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="5.00" tabindex="0" aria-label="5.00 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span> <span class="jdgm-prev-badge__text"> 13 reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$16.99</span> <s class="product-card__regular-price"><span class="money">$19.99</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Scar Removal Cream</h4><h5 class="productRightText2">Removes scars</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225">Collagen</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="cfSmQz">Vitamin E and phospholipids</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz10.png?v=1673251001" alt="ncSmQz">Citric acid</div></div>',
  },
  {
    name: "retinol & collagen",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="3198"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream-for-face-collagen-cream-for-face" style="max-width: 680px;" data-image-id="32076981993516"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Collagen Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_180x.jpg?v=1666700249 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_360x.jpg?v=1666700249 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_540x.jpg?v=1666700249 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_720x.jpg?v=1666700249 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_900x.jpg?v=1666700249 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1080x.jpg?v=1666700249 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1296x.jpg?v=1666700249 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1512x.jpg?v=1666700249 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1728x.jpg?v=1666700249 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1944x.jpg?v=1666700249 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2160x.jpg?v=1666700249 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2376x.jpg?v=1666700249 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2592x.jpg?v=1666700249 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2808x.jpg?v=1666700249 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_3024x.jpg?v=1666700249 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1_180x.jpg?v=1666700249 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_360x.jpg?v=1666700249 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_540x.jpg?v=1666700249 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_720x.jpg?v=1666700249 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_900x.jpg?v=1666700249 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1080x.jpg?v=1666700249 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1296x.jpg?v=1666700249 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1512x.jpg?v=1666700249 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1728x.jpg?v=1666700249 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_1944x.jpg?v=1666700249 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2160x.jpg?v=1666700249 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2376x.jpg?v=1666700249 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2592x.jpg?v=1666700249 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_2808x.jpg?v=1666700249 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1_3024x.jpg?v=1666700249 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Collagen Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_180x.jpg?v=1666700551 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_360x.jpg?v=1666700551 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_540x.jpg?v=1666700551 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_720x.jpg?v=1666700551 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_900x.jpg?v=1666700551 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1080x.jpg?v=1666700551 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1296x.jpg?v=1666700551 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1512x.jpg?v=1666700551 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1728x.jpg?v=1666700551 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1944x.jpg?v=1666700551 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2160x.jpg?v=1666700551 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2376x.jpg?v=1666700551 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2592x.jpg?v=1666700551 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2808x.jpg?v=1666700551 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_3024x.jpg?v=1666700551 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_180x.jpg?v=1666700551 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_360x.jpg?v=1666700551 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_540x.jpg?v=1666700551 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_720x.jpg?v=1666700551 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_900x.jpg?v=1666700551 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1080x.jpg?v=1666700551 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1296x.jpg?v=1666700551 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1512x.jpg?v=1666700551 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1728x.jpg?v=1666700551 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_1944x.jpg?v=1666700551 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2160x.jpg?v=1666700551 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2376x.jpg?v=1666700551 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2592x.jpg?v=1666700551 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_2808x.jpg?v=1666700551 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3-collagen_1_3024x.jpg?v=1666700551 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream-for-face-collagen-cream-for-face" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40764390146092"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-54% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream-for-face-collagen-cream-for-face" title="Retinol Cream &amp; Collagen Cream" class="product-card__name h4">Retinol Cream &amp; Collagen Cream</a><a href="/products/retinol-cream-for-face-collagen-cream-for-face#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6982970015788" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars" role="button"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$31.98</span> <s class="product-card__regular-price"><span class="money">$69.98</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Retinol Cream and Collagen Cream for Face</h4><h5 class="productRightText2">Deeply moisturizes & restores</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225" alt="clSmQz">Collagen</div></div>',
  },
  {
    name: "retinol & neck firming",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="2999"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream-for-face-anti-aging-neck-firming-cream" style="max-width: 680px;" data-image-id="32076460884012"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Neck Firming Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_180x.jpg?v=1666699540 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_360x.jpg?v=1666699540 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_540x.jpg?v=1666699540 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_720x.jpg?v=1666699540 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_900x.jpg?v=1666699540 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1080x.jpg?v=1666699540 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1296x.jpg?v=1666699540 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1512x.jpg?v=1666699540 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1728x.jpg?v=1666699540 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1944x.jpg?v=1666699540 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2160x.jpg?v=1666699540 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2376x.jpg?v=1666699540 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2592x.jpg?v=1666699540 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2808x.jpg?v=1666699540 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_3024x.jpg?v=1666699540 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_180x.jpg?v=1666699540 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_360x.jpg?v=1666699540 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_540x.jpg?v=1666699540 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_720x.jpg?v=1666699540 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_900x.jpg?v=1666699540 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1080x.jpg?v=1666699540 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1296x.jpg?v=1666699540 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1512x.jpg?v=1666699540 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1728x.jpg?v=1666699540 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_1944x.jpg?v=1666699540 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2160x.jpg?v=1666699540 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2376x.jpg?v=1666699540 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2592x.jpg?v=1666699540 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_2808x.jpg?v=1666699540 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2_195ec1ff-b5de-42b8-a0fd-dd1219b8d852_3024x.jpg?v=1666699540 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Neck Firming Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/42_180x.jpg?v=1666699540 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_360x.jpg?v=1666699540 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_540x.jpg?v=1666699540 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_720x.jpg?v=1666699540 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_900x.jpg?v=1666699540 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1080x.jpg?v=1666699540 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1296x.jpg?v=1666699540 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1512x.jpg?v=1666699540 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1728x.jpg?v=1666699540 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1944x.jpg?v=1666699540 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2160x.jpg?v=1666699540 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2376x.jpg?v=1666699540 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2592x.jpg?v=1666699540 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2808x.jpg?v=1666699540 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_3024x.jpg?v=1666699540 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/42_180x.jpg?v=1666699540 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_360x.jpg?v=1666699540 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_540x.jpg?v=1666699540 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_720x.jpg?v=1666699540 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_900x.jpg?v=1666699540 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1080x.jpg?v=1666699540 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1296x.jpg?v=1666699540 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1512x.jpg?v=1666699540 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1728x.jpg?v=1666699540 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_1944x.jpg?v=1666699540 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2160x.jpg?v=1666699540 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2376x.jpg?v=1666699540 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2592x.jpg?v=1666699540 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_2808x.jpg?v=1666699540 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/42_3024x.jpg?v=1666699540 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream-for-face-anti-aging-neck-firming-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40764336799788"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-57% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream-for-face-anti-aging-neck-firming-cream" title="Retinol Cream &amp; Neck Firming Cream" class="product-card__name h4">Retinol Cream &amp; Neck Firming Cream</a><a href="/products/retinol-cream-for-face-anti-aging-neck-firming-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6982957891628" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars" role="button"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$29.99</span> <s class="product-card__regular-price"><span class="money">$69.98</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Retinol Cream and Anti-Aging Neck Firming Cream</h4><h5 class="productRightText2">Deeply moisturizes & restores</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz12.png?v=1673251001" alt="clSmQz">Chamomile extract</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="clSmQz">Vitamin E</div></div>',
  },
  {
    name: "retinol & dark spot",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="3198"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream-for-face-dark-spot-corrector" style="max-width: 680px;" data-image-id="32076451086380"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Dark Spot Corrector" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/5_180x.jpg?v=1666699341 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_360x.jpg?v=1666699341 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_540x.jpg?v=1666699341 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_720x.jpg?v=1666699341 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_900x.jpg?v=1666699341 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1080x.jpg?v=1666699341 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1296x.jpg?v=1666699341 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1512x.jpg?v=1666699341 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1728x.jpg?v=1666699341 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1944x.jpg?v=1666699341 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2160x.jpg?v=1666699341 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2376x.jpg?v=1666699341 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2592x.jpg?v=1666699341 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2808x.jpg?v=1666699341 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_3024x.jpg?v=1666699341 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/5_180x.jpg?v=1666699341 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_360x.jpg?v=1666699341 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_540x.jpg?v=1666699341 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_720x.jpg?v=1666699341 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_900x.jpg?v=1666699341 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1080x.jpg?v=1666699341 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1296x.jpg?v=1666699341 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1512x.jpg?v=1666699341 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1728x.jpg?v=1666699341 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_1944x.jpg?v=1666699341 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2160x.jpg?v=1666699341 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2376x.jpg?v=1666699341 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2592x.jpg?v=1666699341 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_2808x.jpg?v=1666699341 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5_3024x.jpg?v=1666699341 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Dark Spot Corrector" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_180x.jpg?v=1666699331 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_360x.jpg?v=1666699331 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_540x.jpg?v=1666699331 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_720x.jpg?v=1666699331 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_900x.jpg?v=1666699331 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1080x.jpg?v=1666699331 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1296x.jpg?v=1666699331 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1512x.jpg?v=1666699331 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1728x.jpg?v=1666699331 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1944x.jpg?v=1666699331 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2160x.jpg?v=1666699331 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2376x.jpg?v=1666699331 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2592x.jpg?v=1666699331 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2808x.jpg?v=1666699331 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_3024x.jpg?v=1666699331 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_180x.jpg?v=1666699331 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_360x.jpg?v=1666699331 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_540x.jpg?v=1666699331 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_720x.jpg?v=1666699331 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_900x.jpg?v=1666699331 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1080x.jpg?v=1666699331 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1296x.jpg?v=1666699331 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1512x.jpg?v=1666699331 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1728x.jpg?v=1666699331 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_1944x.jpg?v=1666699331 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2160x.jpg?v=1666699331 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2376x.jpg?v=1666699331 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2592x.jpg?v=1666699331 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_2808x.jpg?v=1666699331 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/1-dark_1_3024x.jpg?v=1666699331 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream-for-face-dark-spot-corrector" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40764337520684"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-60% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream-for-face-dark-spot-corrector" title="Retinol Cream &amp; Dark Spot Corrector" class="product-card__name h4">Retinol Cream &amp; Dark Spot Corrector</a><a href="/products/retinol-cream-for-face-dark-spot-corrector#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6982958612524" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars" role="button"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$31.98</span> <s class="product-card__regular-price"><span class="money">$79.98</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Retinol Cream and Dark Spot Corrector</h4><h5 class="productRightText2">Deeply moisturizes & restores</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz10.png?v=1673251001" alt="clSmQz">Ascorbic acid</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz8.png?v=1673251001" alt="clSmQz">Hyaluronic acid</div></div>',
  },
  {
    name: "retinol & glycolic acid pads",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="2959"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream-for-face-glycolic-acid-pads" style="max-width: 680px;" data-image-id="32076764807212"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Glycolic Acid Pads" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/7_180x.jpg?v=1666699888 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_360x.jpg?v=1666699888 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_540x.jpg?v=1666699888 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_720x.jpg?v=1666699888 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_900x.jpg?v=1666699888 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1080x.jpg?v=1666699888 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1296x.jpg?v=1666699888 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1512x.jpg?v=1666699888 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1728x.jpg?v=1666699888 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1944x.jpg?v=1666699888 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2160x.jpg?v=1666699888 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2376x.jpg?v=1666699888 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2592x.jpg?v=1666699888 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2808x.jpg?v=1666699888 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_3024x.jpg?v=1666699888 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/7_180x.jpg?v=1666699888 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_360x.jpg?v=1666699888 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_540x.jpg?v=1666699888 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_720x.jpg?v=1666699888 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_900x.jpg?v=1666699888 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1080x.jpg?v=1666699888 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1296x.jpg?v=1666699888 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1512x.jpg?v=1666699888 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1728x.jpg?v=1666699888 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_1944x.jpg?v=1666699888 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2160x.jpg?v=1666699888 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2376x.jpg?v=1666699888 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2592x.jpg?v=1666699888 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_2808x.jpg?v=1666699888 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/7_3024x.jpg?v=1666699888 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Glycolic Acid Pads" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_180x.jpg?v=1666700099 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_360x.jpg?v=1666700099 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_540x.jpg?v=1666700099 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_720x.jpg?v=1666700099 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_900x.jpg?v=1666700099 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1080x.jpg?v=1666700099 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1296x.jpg?v=1666700099 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1512x.jpg?v=1666700099 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1728x.jpg?v=1666700099 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1944x.jpg?v=1666700099 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2160x.jpg?v=1666700099 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2376x.jpg?v=1666700099 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2592x.jpg?v=1666700099 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2808x.jpg?v=1666700099 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_3024x.jpg?v=1666700099 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_180x.jpg?v=1666700099 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_360x.jpg?v=1666700099 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_540x.jpg?v=1666700099 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_720x.jpg?v=1666700099 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_900x.jpg?v=1666700099 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1080x.jpg?v=1666700099 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1296x.jpg?v=1666700099 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1512x.jpg?v=1666700099 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1728x.jpg?v=1666700099 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_1944x.jpg?v=1666700099 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2160x.jpg?v=1666700099 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2376x.jpg?v=1666700099 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2592x.jpg?v=1666700099 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_2808x.jpg?v=1666700099 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/2-retinol_1_3024x.jpg?v=1666700099 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream-for-face-glycolic-acid-pads" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40764389752876"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-57% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream-for-face-glycolic-acid-pads" title="Retinol Cream &amp; Glycolic Acid Pads" class="product-card__name h4">Retinol Cream &amp; Glycolic Acid Pads</a><a href="/products/retinol-cream-for-face-glycolic-acid-pads#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6982969786412" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars" role="button"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$29.59</span> <s class="product-card__regular-price"><span class="money">$69.98</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Retinol Cream and Glycolic Acid Pads</h4><h5 class="productRightText2">Deeply moisturizes & Gently exfoliates</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/acidpads.png?v=1674215688" alt="clSmQz">Glicolic acid</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz7.png?v=1673251001" alt="clSmQz">Vitamin E</div></div>',
  },
  {
    name: "retinol & scar removal",
    content:
      '<div class="js-col col-sm-6 col-6 col-lg-4"><div class="product-card js-product-card product-card--style1 product-card--style4" data-price="2958"> <div class="product-card__image-wr overflow-hidden"><a class="product-card__image js" href="/collections/all/products/retinol-cream-for-face-scar-removal-cream" style="max-width: 680px;" data-image-id="32077226115116"><img class="transition first-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Scar Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3_180x.jpg?v=1666700725 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_360x.jpg?v=1666700725 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_540x.jpg?v=1666700725 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_720x.jpg?v=1666700725 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_900x.jpg?v=1666700725 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1080x.jpg?v=1666700725 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1296x.jpg?v=1666700725 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1512x.jpg?v=1666700725 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1728x.jpg?v=1666700725 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1944x.jpg?v=1666700725 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2160x.jpg?v=1666700725 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2376x.jpg?v=1666700725 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2592x.jpg?v=1666700725 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2808x.jpg?v=1666700725 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_3024x.jpg?v=1666700725 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/3_180x.jpg?v=1666700725 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_360x.jpg?v=1666700725 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_540x.jpg?v=1666700725 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_720x.jpg?v=1666700725 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_900x.jpg?v=1666700725 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1080x.jpg?v=1666700725 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1296x.jpg?v=1666700725 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1512x.jpg?v=1666700725 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1728x.jpg?v=1666700725 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_1944x.jpg?v=1666700725 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2160x.jpg?v=1666700725 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2376x.jpg?v=1666700725 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2592x.jpg?v=1666700725 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_2808x.jpg?v=1666700725 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/3_3024x.jpg?v=1666700725 3024w"> <img class="transition second-image lazyautosizes lazyloaded" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-sizes="auto" alt="Retinol Cream &amp; Scar Cream" data-srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_180x.jpg?v=1666700776 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_360x.jpg?v=1666700776 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_540x.jpg?v=1666700776 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_720x.jpg?v=1666700776 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_900x.jpg?v=1666700776 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1080x.jpg?v=1666700776 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1296x.jpg?v=1666700776 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1512x.jpg?v=1666700776 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1728x.jpg?v=1666700776 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1944x.jpg?v=1666700776 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2160x.jpg?v=1666700776 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2376x.jpg?v=1666700776 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2592x.jpg?v=1666700776 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2808x.jpg?v=1666700776 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_3024x.jpg?v=1666700776 3024w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_180x.jpg?v=1666700776 180w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_360x.jpg?v=1666700776 360w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_540x.jpg?v=1666700776 540w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_720x.jpg?v=1666700776 720w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_900x.jpg?v=1666700776 900w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1080x.jpg?v=1666700776 1080w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1296x.jpg?v=1666700776 1296w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1512x.jpg?v=1666700776 1512w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1728x.jpg?v=1666700776 1728w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_1944x.jpg?v=1666700776 1944w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2160x.jpg?v=1666700776 2160w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2376x.jpg?v=1666700776 2376w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2592x.jpg?v=1666700776 2592w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_2808x.jpg?v=1666700776 2808w, //cdn.shopify.com/s/files/1/0566/4322/3596/products/5-scar_1_3024x.jpg?v=1666700776 3024w"> </a> <div class="product-card__overlay d-flex justify-content-center flex-column product-card__overlaytop"></div><div class="product-card__overlay d-flex justify-content-center flex-row product-card__overlaybottom"> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-btn-quickview" title="Quickshop" data-toggle="modal" data-target="#jsQuickview" data-handle="retinol-cream-for-face-scar-removal-cream" data-pavailable="true"> <span>Quickshop &nbsp;</span><i class="icon-quickview"></i></span> <span data-tooltip="false" data-placement="left" class="btn btn-theme gradient-theme-vertical product-card__overlay-btn js-grid-cart " title="Add to Cart" data-id="40764360163372"> <span>Add to Cart</span> <div class="product-card__loading spinner-grow" role="status"></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" class=""></path></svg> </span> </div><div class="product-tag product-tag--absolute" aria-hidden="true">-57% </div></div><div class="product-card__info"> <a href="/collections/all/products/retinol-cream-for-face-scar-removal-cream" title="Retinol Cream &amp; Scar Cream" class="product-card__name h4">Retinol Cream &amp; Scar Cream</a><a href="/products/retinol-cream-for-face-scar-removal-cream#judgeme_product_reviews"> <div style="" class="jdgm-widget jdgm-preview-badge" data-id="6982963920940" data-template="collection" data-auto-install="false"> <div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars" role="button"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div></a><div class="product-card__price font-family-1"><span class="visually-hidden">Regular price</span> <span class="money">$29.58</span> <s class="product-card__regular-price"><span class="money">$69.98</span></s> <span class="visually-hidden">Sale price</span></div><ul class="product-card__swatch list-unstyled"></ul></div></div></div>',
    rightContent:
      '<hr class="productRightLineMb"><h4 class="productRightText1">Retinol Cream and Scar Removal Cream</h4><h5 class="productRightText2">Deeply moisturizes & Removes scars</h5><div class="productRightBlockAMPM"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/AMquizRes.png?v=1674204622" alt="am">AM</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/PMquizRes.png?v=1674204622" alt="pm">PM</div></div><hr class="productRightLine"><h6 class="productRightText3">Key ingredients</h6><div class="productRightBlockKeyIngr"><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz2.png?v=1672992919" alt="rtSmQz">Retinol</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz4.png?v=1672993225" alt="clSmQz">Collagen</div><div><img src="https://cdn.shopify.com/s/files/1/0566/4322/3596/files/sliderQz10.png?v=1673251001" alt="clSmQz">Citric acid</div></div>',
  },
];
//----------  dom-объекты   --------------------------------------------------------------------------------------------------------

let parentCotainer = document.querySelector("#quiz-remedial-results-ResQz");
let recomContainer = document.querySelector("#recomContainer-ResQz");
let resultContainer = document.querySelector("#resultContainer-ResQz");
let recomTextContainer = document.querySelector("#recomTextContainer-ResQz");

// проверка на прохождение квиза ( если нет  )--------------------------------------------------------------------------------------------------------------------
if (!resultArrQuestions) {
  let RetakeNotQuiz = (parentCotainer.innerHTML =
    "there is no data on the passage of the quiz <br> <button id='retake-ResQz' class='retake-ResQz'>GO TO THE QUIZ</button>");
  document
    .querySelector("#retakenotquiz-ResQz")
    .addEventListener("click", () => {
      document.location.href = "http://remedial.store/pages/quiz";
    });
}

//------------------------------------------------------------------------------------------------------------------
let arrEndCreams = [];
//--------------- проверка на тригерные вопросы и составление массива реком. крем ------------------------------------------------------------------
if (resultArrQuestions[0].selectedItem === "3") {
  arrEndCreams.push({
    // id: 0,
    // question: resultArrQuestions[0].question,
    // answer: resultArrQuestions[0].answers[2],
    recommendation: "retinol",
  });
}
//---------------------------------------------------------------------------------
if (resultArrQuestions[5].selectedItem === "0") {
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[0],
    recommendation: "eye cream",
  });
}
if (resultArrQuestions[5].selectedItem === "3") {
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[3],
    recommendation: "eye cream",
  });
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[3],
    recommendation: "retinol",
  });
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[3],
    recommendation: "dark spot",
  });
}
if (resultArrQuestions[5].selectedItem === "4") {
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[4],
    recommendation: "neck firming",
  });
}
if (resultArrQuestions[5].selectedItem === "5") {
  arrEndCreams.push({
    // id: 5,
    // question: resultArrQuestions[5].question,
    // answer: resultArrQuestions[5].answers[5],
    recommendation: "retinol",
  });
}
//---------------------------------------------------------------------------------
if (resultArrQuestions[7].selectedItem === "0") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[0],
    recommendation: "dark spot",
  });
}
if (resultArrQuestions[7].selectedItem === "1") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[1],
    recommendation: "dark spot",
  });
}
if (resultArrQuestions[7].selectedItem === "2") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[2],
    recommendation: "collagen",
  });
}
if (resultArrQuestions[7].selectedItem === "3") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[3],
    recommendation: "glycolic acid pads",
  });
}
if (resultArrQuestions[7].selectedItem === "4") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[4],
    recommendation: "scar removal",
  });
}
if (resultArrQuestions[7].selectedItem === "5") {
  arrEndCreams.push({
    // id: 7,
    // question: resultArrQuestions[7].question,
    // answer: resultArrQuestions[7].answers[5],
    recommendation: "retinol",
  });
}
if (Array.isArray(resultArrQuestions[7].selectedItem)) {
  for (let item of resultArrQuestions[7].selectedItem) {
    if (item === "0") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[0],
        recommendation: "dark spot",
      });
    }
    if (item === "1") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[1],
        recommendation: "dark spot",
      });
    }
    if (item === "2") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[2],
        recommendation: "collagen",
      });
    }
    if (item === "3") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[3],
        recommendation: "glycolic acid pads",
      });
    }
    if (item === "4") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[4],
        recommendation: "scar removal",
      });
    }
    if (item === "5") {
      arrEndCreams.push({
        // id: 7,
        // question: resultArrQuestions[7].question,
        // answer: resultArrQuestions[7].answers[5],
        recommendation: "retinol",
      });
    }
  }
}
//---------------------------------------------------------------------------------
if (resultArrQuestions[8].selectedItem === "0") {
  arrEndCreams.push({
    // id: 8,
    // question: resultArrQuestions[8].question,
    // answer: resultArrQuestions[8].answers[0],
    recommendation: "collagen",
  });
}
if (resultArrQuestions[8].selectedItem === "1") {
  arrEndCreams.push({
    // id: 8,
    // question: resultArrQuestions[8].question,
    // answer: resultArrQuestions[8].answers[1],
    recommendation: "retinol",
  });
}
if (resultArrQuestions[8].selectedItem === "2") {
  arrEndCreams.push({
    // id: 8,
    // question: resultArrQuestions[8].question,
    // answer: resultArrQuestions[8].answers[2],
    recommendation: "retinol",
  });
}
if (Array.isArray(resultArrQuestions[8].selectedItem)) {
  for (let item of resultArrQuestions[8].selectedItem) {
    if (item === "0") {
      arrEndCreams.push({
        // id: 8,
        // question: resultArrQuestions[8].question,
        // answer: resultArrQuestions[8].answers[0],
        recommendation: "collagen",
      });
    }
    if (item === "1") {
      arrEndCreams.push({
        // id: 8,
        // question: resultArrQuestions[8].question,
        // answer: resultArrQuestions[8].answers[1],
        recommendation: "retinol",
      });
    }
    if (item === "2") {
      arrEndCreams.push({
        // id: 8,
        // question: resultArrQuestions[8].question,
        // answer: resultArrQuestions[8].answers[2],
        recommendation: "retinol",
      });
    }
  }
}
//---------------------------------------------------------------------------------

// -------------------- очистка от дубликатов ( сравнения по рекомендациям )  ------------------------------------------------------------------------
for (let i = 0; i < arrEndCreams.length; i++) {
  for (let j = 0; j < arrEndCreams.length; j++) {
    if (
      arrEndCreams[i].recommendation === arrEndCreams[j].recommendation &&
      i != j
    ) {
      console.log("doubl del");
      arrEndCreams.splice(j, 1);
    }
  }
}
//--------------------------------- объеденение в группу, если больше 2 ------------------------------------------------------------------------------
let confirmationRetinol = false;
for (let elem of arrEndCreams) {
  if (elem.recommendation == "retinol") {
    confirmationRetinol = true;
  }
}
let mergeElem = "";
let mergeProd = "";
if (arrEndCreams.length > 2 && confirmationRetinol) {
  for (let elem of arrEndCreams) {
    if (
      elem.recommendation !== "retinol" &&
      elem.recommendation !== "eye cream"
    ) {
      mergeElem = elem.recommendation;
    }
  }
}
if (mergeElem !== "") {
  mergeProd = "retinol" + " & " + mergeElem;
}
if (mergeProd !== "") {
  for (let i = 0; i < arrEndCreams.length; i++) {
    if (arrEndCreams[i].recommendation == "retinol") {
      console.log("retinol del");
      arrEndCreams.splice(i, 1);
    }
  }
  for (let i = 0; i < arrEndCreams.length; i++) {
    if (arrEndCreams[i].recommendation == mergeElem) {
      console.log("retinol del");
      arrEndCreams.splice(i, 1);
    }
  }
  arrEndCreams.push({
    // id: 0,
    // question: resultArrQuestions[8].question,
    // answer: resultArrQuestions[8].answers[2],
    recommendation: mergeProd,
  });
}
//------------------------------- уменьшение до 2 элементов ------------------------------------------------------------------------------
if (arrEndCreams.length > 2) {
  arrEndCreams.splice(0, Number(arrEndCreams.length - 2));
}
//------ если пустой массив рекомендаций -------------------------------------------------------------------------------------------------------------------------------
if (arrEndCreams.length <= 0) {
  arrEndCreams.push({
    recommendation: "retinol",
  });
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// очистка от неактивных вопросов
let newArr = [];
for (let i = 0; i < resultArrQuestions.length; i++) {
  if (
    resultArrQuestions[i].selectedItem !== "" &&
    resultArrQuestions[i].resualtsAnswers.length > 0 &&
    resultArrQuestions[i].resualtsAnswers[
      resultArrQuestions[i].selectedItem
    ] !== ""
  ) {
    newArr.push(resultArrQuestions[i]);
    console.log("not active question - delete: " + resultArrQuestions[i]);
  }
}
resultArrQuestions = newArr;
//------------------------------ отображение  ----------------------------------------------------------------------------------------------------------------------

// ------------ проверка на пустоту ---------------------------------------------------------------------------------------------------------------------------------
if (arrEndCreams.length >= 1) {
  for (let elem of arrEndCreams) {
    let contentForRecomendation = "";
    for (let el of arrRecomedation) {
      if (el.name == elem.recommendation) {
        contentForRecomendation +=
          "<div class='productContainer-ResQz'>" +
          el.content +
          "<div class='productContainerRight-ResQz'>" +
          el.rightContent +
          "</div></div>";
      }
    }
    recomContainer.innerHTML += contentForRecomendation;
  }
}

// resultContainer.innerHTML = "<h3>Recomendation (all)</h3>";
// Recomendation for all Questions
let countQuestionView = 1;
for (let elem of resultArrQuestions) {
  // если было выбрано несколько вариантов ответов
  if (Array.isArray(elem.selectedItem)) {
    for (let item of elem.selectedItem) {
      resultContainer.innerHTML +=
        "<h5 id='Analys-1-ResQz'><b>" + elem.question + "</b></h5>";
      resultContainer.innerHTML +=
        "<h5 id='Analys-2-ResQz'>Your Answer: " + elem.answers[item] + "</h5>";
      resultContainer.innerHTML +=
        "<h5 id='Analys-3-ResQz'><span>Recommendation to you: </span><br>" +
        elem.resualtsAnswers[item] +
        "</h5>";
      resultContainer.innerHTML += "<br>";
    }
    countQuestionView++;
  } else {
    resultContainer.innerHTML +=
      "<h5 id='Analys-1-ResQz'><b>" + elem.question + "</b></h5>";
    resultContainer.innerHTML +=
      "<h5 id='Analys-2-ResQz'>Your Answer: " +
      elem.answers[elem.selectedItem] +
      "</h5>";
    resultContainer.innerHTML +=
      "<h5 id='Analys-3-ResQz'><span>Recommendation to you: </span><br>" +
      elem.resualtsAnswers[elem.selectedItem] +
      "</h5>";
    resultContainer.innerHTML += "<br>";
    countQuestionView++;
  }
}

console.log(arrEndCreams);
console.log(resultArrQuestions);

//------------------------------ кнопка перепройти  ----------------------------------------------------------------------------------------------------------------------
let Retake = document.querySelector("#retake-ResQz");
Retake.addEventListener("click", () => {
  document.location.href = "http://remedial.store/pages/quiz";
});

// -------------------- slider -----------------------------------------------------------------------------------------------------------------------------------------------------

const textSliderArr = [
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Niacinamide</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Is able to stabilize your skin’s barrier function, reducing the amount of water loss, and increasing overall hydration.</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Retinol</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Has the ability to inhibit enzymes that destroy collagen and increases the rate of skin cell turnover.</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Collagen</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Provides structural support, maintaining elasticity and preventing fine lines and sagging.</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Peptide Complex</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Can penetrate the outer layer of the skin and stimulate the cells to produce collagen and elastin at the deepest level.</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Shea and jojoba oils</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Nourish with microelements</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Aloe and green tea</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Elieve inflammation</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Vitamin E and phospholipids</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Anti-aging effect</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Hyaluronic acid</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Deep moisturizing</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Caffeine</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Effectively gets rid of under-eye puffinesses</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Ascorbic acid</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Brightens pigment spots, peels the skin</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Rosa Rugosa flower oil</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Firms skin</span>",
  },
  {
    text1:
      "<span class='animationTextSlider-ResQz1' id='animationTextSlider-ResQzRight1'>Chamomile extract</span>",
    text2:
      "<span class='animationTextSlider-ResQz2' id='animationTextSlider-ResQzRight2'>Relieves inflammation</span>",
  },
];

let prevBtnSlider = document.querySelector("#sliderr-ResQz-prev");
const nextBtnSlider = document.querySelector("#sliderr-ResQz-next");

const imagesSlider = document.querySelectorAll(
  "#slider-ResQz-gorisontImg img[class='imgSlider']"
);
const progressDots = document.querySelectorAll("#progressSlider-ResQz span");

const firstSliderText = document.querySelector(".firstSliderText-ResQz");
const secondSliderText = document.querySelector(".secondSliderText-ResQz");

let primaryIdSlider = 3;

let countForArr = primaryIdSlider - 1;

const biggest = imagesSlider.length;
const small = 1;
let animationSide = "left";

let sliderRightImg;
let sliderLeftImg;

// function for left and right images

function renderingSlider() {
  // clear Img Event
  for (let elem of imagesSlider) {
    elem.removeEventListener("click", nextSlide);
    elem.removeEventListener("click", prevSlide);
  }

  // left:
  let leftID;
  if (primaryIdSlider - 1 <= 0) {
    leftID = biggest;
  } else {
    leftID = primaryIdSlider - 1;
  }
  for (let elem of imagesSlider) {
    if (elem.id == leftID) {
      elem.classList.remove("slider-ResQz-right-img");
      elem.classList.add("slider-ResQz-left-img");
      elem.classList.remove("slider-ResQz-hidden-img");
      elem.classList.remove("slider-ResQz-center-img");

      elem.addEventListener("click", prevSlide);
    }
  }

  // center

  for (let elem of imagesSlider) {
    if (elem.id == primaryIdSlider) {
      elem.classList.remove("slider-ResQz-right-img");
      elem.classList.remove("slider-ResQz-left-img");
      elem.classList.remove("slider-ResQz-hidden-img");
      elem.classList.add("slider-ResQz-center-img");
    }
  }

  // right:
  let rightID;
  if (primaryIdSlider + 1 > biggest) {
    rightID = small;
  } else {
    rightID = primaryIdSlider + 1;
  }
  for (let elem of imagesSlider) {
    if (elem.id == rightID) {
      elem.classList.add("slider-ResQz-right-img");
      elem.classList.remove("slider-ResQz-left-img");
      elem.classList.remove("slider-ResQz-hidden-img");
      elem.classList.remove("slider-ResQz-center-img");

      elem.addEventListener("click", nextSlide);
    }
  }

  // all:
  for (let elem of imagesSlider) {
    if (elem.id != leftID && elem.id != rightID && elem.id != primaryIdSlider) {
      elem.classList.remove("slider-ResQz-right-img");
      elem.classList.remove("slider-ResQz-left-img");
      elem.classList.add("slider-ResQz-hidden-img");
      elem.classList.remove("slider-ResQz-center-img");
    }
  }

  for (let elem of progressDots) {
    elem.style.color = "#B8C2DA";
    if (elem.id == primaryIdSlider) {
      elem.style.color = "#35446F";
    }
  }

  // change slider text

  if (animationSide == "left") {
    // text1
    if (/ResQzRight/.test(textSliderArr[countForArr].text1)) {
      textSliderArr[countForArr].text1 = textSliderArr[
        countForArr
      ].text1.replace(
        "animationTextSlider-ResQzRight1",
        "animationTextSlider-ResQzLeft1"
      );
    }
    // text2
    if (/ResQzRight/.test(textSliderArr[countForArr].text2)) {
      textSliderArr[countForArr].text2 = textSliderArr[
        countForArr
      ].text2.replace(
        "animationTextSlider-ResQzRight2",
        "animationTextSlider-ResQzLeft2"
      );
    }
  }
  if (animationSide == "right") {
    // text1
    if (/ResQzLeft/.test(textSliderArr[countForArr].text1)) {
      textSliderArr[countForArr].text1 = textSliderArr[
        countForArr
      ].text1.replace(
        "animationTextSlider-ResQzLeft1",
        "animationTextSlider-ResQzRight1"
      );
    }
    // text2
    if (/ResQzLeft/.test(textSliderArr[countForArr].text2)) {
      textSliderArr[countForArr].text2 = textSliderArr[
        countForArr
      ].text2.replace(
        "animationTextSlider-ResQzLeft2",
        "animationTextSlider-ResQzRight2"
      );
    }
  }
  firstSliderText.innerHTML = textSliderArr[countForArr].text1;

  secondSliderText.innerHTML = textSliderArr[countForArr].text2;
}

renderingSlider();

function nextSlide() {
  if (primaryIdSlider + 1 > biggest) {
    primaryIdSlider = small;
  } else {
    primaryIdSlider++;
  }
  countForArr = primaryIdSlider - 1;
  animationSide = "left";
  renderingSlider();
}
function prevSlide() {
  if (primaryIdSlider - 1 <= 0) {
    primaryIdSlider = biggest;
  } else {
    primaryIdSlider--;
  }
  countForArr = primaryIdSlider - 1;
  animationSide = "right";
  renderingSlider();
}

//  add Event Next
nextBtnSlider.addEventListener("click", () => {
  if (primaryIdSlider + 1 > biggest) {
    primaryIdSlider = small;
  } else {
    primaryIdSlider++;
  }
  countForArr = primaryIdSlider - 1;
  animationSide = "left";
  renderingSlider();
});

//  add Event Back
prevBtnSlider.addEventListener("click", () => {
  if (primaryIdSlider - 1 <= 0) {
    primaryIdSlider = biggest;
  } else {
    primaryIdSlider--;
  }
  countForArr = primaryIdSlider - 1;
  animationSide = "right";
  renderingSlider();
});

//  add Event Click Progress

for (let elem of progressDots) {
  elem.addEventListener("click", () => {
    if (Number(elem.id) > primaryIdSlider) {
      animationSide = "left";
      primaryIdSlider = Number(elem.id);
      renderingSlider();
    } else if (Number(elem.id) < primaryIdSlider) {
      animationSide = "right";
      primaryIdSlider = Number(elem.id);
      renderingSlider();
    }
  });
}
/*    event swipe slider  ----------------------------------------------------------------------------------------------------------------------------------------  */

let touchstartX = 0;
let touchendX = 0;

const sliderSwipeElem = document.querySelector("#slider-ResQz-block");

function checkDirection() {
  if (touchendX < touchstartX) {
    // left
    if (primaryIdSlider + 1 > biggest) {
      primaryIdSlider = small;
    } else {
      primaryIdSlider++;
    }
    countForArr = primaryIdSlider - 1;
    animationSide = "left";
    renderingSlider();
  }
  if (touchendX > touchstartX) {
    // right
    if (primaryIdSlider - 1 <= 0) {
      primaryIdSlider = biggest;
    } else {
      primaryIdSlider--;
    }
    countForArr = primaryIdSlider - 1;
    animationSide = "right";
    renderingSlider();
  }
}

sliderSwipeElem.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

sliderSwipeElem.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
//--------------------------------------------------------------------------------------------------------------------------------------------------
