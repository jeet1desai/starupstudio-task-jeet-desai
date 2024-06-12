import localFont from "next/font/local";

export const simplonNormFont = localFont({
  src: [
    {
      path: "../../public/fonts/SimplonNorm-Regular-WebS.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SimplonNorm-Bold-WebS.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SimplonNorm-Medium-WebS.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SimplonNorm-Light-WebS.woff",
      weight: "300",
      style: "normal",
    },
  ],
});
