export const createMediaUrl = (mediaUrl: string) =>
  `${process.env.NEXT_PUBLIC_CMS_URL}${mediaUrl}`;
