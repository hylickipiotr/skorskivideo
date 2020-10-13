import { ImageFormat } from "../interfaces";
import { createMediaUrl } from "./createMediaUrl";

export const createSrcSet = (formats: Record<string, ImageFormat>) => {
  return Object.values(formats)
    .reduce<Array<string>>((acc, format) => {
      return [...acc, `${createMediaUrl(format.url)} ${format.width}w`];
    }, [])
    .join(", ");
};
