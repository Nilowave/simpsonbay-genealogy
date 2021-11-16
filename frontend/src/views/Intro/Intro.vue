<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <FlexWrapper>
        <Logo src="/images/logo-stacked.svg" alt="Simpsonbay Genealogy" />
        <Wrapper>
          <p>lalala</p>
        </Wrapper>
        <Notification :message="message" />
      </FlexWrapper>
    </Container>
  </PageWrapper>
</template>

<script src="./Intro.modal.js"></script>
