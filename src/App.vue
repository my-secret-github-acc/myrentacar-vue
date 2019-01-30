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
          <a href="#">Контакты</a> <a href="#">Журнал о Грузии</a>
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
          <div
            id="currency__current__click-zone"
            onclick="getElementById('currency__popup').style.display='flex';"
          >
            <a href="#">{{ currencyName }}</a>
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
              v-on:click.prevent="setCurrency(0);"
              v-if="user_currency != 0"
              >Usd<span>$</span></a
            >
            <a
              href="#"
              v-on:click.prevent="setCurrency(1);"
              v-if="user_currency != 1"
              >Руб<span>₽</span></a
            >
            <a
              href="#"
              v-on:click.prevent="setCurrency(2);"
              v-if="user_currency != 2"
              >Eur<span>€</span></a
            >
          </div>
        </div>
      </div>
      <div class="nav-menu__bar"><div class="nav-menu__bar-slider"></div></div>
      <div class="flex">
        <div class="top__column-left">
          <h2>MYRENTACAR . ГРУЗИЯ</h2>
          <p class="top__recommended">
            Рекомендательный прокат автомобилей на курортах и в туристических
            городах
          </p>

          <h1>Аренда в Грузии</h1>
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
      <CityPicker
        v-bind:init_pickup_city_id="pickup_city_id"
        v-bind:init_dropoff_city_id="dropoff_city_id"
        id="city-picker"
        v-on:show-cars="get_cars(0);"
      ></CityPicker>

      <div class="settings__divider"></div>
      <a
        onClick="return false;"
        href="#"
        class="settings__setting settings__setting-dates flex-column"
      >
        <span class="settings__label">Даты аренды</span>
        <span class="settings__choice"
          >20 фев. – 20 фев.<span class="settings__choice" id="date_total">
            · 1 день</span
          ></span
        >
      </a>
      <a
        onClick="return false;"
        href="#"
        class="settings__setting settings__setting-filters flex"
      >
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

    <section v-if="tabs.length > 0" class="cars__header flex">
      <div class="cars__header__column-left">
        <h2>
          {{ Math.min(cars.length, cars_per_block * blocks_displayed) }}
          {{
            automobilesString(
              Math.min(cars.length, cars_per_block * blocks_displayed)
            )
          }}
          из <span style="white-space:nowrap">{{ getCount(type) }}</span>
        </h2>
        <a
          class="cars__header__type-link"
          v-on:click.prevent="get_cars(0);"
          href="#"
          ><span>Все</span><span class="cars_amount">{{ getCount(0) }}</span></a
        >
        <a
          class="cars__header__type-link"
          v-on:click.prevent="get_cars(1);"
          href="#"
          ><span>Компактные</span
          ><span class="cars_amount">{{ getCount(1) }}</span></a
        >
        <a
          class="cars__header__type-link"
          v-on:click.prevent="get_cars(2);"
          href="#"
          ><span>Средний класс</span
          ><span class="cars_amount">{{ getCount(2) }}</span></a
        >
        <a
          class="cars__header__type-link"
          v-on:click.prevent="get_cars(3);"
          href="#"
          ><span>Люкс</span
          ><span class="cars_amount">{{ getCount(3) }}</span></a
        >
        <a
          class="cars__header__type-link"
          v-on:click.prevent="get_cars(4);"
          href="#"
          ><span>Внедорожники</span
          ><span class="cars_amount">{{ getCount(4) }}</span></a
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

    <section v-if="tabs.length > 0" class="cars__types">
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

    <section v-if="tabs.length > 0" class="cars">
      <template v-for="index in blocks_displayed">
        <div class="cars__grid">
          <div
            class="car"
            v-for="car in cars.slice(
              (index - 1) * cars_per_block,
              (index - 1) * cars_per_block + cars_per_block
            )"
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
              <div v-if="!car.deposited" class="car__feature">Без депозита</div>
              <div v-if="car.kasko" class="car__feature">Каско</div>
              <div v-if="car.seats > 5" class="car__feature car__feature-white">
                {{ car.seats + "×" }}
              </div>
            </div>
            <div class="car__text">
              <h3>{{ car.full_name }}, {{ car.year }}</h3>
              <p>{{ car.engine }} AT, дизель</p>
              <span class="car__price-total"
                >{{
                  formatCurrency(convertCurrency(car.daily_cost, false) * 10)
                }}
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
                    >10 д. × {{ convertCurrency(car.daily_cost, false) }}</span
                  >
                  <span>{{
                    formatCurrency(convertCurrency(car.daily_cost, false) * 10)
                  }}</span>
                  <span>Депозит</span>
                  <span>{{ convertCurrency(car.deposit, false) }}</span>
                  <span>Доставка</span>
                  <span>{{ convertCurrency(delivery, false) }}</span>
                  <span class="car__slide__grid-total">Итого</span>
                  <span class="car__slide__grid-total">{{
                    convertCurrency(car.daily_cost, false) * 10 +
                      convertCurrency(car.deposit, false) +
                      convertCurrency(delivery, false)
                  }}</span>
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
        v-if="cars.length > blocks_displayed * cars_per_block"
        v-on:click.prevent="blocks_displayed += 1;"
        class="cars__button-load"
        href="#"
      >
        Подгрузить ещё</a
      >
    </div>
  </div>
