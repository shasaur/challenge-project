import styled from 'styled-components';
import {
  borderRadius,
  colorUsage,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from 'stylesheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  align-items: flex-start;
  height: 100%;
`;
HomeContainer.displayName = 'HomeContainer';

export const Title = styled.h1`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.main};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  margin-bottom: ${getSpacing(12)};
`;
Title.displayName = 'Title';

export const Container = styled.div`
  padding: ${getSpacing(6)};
  width: 100%;
  max-width: ${getSpacing(120)};
  box-sizing: border-box;
  border-radius: ${borderRadius.large};
  border: 1px dashed ${colorUsage.primaryTextColor};
  width: 600px;
  height: 400px;
`;
Container.displayName = 'Container';

export const DescriptionList = styled.ul`
  list-style: disc;
  margin-left: ${getSpacing(4)};
`;
DescriptionList.displayName = 'DescriptionList';

export const DescriptionLine = styled.li`
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  padding-left: ${getSpacing(1)};
  margin-bottom: ${getSpacing(1)};
`;
DescriptionLine.displayName = 'DescriptionLine';

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const SideBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

export const SideBarBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  > * + * {
    margin-top: 20px;
  }
`;

export const SideBarAlignTop = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  > * + * {
    margin-top: 20px;
  }
`;

export const SideBarAlignBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
