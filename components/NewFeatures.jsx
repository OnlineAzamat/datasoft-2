import styles from "@/styles";

export const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{title}</h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
    </>
  )
};