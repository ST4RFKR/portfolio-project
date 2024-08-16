import React from 'react';
import styled from 'styled-components';

// type ContainerPropsType = {
//     children: React.ReactNode;
// }
// export function Container(props: ContainerPropsType){
//     return (
// <StyledContainer>
//     {props.children}
// </StyledContainer>
//     );
// }

// const StyledContainer = styled.div<ContainerPropsType>`
//     max-width: 1140px;
//     margin: 0 auto;
// `

export const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    border: 1px solid red;
`;
