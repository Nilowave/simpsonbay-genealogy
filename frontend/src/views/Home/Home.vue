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
      :singlePage="singlePage"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNumber"
      :zooms="[1, 2]"
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
        <CommentsButton v-if="bookLink" @click="showComments = true">
          <span>Leave a comment</span>
          <CommentIcon class="icon-16" />
        </CommentsButton>

        <ControlSet align="center" justify="center" gap="2rem">
          <ControlButton
            :class="{ disabled: !flipbook.canZoomOut, zoomButton: true }"
            @click="flipbook.zoomOut"
          >
            <Flex align="center" justify="center" gap="1rem">
              <MinusIcon class="icon-16" />
              <span>Zoom out</span>
            </Flex>
          </ControlButton>

          <ControlButton
            :class="{ disabled: !flipbook.canFlipLeft }"
            @click="flipbook.flipLeft"
          >
            <Flex align="center" justify="center" gap="1rem">
              <NextIcon class="mirror icon-16" />
              <span>Prev</span>
            </Flex>
          </ControlButton>
        </ControlSet>

        <Text typeStyle="bodyBold" color="green" margin="0 3%" align="center">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </Text>

        <ControlSet align="center" justify="center" gap="2rem">
          <ControlButton
            :class="{ disabled: !flipbook.canFlipRight }"
            @click="flipbook.flipRight"
          >
            <Flex align="center" justify="center" gap="1rem">
              <span>Next</span>
              <NextIcon class="icon-16" />
            </Flex>
          </ControlButton>

          <ControlButton
            :class="{ disabled: !flipbook.canZoomIn, zoomButton: true }"
            @click="flipbook.zoomIn"
          >
            <Flex align="center" justify="center" gap="1rem">
              <span>Zoom in</span>
              <PlusIcon class="icon-16" />
            </Flex>
          </ControlButton>
        </ControlSet>

        <DownloadButton
          as="a"
          v-if="bookLink"
          :href="bookLink"
          download="Simpsonbay-Heritage-E-book.pdf"
          target="_blank"
          rel="noopener noreferrer"
          color="crimson"
        >
          <span>Download E-book</span>
          <DownloadIcon class="icon-16" />
        </DownloadButton>
      </ActionBar>
      <PolicyBarWrapper>
        <PolicyBar color="green" :showModal="showModal" />
      </PolicyBarWrapper>
    </StyledFlipbook>

    <transition name="slide-up">
      <Comments
        :onClose="hideComments"
        :page="pageNumber"
        :user="user"
        v-show="showComments"
      />
    </transition>
  </Home>
</template>

<script src="./Home.modal.js"></script>
