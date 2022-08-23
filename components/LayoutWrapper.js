import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
// import CoImg from '../public/static/images/logo.png';
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      {/* bg-[#A5BDCE] */}
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    {/* <Logo /> */}
                    <img
                      src="https://i.ibb.co/b3tVWy4/logo.png"
                      className=" h-auto w-12"
                      alt="company logo"
                    />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-cyan-900 dark:text-cyan-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <button
                type="button"
                className="inline-block rounded  border-2 border-solid border-indigo-600 bg-transparent px-6  
              py-2.5 text-xs font-medium
              uppercase leading-tight text-blue-400 transition duration-300 ease-in-out 
              hover:bg-gray-100 focus:bg-gray-100 focus:text-blue-700 focus:outline-none 
              focus:ring-0 active:bg-gray-200 active:text-blue-800"
              >
                <Link href="https://mashylive.sharetribe.com">Go to MarketPlace</Link>
              </button>
              {/* <ThemeSwitch /> */}
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
