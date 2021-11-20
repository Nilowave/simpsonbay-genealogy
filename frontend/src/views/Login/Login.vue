<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture>
        <IntroVideo
          src="https://simpsonbay-heritage.s3.amazonaws.com/bridge_43f39692c0.mp4"
          muted
          autoplay
          playsinline
          loop
          oncontextmenu="return false;"
          :isReady="videoready"
          @playing="videoready = true"
        />
      </StyledPicture>
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
