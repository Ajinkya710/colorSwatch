import React, { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { fetchColors } from "./store/action";
import { selectColors, selectError, selectIsLoading } from "./store/selector";
import { setIsLoading } from "./store/slice";
import styled from "styled-components";
import { getColorString } from "../../helper";
import { ColorType } from "./store/types";

interface ColorProps {
  color: { type: ColorType; [key: string]: any };
}
const ColorSwatch: React.FC = () => {
  const dispatch = useAppDispatch();
  const colors = useSelector(selectColors);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const getInitialColors = async () => {
      dispatch(setIsLoading(true));
      await dispatch(fetchColors());
      dispatch(setIsLoading(false));
    };

    getInitialColors();
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <PageWrapper>
      <MainDiv>
        {colors.map((color, index) => (
          <SwatchContainer key={index} color={color} />
        ))}
      </MainDiv>
      <CustomButton
        onClick={async () => {
          dispatch(setIsLoading(true));
          await dispatch(fetchColors());
          dispatch(setIsLoading(false));
        }}
      >
        Generate New Swatches
      </CustomButton>
    </PageWrapper>
  );
};

export default ColorSwatch;

const PageWrapper = styled.div`
  padding: 2rem;
`;

const MainDiv = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SwatchContainer = styled.div<ColorProps>`
  width: 10rem;
  height: 10rem;
  background-color: ${({ color }) => getColorString(color)};
`;

const CustomButton = styled.button`
  margin-top: 1rem;
  height: 2rem;
  padding: 0 2rem;
  font-size: 1rem;
`;
