<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <Loader v-if="loading" />
      <FlexWrapper v-else>
        <Logo src="/images/logo-stacked.svg" alt="Simpsonbay Genealogy" />
        <transition appear mode="out-in">
          <component :is="view" v-bind="currentProperties" />
        </transition>
        <Notification :message="message" />
      </FlexWrapper>
    </Container>
  </PageWrapper>
</template>

<script src="./Login.modal.js"></script>
