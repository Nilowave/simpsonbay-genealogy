<template>
  <div>
    <Viewport
      ref="viewport"
      :dragToScroll="dragToScroll"
      :zoom="zooming || zoom > 1"
      :style="{ cursor: cursor == 'grabbing' ? 'grabbing' : 'auto' }"
      @touchmove="onTouchMove"
      @pointermove="onPointerMove"
      @mousemove="onMouseMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @mouseup="onMouseUp"
      @wheel="onWheel"
    >
      <FlipbookContainer :style="{ transform: `scale(${zoom})` }">
        <ClickToFlip
          direction="left"
          :style="{ cursor: canFlipLeft ? 'pointer' : 'auto' }"
          @click="flipLeft"
        />
        <ClickToFlip
          direction="right"
          :style="{ cursor: canFlipRight ? 'pointer' : 'auto' }"
          @click="flipRight"
        />
        <div :style="{ transform: `translateX(${centerOffsetSmoothed}px)` }">
          <Page
            :style="{
              width: pageWidth + 'px',
              height: pageHeight + 'px',
              left: xMargin + 'px',
              top: yMargin + 'px',
            }"
            v-if="showLeftPage"
            :src="pageUrlLoading(leftPage, true)"
            @load="didLoadImage($event)"
          />
          <Page
            :style="{
              width: pageWidth + 'px',
              height: pageHeight + 'px',
              left: viewWidth / 2 + 'px',
              top: yMargin + 'px',
            }"
            v-if="showRightPage"
            :src="pageUrlLoading(rightPage, true)"
            @load="didLoadImage($event)"
          />

          <div :style="{ opacity: flip.opacity }">
            <Polygon
              v-for="[
                key,
                bgImage,
                lighting,
                bgPos,
                transform,
                z,
              ] in polygonArray"
              :key="key"
              :isBlank="!bgImage"
              :style="{
                backgroundImage: bgImage && `url(${loadImage(bgImage)})`,
                backgroundSize: polygonBgSize,
                backgroundPosition: bgPos,
                width: polygonWidth,
                height: polygonHeight,
                transform: transform,
                zIndex: z,
              }"
            >
              <Lighting
                v-show="lighting.length"
                :style="{ backgroundImage: lighting }"
              />
            </Polygon>
          </div>
          <BoundingBox
            :style="{
              left: boundingLeft + 'px',
              top: yMargin + 'px',
              width: boundingRight - boundingLeft + 'px',
              height: pageHeight + 'px',
              cursor: cursor,
            }"
            @touchstart="onTouchStart"
            @pointerdown="onPointerDown"
            @mousedown="onMouseDown"
          />
        </div>
      </FlipbookContainer>
    </Viewport>
    <slot
      v-bind="{
        canFlipLeft,
        canFlipRight,
        canZoomIn,
        canZoomOut,
        page,
        numPages,
        flipLeft,
        flipRight,
        zoomIn,
        zoomOut,
      }"
    />
  </div>
</template>

<script src="./Flipbook.modal.js" />
