<template>
    <div>
        <Header />
        <Form />
        <List />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Form from '../components/Form.vue';
import List from '../components/List.vue';

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    components: {
        Header,
        Form,
        List
    },
    setup() {
        return {}
    },
})
</script>