</template>

<script>
import CityPicker from "./components/CityPicker";

export default {
  name: "app",
  components: {
    CityPicker
  },
  props: {
    pickup_city_id: { default: 481921 },
    dropoff_city_id: { default: 481921 }
  },

  data: function() {
    return {
      usd: 0,
      eur: 0,
      cars: [],
      tabs: [],
      blocks_displayed: 0,
      cars_per_block: 8,
      user_currency: 1,
      delivery: 7.5
    };
  },

  methods: {
    get_cars: function(type, slide = true) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      let url =
        "http://beta.myrentacar.co/api/cars?key=car_to_rent&signature=72af0db4fabfb23b278cbf60bbb9907b";
      url += "&pickup_city_id=" + this.pickup_city_id;
      url += "&dropoff_city_id=" + this.dropoff_city_id;
      url += "&pickup_date=2019-02-20";
      if (type > 0) {
        url += "&tabs=" + type;
      }
      //console.log(url);
      fetch(proxyUrl + url)
        .then(response => response.json())
        .then(json => {
          this.cars = json.cars;
          this.blocks_displayed = 1;
          if (type === 0) this.tabs = json.tabs;
          this.type = type;

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
    },
    automobilesString(num) {
      //TD: use the same function for app and comp
      if (num === 0) return "автомобилей";
      num = num % 100;

      if (num < 10 || num > 20) {
        if (num % 10 === 1) return "автомобиль";
        else if (num % 10 < 5) return "автомобиля";
      }
      return "автомобилей";
    },
    getCount(type_id) {
      if (this.tabs.length === 0) return "";
      let found = this.tabs.find(function(element) {
        return element.value === type_id;
      });
      if (found) return found.count;
      return "";
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
    $route() {
      //close filter popups:

      const popup = document.getElementById("city-picker-outer");
      if (popup) popup.style.maxHeight = "0px";

      this.get_cars(0);
    },
    user_currency(newValue) {
      localStorage.currency = newValue;
    }
  }
};
</script>

<style>
/* Reset */

a {
  color: #fff;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  list-style: none;
}

/* Main */

:root {
  --primary-color: #27c79a;
  --primary-border-radius: 2px;
}

body {
  font-family: Montserrat;
  background: #fafafa;
  max-width: 1028px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

p {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.007em;
}

.js-is-hidden {
  display: none;
}

/* Top */

.mobile-bar {
  background: #000;
  margin-left: 4px;
  padding-left: 25px;
  height: 80px;
  align-items: center;
}

.mobile-bar svg {
  margin-right: 15px;
}

.top {
  color: #fff;
  margin-left: 4px;
  padding: 10px 72px 0 64px;
  height: 367px;
  background: linear-gradient(
      0deg,
      rgba(30, 42, 53, 0.8),
      rgba(30, 42, 53, 0.8)
    ),
    url(./img/bg.png);
  background-repeat: no-repeat;
}

.nav-menu {
  flex-grow: 1;
}

.nav-menu__bar {
  top: 4px;
  position: relative;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.nav-menu__bar-slider {
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: #fff;
  height: 2px;
  width: 87px;
}

.nav-menu a {
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 42px;
  opacity: 0.6;
  letter-spacing: -0.01em;
}

.nav-menu a:hover {
  opacity: 1;
  transition: 0.05s ease;
}

#language {
  width: 171px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 200;
}

.currency {
  position: relative;
  font-weight: bold;
  line-height: 20px;
  font-size: 11px;
  text-transform: uppercase;
}

.currency svg {
  margin-left: 12px;
}

#currency__current {
  pointer-events: all;
  padding-bottom: 5px;
  z-index: 1;
}

#currency__current__click-zone {
  cursor: pointer;
  pointer-events: all;
}

#currency__popup {
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;

  top: 25px;
  left: -10px;
  width: 74px;

  padding: 5px 0;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(30, 42, 53, 0.1);
  border-radius: var(--primary-border-radius);
  z-index: 1;
}

