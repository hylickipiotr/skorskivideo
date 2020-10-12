import { ImageFormat } from "../interfaces";
import { createMediaUrl } from "./createMediaUrl";

export const createSrcSet = (formats: Record<string, ImageFormat>) => {
  console.log(formats);
  return Object.values(formats)
    .reduce<Array<string>>((acc, format) => {
      console.log(format);
      return [...acc, `${createMediaUrl(format.url)} ${format.width}w`];
    }, [])
    .join(", ");
};
