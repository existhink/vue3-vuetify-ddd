<template>
  <div class="pa-5">
    <AppBaseDialogAlert v-bind="dialog.options" @ok="onCloseAlert" />

    <form @submit.prevent="onSubmit">
      <AppFormGroup v-slot="attrs" :v="v$.firstName" name="First Name">
        <AppBaseLabel> <VIcon icon="mdi-checkbox-marked-circle" /> First Name (Custom Label) </AppBaseLabel>
        <VTextField
          v-model.trim="form.firstName"
          v-bind="attrs"
          placeholder="First Name"
          variant="outlined"
          density="compact"
        />
      </AppFormGroup>
      <AppFormGroup v-slot="attrs" :v="v$.lastName" name="Last Name" name-as-label name-as-placeholder>
        <VTextField v-model.trim="form.lastName" v-bind="attrs" variant="outlined" density="compact" />
      </AppFormGroup>
      <AppFormGroup v-slot="attrs" :v="v$.contact.email" name="Email" name-as-label name-as-placeholder>
        <VTextField v-model.trim="form.contact.email" v-bind="attrs" variant="outlined" density="compact" />
      </AppFormGroup>
      <div class="d-flex justify-end" style="gap: 10px">
        <VBtn type="submit" color="primary" elevation="0">Submit</VBtn>
        <VBtn type="button" color="secondary" elevation="0" @click="onClose">Close</VBtn>
      </div>
    </form>
  </div>
</template>

<script setup>
// Vue
import { computed, ref } from 'vue';

// Validator
import { required, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

// Composable
import useAppDialog from '@/modules/app/composable/useAppDialog';

// Emit
const emit = defineEmits(['ok', 'close']);

// Section: Dialog
const { dialog, dialog_showDialog, dialog_closeDialog } = useAppDialog();
const onOpenDialog = () => {
  dialog_showDialog({
    title: 'Success ',
    desc: "You're success to added data :D",
  });
};

// Section: Form
const form = ref({
  firstName: '',
  lastName: '',
  contact: {
    email: '',
  },
});

const rules = computed(() => ({
  firstName: { required },
  lastName: { required },
  contact: {
    email: { required, email },
  },
}));

const v$ = useVuelidate(rules, form, {
  $autoDirty: true,
});

const onSubmit = async () => {
  // Check validate form
  const result = await v$.value.$validate();
  if (!result) {
    return;
  }

  onOpenDialog();
};

const onCloseAlert = () => {
  dialog_closeDialog();
  emit('ok');
};

const onClose = () => {
  form.value = {
    ...form.value,
    firstName: null,
    lastName: null,
    contact: {
      email: null,
    },
  };

  v$.value.$reset();

  emit('close');
};
</script>