#currency__popup a {
  display: block;
  color: #1e2a35;
  padding: 7px 10px;
}

#currency__popup a:hover {
  color: var(--primary-color);
  transition: 0.05s ease;
}

#currency__popup a:hover span {
  color: #1e2a35;
}

#currency__popup span {
  margin-left: 10px;
  font-weight: normal;
  font-size: 11px;
  color: #999ea7;
}

.top h2 {
  margin-top: 29px;
  margin-left: -1px;
  margin-bottom: -4px;
  font-style: italic;
  font-size: 24px;
}

.top__recommended {
  max-width: 260px;
  line-height: 1.6em;
}

h1 {
  margin-top: 26px;
  margin-left: -3.5px;
  font-weight: 900;
  font-size: 64px;
}

.top__column-left {
  flex-grow: 1;
}

.top__column-right {
  padding-top: 37px;
  padding-right: 15px;
}

.reviews {
  display: block;
  font-weight: 900;
  font-size: 16px;
  margin-left: -2px;
}

.heart {
  position: relative;
  top: 4px;
}

.articles {
  margin-top: 61px;
}

.articles a {
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
}

.articles li {
  margin-bottom: 17px;
  height: 23px;
}

.articles span {
  margin-left: 10px;
  color: #fff;
  opacity: 0.6;
}

.articles span:hover {
  opacity: 1;
}

.articles svg {
  position: relative;
  top: 8px;
  margin-right: 8px;
}

.top__stats {
  margin-top: -2px;
  line-height: 21px;
  font-size: 14px;
}

/* Settings */
.settings {
  position: relative;
  margin: -37px 65px -4px 68px;
  align-items: center;
  height: 69px;
}

.settings__setting {
  color: #fff;
  justify-content: center;
  border-radius: var(--primary-border-radius);
  padding: 1px 15px 0 15px;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(30, 42, 53, 0.1),
      rgba(30, 42, 53, 0.1)
    ),
    var(--primary-color);

  letter-spacing: 0.03em;
}

.settings__divider {
  margin-left: -2px;
  width: 2px;
  height: 100%;
  opacity: 0.2;
  background: #fff;
}

.settings__setting-city {
  width: 270px;
  border-radius: 2px 0 0 2px;
}

.settings__setting-dates {
  width: 265px;
  border-radius: 0 2px 2px 0;
}

.settings__setting-filters {
  background: var(--primary-color);
  width: 265px;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
}

.settings__setting-filters svg {
  position: relative;
  right: -7px;
}

.settings__label {
  line-height: 20px;
  font-size: 12px;
  opacity: 0.8;
}

.settings__choice {
  font-weight: 500;
  line-height: 30px;
  font-size: 16px;
}

