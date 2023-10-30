<template>
  <div>
    <div class="custom-container mt-5">

      <v-row class="d-flex justify-content-between">
        <v-col md="4" sm="12" lg="4">
          <div class="custom-stat-boxes mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center d-flex flex-column">
            <h4 class="custom-stat-boxes-title">Nombre total de bénéficiaires</h4>
            <div class="custom-stat-boxes-bloc mt-auto">
              <h1 v-if="nombretotal" class="custom-stat-boxes-number ma-2">
                {{
                  nombretotal
                }}
              </h1>
              <h1 v-show="isNTBloading" class="custom-stat-boxes-number">
                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#d89f11">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>

              <h1 class="mdi mdi-account-group-outline custom-icon-box"></h1>

            </div>
          </div>
        </v-col>
        <v-col md="4" sm="12" lg="4">
          <div class="custom-stat-boxes mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center d-flex flex-column">
            <h4 class="custom-stat-boxes-title">Nombre de transactions Wave</h4>
            <div class="custom-stat-boxes-bloc mt-auto">
              <h1 v-if="nombretransactionswave" class="custom-stat-boxes-number">
                {{
                  nombretransactionswave
                }}
              </h1>
              <h1 v-show="isNTWloading" class="custom-stat-boxes-number">
                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#d89f11">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>

              <h1 class="mdi mdi-cash-check custom-icon-box"></h1>

            </div>
          </div>
        </v-col>
        <v-col md="4" sm="12" lg="4">
          <div class="custom-stat-boxes mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center d-flex flex-column">
            <h4 class="custom-stat-boxes-title">Nombre de transactions OM</h4>
            <div class="custom-stat-boxes-bloc mt-auto">
              <h1 v-if="nombretransactionsom" class="custom-stat-boxes-number">
                {{
                  nombretransactionsom
                }}
              </h1>
              <h1 v-show="isNTOloading" class="custom-stat-boxes-number">
                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#d89f11">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>

              <h1 class="mdi mdi-cash-check custom-icon-box"></h1>

            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <div class="custom-container mt-5 mr-8 ml-8 pl-4 pr-1 pt-5 pb-5">
      <list-chart></list-chart>
    </div> -->
  </div>
</template>

  
<script>

import Notification from '@/components/Notification'
export default {
  components: {
    Notification
  },
  mounted: function () {
    this.$dgidApi.get('/beneficiaires')
      .then(async (response) => {
        this.nombretotal = response.data.data.data.length
        this.isNTBloading = false
      })
    this.$dgidApi.get('/transactions')
      .then(async (response) => {
        console.log("DDDFF++", response.data.data.data)
        this.nombretransactionswave = await response.data.data.data.filter(transaction => transaction.slug_operateur === "wave").length;
        this.isNTWloading = false
        this.nombretransactionsom = await response.data.data.data.filter(transaction => transaction.slug_operateur === "om").length;
        this.isNTOloading = false

      })
    /* this.$store.dispatch('structures/getList')
    this.$store.dispatch('fournisseurs/getList') */
  },

  data: () => ({
    isNTBloading: true,
    isNTWloading: true,
    isNTOloading: true,
    nombretotal: null,
  }),

  metaInfo() {
    return {
      items: this.items,
    }
  }
}
</script>

<style >
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.custom-icon-box {
  font-size: 50px;
  color: #d89f11;
}

.custom-stat-boxes {
  background-color: #faf2df;
  border-radius: 2%;
  height: 100%;
}

.custom-stat-boxes-bloc {
  display: flex;
  align-items: center;
  padding-top: 50px
}

.custom-stat-boxes:hover,
.custom-stat-boxes:hover h1,
.custom-stat-boxes:hover svg,
.custom-stat-boxes:hover>.custom-stat-boxes-title {
  color: #ffffff;
  background-color: #d89f11;
}
.custom-stat-boxes:hover .custom-svg circle {
  stroke: white;
}
.custom-stat-boxes-title {

  color: #d89f11;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.custom-stat-boxes-number {

  flex: 1;
  font-size: 34px;
  color: #d89f11;
  font-weight: 700;
  text-align: left;
}</style>
    