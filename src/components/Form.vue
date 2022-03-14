<template>
  <div class="wrapper-mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="calculate()">
        <div>
          <label for="text" class="block text-sm font-medium text-gray-700">
            Last count
          </label>
          <div class="mt-1">
            <input
              v-model="last_count"
              placeholder="000000000"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label for="text" class="block text-sm font-medium text-gray-700">
            Current count
          </label>
          <div class="mt-1">
            <input
              v-model="current_count"
              placeholder="000000000"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    let last_count = ref("");
    let current_count = ref("");

    const calculate = () => {
      let number1 = last_count.value;
      let number2 = current_count.value;

      let n1 = +number1;
      let n2 = +number2;

      if (
        (Number.isInteger(n1) || isFloat(n1)) &&
        (isFloat(n2) || Number.isInteger(n2))
      ) {
        if (n1 > 0 && n2 > 0 && n2 > n1) {
          const unit_price = 0.5006;
          const fixed_fee = 2.61;
          const meintainance = 1.32;
          const public_light = 3.47;
          const rural_electricy = 0.97;
          let consume = number2 - number1;
          let sub_total =
            consume * unit_price + fixed_fee + public_light + meintainance;
          let igv = sub_total * 0.18;
          let consume_total = (sub_total + igv + rural_electricy).toFixed(2);
          alert("S/ " + consume_total);
        } else {
          alert("last count should be lower than current count");
        }
      } else {
        alert("Please insert only numbers");
      }
    }

    const isFloat = (n) => +n === n && n % 1 !== 0;

    return {
      calculate,
      last_count,
      current_count
    }
  },
})
</script>