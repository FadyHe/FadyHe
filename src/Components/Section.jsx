function Section({
  className,
  id,
  customPaddings,
  children
}) {
  return (
    <div className={`relative ${customPaddings || 'py-10 lg:py-16 xl:py-20'}${className || ''} `} id={id}>
      {children}
      <div className='hiddn absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
      <div className='hiddn absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />
    </div>
  )
}

export default Section