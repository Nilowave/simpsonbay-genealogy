<template>
  <Wrapper>
    <HeaderNav justify="space-between" gap="1.5rem">
      <NavButtons gap="0.8rem">
        <ArrowButton>
          <ChevronIcon />
        </ArrowButton>
        <ArrowButton>
          <ChevronIcon class="mirror" />
        </ArrowButton>
      </NavButtons>
      <HeaderTitle align>Comments on page 10</HeaderTitle>
      <CloseButton><CloseIcon /></CloseButton>
    </HeaderNav>
    <CommentsWrapper> comments </CommentsWrapper>
    <InputWrapper gap="1.5rem" align="center"
      ><StyledIcon /><input type="text" placeholder="comment..."
    /></InputWrapper>
  </Wrapper>
</template>

<script src="./Comments.modal.js" />
