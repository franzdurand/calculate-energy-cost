<template>
  <div class="wrapper-mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <Form class="space-y-6" @submit="calculate" :validation-schema="schema">
        <div>
          <label for="unit_price" class="block text-sm font-medium text-gray-700">
            Unit Price
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="unit_price"
              name="unit_price"
              value="0.6326"
              />
            <ErrorMessage name="unit_price" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="fixed_fee" class="block text-sm font-medium text-gray-700">
            Fixed fee
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="fixed_fee"
              name="fixed_fee"
              value="2.61"
              />
            <ErrorMessage name="fixed_fee" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="maintainance" class="block text-sm font-medium text-gray-700">
            Maintainance
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="maintainance"
              name="maintainance"
              value="1.32"
              />
            <ErrorMessage name="maintainance" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="public_light" class="block text-sm font-medium text-gray-700">
            Public light
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="public_light"
              name="public_light"
              value="3.47"
              />
            <ErrorMessage name="public_light" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="rural_electricity" class="block text-sm font-medium text-gray-700">
            Rural electricy
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="rural_electricity"
              name="rural_electricity"
              value="0.97"
              />
            <ErrorMessage name="rural_electricity" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="last_count" class="block text-sm font-medium text-gray-700">
            Last count
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="last_count"
              name="last_count"
              />
            <ErrorMessage name="last_count" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <label for="current_count" class="block text-sm font-medium text-gray-700">
            Current count
          </label>
          <div class="mt-1">
            <Field
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="current_count"
              name="current_count"
              />
            <ErrorMessage name="current_count" class="text-rose-500 text-xs" />
          </div>
        </div>
        <div>
          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import {Field, Form, ErrorMessage } from 'vee-validate'
import * as Yup from "yup";

export default defineComponent({
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {

    // Validate schema
    const schema = Yup.object().shape({
      fixed_fee: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      unit_price: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      maintainance: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      public_light: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      rural_electricity: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      last_count: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
      current_count: Yup.string().required().matches(/^[+-]?\d+(\.\d+)?$/, {message: "Insert valid number."}),
    });

    function calculate(values) {
      let number1 = values.last_count
      let number2 = values.current_count
      

      const unit_price = +values.unit_price
      const fixed_fee = +values.fixed_fee
      const public_light = +values.public_light
      const maintainance = +values.maintainance
      const rural_electricity = +values.rural_electricity

      let n1 = +number1
      let n2 = +number2

      if (n2 > n1) {
        let consume = number2 - number1;
        let sub_total = consume * unit_price + fixed_fee + public_light + maintainance;
        let igv = sub_total * 0.18;
        let consume_total = (sub_total + igv + rural_electricity).toFixed(2);
        alert("S/ " + consume_total);
      } else {
        alert("last count should be lower than current count");
      }
    }

    return {
      schema,
      calculate
    }
  },
})
</script>