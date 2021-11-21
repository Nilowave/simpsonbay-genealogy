import { ref } from "vue";

export const useModal = () => {
  const defaultValue = {
    component: null,
    isVisible: false,
  };

  const modal = ref(defaultValue);
  const showModal = (component) => {
    console.log(component);
    modal.value = {
      component,
      isVisible: true,
    };
  };
  const hideModal = () => {
    modal.value = {
      ...modal.value,
      isVisible: false,
    };
  };

  return { modal, showModal, hideModal };
};