#date_total {
  display: inline;
}
/* Cars header*/

.cars__header {
  margin: 0 64px 0 71px;
}

.cars__header h2 {
  color: #232a36;
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  margin-bottom: 4px;
}

.cars__header a {
  color: #232a36;
  font-weight: bold;
  line-height: 34px;
  font-size: 16px;
}

.cars__header__column-left {
  position: relative;
  flex-grow: 1;
}

.cars__header__type-link {
  position: relative;
  margin-right: 16.5px;
}

.cars__header__type-link {
  display: inline-block;
}
.cars__header__type-link span {
  display: inline-block;
}

.cars__header__type-link .cars_amount {
  width: 15px;
  position: relative;
  bottom: 5px;
  left: 5px;
  font-weight: 500;
  line-height: normal;
  font-size: 11px;
  color: #999ea7;
}

.cars__header__column-right {
  margin-top: 39px;
}

.cars__header__display {
  margin-left: 31px;
}

.cars__header__display svg {
  fill: #999ea7;
  position: relative;
  top: 3px;
}

.cars__header__display:last-of-type {
  margin-right: 3px;
  margin-left: 20px;
}

.cars__header__display-active svg {
  fill: var(--primary-color);
}

#cars__header__type-active-bar {
  margin-top: -5px;
  width: 32px;
  height: 2px;
  background: #1fa4d4;
  transition: all 0.3s;
}

/* Car type banners: */

.cars__types {
  display: grid;
  grid-template-columns: repeat(auto-fill, 222px);
  grid-column-gap: 5px;

  margin: 38px 50px 35px 71px;
}

.cars__type {
  height: 121px;
  display: block;
  position: relative;
  overflow: hidden;
}

