export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

type MyWindow = Window &
  typeof globalThis & {
    gtag: (
      s: string,
      gaId: string,
      options: {
        path_path: string;
      }
    ) => void;
  };

export const pageview = (url: string) => {
  (window as MyWindow).gtag("config", GA_TRACKING_ID, {
    path_path: url,
  });
};

export const event = ({ action, category, label, value }: any) => {
  (window as MyWindow).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  } as any);
};
