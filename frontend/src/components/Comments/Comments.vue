<template>
  <Wrapper :fullView="viewAll">
    <HeaderNav justify="space-between" gap="1.5rem">
      <NavButtons v-show="false" gap="0.8rem">
        <ArrowButton>
          <ChevronIcon />
        </ArrowButton>
        <ArrowButton>
          <ChevronIcon class="mirror" />
        </ArrowButton>
      </NavButtons>
      <HeaderTitle align="center" gap="1rem">
        <span>Comments {{ viewAll ? "" : `on Page ${page}` }}</span>
        |
        <button
          @click="viewAll = !viewAll"
          :disabled="isFetching"
          type="button"
        >
          View {{ viewAll ? "less" : "all" }}
        </button>
      </HeaderTitle>
      <CloseButton @click="onClose"><CloseIcon /></CloseButton>
    </HeaderNav>
    <CommentsWrapper direction="column">
      <CommentsList v-if="items.length">
        <transition-group>
          <CommentItem
            v-for="item in items"
            :color="stringToColour(item.authorUser.fullname)"
            :key="item.id"
            :isAuthor="user.id === item.authorUser.id"
          >
            <Flex gap="2rem" align="center" margin="0 0 1rem">
              <Text typeStyle="bodyBold">{{ item.authorUser.fullname }}</Text>

              <!-- <Text typeStyle="note">{{ item.created_at }}</Text> -->
              <DeleteButton
                @click="deleteConfirm = item.id"
                v-if="user.id === item.authorUser.id"
                ><Text typeStyle="note">Delete</Text></DeleteButton
              >
            </Flex>
            <Text color="darkgrey">{{ item.content }}</Text>
            <ConfirmDialog
              v-show="deleteConfirm === item.id"
              direction="column"
              align="center"
            >
              <Text typeStyle="bodyBold" color="crimson"
                >Delete this comment?</Text
              >
              <Flex gap="3rem">
                <SecondaryButton
                  @click="deleteComment(item.id, getPageComments)"
                  color="grey"
                  >Yes</SecondaryButton
                >
                <SecondaryButton @click="deleteConfirm = null"
                  >No</SecondaryButton
                >
              </Flex>
            </ConfirmDialog>
          </CommentItem>
        </transition-group>
      </CommentsList>
      <EmptyList v-else>
        <Loader v-if="isFetching" />
        <Text v-else typeStyle="bodyBold"
          >No comments for Page {{ page }}.<br />Be there first to leave a
          comment!</Text
        >
      </EmptyList>
    </CommentsWrapper>
    <StyledForm @submit="onSubmit">
      <InputWrapper align="center">
        <StyledIcon class="mirror" />
        <StyledTextarea
          v-model="comment.value"
          :ref="comment.ref"
          placeholder="comment..."
        />
        <SecondaryButton :disabled="isFetching" type="submit"
          >Submit</SecondaryButton
        >
      </InputWrapper>
    </StyledForm>

    <StyledNotification :message="message" :setMessage="setMessage" />
  </Wrapper>
</template>

<script src="./Comments.modal.js" />
