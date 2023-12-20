/**
 * Renders a project component with the provided props.
 *
 * @param {Object} props - The props for the Project component.
 * @param {string} props.title - The title of the project.
 * @param {Object} props.heroImage - The hero image object.
 * @param {string} props.heroImage.src - The source URL of the hero image.
 * @param {string} props.heroImage.alt - The alt text of the hero image.
 * @param {Object} props.about - The about section object.
 * @param {string} props.about.subtitle - The subtitle of the about section.
 * @param {string[]} props.about.paragraphs - The paragraphs of the about section.
 * @param {string} props.about.live - The live URL of the project (optional).
 * @param {Object[]} props.images - The array of image objects.
 * @param {string} props.images[].src - The source URL of an image.
 * @param {string} props.images[].alt - The alt text of an image.
 * @param {Object[]} props.services - The array of service objects.
 * @param {string} props.services[].type - The type of service.
 * @param {string[]} props.services[].list - The list of services.
 * @returns {JSX.Element} The rendered project component.
 */
import { Hero, About, Images, Services } from './components'
import PropTypes from 'prop-types'

export default function Project(props) {
  const {
    title,
    heroImage: { src, alt },
    about: { subtitle, paragraphs, live },
    images,
    services,
  } = props

  return (
    <>
      <Hero title={title} src={src} alt={alt} />
      <About subtitle={subtitle} paragraphs={paragraphs} live={live} />
      {images && <Images images={images} />}
      {services && <Services services={services} />}
    </>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  about: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
}
