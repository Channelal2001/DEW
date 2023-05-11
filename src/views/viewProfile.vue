<template>
    <div id="body_container">
        <header>
        <section>
          <a href="/home" id="logo"><strong>Social</strong>Gift</a>
        </section>
        <section class="navegation-section">
            <div class="search-cont">
              <div id="search-bar">
                  <input type="text" name="search" placeholder="Search..">
                </div>
        </div>
            <div id="menu">
             
              <a href="/accountManager">
                <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
              </a>
            </div>
        </section>
      </header>
      <main>
        <section>
          <a href="/homeFilters" class="filters">
            <p>Filters</p>
            <svg
              id="icon-filter"
              herf=" "
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 16 16 "
            >
              <path
                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5
                      0 0 1 .128-.334L13.5 3.308V2h-11z "
              />
            </svg>
          </a>
          <div class="filters-wrap">
            <p id="filters-text">Ends in:</p>
            <p id="filters-type">24h</p>
            <p id="filters-type">7 days</p>
            <p id="filters-type">1 month</p>
          </div>
        </section>
        <section>
          <div id="title-slider">
            <p><b>People</b></p>
          </div>
        </section>
        <section id="slider">
          <div id="icon-left">
            <a href="">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
                ></path>
              </svg>
            </a>
          </div>
          <div id="slider-wishlists">
            <div class="profile-view">
                <div class="user">
                    <div class="profile-view-image"></div>
                    <div class="text-title-present">
                        <p>Andrea</p>
                    </div>
                    <a href="" class="button_follow">Follow</a>
                </div>
                <div class="wishlists">
                    <div class="wishlist-text">
                        <p><b>Wishlist's</b></p>
                    </div>
                    <div class="wishlist">
                        <div class="wishlist-name">
                            <p>Andrea</p>
                        </div>
                        <a href="/wishlistGift" class="view-button">view</a>
                    </div>
                    <div class="wishlist">
                        <div class="wishlist-name">
                            <p>Andrea</p>
                        </div>
                        <a href="/wishlistGift" class="view-button">view</a>
                    </div>
                    <div class="wishlist">
                        <div class="wishlist-name">
                            <p>Andrea</p>
                        </div>
                        <a href="/wishlistGift" class="view-button">view</a>
                    </div>
                    <div class="wishlist">
                        <div class="wishlist-name">
                            <p>Andrea</p>
                        </div>
                        <a href="/wishlistGift" class="view-button">view</a>
                    </div>
                </div>
            </div>
            <article>
              <div class="present-cover">
                <div class="text-present">
                  <div class="text-title-present">
                    <p>Andrea</p>
                  </div>
                  <a href="" class="button_follow">Follow</a>
                </div>
              </div>
            </article>
            <article>
              <div class="present-cover">
                <div class="text-present">
                  <div class="text-title-present">
                    <p>Andrea</p>
                  </div>
                  <a href="" class="button_follow">Follow</a>
                </div>
              </div>
            </article>
          </div>
          <div id="icon-right">
            <a href="">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        <section>
          <div id="title-slider">
            <p><b>Wishlists</b></p>
          </div>
        </section>
        <section id="slider">
          <div id="icon-left">
            <a href="">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"
                ></path>
              </svg>
            </a>
          </div>
          <div id="slider-wishlists">
            <article>
              <div class="present-cover">
                <div class="text-present">
                  <div class="text-title-present">
                    <p>Andrea's Party</p>
                  </div>
                  <div class="text-present-formatter">
                    <div class="text-time-present">
                        <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                        <p style="margin-top: 0">10days</p>
                    </div>
                    <div class="text-time-present">
                        <p style="margin-bottom: 3px; margin-top: 5px"><b>Average Price:</b></p>
                        <p style="margin-top: 0">30€</p>
                    </div>
                  </div>
                  <div class="text-time-present">
                    <p style="margin-bottom: 3px; margin-top: 5px"><b>Collaborated with:</b></p>
                    <div class="accounts-formatter">
                        <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                    </div>
                    <a style="margin-top: 0">...and more</a>
                  </div>
                </div>
              </div>
            </article>
            <article>
                <div class="present-cover">
                  <div class="text-present">
                    <div class="text-title-present">
                      <p>Andrea's Party</p>
                    </div>
                    <div class="text-present-formatter">
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                          <p style="margin-top: 0">10days</p>
                      </div>
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Average Price:</b></p>
                          <p style="margin-top: 0">30€</p>
                      </div>
                    </div>
                    <div class="text-time-present">
                      <p style="margin-bottom: 3px; margin-top: 5px"><b>Collaborated with:</b></p>
                      <div class="accounts-formatter">
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                      </div>
                      <a style="margin-top: 0">...and more</a>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div class="present-cover">
                  <div class="text-present">
                    <div class="text-title-present">
                      <p>Andrea's Party</p>
                    </div>
                    <div class="text-present-formatter">
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                          <p style="margin-top: 0">10days</p>
                      </div>
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Average Price:</b></p>
                          <p style="margin-top: 0">30€</p>
                      </div>
                    </div>
                    <div class="text-time-present">
                      <p style="margin-bottom: 3px; margin-top: 5px"><b>Collaborated with:</b></p>
                      <div class="accounts-formatter">
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                      </div>
                      <a style="margin-top: 0">...and more</a>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div class="present-cover">
                  <div class="text-present">
                    <div class="text-title-present">
                      <p>Andrea's Party</p>
                    </div>
                    <div class="text-present-formatter">
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Celebration day in:</b></p>
                          <p style="margin-top: 0">10days</p>
                      </div>
                      <div class="text-time-present">
                          <p style="margin-bottom: 3px; margin-top: 5px"><b>Average Price:</b></p>
                          <p style="margin-top: 0">30€</p>
                      </div>
                    </div>
                    <div class="text-time-present">
                      <p style="margin-bottom: 3px; margin-top: 5px"><b>Collaborated with:</b></p>
                      <div class="accounts-formatter">
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                          <svg herf="" class="button-account" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                          </svg>
                      </div>
                      <a style="margin-top: 0">...and more</a>
                    </div>
                  </div>
                </div>
              </article>
          </div>
          <div id="icon-right">
            <a href="">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
                ></path>
              </svg>
            </a>
          </div>
        </section>
       </main>
       <footer></footer> 
    </div>
</template>

<style scoped>
@import '../assets/styles/styles_search.css';
</style>