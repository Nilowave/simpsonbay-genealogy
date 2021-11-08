<template>
  <PageWrapper>
    <Background />
    <GreenOverlay />

    <Container>
      <StyledPicture />
      <ContentWrapper>
        <Logo src="/images/logos_transparent.png" alt="logo" />
        <Wrapper>
          <Heading>Welcome to the family!</Heading>
          <Paragraph
            >Please register your infromation below to gain exclusive
            access.</Paragraph
          >
          <StyledForm @submit="onSubmit">
            <InputWrapper>
              <StyledInput
                v-model="name.value"
                :ref="name.ref"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <Error v-if="name.error">{{ name.error.message }}</Error>
            </InputWrapper>

            <InputWrapper>
              <StyledInput
                v-model="email.value"
                :ref="email.ref"
                type="email"
                name="email"
                placeholder="Email"
                aria-disabled="true"
                disabled
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

            <InputWrapper>
              <StyledInput
                v-model="confirmpassword.value"
                :ref="confirmpassword.ref"
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
              <Error v-if="confirmpassword.error">{{
                confirmpassword.error.message
              }}</Error>
            </InputWrapper>

            <PrimaryButton type="submit">Register</PrimaryButton>
          </StyledForm>
        </Wrapper>
      </ContentWrapper>
    </Container>
  </PageWrapper>
</template>

<script src="./Register.modal.js"></script>
