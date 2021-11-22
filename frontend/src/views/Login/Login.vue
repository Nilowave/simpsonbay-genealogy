<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture>
        <IntroVideo
          :src="introVideo"
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
        <Notification :message="message" :setMessage="setMessage" />
      </FlexWrapper>
    </Container>

    <PolicyBarWrapper>
      <PolicyBar color="white" :showModal="showModal" />
    </PolicyBarWrapper>
  </PageWrapper>
</template>

<script src="./Login.modal.js"></script>
