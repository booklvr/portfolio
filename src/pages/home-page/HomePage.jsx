import React, { useState, Fragment } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// Components
import Header from '../../components/header/Header'
import SmallIcon from '../../components/icons/SmallIcon'
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'
import GifPage from '../gifPage/GifPage'
import NavigationOverlay from '../../components/navigation-overlay/NavigationOverlay.jsx'

// DATA
import projectData from '../../data/project-data'

// STYLES
// import { ReactFullPageContainer } from './homePage.styles'

const HomePage = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  const onLeave = (origin, destination, direction) => {
    // console.log('Leaving section', origin.index)
    // console.log('Leave direction', direction)
    // if (destination.anchor === 'projects') {
    //   console.log('origin', origin)
    //   console.log('destination', destination)
    //   console.log('direction', direction)
    // }
  }

  const afterLoad = (origin, destination, direction) => {
    // console.log('loaded section', destination.index)
    setActiveSection(destination.index)
    // if (destination.anchor === 'projects') {
    //   console.log('we have entered the projects section')
    // }
  }

  const afterSlideLoad = (origin, destination, direction, section) => {
    // console.log("Leaving section", origin.index);
    // console.log('Leave direction', direction)
    // console.log('section', section)
  }

  // const fullpageOptions = {
  //   licenseKey: 'OPEN-SOURCE_GPLV3-LICENSE',
  //   scrollingSpeed: 700,
  //   anchors: ['header', 'about', 'products', 'skills', 'contact'],
  //   menu: '#myMenu',
  //   scrollOverflow: true,
  //   scrollOverflowReset: true,
  //   resetSliders: true,
  //   controlArrows: false,
  //   navigation: true,
  //   slidesNavigation: true,
  //   allowScrolling: true,
  // }

  return (
    <Fragment>
      <SmallIcon
        icon='hamburger-menu'
        id='icon1'
        onClick={() => {
          setShowNavigation(!showNavigation)
          window.fullpage_api.setAllowScrolling(false)
        }}
        activeSection={activeSection}
        showNavigation={showNavigation}
      >
        <i className='fas fa-bars'></i>
      </SmallIcon>
      <ReactFullpage
        //fullpage options
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        scrollingSpeed={700} /* Options here */
        anchors={['header', 'about', 'projects', 'skills', 'contact']}
        menu='#myMenu'
        scrollOverflow={true}
        scrollOverflowReset={true}
        resetSliders={true}
        controlArrows={false}
        onLeave={onLeave}
        afterLoad={afterLoad}
        afterSlideLoad={afterSlideLoad}
        navigation={true}
        slidesNavigation={true}
        allowScrolling={false}
        fixedElements={'#navigation-overlay'}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <NavigationOverlay
                id='navigation-overlay'
                showNavigation={showNavigation}
                setShowNavigation={setShowNavigation}
                activeSection={activeSection}
              />
              <div className='section' fullpageApi={fullpageApi} set>
                <Header fullpageApi={fullpageApi}></Header>
              </div>
              <div className='section' fullpageApi={fullpageApi}>
                <About fullpageApi={fullpageApi}></About>
              </div>
              <div className='section' fullpageApi={fullpageApi}>
                <div className='slide' data-anchor='projects'>
                  <Projects fullpageApi={fullpageApi} />
                </div>

                {projectData.map((project, index) => (
                  <div
                    key={index}
                    className='slide'
                    data-anchor={`slide${index + 3}`}
                  >
                    <GifPage project={project} />
                  </div>
                ))}
              </div>
              <div className='section' fullpageApi={fullpageApi}>
                <Skills fullpageApi={fullpageApi}></Skills>
              </div>
              <div className='section'>
                <Contact></Contact>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
      )
    </Fragment>
  )
}
// HOOKS
// import { useScroll } from '../../hooks/useScroll'

// const HomePage = () => {
// const header = useRef(null)
// const about = useRef(null)
// const projects = useRef(null)
// const skills = useRef(null)
// const contact = useRef(null)

// const [sectionRefs, setSectionRefs] = useState([
//   header,
//   about,
//   projects,
//   skills,
//   contact,
// ])
// const [currentSection, setCurrentSection] = useState(0)
// const [scroll, setScroll] = useState({ y: 0, direction: '' })

// const determineScrollDirection = () => {
//   setScroll((prev) => ({
//     y: -sectionRefs[currentSection].current.getBoundingClientRect().top,
//     direction:
//       prev.y >
//       -sectionRefs[currentSection].current.getBoundingClientRect().top
//         ? 'up'
//         : 'down',
//   }))
// }

// const handleScroll = () => {
//   determineScrollDirection()
//   console.log('scroll', scroll)

//   if (scroll.direction === 'up') {
//     if (
//       sectionRefs[currentSection].current.getBoundingClientRect().top <= 0
//     ) {
//       setCurrentSection((prev) => {
//         return currentSection - 1 <= 0 ? 0 : currentSection - 1
//       })
//     }
//   } else if (scroll.direction === 'down') {
//     if (
//       sectionRefs[currentSection].current.getBoundingClientRect().top <
//       0 + 250
//     )
//       setCurrentSection(() => {
//         return currentSection + 1 >= sectionRefs.length
//           ? sectionRefs.length - 1
//           : currentSection + 1
//       })
//   }

//   console.log('currentSection', currentSection)
//   console.log(sectionRefs[currentSection].current.getBoundingClientRect())

//   // setScroll((prev) => ({
//   //   y: -about.current.getBoundingClientRect().top,
//   //   // Here we???re comparing the previous state to the current state to get the scroll direction
//   //   direction:
//   //     prev.y > -about.current.getBoundingClientRect().top ? 'up' : 'down',
//   // }))

//   console.log('scroll', scroll)
// }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   })

//   useEffect(() => {
//     console.log(currentSection, 'currentSection')
//   }, [currentSection])

//   return (
//     <ReactFullPage
//       licenseKey = {'YOUR_KEY_HERE'}
//       scrollingSpeed = {1000} /* options here*/
//       render={({ state, fullPageApi}) => {
//         return (
//           <ReactFullPage.Wrapper>

//           </ReactFullPage.Wrapper>
//         )
//       }}
//     />
//       <SmallIcon icon='hamburger-menu'>
//         <i className='fas fa-bars'></i>
//       </SmallIcon>

//       <SmallIcon icon='contact'>
//         <i className='far fa-envelope' />
//       </SmallIcon>

//   )
// }

export default HomePage
