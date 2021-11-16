<template>
  <Home
    id="home"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Background />

    <UsernameWrapper>
      <Username
        >Signed in as <span>{{ user.fullname }}</span></Username
      >
      <LogoutButton v-on:click="logout">Sign out</LogoutButton>
    </UsernameWrapper>

    <Logo><LogoIcon /></Logo>

    <StyledFlipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <ActionBar>
        <CommentsButton
          >Leave a comment <CommentIcon class="icon-16"
        /></CommentsButton>
        <ControlButton
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
          ><MinusIcon />Zoom out</ControlButton
        >

        <ControlButton
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
          ><NextIcon class="mirror" />Prev</ControlButton
        >

        <Text typeStyle="bodyBold" color="green" margin="0 3%">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </Text>

        <ControlButton
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
          >Next<NextIcon
        /></ControlButton>

        <ControlButton
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
          >Zoom in<PlusIcon
        /></ControlButton>

        <DownloadButton>Download E-book <DownloadIcon /></DownloadButton>
      </ActionBar>
    </StyledFlipbook>

    <Comments />
  </Home>
</template>

<script src="./Home.modal.js"></script>
