import { ref } from "vue";

export const useMessage = () => {
  const message = ref();
  const setMessage = (msg) => {
    message.value = msg;
  };

  return { message, setMessage };
};
