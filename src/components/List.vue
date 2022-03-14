<template>
  <div class="mt-8 px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">History</h1>
        <p class="mt-2 text-sm text-gray-700">
          List of consume from the last 6 months.
        </p>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Month
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Consume
                  </th>
                </tr>
              </thead>
              <tbody
                v-if="items"
                class="divide-y divide-gray-200 bg-white"
                id="items"
              >
                <tr v-for="item in items" :key="'cod-' + item.id">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >
                    {{ item.month }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ item.consume }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = [
        { id: 1, month: "03/10/2022", consume: "9339" + " kW" },
        { id: 2, month: "02/10/2022", consume: "9222.20" + " kW" },
        { id: 3, month: "01/10/2022", consume: "9005.40" + " kW" },
        { id: 4, month: "12/10/2021", consume: "8918.60" + " kW" },
        { id: 5, month: "11/10/2021", consume: "8801.80" + " kW" },
        { id: 6, month: "10/10/2021", consume: "8725.00" + " kW" },
      ]
      return {
        items
      }
  },
})
</script>
