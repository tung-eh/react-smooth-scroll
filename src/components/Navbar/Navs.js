import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

const navs = [
  {
    to: 'about',
    text: 'About',
  },
  {
    to: 'discover',
    text: 'Discover',
  },
  {
    to: 'services',
    text: 'Services',
  },
  {
    to: 'signup',
    text: 'Sign Up',
  },
]

const Navs = ({ mobileHidden, toggle = () => {} }) => (
  <>
    <div
      className={`${
        mobileHidden ? 'hidden md:grid' : 'grid'
      } md:grid-flow-col text-center text-xl md:text-base gap-8 md:gap-6`}
    >
      {navs.map(({ to, text }) => (
        <ScrollLink className="hover:text-green-500" to={to} onClick={toggle}>
          <button>{text}</button>
        </ScrollLink>
      ))}
    </div>
    <Link
      className={`${
        mobileHidden ? 'hidden md:block' : ''
      } rounded-full transition-colors bg-green-500 hover:bg-white text-gray-900 text-sm py-3 px-14`}
      to="/signin"
    >
      Sign In
    </Link>
  </>
)

export default Navs
