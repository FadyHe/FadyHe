function Section({
  className,
  id,
  customPaddings,
  children
}) {
  return (
    <div className={`relative ${customPaddings || ''}${className || ''}g-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 `} id={id}>
      {children}
      <div className='hiddn absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
      <div className='hiddn absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />
    </div>
  )
}

export default Section