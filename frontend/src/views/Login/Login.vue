<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <FlexWrapper>
        <Logo src="/images/logos_transparent.png" alt="Simpson Bay Genealogy" />
        <Wrapper>
          <Heading>Sign-in</Heading>
          <Paragraph>To read the family book</Paragraph>
          <StyledForm @submit="onSubmit">
            <InputWrapper>
              <StyledInput
                v-model="email.value"
                :ref="email.ref"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Error v-if="email.error">{{ email.error.message }}</Error>
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                v-model="password.value"
                :ref="password.ref"
                type="password"
                name="password"
                placeholder="Password"
              />
              <Error v-if="password.error">{{ password.error.message }}</Error>
            </InputWrapper>
            <PrimaryButton type="submit">Sign in</PrimaryButton>
          </StyledForm>
          <SecondaryButton>Reset password</SecondaryButton>
        </Wrapper>
        <Notification :message="message" />
      </FlexWrapper>
    </Container>
  </PageWrapper>
</template>

<script src="./Login.modal.js"></script>
