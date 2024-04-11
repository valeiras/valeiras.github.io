import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BREAKPOINT = 992;

type ImageSource = { src: string; alt: string };
type RequiredProps = { imageSources: ImageSource[] };
type OptionalProps = { isResponsive: boolean };
type Props = RequiredProps & Partial<OptionalProps>;

type ImageDimension = { id: number; width: number | null; height: number | null };

const loadImages: (
  setDimensions: React.Dispatch<React.SetStateAction<ImageDimension[]>>,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  imageSources: ImageSource[]
) => void = (setDimensions, setCount, imageSources) => {
  imageSources.forEach(({ src }, id) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setDimensions((dimensions) =>
        dimensions.map((el) => {
          return el.id === id ? { id, height: img.height, width: img.width } : el;
        })
      );
      setCount((count) => count + 1);
    };
  });
};

const computeImageFractions: (dimensions: ImageDimension[]) => number[] = (dimensions) => {
  const sum = dimensions.reduce((acc, { width, height }) => {
    const w = width || 0;
    const h = height || 1;
    return acc + w / h;
  }, 0);

  const fractions = dimensions.map(({ width, height }) => {
    const w = width || 0;
    const h = height || 1;
    const k1 = h * (sum - w / h);
    return w / (w + k1);
  });
  return fractions;
};

const defaultProps: OptionalProps = {
  isResponsive: true,
};

const ImageRow: React.FC<Props> = ({ imageSources, isResponsive }) => {
  const nbImages = imageSources.length;
  const initialDimensions: ImageDimension[] = [];
  for (let ii = 0; ii < nbImages; ii++) {
    initialDimensions.push({ id: ii, width: null, height: null });
  }

  const [dimensions, setDimensions] = useState<ImageDimension[]>(initialDimensions);
  const [imgLoadedCount, setImgLoadedCount] = useState<number>(0);

  useEffect(() => {
    loadImages(setDimensions, setImgLoadedCount, imageSources);
  }, [imageSources]);

  if (imgLoadedCount < nbImages) return <></>;

  const fractions = computeImageFractions(dimensions);
  console.log(window.innerWidth);
  console.log(isResponsive);
  return (
    <Wrapper>
      {imageSources.map(({ src, alt }, id) => {
        const width = !isResponsive || window.innerWidth > BREAKPOINT ? `${100 * fractions[id]}%` : `100%`;
        return <img src={src} alt={alt} width={width} key={id} />;
      })}
    </Wrapper>
  );
};

ImageRow.defaultProps = defaultProps;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export default ImageRow;
