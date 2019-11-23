import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Img from '../../components/basic/Img'
import Container from '../../components/layout/Container'
import colors from '../theme/colors'
import { useEffect } from 'react'
const Navigation = () => {
  const [isMenuSolid, setIsMenuSolid] = useState(false)


  const handleScroll = () => {
    const scrollTop = window.scrollY
    if(scrollTop > 80) {
      setIsMenuSolid(true)
    } else {
      setIsMenuSolid(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`container${isMenuSolid ? ' scrolled' : ''}`}>
      <Container>
        <div className={'navigation'}>
          <div className={'logo'}>
            <div className={'logo-container'}>
              <Link href={'/'}>
                <a>
                  <Img src={isMenuSolid ? '/static/logo.png' : '/static/icon.png'} />
                </a>
              </Link>
            </div>
          </div>

          <nav role={'navigation'}>
            <ul>
              <li>
                <a href={'/#about'}>About</a>
              </li>
              <li>
                <a href={'/#offerings'}>Offerings</a>
              </li>
              <li>
                <a href={'/#catalogs'}>Catalogs</a>
              </li>
              <li>
                <Link href={'/contact'}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      <style jsx>{`
        .container {
          background: transparent;
          position: fixed;
          z-index: 99;
          width: 100%;
          padding: 20px 0;
          margin-bottom: 113px;
          transition: .3s all ease;
          left: 0;
        }

        .container.scrolled {
          padding: 10px 0;
          box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.1);
          background: ${colors.white};
        }

        .navigation {
          margin-bottom: 0px;
          width: 100%;
          border-bottom: none;
          background: transparent;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          padding: 0.25rem 0;
        }

        .logo {
          flex: 0 0 20%;
          max-width: 20%;
        }
        
        .logo-container {
          height: 38px;
          width: 38px;
        }

        .scrolled .logo-container {
          height: 38px;
          width: auto;
        }

        nav {
          flex: 1;
          text-align: right;
        }

        ul {
          display: flex;
          justify-content: flex-end;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 10px 5px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li a {
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          padding: 10px 10px;
          letter-spacing: .05em;
        }

        li a:hover {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
        }

        li a.active {
          color: ${colors.primary};
        }

        .scrolled li a {
          color: rgba(0, 0, 0, 0.6);
        }

        .scrolled li a:hover {
          color: rgba(0, 0, 0, 0.9);
        }

      `}</style>
    </div>
  )
}

export default Navigation
