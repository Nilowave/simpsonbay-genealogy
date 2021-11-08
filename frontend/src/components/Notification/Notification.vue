<template>
  <Wrapper v-show="message">
    <Icon><AlertIcon /></Icon>
    <NotificationText>{{ message }}</NotificationText>
  </Wrapper>
</template>

<script src="./Notification.modal.js"></script>