.cars__type__overlay {
  display: block;
  background: rgba(0, 0, 0, 0.22);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.cars__type__wrapper {
  width: 444px;
  height: 242px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -62px;
  left: -111px;
}

.cars__type img {
  display: block;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
  border-radius: var(--primary-border-radius);
}

.cars__type h3 {
  position: absolute;
  top: -2px;
  left: 20px;
  font-weight: 900;
  font-size: 20px;
  color: #ffffff;
  z-index: 1;
}

.cars__type span {
  position: absolute;
  bottom: 17px;
  left: 25px;
  font-weight: 500;
  font-size: 13px;
  color: #f5f7f9;
  z-index: 1;
}

/* Cars main grid*/

.cars {
  padding: 10px 66px 0 66px;
}

.cars__grid {
  position: relative;
  margin-left: -4px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 21px 5px;
  margin-bottom: 21px;
}

.sliding {
  animation: slide 0.65s ease;
}

@keyframes slide {
  from {
    left: 1300px;
  }
  to {
    left: 0px;
  }
}
.car {
  display: block;
  position: relative;
  width: 220px;
  height: 330px;
  color: #1e2a35;
  z-index: 1;
}

.car__text {
  padding: 13.4px 15px;
}

.car__features {
  position: absolute;
  top: -5px;
  left: 1px;
  margin: 10px;
}

.car__feature {
  width: auto;
  align-self: flex-start;
  margin-top: 5px;
  padding: 0 10px;
  color: #fff;
  background: var(--primary-color);
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  border-radius: var(--primary-border-radius);
  height: 20px;
  line-height: 20px;
}

.car__feature-white {
  color: #1e2a35;
  background: #fff;
}
.car__image__front {
  display: block;
  margin: 0 auto;
}

.car__image__back {
  position: relative;
  display: none;
  margin: 0 auto;
  border-radius: 2px 2px 0px 0px;
}

.car__bg {
  background: #fff;
  box-shadow: 0px 5px 15px rgba(30, 42, 53, 0.05);
  border-radius: var(--primary-border-radius);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 0.2s ease;
}

.car__images {
  display: block;
  height: 160px;
}

.car__images:hover .car__image__back {
  display: block;
}

.car__images:hover .car__image__front {
  display: none;
}

.car__images:hover ~ .car__bg {
  box-shadow: 0px 15px 35px rgba(30, 42, 53, 0.15);
}

.car__images:hover ~ .car__features {
  display: none;
}

.car__images img {
  display: block;
}

.car__images__bars {
  position: absolute;
  bottom: 10px;
  left: 50px;
  display: grid;
  grid-template-columns: repeat(5, 20px);
  grid-column-gap: 5px;
  height: 2px;
}

.car__images__bar {
  background: #fff;
}

.car__images__bar-active {
  background: var(--primary-color);
}

.car h3 {
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  display: block;
  margin: 1px 0 5px 0;
}

.car p {
  line-height: 20px;
  font-size: 14px;
  margin: 0;
}

.car__price-day {
  display: block;
  position: absolute;
  bottom: 15px;
  font-size: 14px;
}

.car__price-total {
  display: block;
  position: absolute;
  padding-left: 1px;
  bottom: 40px;
  font-weight: 900;
  font-size: 24px;
}

/* Car info slide */

.car__slide {
  pointer-events: none;
  position: absolute;
  width: 220px;
  height: 100%;
  bottom: 0px;
  left: 0px;
}

.car__slide__inner {
  opacity: 0;
  background: #ffffff;
  text-align: center;
  border-radius: 0px 0px 2px 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 0px;
  padding-top: 165px;
  z-index: 1;
  transition: all 0.45s ease;
  overflow-y: hidden;
}

.car__info-icon {
  pointer-events: all;
  position: absolute;
  right: 16px;
  bottom: 41px;
  opacity: 0.6;
}

.car__slide__inner:hover,
.car__info-icon:hover + .car__slide__inner {
  opacity: 0.95;
  height: 165px;
  padding-top: 0px;
  pointer-events: all;
}

.car__slide__icon {
  margin-top: 21;
}

.car__slide__grid {
  text-align: left;
  font-size: 14px;
  padding: 32px 0 0 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1.3em;
  grid-gap: 0.5em 35px;
}

.car__slide__grid-total {
  font-weight: bold;
}

/* "Load more" button */

.cars__button-row {
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 200px;
}

.cars__button-load {
  margin-top: 73.3px;
  margin-left: 8px;
  display: block;
  width: 276px;
  height: 40px;
  padding-top: 1px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  line-height: 41px;
  background: var(--primary-color);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: var(--primary-border-radius);
}

/* Banner */
.banner {
  position: relative;
  display: block;
  width: 901px;
  height: 122px;
  border-radius: 3px;
  background: url(./img/banner.png);
  margin: 42px 0 22px 5px;
}

.banner span {
  display: block;
  position: absolute;
  top: 45px;
  left: 37.5px;
  color: #fff;
  font-weight: 900;
  font-size: 36px;
  line-height: 30px;
}

/* Small screens */

@media only screen and (max-width: 1010px) {
  .top__column-right,
  .top p,
  .cars__header__column-right {
    display: none;
  }

  #crossroad {
    display: none;
  }

  .banner {
    max-width: 100%;
    margin: 42px 0 22px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner span {
    position: static;
    line-height: 40px;
    text-align: center;
  }
}

@media only screen and (max-width: 890px) {
  .settings__setting-dates .settings__label,
  .nav-menu__bar,
  .mobile-hide {
    display: none;
  }
}

@media only screen and (max-width: 810px) {
  .top {
    padding-left: 6%;
    padding-right: 6%;
  }

  .cars,
  .cars__types {
    padding: 0 2%;
  }

  .settings {
    margin-left: 2%;
    margin-right: 2%;
  }

  .cars__grid,
  .cars__types {
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
  }

  .settings__label {
    display: none;
  }
}

@media only screen and (max-width: 760px) {
  #cars__header__type-active-bar {
    display: none;
  }
}

@media only screen and (max-width: 720px) {
  .settings__choice {
    font-size: 14px;
  }

  #crossroad {
    display: block;
  }
}

@media only screen and (max-width: 575px) {
  #date_total {
    display: none;
  }
}
</style>
