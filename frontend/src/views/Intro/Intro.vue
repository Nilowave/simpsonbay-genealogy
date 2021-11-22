<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <FlexWrapper>
        <Logo src="/images/logo-stacked.svg" alt="Simpsonbay Heritage" />
        <Wrapper>
          <p>intro</p>
        </Wrapper>
        <Notification :message="message" />
      </FlexWrapper>
    </Container>
  </PageWrapper>
</template>

<script src="./Intro.modal.js"></script>
