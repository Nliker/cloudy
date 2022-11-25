import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: 100%;
`;

export const Background = styled.div`
  position: fixed;
  z-index: 1000;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  z-index: 1002;
  top: 10px;
  right: 10px;
  padding: 8px;
  & > div {
    display: flex;
  }
  svg {
    width: 25px;
    height: 25px;
    color: white;
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1001;
`;

export const ModalBox = styled.div`
  display: flex;
  margin: 20px;
  h1,
  h2 {
    font-size: 16px;
    margin: 0;
  }
`;

export const Modal = styled.div<{ currentStep: number }>`
  ${({ currentStep }) => (currentStep === 2 ? `width: 845px;` : `width: 495px;`)}
  max-width: calc(100vw - 40px);
  min-width: 348px;
  min-height: 391px;
  max-height: 403px;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  user-select: none;
  .content_box {
    position: relative;
    width: 100%;
    height: 360px;
  }
  .result_box {
    display: flex;
  }
  @media screen and (max-width: 688px) {
    .content_box {
      overflow: auto;
    }
    .result_box {
      flex-direction: column;
    }
  }
`;

export const ModalHeaderWrapper = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
  height: 43px;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 0 3px;
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;
  .left_btn,
  .right_btn {
    display: flex;
    justify-content: center;
    position: relative;
    flex-basis: 48px;
    height: 100%;
    &.left_btn {
      float: left;
    }
    &.right_btn {
      float: right;
      margin-left: auto;
    }
  }
`;

export const ModalTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 120px);
  height: 100%;
  height: 43px;
  h1 {
    width: 100%;
    margin: 0;
    // font-size: 16px;
    text-align: center;
  }
`;

export const ModalImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageDiv = styled.div<{ image: HTMLImageElement | null }>`
  // 이미지에 따라 width 와 height를 동적으로 변환시켜 주어야 한다.
  ${({ image }) => {
    const ratio = image && 360 / image?.height;
    return `
    width: ${ratio && image?.width * ratio}px;
    `;
  }};
  height: 360px;
  background-image: url(image_test.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transform: none;
`;

export const ImageCover = styled.div`
  bottom: 0;
  cursor: grab;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  touch-action: none;
  -webkit-user-select: none;
  width: 100%;
  z-index: 2;
`;

export const ChannelListBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ul {
    margin: 0;
  }
  ul li {
    cursor: pointer;
    list-style: none;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: calc(100% - 340px);
  text-align: center;
`;

export const ListBox = styled.div`
  // width: 340px;
  display: flex;
  justify-content: center;
`;