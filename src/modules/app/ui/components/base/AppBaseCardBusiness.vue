<template>
  <div class="app-base-card-business">
    <v-card v-if="type === 'mediaWithText'">
      <v-img class="align-end text-white" height="232" :src="sourceImage" cover />

      <div class="card-body d-flex flex-column gap-6 mt-5 mb-8 px-4 pt-5">
        <h1 class="text-subtitle-1 text-lg-h6 text-left text-black font-weight-bold">{{ title }}</h1>

        <slot name="card-body" />
      </div>

      <div class="card-footer px-4 pb-6">
        <hr class="line mb-4" />
        <slot name="card-footer" />
      </div>
    </v-card>

    <AppBaseCard v-else :is-using-card-header="true">
      <template #card-header>
        <div class="box-image relative top-0 left-0 right-0 w-100 h-fit-content">
          <img :src="sourceImage" :alt="alternativeTextSourceImage" class="card-image w-100 h-100 rounded-lg" />

          <v-chip
            small
            color="white"
            class="chip-information__live bg-success text-caption d-flex align-center gap-2 absolute right-0 px-4"
          >
            <div class="box-live d-flex align-center gap-1 pr-2">
              <span class="white-dot bg-white" />
              <p class="text-white">Live</p>
            </div>

            <p class="text-white">{{ businessLaunching }}</p>
          </v-chip>

          <v-chip
            color="white"
            class="chip-information__business bg-primary text-subtitle-2 absolute right-0 px-4"
            size="large"
            >{{ businessCategory }}</v-chip
          >
        </div>
      </template>

      <template #card-body>
        <div class="d-flex flex-column gap-5 mt-5">
          <div class="business-information d-flex flex-column gap-3">
            <div class="header">
              <h1 class="text-subtitle-1 text-black font-weight-bold">{{ businessName }}</h1>
              <p class="text-subtitle-2 text-muted font-weight-light">{{ businessAddress }}</p>
            </div>

            <div
              class="box-investor d-flex justify-space-between align-center bg-lightPrimary py-2 px-3 rounded-lg"
            >
              <h1 class="text-subtitle-2 text-primary">Total Investor</h1>
              <p class="text-subtitle-2 text-black font-weight-bold">{{ totalInvestors }} Orang</p>
            </div>
          </div>

          <div class="d-flex flex-column gap-4">
            <div class="budget-collection">
              <h1 class="text-subtitle-2 text-muted font-weight-light">Dana Terkumpul</h1>

              <div class="d-flex justify-space-between align-center gap-2 mt-2">
                <v-progress-linear
                  model-value="80"
                  bg-color="bg-border"
                  color="primary"
                  height="12"
                  class="rounded-lg"
                ></v-progress-linear>

                <p class="text-primary text-caption font-weight-bold">80%</p>
              </div>
            </div>

            <h1 class="text-subtitle-1 text-black font-weight-bold">
              {{ useCurrencyFormat(totalInvestments) }}
            </h1>
          </div>
        </div>
      </template>
    </AppBaseCard>
  </div>
</template>

<script>
// import useText Composable
import { useCurrencyFormat } from '@/modules/app/composable/useText';

export default {
  name: 'AppBaseCardBusiness',
  props: {
    type: {
      type: String,
      default: 'mediaWithText',
      validator: value => ['mediaWithText', 'simple', 'complex'].includes(value),
    },
    sourceImage: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    alternativeTextSourceImage: {
      type: String,
      default: '',
    },
    businessName: {
      type: String,
      default: '',
    },
    businessAddress: {
      type: String,
      default: '',
    },
    businessCategory: {
      type: String,
      default: '',
    },
    businessLaunching: {
      type: String,
      default: '',
    },
    totalInvestors: {
      type: Number,
      default: 0,
    },
    totalInvestments: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {
      useCurrencyFormat,
    };
  },
};
</script>

<style lang="scss">
.app-base-card-business {
  .v-card {
    box-shadow: none;
    border-radius: 16px;

    &:hover {
      cursor: pointer;
      box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);
      transition: 0.4s ease-in-out;
    }

    .card-footer {
      .line {
        border: 0;
        height: 2px;
        background: #e5e5e5;
        border-radius: 10px;
      }
    }
  }
}

.v-card {
  &.app-base-card {
    box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);

    .card-header .box-image {
      .box-live {
        border-right: 1px solid #ffffff;

        .white-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
      }

      .chip-information {
        &__live {
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.5rem;

          p {
            font-size: 13px;
          }
        }

        &__business {
          bottom: 1rem;
          right: 1rem;
          padding: 0.25rem 0.5rem;
        }
      }
    }

    .card-body {
      .v-progress-linear__determinate {
        background: linear-gradient(227.07deg, #40aefd 23.58%, #4044fd 105.54%) !important;
        border-radius: 8px;
      }
    }
  }
}
</style>
