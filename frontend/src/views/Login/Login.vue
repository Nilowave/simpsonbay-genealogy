<template>
  <PageWrapper>
    <Background />
    <GreenOverlay>
      <LogoMobile>
        <LogoIcon />
      </LogoMobile>
    </GreenOverlay>

    <Container>
      <StyledPicture>
        <div>
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
          <VideoCredit typeStyle="note">
            Video by:
            <a
              href="https://www.youtube.com/watch?v=DToGu9Tnfb0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Capt Eric Bergeron</a
            >
          </VideoCredit>
        </div>
      </StyledPicture>
      <Loader v-if="loading" />
      <FlexWrapper v-else>
        <Logo>
          <LogoIcon aria-label="Simpsonbay Heritage Logo" />
        </Logo>
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
