'use client';

import Image, { ImageProps } from 'next/image';

export default function ImageFallback(props: ImageProps) {
  return (
    <Image
      {...props}
      onError={props.onError as ((e: React.SyntheticEvent<HTMLImageElement>) => void) | undefined}
    />
  );
}
