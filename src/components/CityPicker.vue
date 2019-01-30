<template>
  <div class="city-picker">
    <a
      href="#"
      v-on:click.prevent="toggleCityPicker();"
      class="settings__setting settings__setting-city flex-column"
    >
      <span class="settings__label">Город получения и возврата</span>
      <span class="settings__choice"
        >{{ pickup_city_name
        }}<span v-if="pickup_city_id !== return_city_id">
          – {{ return_city_name }}</span
        ></span
      >
    </a>
    <div id="city-picker-outer">
      <div class="city-picker-inner">
        <h3>
          <a v-on:click.prevent="setMode(true);" href="#" id="pick-up"
            >Получение</a
          >
          и
          <a v-on:click.prevent="setMode(false);" href="#" id="return"
            >возврат</a
          ><span v-if="pickup_city_id === return_city_id" id="same-city"
            >Там же</span
          >
        </h3>
        <div id="city-picker__active-bar"></div>
        <div id="city-picker__cities">
          <a
            href="#"
            class="city-picker__city"
            v-on:click.prevent="selectCity(city.id, city.name);"
            v-for="city in cities"
            :key="city.key"
            v-bind:class="classObject(city.id)"
          >
            {{ city.name }}
            <svg
              v-if="city.airport"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 10.5V9L8.10526 5.25V1.125C8.10526 0.5025 7.61158 0 7 0C6.38842 0 5.89474 0.5025 5.89474 1.125V5.25L0 9V10.5L5.89474 8.625V12.75L4.42105 13.875V15L7 14.25L9.57895 15V13.875L8.10526 12.75V8.625L14 10.5Z"
                v-bind:fill="
                  city.id ===
                  (choosing_pick_up_city ? pickup_city_id : return_city_id)
                    ? '#27C79A'
                    : '#1E2A35'
                "
              />
            </svg>
          </a>
        </div>
        <div class="city-picker__buttons">
          <router-link
            :to="{
              path: '/',
              query: {
                pickup_city_id: pickup_city_id,
                dropoff_city_id: return_city_id
              }
            }"
            v-if="finished && cars_count > 0"
            id="city-picker__show-cars"
            >Посмотреть {{ cars_count }}
            {{ automobilesString(cars_count) }}</router-link
          >

          <span
            v-if="finished && cars_count == 0"
            class="city-picker__not-found"
            >Автомобили не найдены</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityPicker",
  props: ["init_pickup_city_id", "init_dropoff_city_id"],
  data() {
    return {
      cities: [],
      pickup_city_id: parseInt(this.init_pickup_city_id),
      pickup_city_name: "",
      return_city_id: parseInt(this.init_dropoff_city_id),
      return_city_name: "",
      cars_count: 0,
      finished: false,
      choosing_pick_up_city: true,
      choosing_drop_off_city: true
    };
  },
  methods: {
    toggleCityPicker: function() {
      const popup = document.getElementById("city-picker-outer");
      if (popup) {
        if (popup.style.maxHeight !== "580px") {
          popup.style.maxHeight = "580px";
          //console.log("show");
        } else popup.style.maxHeight = "0px";
      }
    },
    setMode: function(mode) {
      this.choosing_pick_up_city = mode;
      this.choosing_drop_off_city = !mode;
      //move the underline:
      const bar = document.getElementById("city-picker__active-bar");
      let target = this.choosing_pick_up_city
        ? document.getElementById("pick-up")
        : document.getElementById("return");

      bar.style.left = target.offsetLeft + "px";
      bar.style.width = target.clientWidth + "px";
    },
    getCarsCount: function() {
      this.finished = false;
      let url =
        "http://beta.myrentacar.co/api/cars/count?key=car_to_rent&signature=72af0db4fabfb23b278cbf60bbb9907b";
      url += "&pickup_city_id=" + this.pickup_city_id;
      url += "&dropoff_city_id=" + this.return_city_id;
      url += "&pickup_date=2019-02-20";

      const proxy_url = "https://cors-anywhere.herokuapp.com/";
      fetch(proxy_url + url)
        .then(response => response.json())
        .then(json => {
          this.cars_count = json.count;
          this.finished = true;
        });
    },
    selectCity: function(id, name) {
      if (this.choosing_pick_up_city) {
        this.pickup_city_id = id;
        this.pickup_city_name = name;
      }

      if (this.choosing_drop_off_city) {
        this.return_city_id = id;
        this.return_city_name = name;
      }

      this.getCarsCount();
    },
    classObject(id) {
      if (this.choosing_pick_up_city) {
        if (id === this.pickup_city_id) return "selected";
      } else {
        if (id === this.return_city_id) return "selected";
      }
    },
    automobilesString(num) {
      num = num % 100;

      if (num < 10 || num > 20) {
        if (num % 10 === 1) return "автомобиль";
        else if (num % 10 < 5) return "автомобиля";
      }

      return "автомобилей";
    }
  },
  created() { 
    const url = "http://beta.myrentacar.co/json/124/general";
    const proxy_url = "https://cors-anywhere.herokuapp.com/";
    fetch(proxy_url + url)
      .then(response => response.json())
      .then(json => {
        json.city.cities.small.forEach(column => {
          column.forEach(element => {
            this.cities.push(element);
            if (element.id === this.pickup_city_id) {
              this.pickup_city_name = element.name;
            }
            if (element.id === this.return_city_id) {
              this.return_city_name = element.name;
            }
          });
        });
        this.getCarsCount();
      });

    //hide filter popup when clicking outside it:

    document.addEventListener("click", function(event) {
      let popup = document.querySelector("#city-picker-outer");
      if (
        event.target.closest("#city-picker-outer") ||
        event.target.closest(".city-picker")
      )
        return;

      if (popup.style.maxHeight === "580px") {
        //console.log("click-hide");
        popup.style.maxHeight = "0px";
      }
    });
  },
  mounted() {
    //this.setMode(true);
  }
};
</script>

