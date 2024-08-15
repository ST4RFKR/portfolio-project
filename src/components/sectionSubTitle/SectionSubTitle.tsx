import styled from 'styled-components';
import { Theme } from '../../components/styles/Theme';

export const SectionSubTitle = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 88.5%;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 300px;
    height: 4px;
    background: ${Theme.colors.gradientText};
    display: flex;
  }
`;
