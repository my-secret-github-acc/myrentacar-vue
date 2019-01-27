
<template>
<div id="app">
      <section class="mobile-bar flex">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
            fill="white"
          /></svg
        ><svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
            fill="white"
          /></svg
        ><svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
            fill="white"
          />
        </svg>
      </section>
      <section class="top">
        <div class="flex">
          <nav class="nav-menu">
            <a href="#">Все курорты</a> <a href="#">О компании</a>
            <a href="#">Контакты</a> <a href="#">Журнал о Чехии</a>
          </nav>
          <div id="language">
            <a href="#"
              ><span class="mobile-hide">in </span>English<span
                class="mobile-hide"
                >, please</span
              ></a
            >
          </div>

          <div id="currency__current" class="currency">
            <div id="currency__current__click-zone" onclick="getElementById('currency__popup').style.display='flex';">
              <a href="#">{{currencyName}}</a>
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0L5 5L10 0H0Z"
                  fill="white"
                />
              </svg>
            </div>

            <div id="currency__popup" class="flex-column">
              <a
                href="#"
                v-on:click.prevent="setCurrency(0)"
                v-if="user_currency!=0"
                >Usd<span>$</span></a
              >
              <a
                href="#"
                v-on:click.prevent="setCurrency(1)"
                v-if="user_currency!=1"
                >Руб<span>₽</span></a
              >
              <a
                href="#"
                v-on:click.prevent="setCurrency(2)"
                v-if="user_currency!=2"
                >Eur<span>€</span></a
              >
            </div>
          </div>
        </div>
        <div class="nav-menu__bar">
          <div class="nav-menu__bar-slider"></div>
        </div>
        <div class="flex">
          <div class="top__column-left">
            <h2>MYRENTACAR . ЧЕХИЯ</h2>
            <p class="top__recommended">
              Рекомендательный прокат автомобилей на курортах и в туристических
              городах
            </p>

            <h1>Аренда в Чехии</h1>
            <p class="top__stats">
              Всего 2 345 автомобилей со средним чеком €24 в сутки
            </p>
          </div>
          <div class="top__column-right">
            <a class="reviews" href="#">
              ОТЗЫВЫ · 3 956
              <svg
                class="heart"
                width="15"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 13.5211L6.4125 12.5484C2.55 9.10737 0 6.83789 0 4.05263C0 1.78316 1.815 0 4.125 0C5.43 0 6.6825 0.596842 7.5 1.54C8.3175 0.596842 9.57 0 10.875 0C13.185 0 15 1.78316 15 4.05263C15 6.83789 12.45 9.10737 8.5875 12.5558L7.5 13.5211Z"
                  fill="#E86260"
                />
              </svg>
              <p>Мнение наших клиентов</p></a
            >

            <ul class="articles">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.600657">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.5 15C5.67 15 5 14.33 5 13.5C5 12.67 5.67 12 6.5 12C7.33 12 8 12.67 8 13.5C8 14.33 7.33 15 6.5 15ZM17.5 15C16.67 15 16 14.33 16 13.5C16 12.67 16.67 12 17.5 12C18.33 12 19 12.67 19 13.5C19 14.33 18.33 15 17.5 15ZM5 10L6.5 5.5H17.5L19 10H5Z"
                      fill="white"
                    />
                  </g></svg
                ><a href="#">Особенности ПДД</a>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.600657">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM15 19L9 16.89V5L15 7.11V19Z"
                      fill="white"
                    />
                  </g></svg
                ><a href="#">Подборка маршрутов</a>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.600657">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="white"
                    />
                  </g></svg
                ><a href="#">О стране<span>+ скачать .PDF</span></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="settings flex">
        <a
          href="#"
          class="settings__setting settings__setting-city flex-column"
        >
          <span class="settings__label">Город получения и возврата</span>
          <span class="settings__choice">Карловы Вары</span>
        </a>
        <div class="settings__divider"></div>
        <a
          href="#"
          class="settings__setting settings__setting-dates flex-column"
        >
          <span class="settings__label">Даты аренды</span>
          <span class="settings__choice"
            >28 фев. – 9 мар.<span class="settings__choice" id="date_total">
              · 10 дней</span
            ></span
          >
        </a>
        <a href="#" class="settings__setting settings__setting-filters flex">
          <span class="settings__choice">Расширенные фильтры</span
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 10L12 15L17 10H7Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </section>

      <section class="cars__header flex">
        <div class="cars__header__column-left">
          <h2>
            123 автомобилей из <span style="white-space:nowrap">2 102</span>
          </h2>

          <a
            class="cars__header__type-link"
            v-on:click.prevent="get_cars(0)"
            href="#"
            ><span>Все</span><span class="cars_amount">112</span></a
          >
          <a
            class="cars__header__type-link"
            v-on:click.prevent="get_cars(1)"
            href="#"
            ><span>Компактные</span><span class="cars_amount">89</span></a
          >
          <a
            class="cars__header__type-link"
            v-on:click.prevent="get_cars(2)"
            href="#"
            ><span>Средний класс</span><span class="cars_amount">102</span></a
          >
          <a
            class="cars__header__type-link"
            v-on:click.prevent="get_cars(3)"
            href="#"
            ><span>Люкс</span><span class="cars_amount">54</span></a
          >
          <a
            class="cars__header__type-link"
            v-on:click.prevent="get_cars(4)"
            href="#"
            ><span>Внедорожники</span><span class="cars_amount">24</span></a
          >

          <div id="cars__header__type-active-bar"></div>
        </div>

        <div class="cars__header__column-right">
          <a class="cars__header__cheap" href="#">Сначала дешевые</a>
          <a class="cars__header__display" href="#"
            ><svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6H5V0H0V6ZM0 13H5V7H0V13ZM6 13H11V7H6V13ZM12 13H17V7H12V13ZM6 6H11V0H6V6ZM12 0V6H17V0H12Z"
              /></svg
          ></a>
          <a class="cars__header__display cars__header__display-active" href="#"
            ><svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 13H17V7H0V13ZM0 0V6H17V0H0Z"
              /></svg
          ></a>
        </div>
      </section>

      <section class="cars__types">
        <a class="cars__type" href="#">
          <div class="cars__type__overlay"></div>
          <h3>Новые</h3>
          <span>453 автомобиля</span>
          <div class="cars__type__wrapper">
            <img src="./img/new.png" alt="new" />
          </div>
        </a>
        <a class="cars__type" href="#">
          <div class="cars__type__overlay"></div>
          <h3>Быстрые</h3>
          <span>26 автомобилей</span>
          <div class="cars__type__wrapper">
            <img src="./img/fast.png" alt="fast" />
          </div>
        </a>
        <a class="cars__type" href="#">
          <div class="cars__type__overlay"></div>
          <h3>Экономичные</h3>
          <span>213 автомобилей</span>
          <div class="cars__type__wrapper">
            <img src="./img/economy.png" alt="economy" />
          </div>
        </a>
        <a class="cars__type" href="#" id="crossroad">
          <div class="cars__type__overlay"></div>
          <h3>Внедорожники</h3>
          <span>453 автомобиля</span>
          <div class="cars__type__wrapper">
            <img src="./img/crossroad.png" alt="crossroad" />
          </div>
        </a>
      </section>

      <section class="cars">
        <template v-for="index in blocks_displayed">
          <div class="cars__grid">
            <div
              class="car"
              v-for="car in cars.slice((index-1)*cars_per_block, (index-1)*cars_per_block + cars_per_block)"
            >
              <a class="car__images" href="#">
                <img
                  class="car__image__front"
                  v-bind:src="car.image_url"
                  v-bind:alt="car.full_name"
                />
                <div class="car__image__back">
                  <img src="./img/land.png" alt="photo" />
                  <div class="car__images__bars">
                    <div class="car__images__bar"></div>
                    <div class="car__images__bar"></div>
                    <div class="car__images__bar"></div>
                    <div class="car__images__bar"></div>
                    <div class="car__images__bar-active"></div>
                  </div>
                </div>
              </a>
              <div class="car__bg"></div>

              <div class="car__features flex-column">
                <div v-if="!car.deposited" class="car__feature">
                  Без депозита
                </div>
                <div v-if="car.kasko" class="car__feature">Каско</div>
                <div v-if="car.seats>5" class="car__feature car__feature-white">
                  {{ car.seats+"×" }}
                </div>
              </div>
              <div class="car__text">
                <h3>{{ car.full_name }}, {{ car.year }}</h3>
                <p>{{ car.engine }} AT, дизель</p>
                <span class="car__price-total"
                  >{{ formatCurrency(convertCurrency(car.daily_cost, false) *
                  10) }}
                </span>
                <span class="car__price-day"
                  >{{ convertCurrency(car.daily_cost) }} в день</span
                >
              </div>

              <div class="car__slide">
                <a href="#" class="car__info-icon"
                  ><svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 15.7H11V9.69995H9V15.7ZM10 0.699951C4.48 0.699951 0 5.17995 0 10.7C0 16.22 4.48 20.7 10 20.7C15.52 20.7 20 16.22 20 10.7C20 5.17995 15.52 0.699951 10 0.699951ZM10 18.7C5.59 18.7 2 15.11 2 10.7C2 6.28995 5.59 2.69995 10 2.69995C14.41 2.69995 18 6.28995 18 10.7C18 15.11 14.41 18.7 10 18.7ZM9 7.69995H11V5.69995H9V7.69995Z"
                      fill="#999EA7"
                    /></svg
                ></a>
                <div class="car__slide__inner">
                  <svg
                    class="car__slide__icon"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.59 0.289948L6 4.86995L1.41 0.289948L0 1.69995L6 7.69995L12 1.69995L10.59 0.289948Z"
                      fill="#1E2A35"
                    />
                  </svg>
                  <div class="car__slide__grid">
                    <span
                      >10 д. × {{ convertCurrency(car.daily_cost, false)
                      }}</span
                    >
                    <span
                      >{{ formatCurrency(convertCurrency(car.daily_cost, false)
                      * 10) }}</span
                    >
                    <span>Депозит</span>
                    <span>{{ convertCurrency(car.deposit, false) }}</span>
                    <span>Доставка</span>
                    <span>{{ convertCurrency(delivery, false) }}</span>
                    <span class="car__slide__grid-total">Итого</span>
                    <span class="car__slide__grid-total"
                      >{{ convertCurrency(car.daily_cost, false) * 10 +
                      convertCurrency(car.deposit, false) +
                      convertCurrency(delivery, false) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a v-if="index % 2 == 0" class="banner" href="#"
            ><span>Приезжайте в Черногорию</span></a
          >
        </template>
      </section>

      <div class="cars__button-row flex">
        <a
          v-if="cars.length > (blocks_displayed * cars_per_block)"
          v-on:click.prevent="blocks_displayed += 1"
          class="cars__button-load"
          href="#"
        >
          Подгрузить ещё</a
        >
      </div>
    </div> </template>

<script>

export default {
  name: 'app',
 data: function () {
   return {
    usd: 0,
    eur: 0,
    cars: [],
    blocks_displayed: 0,
    cars_per_block: 8,
    user_currency: 1,
    delivery: 7.5
   }
  },

  methods: {
    get_cars: function(type, slide = true) {
      
      const proxyUrl ='https://cors-anywhere.herokuapp.com/';
      const url = "http://myrentacar.co/json/example/";

      fetch(proxyUrl + url + type + ".json")
        .then(response => response.json())
        .then(json => {
          this.cars = json.cars;
          this.blocks_displayed = 1;

           //move the blue underline:
          const bar = document.getElementById("cars__header__type-active-bar");
          let child = bar.parentElement.children[type + 1];
          bar.style.marginLeft = child.offsetLeft + "px";
          bar.style.width = child.children[0].clientWidth + "px";

          if (slide) {
            //slide the cars from the right:
            const car_grids = document.getElementsByClassName("cars__grid");

            [].forEach.call(car_grids, function(el) {
              el.classList.add("sliding");
            });

            document.body.style.overflowX = "hidden";

            setTimeout(function() {
              [].forEach.call(car_grids, function(el) {
                el.classList.remove("sliding");
              });

              document.body.style.overflowX = "visible";
            }, 650);
          }
        });
    },
    numberWithSpaces: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatCurrency: function(num) {
      switch (this.user_currency) {
        case 0: //usd
          return "$" + this.numberWithSpaces(num);
        case 1: //rub
          return this.numberWithSpaces(num) + " ₽";
        case 2: //eur
          return "€" + this.numberWithSpaces(num);
      }
    },
    convertCurrency: function(number, format = true) {
      let result = number; //usd
      switch (this.user_currency) {
        case 1: //rub
          result = Math.ceil(number * this.usd);
          break;
        case 2: //eur
          result = Math.ceil((number * this.usd) / this.eur);
          break;
      }
      if (format) return this.formatCurrency(result);
      else return result;
    },
    setCurrency: function(new_currency) {
      this.user_currency = new_currency;

      document.getElementById("currency__popup").style.display = "none";
    },
    handleResize: function() {
      if (window.innerWidth < 1040) {
        this.cars_per_block = 6;
      } else this.cars_per_block = 8;
    }
  },

 created() {
    this.get_cars(0, false);

    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(response => response.json())
      .then(json => {
        this.usd = json.Valute.USD.Value;
        this.eur = json.Valute.EUR.Value;
      });

    window.addEventListener("storage", e => {
      if (e.key === "currency") {
        this.user_currency = parseInt(e.newValue);
        //console.log("currency: " + this.user_currency);
      }
    });

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    currencyName: function() {
      return ["usd", "руб", "eur"][this.user_currency];
    }
  },
  mounted() {
    if (localStorage.currency) {  
      this.user_currency = parseInt(localStorage.currency);
    }
  },
  watch: {
    user_currency(newValue) {
      localStorage.currency = newValue;
    }
  }

}
</script>

<style scoped>
@import './styles.css';
</style>