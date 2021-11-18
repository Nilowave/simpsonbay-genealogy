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
      <HeaderTitle align>Comments on page {{ page }}</HeaderTitle>
      <CloseButton @click="onClose"><CloseIcon /></CloseButton>
    </HeaderNav>
    <CommentsWrapper direction="column">
      <CommentsList>
        <CommentItem
          v-for="item in items"
          :color="stringToColour(item.name)"
          :key="item.comment"
        >
          <Flex gap="2rem" align="center" margin="0 0 1rem">
            <Text typeStyle="bodyBold">{{ item.name }}</Text>
            <Text typeStyle="note">{{ item.time }}</Text>
          </Flex>
          <Text color="darkgrey">{{ item.comment }}</Text>
        </CommentItem>
      </CommentsList>
    </CommentsWrapper>
    <InputWrapper gap="1.5rem" align="center">
      <StyledIcon class="mirror" />
      <StyledTextarea placeholder="comment..." />
      <SecondaryButton>Submit</SecondaryButton>
    </InputWrapper>
  </Wrapper>
</template>

<script src="./Comments.modal.js" />