<style scoped>
.city-picker {
  height: 100%;
}

#city-picker-outer {
  position: absolute;
  top: 70px;
  left: 0px;
  color: #1e2a35;
  background: #fff;
  width: 595px;
  max-height: 0px;
  border-radius: 2px;
  box-shadow: 0px 10px 25px rgba(30, 42, 53, 0.1);
  overflow: hidden;
  z-index: 3;
  transition: all 0.45s ease;
}

.city-picker-inner {
  padding: 15px 15px 0px 15px;
}

#city-picker__active-bar {
  position: absolute;
  height: 2px;
  width: 121px;
  left: 15px;
  top: 50px;
  background: #27c79a;
  transition: all 0.3s;
}

#same-city {
  position: relative;
  bottom: 8px;
  left: 10px;
  font-size: 12px;
  color: #999ea7;
  font-weight: normal;
  line-height: 0;
}

.city-picker-inner a {
  color: #1e2a35;
  font-family: Montserrat;
  font-weight: normal;
  text-decoration: none;
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 20px;
}

.city-picker-inner .selected {
  font-weight: bold;
  color: #27c79a;
}

.city-picker-inner a:hover {
  color: #27c79a;
}

.city-picker-inner svg {
  margin-left: 7px;
}

.city-picker-inner h3 {
  margin-top: 10px;
}

.city-picker-inner h3,
.city-picker-inner h3 a {
  font-weight: bold;
  line-height: 30px;
  font-size: 20px;
}

.city-picker-inner h3 a {
  display: inline-block;
  margin: 0;
}

.city-picker__city {
  display: block;
}

#city-picker__cities {
  columns: 100px 3;
  column-gap: 80px;
  margin-bottom: 100px;
}

.city-picker__buttons {
  height: 50px;
}

#city-picker__show-cars {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  color: #1fa4d4;
  font-weight: 900;
}

.city-picker__not-found {
  position: relative;
  top: 10px;
  display: block;
  text-align: center;
  color: #ff8c76;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 1px;
}
</style>
