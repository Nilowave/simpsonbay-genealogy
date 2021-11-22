<template>
  <Wrapper v-show="message">
    <Icon><AlertIcon /></Icon>
    <NotificationText>{{ message }}</NotificationText>
    <CloseButton @click="setMessage(null)"><Close /></CloseButton>
  </Wrapper>
</template>

<script src="./Notification.modal.js"></script>
