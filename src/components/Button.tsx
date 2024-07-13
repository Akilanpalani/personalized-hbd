import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode,
  size?: "small" | "medium" | "large",
  className?: string
}

export const Button = ({children,size="medium",className}: Props) => {
  const sizeClassNames = {
    // 12px
    small:'text-xs px-2 py-1',
    // 14px
    medium:'text-sm px-3 py-1',
    // 17px
    large:'text-lg px-8 py-4'
  }
  return (
    <button className={twMerge("bg-white text-textBlack py-1 px-3 rounded-full",sizeClassNames[size],className)}>{children}</button>
  )
}